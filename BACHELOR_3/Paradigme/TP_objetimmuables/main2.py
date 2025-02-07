from dataclasses import dataclass
from typing import List
import asyncio
import random

@dataclass(frozen=True)  # Rend l'objet immuable
class Personne:
    nom: str
    age: int

def anniversaire(personnes: List[Personne]) -> List[Personne]:
    return [Personne(nom=p.nom, age=p.age + 1) for p in personnes]

async def getRandomNumber() -> int:
    await asyncio.sleep(1)
    return random.randint(1, 100)

async def main():
    # Création d'une liste de personnes
    personnes = [
        Personne(nom="Alice", age=25),
        Personne(nom="Bob", age=30)
    ]
    
    # Démonstration de l'anniversaire
    personnes_apres_anniversaire = anniversaire(personnes)
    print("Avant anniversaire:", personnes)
    print("Après anniversaire:", personnes_apres_anniversaire)
    
    # Génération de nombres aléatoires avec des promesses
    nombre1, nombre2 = await asyncio.gather(
        getRandomNumber(), 
        getRandomNumber()
    )
    print(f"Nombres aléatoires : {nombre1}, {nombre2}")

# Exécution du programme asynchrone
if __name__ == "__main__":
    asyncio.run(main())