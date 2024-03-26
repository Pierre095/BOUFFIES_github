const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const boxSize = 100; // Ajustement pour l'exemple, ajustez selon la taille de votre canvas

key_game_check = false;
end = false;
map_count = 1;
right = true;
left = false;
start = false;
moov_trap = 0;
trap_switch = true;

const moveLimits = {
    map1: 23,//23
    map2: 24,//24
    map3: 32,//32
    map4: 23,//23
    map5: 23,//23
    map6: 40,//43
    map7: 32,//32
    map8: 33,//33
    // Ajoutez d'autres niveaux au besoin
};

// Vide : 0
let PJ = []; // 3
let obstacles = []; // 2
let obstacles_immobiles = []; // 1
let key_game = [] // 4
let door = [] // 5
let finish = [] // 6
let mob = [] // 7
let trap = [] // 8


const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const maptest = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 3, 1, 1],
    [1, 1, 1, 0, 0, 7, 0, 0, 1, 1],
    [1, 1, 1, 0, 7, 0, 7, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 0, 2, 0, 2, 0, 6, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 7, 1, 8, 8, 0, 0, 1, 1],
    [1, 0, 8, 1, 1, 2, 2, 2, 1, 1],
    [1, 0, 0, 1, 1, 0, 8, 0, 1, 1],
    [1, 3, 0, 1, 1, 6, 7, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 7, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 6, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 5, 1, 1],
    [1, 1, 1, 0, 8, 8, 0, 0, 3, 1],
    [1, 1, 1, 8, 1, 8, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 7, 8, 8, 0, 1],
    [1, 4, 1, 8, 1, 8, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 7, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map4 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 1, 4, 0, 2, 1, 1, 1, 1],
    [1, 0, 2, 8, 2, 0, 5, 0, 1, 1],
    [1, 2, 0, 2, 0, 2, 2, 6, 0, 1],
    [1, 0, 2, 0, 2, 0, 2, 2, 0, 1],
    [1, 1, 0, 2, 0, 2, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map5 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 6, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 5, 2, 0, 1, 1],
    [1, 1, 3, 1, 8, 0, 2, 0, 1, 1],
    [1, 1, 0, 1, 0, 8, 0, 8, 1, 1],
    [1, 1, 7, 1, 2, 2, 2, 2, 1, 1],
    [1, 1, 8, 0, 8, 0, 0, 8, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map6 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 3, 0, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 4, 1, 1, 1, 1, 1],
    [1, 1, 0, 2, 0, 0, 1, 1, 1, 1],
    [1, 1, 7, 1, 2, 2, 0, 0, 1, 1],
    [1, 1, 0, 0, 2, 0, 7, 1, 1, 1],
    [1, 1, 1, 1, 1, 5, 2, 0, 1, 1],
    [1, 1, 1, 1, 1, 6, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map7 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 6, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 5, 0, 1, 1],
    [1, 1, 0, 4, 1, 2, 2, 2, 1, 1],
    [1, 1, 7, 2, 0, 7, 2, 0, 1, 1],
    [1, 1, 0, 1, 7, 0, 0, 3, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map8 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 6, 0, 1, 1, 1, 1],
    [1, 1, 1, 2, 5, 2, 1, 1, 1, 1],
    [1, 2, 1, 2, 0, 0, 1, 0, 1, 1],
    [2, 0, 0, 2, 2, 2, 0, 0, 4, 1],
    [0, 2, 2, 2, 0, 0, 2, 2, 0, 1],
    [1, 3, 0, 2, 0, 0, 2, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const map1 = [
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 7, 1, 1, 1, 1, 1, 1, 1],
    [3, 0, 8, 2, 6, 1, 1, 1, 1, 1],
    [0, 0, 7, 4, 5, 0, 0, 1, 1, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


canvas.width = map.length * boxSize;
canvas.height = map.length * boxSize;

const image_personnage_1 = new Image();
const image_personnage_2 = new Image();
const image_personnage_1_gauche = new Image();
const image_personnage_2_gauche = new Image();
const image_obstacle = new Image();
const image_personnage_coup = new Image();
const image_personnage_coup_gauche = new Image();
const image_key = new Image();
const image_door = new Image();
const image_finish = new Image();
const image_mob = new Image();
const image_mob_dead = new Image();
const image_trap = new Image();

image_personnage_1.src = "IMG/ASSET/PJ1.png";
image_personnage_2.src = "IMG/ASSET/PJ2.png";
image_personnage_coup.src = "IMG/ASSET/PJ_coup.png";
image_personnage_1_gauche.src = "IMG/ASSET/PJ1_gauche.png";
image_personnage_2_gauche.src = "IMG/ASSET/PJ2_gauche.png";
image_personnage_coup_gauche.src = "IMG/ASSET/PJ_coup_gauche.png";
image_obstacle.src = "IMG/ASSET/bloc.png";
image_key.src = "IMG/ASSET/key.png"
image_door.src = "IMG/ASSET/door.png"
image_finish.src = "IMG/ASSET/finish.png"
image_mob.src = "IMG/ASSET/mob.png"
image_mob_dead.src = "IMG/ASSET/mob_dead.png"
image_trap.src = "IMG/ASSET/piege.png";



//Animation personnage (statique / push)
let currentCharacterImage = image_personnage_1;
let pushing = false;
let pushing_check = false;
if (pushing === false) {
    setInterval(() => {
        currentCharacterImage = (currentCharacterImage === image_personnage_1) ? image_personnage_2 : image_personnage_1;
        draw();
    }, 500);
} else if (pushing === true) {
    setInterval(() => {
        currentCharacterImage = image_personnage_coup;
        draw();
    }, 250); // 
}

let currentCharacterImage_gauche = image_personnage_1_gauche;
if (pushing === false) {
    setInterval(() => {
        currentCharacterImage_gauche = (currentCharacterImage_gauche === image_personnage_1_gauche) ? image_personnage_2_gauche : image_personnage_1_gauche;
        draw();
    }, 500);
} else if (pushing === true) {
    setInterval(() => {
        currentCharacterImage_gauche = image_personnage_coup_gauche;
        draw();
    }, 250); // 
}



function generateObstacles(map) {
    // Vider les tableaux avant de générer de nouveaux obstacles pour éviter des doublons
    PJ = [];
    obstacles = [];
    obstacles_immobiles = [];
    key_game = [];
    door = [];
    finish = [];
    mob = [];
    trap = [];

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] === 2) { // Obstacle mobile
                obstacles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 3) { // Personnage
                PJ.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 1) { // Obstacle immobile
                obstacles_immobiles.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 4) { // Clé
                key_game.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 5) { // Porte
                door.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 6) { // Fin
                finish.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 7) { // Mob
                mob.push({ x: col * boxSize, y: row * boxSize });
            } else if (map[row][col] === 8) { // Trap
                trap.push({ x: col * boxSize, y: row * boxSize });
            }
        }
    }
    initializeMoveCount();
    moov_trap = 0;

}



