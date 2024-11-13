const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration de express-session
app.use(session({
  secret: 'secret très secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // `true` en production avec HTTPS
}));

// Configurations
// const dbOptions = {
//   host: 'mysql-bouffies.alwaysdata.net',
//   user: 'bouffies',
//   password: 'Handball*95640', // Remplacez par votre mot de passe réel
//   database: 'bouffies_diamond_master'
// };

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'admin', // Remplacez par votre mot de passe réel
  database: 'diamond_master'
};
// Créez une connexion MySQL
const connection = mysql.createConnection(dbOptions);

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à MySQL');
});


app.use(express.static('public'));

app.post('/inscription', async (req, res) => {
  const { username, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.status(400).send('Les mots de passe ne correspondent pas.');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    connection.beginTransaction(async (err) => {
      if (err) { 
        throw err;
      }

      const insertUserQuery = 'INSERT INTO Player (Username, Password) VALUES (?, ?)';
      connection.query(insertUserQuery, [username, hashedPassword], (err, results) => {
        if (err) {
          connection.rollback(() => {
            console.error('Erreur lors de l\'insertion:', err);
            if (err.code === 'ER_DUP_ENTRY') {
              return res.status(400).send('Ce nom d\'utilisateur est déjà pris.');
            } else {
              return res.status(500).send('Erreur lors de l\'inscription.');
            }
          });
        } else {
          const userId = results.insertId;
          const levels = 8;
          let completedInserts = 0;

          for (let i = 1; i <= levels; i++) {
            const insertScoreQuery = 'INSERT INTO Score (PlayerID, NiveauID, MeilleurTemps, TempsTotal) VALUES (?, ?, 99999999.99, 0)';
            connection.query(insertScoreQuery, [userId, i], (err) => {
              if (err) {
                connection.rollback(() => {
                  console.error('Erreur lors de l\'insertion des scores:', err);
                  return res.status(500).send('Erreur lors de l\'inscription des scores.');
                });
              } else {
                completedInserts++;
                if (completedInserts === levels) {
                  connection.commit((err) => {
                    if (err) {
                      connection.rollback(() => {
                        console.error('Erreur lors de la validation de la transaction:', err);
                        return res.status(500).send('Erreur lors de la validation de l\'inscription.');
                      });
                    } else {
                      req.session.userId = userId;
                      req.session.username = username;
                      req.session.isLoggedIn = true;
                      res.redirect('/inscription-reussie.html');
                    }
                  });
                }
              }
            });
          }
        }
      });
    });
  } catch (error) {
    console.error('Erreur lors du hashage du mot de passe:', error);
    res.status(500).send('Erreur serveur.');
  }
});

app.post('/connexion', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT PlayerID, Password FROM Player WHERE Username = ?';
  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'utilisateur:', err);
      return res.status(500).json({ message: 'Erreur serveur.' });
    }

    if (results.length > 0) {
      const { PlayerID, Password: hashedPassword } = results[0];
      bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (isMatch) {
          req.session.userId = PlayerID;
          req.session.username = username; // Stocker le nom d'utilisateur dans la session
          req.session.isLoggedIn = true;
          res.redirect('/connexion-reussie.html'); // Assurez-vous que cette route existe et qu'elle est correctement gérée par votre serveur
        } else {
          res.status(401).json({ success: false, message: 'Nom d’utilisateur ou mot de passe incorrect' });
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Nom d’utilisateur ou mot de passe incorrect' });
    }
  });
});

app.get('/api/get-username', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send({ error: 'Utilisateur non connecté' });
  }
  // La requête doit récupérer à la fois l'ID et le nom d'utilisateur
  const query = 'SELECT Username, PlayerID FROM Player WHERE PlayerID = ?';

  // Exécutez la requête en utilisant l'ID de l'utilisateur stocké dans la session
  connection.query(query, [req.session.userId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du username et de l\'ID:', err);
      return res.status(500).send({ error: 'Erreur serveur' });
    }
    if (results.length > 0) {
      // Assurez-vous de renvoyer à la fois le Username et le PlayerID
      res.json({ username: results[0].Username, PlayerID: results[0].PlayerID });
    } else {
      res.status(404).send({ error: 'Utilisateur non trouvé' });
    }
  });
});


