<?php

// Paramètres de connexion à la base de données
$servername = "localhost"; // Hôte de la base de données, localhost dans la plupart des cas
$dbname = "diamond_master"; // Nom de la base de données
$username = "root"; // Nom d'utilisateur pour se connecter à la base de données
$password = "admin"; // Mot de passe pour se connecter à la base de données

try {
    // Création de la connexion à la base de données en utilisant PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Définir le mode d'erreur PDO sur exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie";
} catch(PDOException $e) {
    // Gestion de l'erreur de connexion
    echo "Erreur de connexion : " . $e->getMessage();
}

?>