document.addEventListener("keydown", moov);
let d;

function moov(event) {
    let key = event.keyCode;
    let validMove = false; // Ajout pour indiquer si le mouvement est valide

    if (key == 90 || key == 38) { // Z
        d = "UP";
        validMove = true;
    } else if (key == 81 || key == 37) { // Q
        d = "LEFT";
        validMove = true;
    } else if (key == 83 || key == 40) { // S
        d = "DOWN";
        validMove = true;
    } else if (key == 68 || key == 39) { // D
        d = "RIGHT";
        validMove = true;
    }
    SwitchTrap();

    if (validMove) {
        movePlayer(d); // Déplacer le joueur seulement si une touche valide est pressée
    }

    if (key == 82) { //permet de réinitialiser la map
        key_game_check = false;
        trap_switch = true;
        if (map_count === 1) {
            setTimeout(() => {
                generateObstacles(map1);
            }, 10);
        } else if (map_count === 2) {
            setTimeout(() => {
                generateObstacles(map2);
            }, 10);
        } else if (map_count === 3) {
            setTimeout(() => {
                generateObstacles(map3);
            }, 10);
        } else if (map_count === 4) {
            setTimeout(() => {
                generateObstacles(map4);
            }, 10);
        } else if (map_count === 5) {
            setTimeout(() => {
                generateObstacles(map5);
            }, 10);
        } else if (map_count === 6) {
            setTimeout(() => {
                generateObstacles(map6);
            }, 10);
        } else if (map_count === 7) {
            setTimeout(() => {
                generateObstacles(map7);
            }, 10);
        } else if (map_count === 8) {
            setTimeout(() => {
                generateObstacles(map8);
            }, 10);
        }
    }

    updateMoveCountDisplay();
    moveCount();
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

    start = true;






    let newX = PJ[0].x + dx;
    let newY = PJ[0].y + dy;

    let obstacleIndex = getObstacleIndex(newX, newY);
    let obstacleIndexImmobile = getObstacleImmobileIndex(newX, newY);
    let doorIndex = getDoorIndex(newX, newY);
    let keyIndex = getKeyIndex(newX, newY);
    let mobIndex = getMobIndex(newX, newY);
    let finishIndex = getFinishIndex(newX, newY);
    let trapIndex = getTrapIndex(newX, newY);


    if (finishIndex !== -1 && move_count !== 0) { //vérifie si la fin est réglementaire
        PJ[0].x = newX; // Met à jour la position du joueur pour être sur la fin
        PJ[0].y = newY;
        // Le joueur a atteint la case d'arrivée
        finish.splice(finishIndex, 1);
        // Ici, vous pouvez ajouter toute logique nécessaire pour gérer la victoire,
        // comme arrêter le jeu, afficher un écran de victoire, etc.
        // Par exemple, pour arrêter de déplacer le joueur après la victoire :
        end = true;
        if (end === true && map_count === 9) {
            setTimeout(() => {
                alert("Félicitations ! Vous avez fini le jeu !");
                const zone_jeu = document.querySelector('.zone_jeu');
                const accueil = document.querySelector('.accueil_hide');
                const movecount = document.querySelector('.moveCount');
                zone_jeu.classList.add('zone_jeu_hide');
                zone_jeu.classList.remove('zone_jeu');
                accueil.classList.add('accueil');
                accueil.classList.remove('accueil_hide');
                movecount.classList.add('moveCount_hide');
                movecount.classList.remove('moveCount');
            }, 250);
        } else if (end === true) {
            map_count += 1;
            setTimeout(() => {
                alert("Félicitations ! Voulez-vous aller au niveau suivant ?");
                if (map_count === 2) {
                    generateObstacles(map2);
                } else if (map_count === 3) {
                    generateObstacles(map3);
                } else if (map_count === 4) {
                    generateObstacles(map4);
                } else if (map_count === 5) {
                    generateObstacles(map5);
                } else if (map_count === 6) {
                    generateObstacles(map6);
                } else if (map_count === 7) {
                    generateObstacles(map7);
                } else if (map_count === 8) {
                    generateObstacles(map8);
                }
                move_count = 0;
                moov_trap = 0;
                initializeMoveCount();
                // Ajoutez ici toute autre logique de victoire, comme recharger le jeu ou passer au niveau suivant
            }, 250);
            console.log(map_count)
        }

    }




    // Collecter la clé si disponible
    if (keyIndex !== -1 && !isObstacleOnKey(key_game[keyIndex]) && !isMobOnKey(key_game[keyIndex])) {
        key_game.splice(keyIndex, 1); // Supprimez la clé de l'array pour qu'elle ne soit plus dessinée
        key_game_check = true; // Le joueur a maintenant la clé
    }

    if (trapIndex !== -1 && !isObstacleOnTrap(trap[trapIndex]) && trap_switch === true) {
        move_count -= 1;
        // Alternez l'état du piège, qu'il ait été actif ou non
    }

    // Ouvrir la porte si le joueur a la clé
    if (doorIndex !== -1 && key_game_check === true) {
        move_count -= 1;
        moov_trap += 1;
        door.splice(doorIndex, 1); // Supprime la porte de l'array
        PJ[0].x = newX; // Met à jour la position du joueur pour être sur la porte
        PJ[0].y = newY;
        key_game_check = false;
    } else if (mobIndex !== -1) {
        // Si un mob est présent, tentez de le pousser
        trapIndex = getTrapIndex(PJ[0].x, PJ[0].y);
        ontrap = trapIndex !== -1;

        if (ontrap === true && trap_switch === true) {
            move_count -= 1
        }

        if (pushMob(mobIndex, dx, dy)) {

            move_count -= 1;
            moov_trap += 1;
            pushing = true; // Le personnage pousse un mob
            pushing_check = true
            if (pushing === true) {
                setTimeout(() => {
                    pushing = false; // Arrêtez de montrer l'image de poussée
                    draw(); // Redessinez avec l'image normale
                }, 250); // Délai pour afficher l'image de poussée
            }
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
                pushing_check = true;
                if (pushing === true) {
                    setTimeout(() => {
                        pushing = false; // Arrêtez de montrer l'image de poussée
                        draw(); // Redessinez avec l'image normale
                    }, 250); // Délai pour afficher l'image de poussée
                }
            } else {//fait l'animation de pousser même si c'est pas possible
                pushing = true;
                pushing_check = true;
                if (pushing === true) {
                    setTimeout(() => {
                        pushing = false; // Arrêtez de montrer l'image de poussée
                        draw(); // Redessinez avec l'image normale
                    }, 250); // Délai pour afficher l'image de poussée
                }

            }

        }
        trapIndex = getTrapIndex(PJ[0].x, PJ[0].y);
        ontrap = trapIndex !== -1;
        if (ontrap === true && pushing_check === true && trap_switch === true) {
            move_count -= 2;
            moov_trap += 1;
        } else {
            move_count -= 1;
            moov_trap += 1;
        }
    }
    pushing_check = false;
    console.log(moov_trap);
    draw(); // Redessinez l'état actuel du jeu
}

