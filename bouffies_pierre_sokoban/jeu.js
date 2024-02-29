const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 100; // Ajustement pour l'exemple, ajustez selon la taille de votre canvas

key_game_check = false;

let PJ = [];
let obstacles = [];
let obstacles_immobiles = [];
let key_game = []
let door = []
let finish = []
let mob = []

// const map = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
//     [1, 1, 1, 2, 5, 2, 1, 1, 1, 1],
//     [1, 2, 1, 2, 7, 0, 1, 0, 1, 1],
//     [2, 0, 0, 2, 2, 2, 0, 0, 0, 1],
//     [0, 2, 2, 2, 0, 0, 2, 2, 0, 1],
//     [1, 3, 0, 2, 4, 0, 2, 0, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [3, 1, 4, 0, 2, 1, 1, 1, 1, 1],
    [0, 2, 0, 2, 0, 5, 0, 1, 1, 1],
    [2, 0, 2, 0, 2, 2, 0, 6, 1, 1],
    [0, 2, 0, 2, 0, 2, 2, 0, 1, 1],
    [0, 0, 2, 0, 2, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


canvas.width = map[0].length * boxSize;
canvas.height = map.length * boxSize;

const image_personnage = new Image();
const image_obstacle = new Image();
const image_personnage_coup = new Image();
const image_key = new Image();
const image_door = new Image();
const image_finish = new Image();
const image_mob = new Image();

image_personnage.src = 'PJ2.png'; // Assurez-vous que le chemin d'accès est correct
image_obstacle.src = 'bloc.png'; // Assurez-vous que le chemin d'accès est correct
image_personnage_coup.src = 'PJ_coup.png'; // Assurez-vous que le chemin d'accès est correct
image_key.src = "key.png"
image_door.src = "door.png"
image_finish.src = "finish.png"
image_mob.src = "mob.png"

let pushing = false;

function generateObstacles(map) {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === 2) {
                obstacles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 3) {
                PJ.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 1) {
                obstacles_immobiles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 4) {
                key_game.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 5) {
                door.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 6) {
                finish.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 7) {
                mob.push({ x: col * boxSize, y: row * boxSize });
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

    // Vérifiez si le joueur a atteint la clé
    let keyIndex = getKeyIndex(newX, newY); 
    if (keyIndex !== -1) {
        key_game.splice(keyIndex, 1); // Supprimez la clé
        key_game_check = true; // Le joueur a maintenant la clé
    }

    // Vérifiez si le joueur essaie d'entrer dans la porte avec la clé
    let doorIndex = getDoorIndex(newX, newY);
    if (doorIndex !== -1 && key_game_check===true) {
        door.splice(doorIndex, 1); // Supprime la porte
        PJ[0].x = newX; // Met à jour la position du joueur pour montrer qu'il a passé la porte
        PJ[0].y = newY;
    } else {
        // Gérez le mouvement dans les cas où le joueur ne tente pas d'entrer dans la porte
        let obstacleIndex = getObstacleIndex(newX, newY);
        let obstacleIndexImmobile = getObstacleImmobileIndex(newX, newY);

        if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height && obstacleIndexImmobile === -1 && obstacleIndex === -1) {
            // Le mouvement est valide (pas hors de la map, pas sur un obstacle)
            PJ[0].x = newX;
            PJ[0].y = newY;
        } else if (obstacleIndex !== -1) {
            // Tentative de pousser un bloc si possible
            if (pushObstacle(obstacleIndex, dx, dy)) {
                pushing = true; // Le personnage pousse un bloc
                setTimeout(() => {
                    pushing = false; // Arrête de montrer l'image de poussée après un délai
                    draw(); // Redessinez avec l'image normale
                }, 250);
            }
        }
    }
    draw(); // Dessinez l'état actuel du jeu après le mouvement
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

function getKeyIndex(x, y) {
    for (let i = 0; i < key_game.length; i++) {
        if (key_game[i].x === x && key_game[i].y === y) {
            return i;
        }
    }
    return -1;
}

function isObstacleOnKey(keyPosition) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i].x === keyPosition.x && obstacles[i].y === keyPosition.y) {
            return true; // Un obstacle est sur la clé
        }
    }
    return false; // Aucun obstacle sur la clé
}


