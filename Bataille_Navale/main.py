# main.py
from typing import Optional
from joueur import Joueur
from navire import Navire
import random
import tkinter as tk
from tkinter import messagebox

class BatailleNavale:
    def __init__(self):
        self.TAILLE_GRILLE = 10  # Nouvelle taille de grille
        self.joueur_humain = Joueur("Joueur")
        self.joueur_ordinateur = Joueur("Ordinateur")
        self.joueur_courant = self.joueur_humain
        
        # Création de la fenêtre principale
        self.fenetre = tk.Tk()
        self.fenetre.title("Bataille Navale")
        self.fenetre.resizable(False, False)
        
        # Frame principale
        self.frame_principal = tk.Frame(self.fenetre, padx=20, pady=20)
        self.frame_principal.pack()
        
        # Création des grilles
        self.frame_grilles = tk.Frame(self.frame_principal)
        self.frame_grilles.pack()
        
        # Grille du joueur
        self.frame_joueur = tk.LabelFrame(self.frame_grilles, text="Votre grille", padx=10, pady=10)
        self.frame_joueur.pack(side=tk.LEFT, padx=20)
        self.boutons_joueur = self._creer_grille(self.frame_joueur, False)
        
        # Grille de l'ordinateur
        self.frame_ordinateur = tk.LabelFrame(self.frame_grilles, text="Grille de l'ordinateur", padx=10, pady=10)
        self.frame_ordinateur.pack(side=tk.LEFT, padx=20)
        self.boutons_ordinateur = self._creer_grille(self.frame_ordinateur, True)
        
        # Panneau de contrôle
        self.frame_controle = tk.Frame(self.frame_principal, pady=20)
        self.frame_controle.pack()
        
        self.btn_nouvelle_partie = tk.Button(self.frame_controle, text="Nouvelle Partie", command=self.nouvelle_partie)
        self.btn_nouvelle_partie.pack(side=tk.LEFT, padx=10)
        
        self.label_statut = tk.Label(self.frame_controle, text="Placez vos navires")
        self.label_statut.pack(side=tk.LEFT, padx=10)
        
        # Variables d'état
        self.phase_placement = True
        self.navire_actuel_index = 0
        self.orientation_horizontale = True
        
    def _creer_grille(self, parent, grille_adverse: bool) -> list:
        boutons = []
        for i in range(self.TAILLE_GRILLE):
            ligne = []
            for j in range(self.TAILLE_GRILLE):
                btn = tk.Button(parent, width=2, height=1, 
                command=lambda x=i, y=j: self._clic_case(x, y, grille_adverse))
                btn.grid(row=i, column=j)
                ligne.append(btn)
            boutons.append(ligne)
        return boutons
    
    def _clic_case(self, x: int, y: int, grille_adverse: bool):
        if grille_adverse:
            if self.phase_placement:
                return  # Ignore les clics sur la grille adverse pendant la phase de placement
            self._tour_joueur(x, y)
        else:
            if not self.phase_placement:
                return  # Ignore les clics sur sa propre grille pendant la phase de jeu
            self._placer_navire(x, y)
    
    def _tour_joueur(self, x: int, y: int):
        if (x, y) in self.joueur_ordinateur.plateau.tirs:
            return  # Case déjà ciblée
            
        touche, coule = self.joueur_ordinateur.plateau.tirer(x, y)
        bouton = self.boutons_ordinateur[x][y]
        
        if touche:
            bouton.configure(bg="red")
            if coule:
                messagebox.showinfo("Touché !", "Navire coulé !")
        else:
            bouton.configure(bg="blue")
        
        if self._verifier_fin_partie():
            messagebox.showinfo("Victoire !", "Vous avez gagné !")
            self.nouvelle_partie()
            return
            
        self._tour_ordinateur()
    
    def _tour_ordinateur(self):
        while True:
            x = random.randint(0, self.TAILLE_GRILLE - 1)
            y = random.randint(0, self.TAILLE_GRILLE - 1)
            if (x, y) not in self.joueur_ordinateur.plateau_adversaire.tirs:
                break
                
        touche, coule = self.joueur_humain.plateau.tirer(x, y)
        bouton = self.boutons_joueur[x][y]
        
        if touche:
            bouton.configure(bg="red")
            if coule:
                messagebox.showinfo("Touché !", "L'ordinateur a coulé un de vos navires !")
        else:
            bouton.configure(bg="blue")
            
        if self._verifier_fin_partie():
            messagebox.showinfo("Défaite", "L'ordinateur a gagné !")
            self.nouvelle_partie()
    
    def _placer_navire(self, x: int, y: int):
        if self.navire_actuel_index >= len(self.joueur_humain.navires_a_placer):
            return
            
        nom_navire, taille = self.joueur_humain.navires_a_placer[self.navire_actuel_index]
        navire = Navire(nom_navire, taille)
        
        # Calcul des positions
        positions = []
        for i in range(taille):
            nouveau_x = x + (i if self.orientation_horizontale else 0)
            nouveau_y = y + (0 if self.orientation_horizontale else i)
            if nouveau_x >= self.TAILLE_GRILLE or nouveau_y >= self.TAILLE_GRILLE:
                messagebox.showerror("Erreur", "Le navire sort de la grille !")
                return
            positions.append((nouveau_x, nouveau_y))
            
        # Ajout des positions au navire
        for pos_x, pos_y in positions:
            navire.ajouter_position(pos_x, pos_y)
            
        # Tentative de placement
        if self.joueur_humain.plateau.ajouter_navire(navire):
            # Coloration des cases
            for pos_x, pos_y in positions:
                self.boutons_joueur[pos_x][pos_y].configure(bg="gray")
            self.navire_actuel_index += 1
            
            # Mise à jour du label pour indiquer le prochain navire à placer
            if self.navire_actuel_index < len(self.joueur_humain.navires_a_placer):
                prochain_navire, taille = self.joueur_humain.navires_a_placer[self.navire_actuel_index]
                self.label_statut.configure(text=f"Placez votre {prochain_navire} ({taille} cases)")
            else:
                self.phase_placement = False
                self.label_statut.configure(text="Phase de jeu - À vous de jouer !")
                self.joueur_ordinateur.placer_navires_aleatoirement()
        else:
            messagebox.showerror("Erreur", "Position invalide !")
    
    def _verifier_fin_partie(self) -> bool:
        if self.joueur_courant == self.joueur_humain:
            return all(navire.est_coule() for navire in self.joueur_ordinateur.plateau.navires)
        else:
            return all(navire.est_coule() for navire in self.joueur_humain.plateau.navires)
    
    def nouvelle_partie(self):
        # Réinitialisation des données
        self.joueur_humain = Joueur("Joueur")
        self.joueur_ordinateur = Joueur("Ordinateur")
        self.joueur_courant = self.joueur_humain
        self.phase_placement = True
        self.navire_actuel_index = 0
        
        # Réinitialisation de l'interface
        for i in range(self.TAILLE_GRILLE):
            for j in range(self.TAILLE_GRILLE):
                self.boutons_joueur[i][j].configure(bg="SystemButtonFace")
                self.boutons_ordinateur[i][j].configure(bg="SystemButtonFace")
        
        self.label_statut.configure(text="Placez votre Porte-avions (5 cases)")
    
    def lancer(self):
        # Bouton pour changer l'orientation des navires
        self.btn_orientation = tk.Button(self.frame_controle, 
        text="Orientation: Verticale", 
        command=self._changer_orientation)
        self.btn_orientation.pack(side=tk.LEFT, padx=10)
        
        # Message initial pour le premier navire
        self.label_statut.configure(text="Placez votre Porte-avions (5 cases)")
        
        self.fenetre.mainloop()
        
    def _changer_orientation(self):
        self.orientation_horizontale = not self.orientation_horizontale
        self.btn_orientation.configure(
            text=f"Orientation: {'Verticale' if self.orientation_horizontale else 'Horizontale'}"
        )

if __name__ == "__main__":
    jeu = BatailleNavale()
    jeu.lancer()