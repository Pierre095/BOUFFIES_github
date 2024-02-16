const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 30; // Taille du côté du carré
const cols = 10; // Nombre de colonnes
const rows = 10; // Nombre de rangées

canvas.width = cols * boxSize; // Ajuster la largeur du canvas
canvas.height = rows * boxSize; // Ajuster la hauteur du canvas

let PJ = [];
PJ[0] = { x: Math.floor(2) * boxSize, y: Math.floor(2) * boxSize }; // Positionner le personnage au centre du canvas

let d;
let pushing = false; // Variable pour indiquer si le joueur pousse un bloc

// Créer un tableau pour stocker les positions des obstacles
let obstacles = [];
obstacles.push({ x: 5 * boxSize, y: 1 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 2 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 3 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 4 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 5 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 6 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 7 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 8 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 9 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 10 * boxSize });
obstacles.push({ x: 5 * boxSize, y: 0 * boxSize });

document.addEventListener("keydown", moov);

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

    // Vérifier si la nouvelle position est valide et qu'il n'y a pas d'obstacle
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleIndex = getObstacleIndex(newX, newY);
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

// Pousser l'obstacle s'il est possible
function pushObstacle(index, dx, dy) {
    let newX = obstacles[index].x + dx;
    let newY = obstacles[index].y + dy;
    // Vérifier si la nouvelle position est valide et qu'il n'y a pas d'obstacle
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleIndex = getObstacleIndex(newX, newY);
        if (obstacleIndex === -1) {
            obstacles[index].x = newX;
            obstacles[index].y = newY;
            return true;
        }
    }
    return false;
}

const image_personnage = new Image();
const image_obstacle = new Image();
image_personnage.src = 'photoID.png';
image_obstacle.src = 'bloc.png';

image_personnage.onload = function() {
    image_obstacle.onload = function() {
        draw(); // Redessiner une fois les images chargées
    };
};

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < obstacles.length; i++) {
        context.drawImage(image_obstacle, obstacles[i].x, obstacles[i].y, boxSize, boxSize);
    }

    // Dessiner le personnage
    context.drawImage(image_personnage, PJ[0].x, PJ[0].y, boxSize, boxSize);
}

// Appeler la fonction draw pour afficher le canvas avec les obstacles et le personnage
draw();
