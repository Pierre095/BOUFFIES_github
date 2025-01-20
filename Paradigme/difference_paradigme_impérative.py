# Version Impérative

# Définition des recettes
recettes = {
    'Pizza': ['farine', 'eau', 'sel', 'levure', 'tomate', 'fromage'],
    'Salade': ['laitue', 'tomate', 'concombre', 'vinaigre', 'huile'],
    'Pates Carbonara': ['pates', 'creme', 'lardons', 'fromage', 'sel', 'poivre'],
    'Omelette': ['oeufs', 'sel', 'poivre', 'fromage'],
    'Sandwich': ['pain', 'beurre', 'jambon']
}

def trouver_recettes_possibles(ingredients_disponibles):
    recettes_possibles = []
    
    for nom_recette, ingredients_necessaires in recettes.items():
        peut_faire = True
        for ingredient in ingredients_necessaires:
            if ingredient not in ingredients_disponibles:
                peut_faire = False
                break
        
        if peut_faire:
            recettes_possibles.append(nom_recette)
    
    return recettes_possibles

# Test
ingredients_test = ['sel', 'poivre', 'oeufs', 'fromage']
resultats = trouver_recettes_possibles(ingredients_test)
print(f"Avec les ingrédients {ingredients_test}, vous pouvez faire :")
for recette in resultats:
    print(f"- {recette}")