function SwitchTrap() {
    if (moov_trap % 2 !== 0) {
        trap_switch = false;
        image_trap.src = "IMG/ASSET/nopiege.png";
    } else {
        trap_switch = true;
        image_trap.src = "IMG/ASSET/piege.png";
    }
    console.log(trap_switch);
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

function getTrapIndex(x, y) {
    for (let i = 0; i < trap.length; i++) {
        if (trap[i].x === x && trap[i].y === y) {
            return i;
        }
    }
    return -1;
}

function pushObstacle(index, dx, dy) {
    let newX = obstacles[index].x + dx;
    let newY = obstacles[index].y + dy;

    // Recherche si une porte est à l'emplacement cible
    let doorAtNewLocationIndex = door.findIndex(d => d.x === newX && d.y === newY);
    let finishAtNewLocationIndex = finish.findIndex(d => d.x === newX && d.y === newY);

    // Recherche si un mob est à l'emplacement cible
    let mobAtNewLocationIndex = mob.findIndex(m => m.x === newX && m.y === newY);

    // Vérifie si le nouvel emplacement est valide et libre
    if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
        let obstacleAtNewLocationIndex = obstacles.findIndex(o => o.x === newX && o.y === newY);
        let immobileObstacleAtNewLocationIndex = obstacles_immobiles.findIndex(o => o.x === newX && o.y === newY);

        // Empêche le déplacement si un autre obstacle, mob, ou la porte se trouve déjà à l'emplacement cible
        if (obstacleAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1 && mobAtNewLocationIndex === -1 && doorAtNewLocationIndex === -1 && finishAtNewLocationIndex === -1) {
            obstacles[index].x = newX;
            obstacles[index].y = newY;
            return true; // L'obstacle a été déplacé avec succès
        }
    }
    return false; // Le déplacement n'a pas eu lieu
}

