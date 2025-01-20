% Faits de base - relations familiales
homme(jacques).
homme(marc).
homme(paul).
femme(sophie).
femme(marie).

% Relations parent-enfant
pere(jacques, marc).
pere(marc, paul).
pere(marc, sophie).
mere(marie, paul).
mere(marie, sophie).

% Règle pour définir parent (père ou mère)
parent(X, Y) :- pere(X, Y).
parent(X, Y) :- mere(X, Y).

% Règle pour définir grand-parent
grand_parent(X, Y) :- parent(X, Z), parent(Z, Y).

% Règle pour définir frère/soeur
frere_soeur(X, Y) :- parent(Z, X), parent(Z, Y), X \= Y.

% Règle pour définir oncle/tante
oncle_tante(X, Y) :- parent(Z, Y), frere_soeur(X, Z).

% Manipulation de listes
longueur_liste([], 0).
longueur_liste([_|Queue], N) :- 
    longueur_liste(Queue, N1),
    N is N1 + 1.

% Recherche d'élément dans une liste
membre(X, [X|_]).
membre(X, [_|Queue]) :- membre(X, Queue).

% Test de liste
ma_liste([pierre, marie, paul]).