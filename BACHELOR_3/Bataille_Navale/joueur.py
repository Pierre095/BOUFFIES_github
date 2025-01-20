# joueur.py
from typing import List, Optional
import random
from navire import Navire
from plateau import Plateau

class Joueur:
    def __init__(self, nom: str):
        self.nom = nom
        self.plateau = Plateau(20)  # Modification de la taille à 15
        self.plateau_adversaire = Plateau(20)  # Modification de la taille à 15
        self.navires_a_placer = [
            ("Porte-avions", 5),
            ("Croiseur", 4),
            ("Destroyer", 3),
            ("Destroyer", 3),
            ("Sous-marin", 2),
        ]
    
    def placer_navires_aleatoirement(self) -> None:
        for nom_navire, taille_navire in self.navires_a_placer:
            place = False
            while not place:
                navire = Navire(nom_navire, taille_navire)
                x = random.randint(0, self.plateau.taille - 1)
                y = random.randint(0, self.plateau.taille - 1)
                horizontal = random.choice([True, False])
                
                positions = []
                valide = True
                
                for i in range(taille_navire):
                    nouveau_x = x + (i if horizontal else 0)
                    nouveau_y = y + (0 if horizontal else i)
                    if nouveau_x >= self.plateau.taille or nouveau_y >= self.plateau.taille:
                        valide = False
                        break
                    positions.append((nouveau_x, nouveau_y))
                
                if valide:
                    for pos_x, pos_y in positions:
                        navire.ajouter_position(pos_x, pos_y)
                    if self.plateau.ajouter_navire(navire):
                        place = True