app.post('/api/enregistrer-temps', (req, res) => {
  console.log(`Réception du serveur - Niveau ID: ${req.body.niveauId}, MeilleurTemps: ${req.body.temps}, TempsTotal: ${req.body.total}`); // Ajoute cette ligne
  if (!req.session.userId) {
    return res.status(401).send({ message: 'Veuillez vous connecter pour enregistrer votre temps.' });
  }

  const { niveauId, temps, total } = req.body;

  const query = `
    INSERT INTO Score (PlayerID, NiveauID, MeilleurTemps, TempsTotal)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(query, [req.session.userId, niveauId, temps, total], (err) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement du temps:', err);
      return res.status(500).send({ message: 'Erreur lors de l\'enregistrement du temps.' });
    }
    res.send({ message: 'Temps enregistré avec succès.' });
  });
});

app.get('/api/dernier-temps', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send({ message: 'Veuillez vous connecter pour accéder à cette information.' });
  }

  const { niveauId } = req.query; // Récupère l'ID du niveau depuis les paramètres de requête

  const query = `
    SELECT MeilleurTemps, TempsTotal FROM Score
    WHERE PlayerID = ? AND NiveauID = ?
    ORDER BY ScoreID DESC
    LIMIT 1;
  `;

  connection.query(query, [req.session.userId, niveauId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du dernier temps:', err);
      return res.status(500).send({ message: 'Erreur lors de la récupération des données.' });
    }
    if (results.length > 0) {
      // Assure que les clés MeilleurTemps et TempsTotal sont présentes même si elles sont NULL
      const dernierTemps = {
        MeilleurTemps: results[0].MeilleurTemps != null ? results[0].MeilleurTemps : null,
        TempsTotal: results[0].TempsTotal != null ? results[0].TempsTotal : null,
      };
      res.json(dernierTemps); // Renvoie le dernier temps enregistré
    } else {
      res.status(404).send({ message: 'Aucun temps trouvé pour ce niveau.' });
    }
  });
});

app.get('/api/temps-total', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send({ message: 'Veuillez vous connecter pour accéder à cette information.' });
  }

  const query = `
    SELECT SUM(TempsTotal) AS TempsTotalGlobal FROM Score
    WHERE PlayerID = ?;
  `;

  connection.query(query, [req.session.userId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du temps total:', err);
      return res.status(500).send({ message: 'Erreur lors de la récupération des données.' });
    }
    if (results.length > 0) {
      res.json({ TempsTotalGlobal: results[0].TempsTotalGlobal || 0 });
    } else {
      res.status(404).send({ message: 'Aucun temps trouvé.' });
    }
  });
});

app.get('/api/niveaux-debloques', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send('Utilisateur non connecté');
  }

  const query = `
  SELECT n.NiveauID, n.Nom,
        CASE 
            WHEN n.DebloqueApresNiveauID IS NULL THEN TRUE
            WHEN n.DebloqueApresNiveauID IN (
                SELECT NiveauID FROM Score WHERE PlayerID = ? AND MeilleurTemps < 99999999.99
            ) THEN TRUE
            ELSE FALSE
        END as Debloque
  FROM Niveau n
  ORDER BY n.NiveauID ASC;
  `;
  connection.query(query, [req.session.userId], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des niveaux débloqués:', err);
      return res.status(500).send('Erreur serveur');
    }
    res.json(results);
  });
});

app.get('/rechercher-ami', (req, res) => {
  const amiId = req.query.id;  // Récupération de l'ID de l'ami depuis les paramètres de la requête

  // Requête SQL pour trouver un utilisateur par son ID
  const query = 'SELECT Username FROM Player WHERE PlayerID = ?';

  connection.query(query, [amiId], (err, results) => {
      if (err) {
          console.error('Erreur lors de la recherche:', err);
          return res.status(500).send('Erreur serveur lors de la recherche de l\'ami.');
      }
      if (results.length > 0) {
          res.json(results[0]);  // Renvoie les informations de l'ami si trouvé
      } else {
          res.status(404).send('Aucun ami trouvé avec cet ID.');  // Aucun résultat trouvé
      }
  });
});


app.post('/api/ajouter-ami', (req, res) => {
  if (!req.session.userId) {
      return res.status(401).send('Vous devez être connecté pour ajouter des amis.');
  }
  const joueurId = req.session.userId;
  const amiId = req.body.amiId;

  // Vérifie que vous n'ajoutez pas l'utilisateur lui-même en tant qu'ami
  if (joueurId === amiId) {
      return res.status(400).send('Vous ne pouvez pas vous ajouter vous-même comme ami.');
  }

  const query = 'INSERT INTO Amis (PlayerID, AmisID) VALUES (?, ?)';
  connection.query(query, [joueurId, amiId], (err, result) => {
      if (err) {
          console.error('Erreur lors de l\'ajout de l\'ami:', err);
          return res.status(500).send('Erreur lors de l\'ajout de l\'ami.');
      }
      res.send('Ami ajouté avec succès.');
  });
});


app.get('/api/get-amis', (req, res) => {
  if (!req.session.userId) {
      return res.status(401).send('Vous devez être connecté pour voir vos amis.');
  }
  const joueurId = req.session.userId;

  const query = `
      SELECT p.Username, p.PlayerID 
      FROM Player p 
      JOIN Amis a ON p.PlayerID = a.AmisID 
      WHERE a.PlayerID = ?
  `;

  connection.query(query, [joueurId], (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des amis:', err);
          return res.status(500).send('Erreur serveur lors de la récupération des amis.');
      }
      res.json(results);  // Renvoie la liste des amis
  });
});


















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
