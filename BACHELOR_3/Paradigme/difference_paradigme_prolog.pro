/******************************************************************************

                            Online Prolog Compiler.
                Code, Compile, Run and Debug Prolog program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/


% filepath: /c:/Users/bouff/Code/BACHELOR_3/Paradigme/difference_paradigme_prolog.pro

% Base de connaissances des recettes
recette(pizza, [farine, eau, sel, levure, tomate, fromage]).
recette(salade, [laitue, tomate, concombre, vinaigre, huile]).
recette(pates_carbonara, [pates, creme, lardons, fromage, sel, poivre]).
recette(omelette, [oeufs, sel, poivre, fromage]).
recette(sandwich, [pain, beurre, jambon]).

% Règle pour vérifier les ingrédients disponibles
tous_ingredients_disponibles([], _).
tous_ingredients_disponibles([Ingredient|Reste], Disponibles) :-
    member(Ingredient, Disponibles),
    tous_ingredients_disponibles(Reste, Disponibles).

% Règle pour trouver les recettes réalisables
recette_possible(Recette, Disponibles) :-
    recette(Recette, Ingredients),
    tous_ingredients_disponibles(Ingredients, Disponibles).

% Règle pour lister toutes les recettes possibles
lister_recettes_possibles(Disponibles) :-
    recette_possible(Recette, Disponibles),
    write('Vous pouvez faire: '), write(Recette), nl,
    fail.
lister_recettes_possibles(_).

% Règle pour afficher les ingrédients d'une recette
ingredients_recette(Recette) :-
    recette(Recette, Ingredients),
    write('Ingrédients pour '), write(Recette), write(': '),
    write(Ingredients), nl.