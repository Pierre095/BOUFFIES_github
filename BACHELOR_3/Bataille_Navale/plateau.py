# plateau.py
from navire import Navire

class Plateau:
    def __init__(self, taille: int = 10):
        self.taille = taille
        self.grille = [[None for _ in range(taille)] for _ in range(taille)]
        self.navires = []
        self.tirs = set()  # Ensemble des tirs effectués
    
    def ajouter_navire(self, navire: Navire) -> bool:
        # Vérifie si toutes les positions du navire sont valides
        for x, y in navire.positions:
            if not self._est_position_valide(x, y) or self.grille[x][y] is not None:
                return False
        
        # Place le navire sur la grille
        for x, y in navire.positions:
            self.grille[x][y] = navire
        self.navires.append(navire)
        return True
    
    def tirer(self, x: int, y: int) -> tuple[bool, bool]:
        """Retourne (touché, coulé)"""
        self.tirs.add((x, y))
        if not self._est_position_valide(x, y) or self.grille[x][y] is None:
            return False, False
        
        navire = self.grille[x][y]
        touche = navire.toucher(x, y)
        return touche, navire.est_coule()
    
    def _est_position_valide(self, x: int, y: int) -> bool:
        return 0 <= x < self.taille and 0 <= y < self.taille