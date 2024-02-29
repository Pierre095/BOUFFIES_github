const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 100; // Ajustement pour l'exemple, ajustez selon la taille de votre canvas

let PJ = [];
let obstacles = [];
let obstacles_immobiles = [];

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 2, 0, 2, 1, 1, 1, 1],
    [1, 2, 1, 2, 0, 0, 1, 0, 1, 1],
    [2, 0, 0, 2, 2, 2, 0, 0, 0, 1],
    [0, 2, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 4, 0, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

canvas.width = map[0].length * boxSize;
canvas.height = map.length * boxSize;

const image_personnage = new Image();
const image_obstacle = new Image();
const image_personnage_coup = new Image();

image_personnage.src = 'PJ2.png'; // Assurez-vous que le chemin d'accès est correct
image_obstacle.src = 'bloc.png'; // Assurez-vous que le chemin d'accès est correct
image_personnage_coup.src = 'PJ_coup.png'; // Assurez-vous que le chemin d'accès est correct

let pushing = false;

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

generateObstacles(map);

document.addEventListener("keydown", moov);

let d;

function moov(event) {
    let key = event.keyCode;
    if (key == 90) { // Z
        d = "UP";
    } else if (key == 81) { // Q
        d = "LEFT";
    } else if (key == 83) { // S
        d = "DOWN";
    } else if (key == 68) { // D
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
    
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height && obstacleIndexImmobile === -1) {
        if (obstacleIndex === -1) {
            PJ[0].x = newX;
            PJ[0].y = newY;
        } else {
            // Tentative de pousser un bloc
            if (pushObstacle(obstacleIndex, dx, dy)) {
                pushing = true; // Le personnage pousse un bloc
                setTimeout(() => {
                    pushing = false; // Après 1 seconde, arrêtez de montrer l'image de coup de pied
                    draw(); // Redessinez avec l'image normale
                }, 250); // Délai pour afficher l'image de coup de pied
            }
        }
    }
    draw();
}

function getObstacleIndex(x, y) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i].x === x && obstacles[i].y === y) {
            return i;
        }
    }
    return -1;
}

function getObstacleImmobileIndex(x, y) {
    for (let i = 0; i < obstacles_immobiles.length; i++) {
        if (obstacles_immobiles[i].x === x && obstacles_immobiles[i].y === y) {
            return i;
        }
    }
    return -1;
}

function pushObstacle(index, dx, dy) {
    let newX = obstacles[index].x + dx;
    let newY = obstacles[index].y + dy;
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height && getObstacleIndex(newX, newY) === -1 && getObstacleImmobileIndex(newX, newY) === -1) {
        obstacles[index].x = newX;
        obstacles[index].y = newY;
        return true;
    }
    return false;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < obstacles.length; i++) {
        context.drawImage(image_obstacle, obstacles[i].x, obstacles[i].y, boxSize, boxSize);
    }

    for (let i = 0; i < obstacles_immobiles.length; i++) {
        context.fillStyle = "black";
        context.fillRect(obstacles_immobiles[i].x, obstacles_immobiles[i].y, boxSize, boxSize);
    }

    const imageToDraw = pushing ? image_personnage_coup : image_personnage;
    context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
}

// Assurez-vous que toutes les images sont chargées avant de dessiner
Promise.all([
    new Promise(resolve => { image_personnage.onload = resolve; }),
    new Promise(resolve => { image_obstacle.onload = resolve; }),
    new Promise(resolve => { image_personnage_coup.onload = resolve; })
]).then(() => {
    draw(); // Initialiser le dessin une fois que toutes les images sont chargées
});
