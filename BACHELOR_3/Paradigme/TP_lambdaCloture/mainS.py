# Exercice 1: Expressions Lambda
# 1.1: Lambda pour carré
carre = lambda x: x**2

# 1.2: Mapping avec lambda
nombres = [1, 2, 3, 4, 5]
carres = list(map(carre, nombres))

# 1.3: Lambda pour somme
somme = lambda a, b: a + b

# 1.4: Réduction avec lambda
from functools import reduce
somme_totale = reduce(somme, nombres)

# Exercice 2: Clôtures
def create_multiplier(n):
    return lambda x: x * n

# 2.2: Création des fonctions
double = create_multiplier(2)
triple = create_multiplier(3)

# Exercice 3: Application Pratique
mots = ["apple", "banana", "abricot", "pear", "ananas", "kiwi"]

# 3.2: Filtrer les mots commençant par 'a'
mots_a = list(filter(lambda x: x.startswith('a'), mots))

# 3.3: Clôture pour compter les mots
def create_length_counter(length):
    def counter(words):
        return len([w for w in words if len(w) > length])
    return counter

count_long_words = create_length_counter(5)

# Exercice 5: Composition de fonctions
def compose(f, g):
    return lambda x: f(g(x))

# Exemple de composition
f = lambda x: x * 2
g = lambda x: x + 3
h = compose(f, g)

# Exercice 6: FilterMap
def filterMap(filter_fn, map_fn, lst):
    return list(map(map_fn, filter(filter_fn, lst)))

# Exercice 7: Memoization
def memoize(func):
    cache = {}
    def memoized(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return memoized

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Exercice 8: Application pratique
def calculateDiscount(products, discount_func):
    discounted_prices = map(discount_func, products)
    return reduce(lambda x, y: x + y, discounted_prices)

discount_20 = lambda x: x * 0.8