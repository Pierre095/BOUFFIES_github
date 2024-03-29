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

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'diamond_master'
});

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
    
    const query = 'INSERT INTO Player (Username, Password) VALUES (?, ?)';
    connection.query(query, [username, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion:', err);
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).send('Ce nom d\'utilisateur est déjà pris.');
        } else {
          return res.status(500).send('Erreur lors de l\'inscription.');
        }
      }
      req.session.userId = results.insertId;
      req.session.username = username; // Stocker le nom d'utilisateur dans la session
      req.session.isLoggedIn = true;
      res.redirect('/connexion-reussie.html'); // Assurez-vous que cette route existe et qu'elle est correctement gérée par votre serveur
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
    const query = 'SELECT Username FROM Player WHERE PlayerID = ?';
    connection.query(query, [req.session.userId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération du username:', err);
            return res.status(500).send({ error: 'Erreur serveur' });
        }
        if (results.length > 0) {
            return res.json({ username: results[0].Username });
        } else {
            return res.status(404).send({ error: 'Utilisateur non trouvé' });
        }
    });
});

app.post('/api/enregistrer-temps', (req, res) => {
  // Vérifier si l'utilisateur est connecté
  if (!req.session.userId) {
      return res.status(401).send({ message: 'Utilisateur non connecté' });
  }

  const temps = req.body.temps;
  const userId = req.session.userId;
  const niveauId = req.body.niveauId; // Supposons que vous envoyez également l'ID du niveau depuis le client

  // Construire votre requête SQL pour insérer ou mettre à jour le meilleur temps
  // Voici un exemple basique pour insérer un nouveau score
  // Vous devriez ajouter une logique pour vérifier si c'est un meilleur temps pour ce niveau
  const query = `
      INSERT INTO Score (PlayerID, NiveauID, MeilleurTemps)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE MeilleurTemps = LEAST(MeilleurTemps, VALUES(MeilleurTemps))
  `;

  connection.query(query, [userId, niveauId, temps], (error, results) => {
      if (error) {
          console.error('Erreur lors de l\'enregistrement du temps :', error);
          return res.status(500).send({ message: 'Erreur lors de l\'enregistrement du temps' });
      }
      res.send({ success: true, message: 'Temps enregistré avec succès' });
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