function getDoorIndex(x, y) {
    for (let i = 0; i < door.length; i++) {
        if (door[i].x === x && door[i].y === y && key_game_check === false) {
            return i;
        }
    }
    return -1;
}

function getFinishIndex(x, y) {
    for (let i = 0; i < finish.length; i++) {
        if (finish[i].x === x && finish[i].y === y) {
            return i;
        }
    }
    return -1;
}

function getMobIndex(x, y) {
    for (let i = 0; i < mob.length; i++) {
        if (mob[i].x === x && mob[i].y === y) {
            return i;
        }
    }
    return -1;
}

function pushObstacle(index, dx, dy) {
    let newX = obstacles[index].x + dx;
    let newY = obstacles[index].y + dy;
    let doorIndex = door.findIndex(d => d.x === newX && d.y === newY);

    if (doorIndex !== -1) {
        // Empêche l'obstacle de se déplacer si le nouvel emplacement est la porte
        return false;
    }

    // Vérifie les autres conditions pour déplacer l'obstacle
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleAtNewLocationIndex = obstacles.findIndex(o => o.x === newX && o.y === newY);
        let immobileObstacleAtNewLocationIndex = obstacles_immobiles.findIndex(o => o.x === newX && o.y === newY);
        // Empêche le déplacement si un autre obstacle se trouve déjà à l'emplacement cible,
        // ou si c'est un obstacle immobile
        if (obstacleAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1) {
            obstacles[index].x = newX;
            obstacles[index].y = newY;
            return true;
        }
    }
    return false;
}

function pushMob(index, dx, dy) {
    let newX = mob[index].x + dx;
    let newY = mob[index].y + dy;
    let doorIndex = door.findIndex(d => d.x === newX && d.y === newY);

    if (doorIndex !== -1) {
        // Empêche l'obstacle de se déplacer si le nouvel emplacement est la porte
        return false;
    }

    // Vérifie les autres conditions pour déplacer le mob
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let mobAtNewLocationIndex = mob.findIndex(o => o.x === newX && o.y === newY);
        let immobileObstacleAtNewLocationIndex = obstacles_immobiles.findIndex(o => o.x === newX && o.y === newY);
        // Empêche le déplacement si un autre obstacle se trouve déjà à l'emplacement cible,
        // ou si c'est un obstacle immobile
        if (mobAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1) {
            mob[index].x = newX;
            mob[index].y = newY;
            return true;
        }
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

    for (let i = 0; i < key_game.length; i++) {
        context.drawImage(image_key, key_game[i].x, key_game[i].y, boxSize, boxSize);
    }

    for (let i = 0; i < door.length; i++) {
        context.drawImage(image_door, door[i].x, door[i].y, boxSize, boxSize);
    }

    for (let i = 0; i < finish.length; i++) {
        context.drawImage(image_finish, finish[i].x, finish[i].y, boxSize, boxSize);
    }

    for (let i = 0; i < mob.length; i++) {
        context.drawImage(image_mob, mob[i].x, mob[i].y, boxSize, boxSize);
    }

    const imageToDraw = pushing ? image_personnage_coup : image_personnage;
    context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
}

    
// Assurez-vous que toutes les images sont chargées avant de dessiner
Promise.all([
    new Promise(resolve => { image_personnage.onload = resolve; }),
    new Promise(resolve => { image_obstacle.onload = resolve; }),
    new Promise(resolve => { image_personnage_coup.onload = resolve; }),
    new Promise(resolve => { image_key.onload = resolve; }),
    new Promise(resolve => { image_door.onload = resolve; }),
    new Promise(resolve => { image_finish.onload = resolve; }),
    new Promise(resolve => { image_mob.onload = resolve; })
]).then(() => {
    draw(); // Initialiser le dessin une fois que toutes les images sont chargées
});