function pushMob(index, dx, dy) {
    let newX = mob[index].x + dx;
    let newY = mob[index].y + dy;

    // Vérifie si le nouvel emplacement est hors limites, ce qui signifierait pousser le mob hors du jeu
    if (newX < 0 || newX >= canvas.width || newY < 0 || newY >= canvas.height) {
        // Supprime le mob car il est poussé hors des limites
        mob.splice(index, 1);
        return true; // Le mob a été "poussé" hors du jeu
    }

    // Vérifie si le nouvel emplacement est occupé par un obstacle, un obstacle immobile, un autre mob, ou une porte
    let obstacleAtNewLocationIndex = obstacles.findIndex(o => o.x === newX && o.y === newY);
    let immobileObstacleAtNewLocationIndex = obstacles_immobiles.findIndex(o => o.x === newX && o.y === newY);
    let mobAtNewLocationIndex = mob.findIndex((m, idx) => m.x === newX && m.y === newY && idx !== index);
    let doorAtNewLocationIndex = door.findIndex(d => d.x === newX && d.y === newY);

    // Si l'emplacement est libre, déplace le mob
    if (obstacleAtNewLocationIndex === -1 && immobileObstacleAtNewLocationIndex === -1 && mobAtNewLocationIndex === -1 && doorAtNewLocationIndex === -1) {
        mob[index].x = newX;
        mob[index].y = newY;
        return true; // Le mob a été déplacé avec succès
    } else {
        // Si l'emplacement n'est pas libre, supprime le mob car il est poussé contre un obstacle
        mob.splice(index, 1);
        return true; // Le mob a été "poussé" et supprimé
    }
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

function isObstacleOnTrap(trapPosition) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i].x === trapPosition.x && obstacles[i].y === trapPosition.y) {
            return true; // Un obstacle est sur la clé
        }
    }
    return false; // Aucun obstacle sur la clé
}

