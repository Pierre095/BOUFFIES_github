CREATE TABLE Player (
    PlayerID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(191) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);

CREATE TABLE Niveau (
    NiveauID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(255) NOT NULL,
    DebloqueApresNiveauID INT,
    FOREIGN KEY (DebloqueApresNiveauID) REFERENCES Niveau(NiveauID)
);

CREATE TABLE Score (
    ScoreID INT AUTO_INCREMENT PRIMARY KEY,
    PlayerID INT NOT NULL,
    NiveauID INT NOT NULL,
    MeilleurTemps DECIMAL(10,2),
    TempsTotal DECIMAL(10,2),
    FOREIGN KEY (PlayerID) REFERENCES Player(PlayerID),
    FOREIGN KEY (NiveauID) REFERENCES Niveau(NiveauID)
);

CREATE TABLE Amis (
    PlayerID INT NOT NULL,
    AmisID INT NOT NULL,
    PRIMARY KEY (JoueurID, AmiJoueurID),
    FOREIGN KEY (JoueurID) REFERENCES Player(PlayerID),
    FOREIGN KEY (AmiJoueurID) REFERENCES Player(PlayerID)
);


-- npm install nodejs
-- npm install express mysql
-- npm install mysql
-- npm install bcrypt
-- npm install express-session

-- rajouter une colonne dans player pour verifier la premiere connexion et initialiser les premiers temps sur les maps de 9999999.99