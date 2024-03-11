"""
Cours "Introduction 1" - Exercice "Billetterie"
"""

# Variables
stations = {
    "1 : Meinohama": 1.5,
    "2 : Muromi": 0.8,
    "3 : Fujisaki": 1.1,
    "4 : Nishijin": 1.2,
    "5 : Tojinmachi": 0.8,
    "6 : Ohorikoen (Ohori Park)": 1.1,
    "7 : Akasaka": 0.8,
    "8 : Tenjin": 0.8,
    "9 : Nakasu-Kawabata": 1.0,
    "10 : Gion": 0.7,
    "11 : Hakata": 1.2,
    "12 : Higashi-Hie": 2.1,
    "13 : Fukuokakuko (Airport)": 0.0,
    
}

stations_names = list(stations.keys())
stations_distances = list(stations.values())
billets = 0
nb_billets_adulte = 0
nb_billets_enfant = 0
has_reduit = False
distance_calc = 0
price_adu = 0
price_enf = 0
total = 0


# Introduction
print("           /////// ")
print("         ///       ")
print("  //////////////   ")
print("      ///          ")
print("///////            ")
print("\nBienvenue sur la billetterie du métro municipal de Fukuoka.")


# Questions à l'utilisateur
print("\n-- Combien souhaitez-vous de billets à tarif plein ?")
nb_billets_adulte = int(input("----- Billets : "))


print("\n-- Souhaitez-vous des billets à tarif réduit ? oui / non")
has_reduit = str(input("----- Réponse : "))
if has_reduit == "non":
    has_reduit = False
else : 
    has_reduit == "oui"
    has_reduit = True
    print("\n-- Combien de billet a tarif réduit ?")
    nb_billets_enfant = int(input("----- Réponse : "))


# Calculs de l'itinéraire   :  
print("\n--- Où voulez-vous aller ?")
for i in stations :
    print(i)
station_dep = int(input("\n- Numéro de Station de départ : "))-1
station_arr = int(input("- Numéro de Station d'Arrivé : "))-1


if (station_dep < station_arr):
    for i in range(station_dep, station_arr):
        distance_calc += stations_distances[i]
else :
    for i in range(station_arr, station_dep):
        distance_calc += stations_distances[i]

print("\n-- Votre voyage se fera de la station " + stations_names[station_dep] +" à la station " + stations_names[station_arr])
print("----- Distance", distance_calc, "km")


# Choix de la bonne zone tarifaire
if (distance_calc <= 3):
    price_adu = 210
    price_enf = 110
    Zone = 1
elif (distance_calc <= 7):
    price_adu = 260
    price_enf = 130
    Zone = 2
elif (distance_calc <= 11):
    price_adu = 300
    price_enf = 150
    Zone = 3
elif (distance_calc <= 15):
    price_adu = 340
    price_enf = 170
    Zone = 4


# Calcul du coût total
billets = nb_billets_adulte + nb_billets_enfant
total = (price_adu * nb_billets_adulte) + (price_enf * nb_billets_enfant)


# Affichage des détails du voyage et du tarif
print("\nVotre trajet se situe dans la Zone tarifaire N°", Zone)
print("-- Vous devez payer : ",total," yen")
print("--- Détail : ")
print("-- Nombre de Billet : ", billets)
print("----- Billet adulte : ",nb_billets_adulte," à ",price_adu, "yen")

if has_reduit == True:
    print("----- Billet tarif réduit : ",nb_billets_enfant," à ",price_enf, "yen")
else :
    print("Vous n'avez pas de billet à tarif réduit")


# Affichage de la voie du train à emprunter
if (station_dep < station_arr):
    print("Veuillez vous dirigez vers la voie 1 dans le sens Meinohama ---> Fukuokakuko (Airport) ")
else :
    print("Veuillez vous dirigez vers la voie 2 dans le sens Fukuokakuko (Airport) ---> Meinohama ")

print("\n---------- Très bon voyage, et à bientôt ----------")

input("----- Appuyez sur entrer pour terminer ")