function isMobOnTrap(trapPosition) {
    let newX = mob[index].x + dx;
    let newY = mob[index].y + dy;

    for (let i = 0; i < obstacles.length; i++) {
        if (mob[i].x === trapPosition.x && obstacles[i].y === trapPosition.y && trap_switch === true) {
            return true;
            mob.splice(index, 1); // Un obstacle est sur la clé
        }
    }
    return false; // Aucun obstacle sur la clé
}

function moveCount() {
    if (map_count === 1) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 23;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map1);
            }, 250);
        }
    } else if (map_count === 2) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 24;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map2);
            }, 250);
        }
    } else if (map_count === 3) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 32;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map3);
            }, 250);
        }
    } else if (map_count === 4) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 23;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map4);
            }, 250);
        }
    } else if (map_count === 5) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 23;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map5);
            }, 250);
        }
    } else if (map_count === 6) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 43;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map6);
            }, 250);
        }
    } else if (map_count === 7) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 32;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map7);
            }, 250);
        }
    } else if (map_count === 8) {
        if (move_count <= -1) {
            alert("Dommage ! Recommence !");
            move_count = 33;
            initializeMoveCount()
            setTimeout(() => {
                generateObstacles(map8);
            }, 250);
        }
    }
}

function initializeMoveCount() {
    // Exemple d'initialisation pour map1
    move_count = moveLimits[`map${map_count}`]; // Obtenez la limite de mouvements pour le niveau actuel
    updateMoveCountDisplay(); // Mettez à jour l'affichage
}

