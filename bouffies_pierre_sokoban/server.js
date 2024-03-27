const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); // Ajout pour le hashage des mots de passe

const app = express();

// Middleware pour parser le contenu JSON des requêtes entrantes
app.use(express.json());

// Création d'une connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', // Remplacez par votre mot de passe réel
  database: 'diamond_master'
});

// Établissement de la connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à MySQL');
});

// Middleware pour servir les fichiers statiques. 'public' est le dossier contenant vos fichiers HTML, JS, CSS, images, etc.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Gestionnaire de route pour traiter les données du formulaire d'inscription envoyées en POST
app.post('/inscription', async (req, res) => {
  const { username, password, confirm_password } = req.body; // Assurez-vous d'inclure confirm_password dans les données envoyées

  if(password !== confirm_password) {
    return res.status(400).send('Les mots de passe ne correspondent pas.');
  }
  try {
    const { username, password } = req.body;
    
    // Hashage du mot de passe avant de l'insérer dans la base de données
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const query = 'INSERT INTO Player (Username, Password) VALUES (?, ?)';
    connection.query(query, [username, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion:', err);
        // Gérer les erreurs spécifiques, par exemple, un nom d'utilisateur déjà pris
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).send('Ce nom d\'utilisateur est déjà pris.');
        } else {
          return res.status(500).send('Erreur lors de l\'inscription.');
        }
      }
      res.send('Inscription réussie !');
    });
  } catch (error) {
    console.error('Erreur lors du hashage du mot de passe:', error);
    res.status(500).send('Erreur serveur.');
  }
});

app.post('/connexion', (req, res) => {
  const { username, password } = req.body;

  // Recherche de l'utilisateur par son nom d'utilisateur
  const query = 'SELECT Password FROM Player WHERE Username = ?';
  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'utilisateur:', err);
      return res.status(500).json({ message: 'Erreur serveur.' });
    }

    if (results.length > 0) {
      // Comparaison du mot de passe soumis avec le mot de passe hashé stocké
      const hashedPassword = results[0].Password;
      bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (err) {
          console.error('Erreur lors de la comparaison des mots de passe:', err);
          return res.status(500).json({ message: 'Erreur serveur.' });
        }

        if (isMatch) {
          // Connexion réussie
          res.json({ success: true });
        } else {
          // Échec de la connexion
          res.status(401).json({ success: false, message: 'Nom d’utilisateur ou mot de passe incorrect' });
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Nom d’utilisateur ou mot de passe incorrect' });
    }
  });
});

// Démarrage du serveur sur le port spécifié
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
