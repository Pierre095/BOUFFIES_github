def addToEach(n: int, lst: list) -> list:
    return [x + n for x in lst]

def removeDuplicates(lst: list) -> list:
    return list(dict.fromkeys(lst))

# Exemples de test
original_list = [1, 2, 3, 4, 4, 5, 2]
print("Liste originale:", original_list)
print("Après addToEach(10, liste):", addToEach(10, original_list))
print("Après removeDuplicates(liste):", removeDuplicates(original_list))
print("Liste originale inchangée:", original_list)