function updateMoveCountDisplay() {
    document.getElementById('moveCount').innerText = `${move_count}`;
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

    for (let i = 0; i < trap.length; i++) {
        context.drawImage(image_trap, trap[i].x, trap[i].y, boxSize, boxSize);
    }

    if (start === false) {
        context.drawImage(currentCharacterImage, PJ[0].x, PJ[0].y, boxSize, boxSize);
    }
    if (PJ.length > 0 && pushing === false && start === true) {
        if (d === "RIGHT") {
            context.drawImage(currentCharacterImage, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = true;
            left = false;
        }
        else if (d === "LEFT") {
            context.drawImage(currentCharacterImage_gauche, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = false;
            left = true;
        } else if (d === "UP" && right === true) {
            context.drawImage(currentCharacterImage, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = true;
            left = false;
        } else if (d === "UP" && left === true) {
            context.drawImage(currentCharacterImage_gauche, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = false;
            left = true;
        } else if (d === "DOWN" && right === true) {
            context.drawImage(currentCharacterImage, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = true;
            left = false;
        } else if (d === "DOWN" && left === true) {
            context.drawImage(currentCharacterImage_gauche, PJ[0].x, PJ[0].y, boxSize, boxSize);
            right = false;
            left = true;
        }

    }
    if (d === "RIGHT") {
        const imageToDraw = pushing ? image_personnage_coup : currentCharacterImage;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    } else if (d === "LEFT") {
        const imageToDraw = pushing ? image_personnage_coup_gauche : currentCharacterImage_gauche;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    } else if (d === "UP" && right === true) {
        const imageToDraw = pushing ? image_personnage_coup : currentCharacterImage;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    } else if (d === "UP" && left === true) {
        const imageToDraw = pushing ? image_personnage_coup_gauche : currentCharacterImage_gauche;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    } else if (d === "DOWN" && right === true) {
        const imageToDraw = pushing ? image_personnage_coup : currentCharacterImage;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    } else if (d === "DOWN" && left === true) {
        const imageToDraw = pushing ? image_personnage_coup_gauche : currentCharacterImage_gauche;
        context.drawImage(imageToDraw, PJ[0].x, PJ[0].y, boxSize, boxSize);
    }



}

Promise.all([
    new Promise(resolve => { image_personnage_1.onload = resolve; }),
    new Promise(resolve => { image_personnage_2.onload = resolve; }),
    new Promise(resolve => { image_personnage_1_gauche.onload = resolve; }),
    new Promise(resolve => { image_personnage_2_gauche.onload = resolve; }),
    new Promise(resolve => { image_obstacle.onload = resolve; }),
    new Promise(resolve => { image_personnage_coup.onload = resolve; }),
    new Promise(resolve => { image_key.onload = resolve; }),
    new Promise(resolve => { image_door.onload = resolve; }),
    new Promise(resolve => { image_finish.onload = resolve; }),
    new Promise(resolve => { image_mob.onload = resolve; }),
    new Promise(resolve => { image_mob_dead.onload = resolve; }),
    new Promise(resolve => { image_trap.onload = resolve; })
]).then(() => {
    draw(); // Initialiser le dessin une fois que toutes les images sont chargées
});


// Assurez-vous que toutes les images sont chargées avant de dessiner

function startGame() {
    const zone_jeu = document.querySelector('.zone_jeu_hide');
    const accueil = document.querySelector('.accueil');
    const movecount = document.querySelector('.moveCount_hide');
    zone_jeu.classList.remove('zone_jeu_hide');
    zone_jeu.classList.add('zone_jeu');
    accueil.classList.remove('accueil');
    accueil.classList.add('accueil_hide');
    movecount.classList.remove('moveCount_hide');
    movecount.classList.add('moveCount');
    // Retire l'écran de démarrage et lance le jeu
    generateObstacles(map1); // Exemple de fonction qui pourrait être appelée pour initialiser le jeu
    draw(); // Redessine le canvas avec le jeu en cours

}