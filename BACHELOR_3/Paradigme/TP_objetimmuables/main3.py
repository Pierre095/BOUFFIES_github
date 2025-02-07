from dataclasses import dataclass
from typing import List, Optional

@dataclass(frozen=True)
class Article:
    nom: str
    prix: float
    quantite: int

@dataclass(frozen=True)
class Commande:
    articles: List[tuple[Article, int]]

@dataclass(frozen=True)
class Promotion:
    nom: str
    condition_min: float
    reduction: float

class GestionInventaire:
    def __init__(self, inventaire: List[Article] = None):
        self._inventaire = inventaire or []

    def ajouter_article(self, article: Article) -> 'GestionInventaire':
        return GestionInventaire(self._inventaire + [article])

    def mettre_a_jour_stock(self, nom_article: str, nouvelle_quantite: int) -> 'GestionInventaire':
        return GestionInventaire([
            Article(a.nom, a.prix, nouvelle_quantite) if a.nom == nom_article else a 
            for a in self._inventaire
        ])

    def supprimer_article(self, nom_article: str) -> 'GestionInventaire':
        return GestionInventaire([a for a in self._inventaire if a.nom != nom_article])

    def calculer_montant_commande(self, commande: Commande) -> float:
        return sum(article.prix * quantite for article, quantite in commande.articles)

    def appliquer_promotions(self, commande: Commande, promotions: List[Promotion]) -> float:
        montant_total = self.calculer_montant_commande(commande)
        
        promotion_applicable = max(
            (promo for promo in promotions if montant_total >= promo.condition_min),
            key=lambda p: p.reduction,
            default=None
        )
        
        return montant_total * (1 - (promotion_applicable.reduction if promotion_applicable else 0))

    def traiter_commandes(self, commandes: List[Commande]) -> 'GestionInventaire':
        nouvel_inventaire = self._inventaire.copy()
        
        for commande in commandes:
            for article, quantite in commande.articles:
                index = next((i for i, a in enumerate(nouvel_inventaire) 
                if a.nom == article.nom), None)
                
                if index is not None:
                    nouvel_inventaire[index] = Article(
                        nouvel_inventaire[index].nom, 
                        nouvel_inventaire[index].prix, 
                        nouvel_inventaire[index].quantite - quantite
                    )
        
        return GestionInventaire(nouvel_inventaire)

# Exemple d'utilisation
def main():
    # Création d'articles
    livre = Article("Livre", 20.0, 100)
    stylo = Article("Stylo", 5.0, 200)
    
    # Initialisation de l'inventaire
    gestion = GestionInventaire([livre, stylo])
    
    # Ajout d'un nouvel article
    gestion = gestion.ajouter_article(Article("Cahier", 10.0, 50))
    
    # Création d'une commande
    commande = Commande([(livre, 2), (stylo, 3)])
    
    # Définition de promotions
    promotions = [
        Promotion("Remise 10%", 50.0, 0.1),
        Promotion("Remise 20%", 100.0, 0.2)
    ]
    
    # Calcul du montant avec promotions
    montant_final = gestion.appliquer_promotions(commande, promotions)
    print(f"Montant final de la commande : {montant_final}")
    
    # Traitement de la commande (mise à jour des stocks)
    gestion = gestion.traiter_commandes([commande])

if __name__ == "__main__":
    main()