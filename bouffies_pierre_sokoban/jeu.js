const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 1000; // Taille du côté du carré

let PJ = [];
let obstacles = [];
let obstacles_immobiles = []

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1 ,1],
    [1, 1, 1, 2, 0, 2, 1, 1, 1, 1],
    [1, 2, 1, 2, 0, 0, 1, 0, 1, 1],
    [2, 0, 0, 2, 2, 2, 0, 0, 0, 1],
    [0, 2, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 4, 0, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
];

canvas.width = map[0].length * boxSize; // Ajuster la largeur du canvas
canvas.height = map.length * boxSize; // Ajuster la hauteur du canvas

generateObstacles(map);

function generateObstacles(map) {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === 2) {
                obstacles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 4) {
                PJ.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 1) {
                obstacles_immobiles.push({ x: col * boxSize, y: row * boxSize });
            } 
        }
    }
}

document.addEventListener("keydown", moov);

let d;

function moov(event) {
    let key = event.keyCode;
    if (key == "90") {
        d = "UP";
    } else if (key == "81") {
        d = "LEFT";
    } else if (key == "83") {
        d = "DOWN";
    } else if (key == "68") {
        d = "RIGHT";
    }

    movePlayer();
}

function movePlayer() {
    let dx = 0;
    let dy = 0;

    switch (d) {
        case "UP":
            dy = -boxSize;
            break;
        case "LEFT":
            dx = -boxSize;
            break;
        case "DOWN":
            dy = boxSize;
            break;
        case "RIGHT":
            dx = boxSize;
            break;
    }

    let newX = PJ[0].x + dx;
    let newY = PJ[0].y + dy;

    let obstacleIndex = getObstacleIndex(newX, newY);
    let obstacleIndexImmobile = getObstacleImmobileIndex(newX, newY);
    
    // Vérifier si la nouvelle position est valide et qu'il n'y a pas d'obstacle
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height && obstacleIndexImmobile === -1) {
        if (obstacleIndex === -1) {
            PJ[0].x = newX;
            PJ[0].y = newY;
            pushing = false; // Réinitialiser l'état de pousser le bloc
        } else if (!pushing && pushObstacle(obstacleIndex, dx, dy)) {
            pushing = true; // Mettre à jour l'état de pousser le bloc
        }
    }
    draw();
}

// Vérifier s'il y a un obstacle aux coordonnées données
function getObstacleIndex(x, y) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i].x === x && obstacles[i].y === y) {
            return i;
        }
    }
    return -1;
}

// Vérifier s'il y a un obstacle immobile aux coordonnées données
function getObstacleImmobileIndex(x, y) {
    for (let i = 0; i < obstacles_immobiles.length; i++) {
        if (obstacles_immobiles[i].x === x && obstacles_immobiles[i].y === y) {
            return i;
        }
    }
    return -1;
}

// Pousser l'obstacle s'il est possible
function pushObstacle(index, dx, dy) {
    let newX = obstacles[index].x + dx;
    let newY = obstacles[index].y + dy;
    // Vérifier si la nouvelle position est valide et qu'il n'y a pas d'obstacle
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleIndex = getObstacleIndex(newX, newY);
        let obstacleIndexImmobile = getObstacleImmobileIndex(newX, newY);
        if (obstacleIndex === -1 && obstacleIndexImmobile === -1) {
            obstacles[index].x = newX;
            obstacles[index].y = newY;
            return true;
        }
    }
    return false;
}

const image_personnage = new Image();
const image_obstacle = new Image();
image_personnage.src = 'PJ.png';
image_obstacle.src = 'bloc.png';

image_personnage.onload = function () {
    image_obstacle.onload = function () {
        draw(); // Redessiner une fois les images chargées
    };
};

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < obstacles.length; i++) {
        context.drawImage(image_obstacle, obstacles[i].x, obstacles[i].y, boxSize, boxSize);
    }

    for (let i = 0; i < obstacles_immobiles.length; i++) {
        context.fillStyle = "black"; // Couleur noire pour les obstacles immobiles
        context.fillRect(obstacles_immobiles[i].x, obstacles_immobiles[i].y, boxSize, boxSize);
    }

    // Dessiner le personnage
    context.drawImage(image_personnage, PJ[0].x, PJ[0].y, boxSize, boxSize);
}

// Appeler la fonction draw pour afficher le canvas avec les obstacles et le personnage
draw();
