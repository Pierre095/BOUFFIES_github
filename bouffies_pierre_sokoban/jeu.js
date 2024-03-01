const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 100; // Ajustement pour l'exemple, ajustez selon la taille de votre canvas

key_game_check = false;

// Vide : 0
let PJ = []; // 3
let obstacles = []; // 2
let obstacles_immobiles = []; // 1
let key_game = [] // 4
let door = [] // 5
let finish = [] // 6
let mob = [] // 7

const map2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 2, 5, 2, 1, 1, 1, 1],
    [1, 2, 1, 2, 0, 0, 1, 0, 1, 1],
    [2, 0, 0, 2, 2, 2, 0, 0, 4, 1],
    [0, 2, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 3, 0, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];




const map = [
    [1, 0, 7, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [3, 0, 0, 5, 6, 1, 1, 1, 1, 1],
    [4, 0, 7, 4, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

canvas.width = map[0].length * boxSize;
canvas.height = map.length * boxSize;

const image_personnage_1 = new Image();
const image_personnage_2 = new Image();
const image_obstacle = new Image();
const image_personnage_coup = new Image();
const image_key = new Image();
const image_door = new Image();
const image_finish = new Image();
const image_mob = new Image();

image_personnage_1.src = 'PJ1.png';
image_personnage_2.src = 'PJ2.png';
image_obstacle.src = 'bloc.png';
image_personnage_coup.src = 'PJ_coup.png';
image_key.src = "key.png"
image_door.src = "door.png"
image_finish.src = "finish.png"
image_mob.src = "mob.png"

let currentCharacterImage = image_personnage_1;
let pushing = false;
if (pushing === false) {
    setInterval(() => {
        currentCharacterImage = (currentCharacterImage === image_personnage_1) ? image_personnage_2 : image_personnage_1;
        draw(); // Redessinez le jeu pour mettre à jour l'image du personnage
    }, 500); // Change l'image toutes les 500 millisecondes

} else if (pushing === true) {
    setTimeout(() => {
        pushing = false; // Arrêtez de montrer l'image de poussée
        draw(); // Redessinez avec l'image normale
    }, 250); // Délai pour afficher l'image de poussée
}



function generateObstacles(map) {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === 2) { //obstacle mobiles
                obstacles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 3) { // Perosnnage
                PJ.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 1) { //obstacles immobile
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

    let obstacleIndex = getObstacleIndex(newX, newY);
    let obstacleIndexImmobile = getObstacleImmobileIndex(newX, newY);
    let doorIndex = getDoorIndex(newX, newY);
    let keyIndex = getKeyIndex(newX, newY);
    let mobIndex = getMobIndex(newX, newY);

    // Collecter la clé si disponible
    if (keyIndex !== -1 && !isObstacleOnKey(key_game[keyIndex]) && !isMobOnKey(key_game[keyIndex])) {
        key_game.splice(keyIndex, 1); // Supprimez la clé de l'array pour qu'elle ne soit plus dessinée
        key_game_check = true; // Le joueur a maintenant la clé
    }

    // Ouvrir la porte si le joueur a la clé
    if (doorIndex !== -1 && key_game_check === true) {
        door.splice(doorIndex, 1); // Supprime la porte de l'array
        PJ[0].x = newX; // Met à jour la position du joueur pour être sur la porte
        PJ[0].y = newY;
    } else if (mobIndex !== -1) {
        // Si un mob est présent, tentez de le pousser
        if (pushMob(mobIndex, dx, dy)) {
            pushing = true; // Le personnage pousse un bloc
        }
        // Si le mob ne peut pas être poussé, le joueur reste sur place (ne faites rien)
    } else if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height && obstacleIndexImmobile === -1 && doorIndex === -1) {
        if (obstacleIndex === -1) {
            // Si aucun obstacle n'est sur le chemin, déplacez le joueur
            PJ[0].x = newX;
            PJ[0].y = newY;
        } else {
            // Tentative de pousser un obstacle
            if (pushObstacle(obstacleIndex, dx, dy)) {
                pushing = true; // Le personnage pousse un bloc
            }
        }
    }
    draw(); // Redessinez l'état actuel du jeu
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

function isMobOnKey(keyPosition) {
    for (let i = 0; i < mob.length; i++) {
        if (mob[i].x === keyPosition.x && mob[i].y === keyPosition.y) {
            return true; // Un obstacle est sur la clé
        }
    }
    return false; // Aucun obstacle sur la clé
}


function getDoorIndex(x, y) {
    for (let i = 0; i < door.length; i++) {
        if (door[i].x === x && door[i].y === y) {
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
        if (obstacleAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1 && mobAtNewLocationIndex === -1 && doorAtNewLocationIndex === -1) {
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
    let mobIndex = getMobIndex(newX, newY);

    // Vérifie si le nouvel emplacement est valide
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleAtNewLocationIndex = obstacles.findIndex(o => o.x === newX && o.y === newY);
        let immobileObstacleAtNewLocationIndex = obstacles_immobiles.findIndex(o => o.x === newX && o.y === newY);
        let mobAtNewLocationIndex = mob.findIndex(m => m.x === newX && m.y === newY);
        let doorAtNewLocationIndex = door.findIndex(d => d.x === newX && d.y === newY);

        // Empêche le déplacement si un autre mob, obstacle, ou la porte se trouve déjà à l'emplacement cible
        if (obstacleAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1 && mobAtNewLocationIndex === -1 && doorAtNewLocationIndex === -1) {
            mob[index].x = newX;
            mob[index].y = newY;
            return true;
        } else {
            pushing = true; // Le personnage pousse un bloc
            setTimeout(() => {
                pushing = false; // Arrêtez de montrer l'image de poussée
                draw(); // Redessinez avec l'image normale
            }, 250); // Délai pour afficher l'image de poussée
            mob.splice(mobIndex, 1)
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

    if (PJ.length > 0) {
        context.drawImage(currentCharacterImage, PJ[0].x, PJ[0].y, boxSize, boxSize);
    }
}

// Assurez-vous que toutes les images sont chargées avant de dessiner
Promise.all([
    new Promise(resolve => { image_personnage_1.onload = resolve; }),
    new Promise(resolve => { image_personnage_2.onload = resolve; }),
    new Promise(resolve => { image_obstacle.onload = resolve; }),
    new Promise(resolve => { image_personnage_coup.onload = resolve; }),
    new Promise(resolve => { image_key.onload = resolve; }),
    new Promise(resolve => { image_door.onload = resolve; }),
    new Promise(resolve => { image_finish.onload = resolve; }),
    new Promise(resolve => { image_mob.onload = resolve; })
]).then(() => {
    draw(); // Initialiser le dessin une fois que toutes les images sont chargées
});