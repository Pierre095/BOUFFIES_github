# navire.py

class Navire:
    def __init__(self, nom: str, taille: int):
        self.nom = nom
        self.taille = taille
        self.positions = []  # Liste des positions [(x1,y1), (x2,y2)...]
        self.touches = set()  # Ensemble des positions touchées
    
    def est_coule(self) -> bool:
        return len(self.touches) == self.taille
    
    def ajouter_position(self, x: int, y: int) -> None:
        self.positions.append((x, y))
    
    def toucher(self, x: int, y: int) -> bool:
        if (x, y) in self.positions:
            self.touches.add((x, y))
            return True
        return False