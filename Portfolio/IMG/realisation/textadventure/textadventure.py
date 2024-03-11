import time, os, msvcrt
personnage = {
    "PV": 80
}

prenom = ""
age = 0
age_requis = 0
pouvoir_selectione = 0
debile = 0
succes = {

}
succes_tenue = False
succes_combat = False
succes_professeur = False
succes_acquis = 0
nb_combat = 0
calc = 0
calc_1 = 0
calc_2 = 0
calc_3 = 0
calc_4 = 0
calc_5 = 0
essaie = 0
score = 0
erreur = 0


# ********************************************************************************
# FONCTIONS UTILITAIRES
# ********************************************************************************
def generatext(text):
    for character in text:
        print(character, end ="", flush=True)
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(0.02)
    print(f"\n")

def proposer_lieux(mots_cles):
    message = f"│[Lieux : {mots_cles}] "
    # A remplir ici
    print(message)

def proposer_actions(actions):
    message = f"│[Actions : {actions}] "
    # A remplir ici
    print(message)

def bye():
    os.system('cls')
    print("██████╗░██╗░░░██╗███████╗  ██████╗░██╗░░░██╗███████╗  ██╗")
    print("██╔══██╗╚██╗░██╔╝██╔════╝  ██╔══██╗╚██╗░██╔╝██╔════╝  ██║")
    print("██████╦╝░╚████╔╝░█████╗░░  ██████╦╝░╚████╔╝░█████╗░░  ██║")
    print("██╔══██╗░░╚██╔╝░░██╔══╝░░  ██╔══██╗░░╚██╔╝░░██╔══╝░░  ╚═╝")
    print("██████╦╝░░░██║░░░███████╗  ██████╦╝░░░██║░░░███████╗  ██╗")
    print("╚═════╝░░░░╚═╝░░░╚══════╝  ╚═════╝░░░░╚═╝░░░╚══════╝  ╚═╝")
    continuer()
    exit()

def mort():
    os.system('cls')
    print("  ⠀⠀⢀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀")
    print("⠀⠀⣸⣿⡿⠋⠉⠹⣿⡟⠉⠉⠻⣿⣷⡀⠀ ")
    print("⠀⠀⣿⡿⠀⠀⠀⠀⣿⡇⠀⠀⠀ ⠹⣿⡇⠀⠀")
    print("⠀⠀⣿⣇⠀⠀⢀⡼⠛⢳⡄⠀⠀⢀⣿⠇⠀⠀")
    print("⠀⠀⠈⠻⢷⣶⣿⣧⣤⣤⣿⣷⣶⠿⠋⠀⠀⠀")
    print("⠀⣾⣷⡆⠀⣿⡿⢿⡿⣿⢻⣿⡄⠀⣾⣷⡀⠀")
    print("⢾⡿⢿⣿⣶⣽⡋⠘⠋⠛⠘⣻⣴⣾⣿⢿⣿⡆")
    print("⠀⠀⠀⠈⠙⠻⣿⣷⣦⣾⣿⠿⠛⠉⠀⠀⠀⠀")
    print("⠀⠀⠀⢀⣠⣶⣿⡿⠛⠿⣿⣷⣄⡀⠀⠀⠀⠀")
    print("⠾⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠙⠻⢿⣷⣿⡷⠀")
    print("⠀⠹⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⡟⠀")
    print("Tu est MORT ! !")
    continuer()
    exit()

def continuer():
    if msvcrt.kbhit():
        str(input(""))
    str(input("\n'Entrer' pour continuer"))

def title_premier_etage():
    os.system('cls')
    print("██████╗░██████╗░███████╗███╗░░░███╗██╗███████╗██████╗░  ███████╗████████╗░█████╗░░██████╗░███████╗")
    print("██╔══██╗██╔══██╗██╔════╝████╗░████║██║██╔════╝██╔══██╗  ██╔════╝╚══██╔══╝██╔══██╗██╔════╝░██╔════╝")
    print("██████╔╝██████╔╝█████╗░░██╔████╔██║██║█████╗░░██████╔╝  █████╗░░░░░██║░░░███████║██║░░██╗░█████╗░░")
    print("██╔═══╝░██╔══██╗██╔══╝░░██║╚██╔╝██║██║██╔══╝░░██╔══██╗  ██╔══╝░░░░░██║░░░██╔══██║██║░░╚██╗██╔══╝░░")
    print("██║░░░░░██║░░██║███████╗██║░╚═╝░██║██║███████╗██║░░██║  ███████╗░░░██║░░░██║░░██║╚██████╔╝███████╗")
    print("╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝  ╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░╚═════╝░╚══════╝")
    print("==================================================================================================")

def title_seconde_A():
    os.system('cls')
    print("                                                                         ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣶⢾⣿⣳⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("                                                                        ⠀⠀⠀⠀⣤⣴⣶⣾⡟⣿⣽⢳⣯⣿⣾⣽⣯⡟⣿⣶⣤⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("░██████╗███████╗░█████╗░░█████╗░███╗░░██╗██████╗░███████╗  ░█████╗░      ⠐⡾⢿⣟⡿⣯⣟⣷⣻⢷⣯⢿⣞⡷⣯⢷⣯⢿⡽⣯⣟⡿⣾⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀")
    print("██╔════╝██╔════╝██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔════╝  ██╔══██╗      ⣠⠍⡐⠨⠙⠳⢿⡾⣽⣻⣞⡿⣞⡿⣽⣻⣞⣯⣟⡷⣯⣟⡷⣯⣟⡿⣟⣦⣤⣀⠀⠀⠀")
    print("╚█████╗░█████╗░░██║░░╚═╝██║░░██║██╔██╗██║██║░░██║█████╗░░  ███████║      ⠈⢷⣦⣅⡂⠅⡠⢈⠙⠳⢯⢿⣽⣻⣽⣳⣯⢷⣯⣟⡷⣯⣟⡷⠯⠟⠋⠙⠉⠉⡇⠀⠀")
    print("░╚═══██╗██╔══╝░░██║░░██╗██║░░██║██║╚████║██║░░██║██╔══╝░░  ██╔══██║      ⠀⠈⠙⠻⢷⣦⣅⡈⠠⢐⡈⠌⡛⠯⣟⣯⣟⣾⣽⡻⠷⠛⠉⠑⢀⣀⠀⠒⢲⣶⡇⠀⠀")
    print("██████╔╝███████╗╚█████╔╝╚█████╔╝██║░╚███║██████╔╝███████╗  ██║░░██║      ⠀⠀⠀⠀⠀⠈⠙⠻⢷⣦⣄⡡⢂⠵⢢⡉⠏⠁⠀⡀⠅⠂⠍⠀⣐⣠⣵⠷⠊⢻⣷⠀⠀")
    print("╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚══╝╚═════╝░╚══════╝  ╚═╝░░╚═╝      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣷⣦⣀⡀⡐⠀⣀⣤⣤⠶⠞⠛⠉⠉⠀⠀⠀⠘⠻⣷⣄")
    print("                                                                          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⣿⠿⠿⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠇")
    print("====================================================================================================================")

def title_deuxieme_etage():
    os.system('cls')
    print("██████╗░███████╗██╗░░░██╗██╗░░██╗██╗███████╗███╗░░░███╗███████╗  ███████╗████████╗░█████╗░░██████╗░███████╗")
    print("██╔══██╗██╔════╝██║░░░██║╚██╗██╔╝██║██╔════╝████╗░████║██╔════╝  ██╔════╝╚══██╔══╝██╔══██╗██╔════╝░██╔════╝")
    print("██║░░██║█████╗░░██║░░░██║░╚███╔╝░██║█████╗░░██╔████╔██║█████╗░░  █████╗░░░░░██║░░░███████║██║░░██╗░█████╗░░")
    print("██║░░██║██╔══╝░░██║░░░██║░██╔██╗░██║██╔══╝░░██║╚██╔╝██║██╔══╝░░  ██╔══╝░░░░░██║░░░██╔══██║██║░░╚██╗██╔══╝░░")
    print("██████╔╝███████╗╚██████╔╝██╔╝╚██╗██║███████╗██║░╚═╝░██║███████╗  ███████╗░░░██║░░░██║░░██║╚██████╔╝███████╗")
    print("╚═════╝░╚══════╝░╚═════╝░╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░░░░╚═╝╚══════╝  ╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░╚═════╝░╚══════╝")
    print("===========================================================================================================")

def title_cantine():
    os.system('cls')
    print("    ⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                            ⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣤⣴⡦⠶⠶⠶⠶⠛⠛⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                          ⠀⡌⠱⡬⣈⠚⠛⠛⠛⠛⠛⠛⠛⠛⠛⠁⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀                                                         ⠀⠀⠀⠀⠀⠀⠀⢸⠀⢤⠃⠄⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("░█████╗░░█████╗░███╗░░██╗████████╗██╗███╗░░██╗███████╗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⡌⡐⠈⠀⠠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██║████╗░██║██╔════╝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠒⠀⠙⡄⠁⡇⡇⠑⠀⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██║░░╚═╝███████║██╔██╗██║░░░██║░░░██║██╔██╗██║█████╗░░⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠠⡄⡀⢈⠀⠐⠠⣀⢁⢄⠀⠐⠀⠁⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██║░░██╗██╔══██║██║╚████║░░░██║░░░██║██║╚████║██╔══╝░░⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣾⡶⣷⣷⣾⣶⣶⣶⣿⣾⣾⣶⣶⣶⣶⣾⡆⠀⡀⢀⠀⠀⠀⠀⠀")
    print("╚█████╔╝██║░░██║██║░╚███║░░░██║░░░██║██║░╚███║███████╗⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣟⣿⣺⡼⣯⣟⣯⣟⣾⣳⢯⡿⣽⣫⢿⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀")
    print("░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚══════╝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣞⣷⣻⡽⣞⣧⣟⡾⣯⢿⣽⢷⣟⣿⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("                                                      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣞⣳⢿⡽⣾⣝⣯⣟⡿⣽⣻⣾⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                      ⠀⠀⠀⠙⠻⣯⣟⣧⣟⣾⣽⣻⡷⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("===================================================================================================")


def title_salle_combat():
    os.system('cls')
    print("░██████╗░█████╗░██╗░░░░░██╗░░░░░███████╗  ██████╗░███████╗  ░█████╗░░█████╗░███╗░░░███╗██████╗░░█████╗░████████╗")
    print("██╔════╝██╔══██╗██║░░░░░██║░░░░░██╔════╝  ██╔══██╗██╔════╝  ██╔══██╗██╔══██╗████╗░████║██╔══██╗██╔══██╗╚══██╔══╝")
    print("╚█████╗░███████║██║░░░░░██║░░░░░█████╗░░  ██║░░██║█████╗░░  ██║░░╚═╝██║░░██║██╔████╔██║██████╦╝███████║░░░██║░░░")
    print("░╚═══██╗██╔══██║██║░░░░░██║░░░░░██╔══╝░░  ██║░░██║██╔══╝░░  ██║░░██╗██║░░██║██║╚██╔╝██║██╔══██╗██╔══██║░░░██║░░░")
    print("██████╔╝██║░░██║███████╗███████╗███████╗  ██████╔╝███████╗  ╚█████╔╝╚█████╔╝██║░╚═╝░██║██████╦╝██║░░██║░░░██║░░░")
    print("╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝  ╚═════╝░╚══════╝  ░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░")
    print("================================================================================================================")

def title_combat():
    os.system('cls')
    print("                                                                       ⠀⢀⣴⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("                                                             ⠀⢠⠶⣶⣄⠀⢀⣀⣠⣿⠞⣯⢀⣇⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("                                                             ⠀⠈⠓⠳⠿⠍⣉⣳⣠⣼⠟⢿⠿⢧⣦⡈⠑⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("░█████╗░░█████╗░███╗░░░███╗██████╗░░█████╗░████████╗     ⠀⠀⠀⠀⠀⠀⠀⠀     ⠀⠙⢄⠸⣀⣬⣿⠛⣛⠛⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██╔══██╗██╔══██╗████╗░████║██╔══██╗██╔══██╗╚══██╔══╝     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠈⢦⣀⡩⠽⢿⣶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██║░░╚═╝██║░░██║██╔████╔██║██████╦╝███████║░░░██║░░░     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠘⡇⢰⣶⠛⠙⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("██║░░██╗██║░░██║██║╚██╔╝██║██╔══██╗██╔══██║░░░██║░░░     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀⠀⣳⡟⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("╚█████╔╝╚█████╔╝██║░╚═╝░██║██████╦╝██║░░██║░░░██║░░░     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⣾⣯⣄⠀⢀⣞⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⢸⡀⠸⡿⡟⠛⠛⠒⣤⡤⠴⢆⠀⠀⠀⠀⠀")
    print("                                                         ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       ⣧⡀⡇⠈⠁⠒⠚⠛⠓⠢⡈⣆⠀⠀⠀⠀")
    print("                                                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       ⢸⠀⣇⠀⠀⠀⠀⠀⠀⠀ ⠹⠿⠀⠀⠀⠀")
    print("                                                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       ⣀⢾⠁⢹⡀⠀⠀⠀⠀⠀⠀⠀ ⠁⠀⠀⠀")
    print("====================================================================================================")


def textadventure_demon_slayer():

    mannequin_combat = {
        "PV": 50
    }
    Muzan = {
        "PV": 80
    }
    souffle = [
        "1 : Souffle de Flammes",
        "2 : Souffle de l'Eau",
        "3 : Souffle de Tonnerre",
        "4 : Souffle de Vent",
        "5 : Souffle de Pierre",
        "6 : Souffle de la Lune",
        "7 : Souffle du Soleil"
    ]

    plats = [
        "ramen"
        "sandwich"
        "riz"
        "katsudon"
    ]

    plats_stock = {
        "ramen":2,
        "sandwich":2,
        "riz":2,
        "katsudon":2,
        "hamburger":2
    }

    objets_cles = ["smartphone","Katana","combattant"]
    inventaire = {}

    def title():
        os.system('cls')
        print("███╗░░░███╗░█████╗░███╗░░██╗████████╗  ░██████╗░█████╗░░██████╗░██╗██████╗░██╗")
        print("████╗░████║██╔══██╗████╗░██║╚══██╔══╝  ██╔════╝██╔══██╗██╔════╝░██║██╔══██╗██║")
        print("██╔████╔██║██║░░██║██╔██╗██║░░░██║░░░  ╚█████╗░███████║██║░░██╗░██║██████╔╝██║")
        print("██║╚██╔╝██║██║░░██║██║╚████║░░░██║░░░  ░╚═══██╗██╔══██║██║░░╚██╗██║██╔══██╗██║")
        print("██║░╚═╝░██║╚█████╔╝██║░╚███║░░░██║░░░  ██████╔╝██║░░██║╚██████╔╝██║██║░░██║██║")
        print("╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░  ╚═════╝░╚═╝░░╚═╝░╚═════╝░╚═╝╚═╝░░╚═╝╚═╝")
        print("==============================================================================")

    def statut():
        for key, value in personnage.items():
            if not key == "souffle num":
                generatext(f"{key} : {value}")
        continuer()
        title()

    def choix_pouvoir_ds():
        global debile
        if debile == 5:
            title()
            generatext("Bon écoute, je veux bien être gentil mais si tu n'arrive pas à passer l'introduction") 
            generatext("je crois qu'il vaut mieux pour toi que tu retourne jouer aux playmobiles")
            continuer()
            bye()
        # Afficher la liste des pouvoirs (avec leur position) et demander d'en choisir un
        try:
            title()
            generatext(" Les Souffles sont très utile dans cet endroit")
            generatext(" Choisis en un : ")
            for i in souffle:
                print(i)
            if msvcrt.kbhit():
                str(input(""))
            pouvoir_selectione = int(input("souffle numéro : "))

        except ValueError:
            generatext("Choisi un numéro, ça sera beaucoup plus simple pour toi et pour moi :)")
            debile += 1
            continuer()
            choix_pouvoir_ds()
                
                    
        if pouvoir_selectione > 7 or pouvoir_selectione < 1:
            generatext("et bah alors, tu as menti sur ton âge ? normalement on apprend a compter à la maternelle pas au lycée !")
            debile += 1
            continuer()
            proposer_age()


                # Stocker le nom du pouvoir choisi dans le dictionnaire "personnage
            
        personnage["souffle n°"] = souffle[pouvoir_selectione - 1]
        generatext("\ntu viens d'acquérir ton souffle ! BRAVO !!")
        personnage["souffle num"] = pouvoir_selectione
        statut()
        title()
        lieu_hall()

    def proposer_age():
        global debile
        if debile == 5:
            title()
            generatext("Bon écoute, je veux bien être gentil mais si tu n'arrive pas à passer l'introduction") 
            generatext("je crois qu'il vaut mieux pour toi que tu retourne jouer aux playmobiles")
            continuer()
            bye()
        
        try:
            title()
            if msvcrt.kbhit():
                str(input(""))
            generatext("\nQuel âge as-tu ?")
            age = int(input(""))
            age_requis = 15 - age

        except ValueError:
            generatext("Réfléchis un peu, si je te demande 'qu'est-ce que tu as fais hier ?' tu me repond pas 'Oui'")
            time.sleep(0.7)
            generatext("c'est pareil ici, Concentre toi garçon !!")
            debile += 1
            continuer()
            proposer_age()

        if age < 15:
            print(f"Desolé mon grand, revient dans {age_requis} ans, pour nous montrer tes talents")
            continuer()
            proposer_age()

        elif age >= 30:
            generatext("T'es un grand bonhomme.... Un peu trop grand..... ")
            continuer()
            proposer_age()

        else:
            personnage["Age"] = age
            choix_pouvoir_ds()

    def katana_ascii():
        print("                                      ⢀⣄")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠟⠉")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣦⣴⠿⠋⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠻⠿⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⣀⣴⡾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⣀⣤⣶⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⡛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")

    def tengen_ascii():
        print("⠃⠘⢳⠀⠀⢻⣿⡇⠀⠀⠀⠀⠀⢸⡶⢯⣷⠀⠀⠀⢿⣶⠉⢳⢤⣀⣠⡇⣧⡼⣀⡤⠀⣠⡴⠖⠖⠉⢉⣉⣹⠧⠀⠘⣀⡞⠀⣀⣠⠄⠈⠳⣄⠂⠀⠵⣪⠏⡘⠦⡄⠛⠟⠃⢴")
        print("⢆⠈⠙⣆⠀⠀⣿⢷⠀⠀⠀⠀⠀⠀⣧⢀⡟⠀⠀⠀⠀⠉⠉⠚⠿⡧⠼⠷⢋⣉⣴⣾⣿⣿⣿⡷⠀⢸⣿⣿⣿⡟⠢⠾⣾⠃⢠⣧⡦⣶⠀⠀⠘⡆⢸⣾⣏⣴⠁⠀⣹⢿⢁⣀⡴")
        print("⠸⡀⠙⣿⡄⠀⠸⣯⠷⣦⣀⡀⣀⡼⠉⢫⡇⠀⢠⠇⢀⣠⠔⠚⣉⡤⠴⠚⠋⠀⢹⣧⣏⣾⡿⠃⠀⠘⣿⡟⢛⠀⣧⠤⣧⠀⣼⣜⣷⣛⡆⠀⢀⡟⠻⡋⠈⢿⡀⢀⠇⢀⠢⡔⣀")
        print("⠀⢇⠠⠋⣧⠀⡀⠈⠳⢿⣏⠹⡙⣦⣀⣜⣡⠤⣜⣊⣩⠤⠖⠋⠉⠀⠀⠀⠀⢀⣀⠉⠩⢿⣿⣤⣤⣾⣿⡿⡟⠀⠙⢲⡋⠙⡆⢙⠿⣍⡿⠀⡾⠀⠀⢹⣶⣽⢷⠎⢀⠃⢤⢤⢁")
        print("⣦⣘⢠⠀⠘⡦⠥⠤⠆⠀⢉⣑⣓⣷⠿⠒⠚⠉⠉⠑⣄⠀⠀⠀⠀⠀⠀⣀⠀⠘⠛⠲⣤⣾⣿⣿⣿⣿⡏⣿⠧⠤⣶⠼⣇⣸⣷⣏⣠⡏⣠⣾⡁⠀⣠⣬⣟⣣⡜⠀⣌⠊⠘⠺⢬")
        print("⣿⣿⣷⡴⠒⣶⣶⠞⠛⠋⠙⠓⠒⢒⢂⡠⠤⣀⡙⢦⣌⡙⡦⢀⠰⣦⣾⣿⣿⣦⣤⣾⠏⠀⣿⣿⣿⣿⣣⠃⠀⠀⠀⠀⣼⣇⣸⣏⣁⠸⣿⠿⣽⠀⢧⣸⠟⠹⠁⣰⠁⠙⣦⣀⣼")
        print("⣿⣿⣿⣥⣻⣿⠙⣧⠠⢴⣾⡿⠿⠿⠿⣿⣿⣷⣬⡑⠾⠛⠛⠿⠀⠈⢿⣿⡿⠛⣿⠃⠀⠀⢙⣿⣿⠛⠻⢿⣶⣶⣷⡆⢻⣾⢽⣿⣿⢿⣮⣽⣅⣀⣀⠀⠀⠴⠮⠾⣷⢊⡭⠕⡲")
        print("⣿⣿⣿⠟⣿⣁⣿⡏⢧⡀⠀⠛⣄⡀⠀⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠉⠀⢠⣿⠖⠛⢹⣿⠃⠘⣦⡄⠀⠹⠿⠿⣵⣃⣸⣾⢿⣻⠰⣿⣯⢿⣿⣿⣿⣿⣶⣤⣀⡀⠀⠀⠀⠈")
        print("⣿⠟⠁⠀⠙⣿⣏⢇⢸⢷⡄⠀⠈⠑⠦⣌⣻⣿⣿⣿⣭⡿⠦⠀⠀⠀⠀⠀⢠⣿⡏⠀⣶⣾⣿⣦⠀⠉⠁⠀⠀⠀⣠⠿⢿⡿⠃⠀⡿⡆⣿⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⡀")
        print("⠃⠀⠀⠀⠀⠛⣿⣾⡇⣸⣿⡆⠀⠀⠀⠀⠀⠙⠓⠂⠀⠀⠀⠀⠀⠀⡇⠀⠳⡅⠀⠀⢿⣿⣿⠏⠀⠀⠀⠀⠀⢰⡧⣤⣾⠇⠀⢰⠇⡇⣿⣿⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        print("⠀⠀⠀⠀⣀⣴⣿⡿⣷⣄⢙⣾⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠘⣆⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠈⢹⣿⠿⢶⡄⢸⢸⠃⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        print("⢀⣠⣶⣿⣿⣿⣛⣇⡘⣿⡆⡶⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⢻⡀⢀⣠⠼⠀⠀⠀⠀⣰⡿⠀⠀⠀⠀⠀⣾⣿⢴⣟⣧⣟⣸⢰⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿")
        print("⣿⣿⣿⣿⣿⣿⣿⣵⡔⢛⣿⣦⣿⣼⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠸⠗⠋⠀⠀⢀⣠⣴⠞⠉⠀⠀⠀⠀⢀⡞⡹⠈⠛⢻⣇⡈⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠁⠀⠀⢿")
        print("⣿⣿⣿⣿⣿⣿⣿⣿⠀⣈⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠒⠢⣄⣀⡀⠀⠀⢀⡤⠚⣉⡼⠃⠀⠀⠀⠀⠀⣠⣾⠁⡇⠀⠀⣼⣯⣧⣼⠛⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠄⠘")
        print("⣿⣿⣿⣿⣿⣿⣿⣿⠟⠻⣿⣿⣿⣿⣿⣿⣿⠙⢦⣀⠀⠀⠀⠀⠉⠛⠿⠯⣥⢴⣞⡁⠀⠀⠀⠀⠀⢀⡴⠁⢸⠀⡇⢀⣼⡟⢁⣾⣏⠀⣸⢿⣿⢼⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀")
        print("⣿⣿⣿⣿⣿⣿⣿⣿⣁⣴⢿⣿⣿⣿⣿⣿⣿⡆⢀⢹⣷⣤⡀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⢸⠀⡷⣻⠏⢠⣿⣿⣿⣿⢤⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀")

    # ********************************************************************************
    # INTRODUCTION
    # ********************************************************************************

    def consigne():
        print("Appuie sur entrer pour lance le jeu")
        continuer()
        os.system('cls')       
        print("\n                                                           ⠀⠀⠀⠀⠀⢀⣀⠄⠒⠒⠒⠒⠲⣶⡶⠀                   ")
        print("⠀                                                          ⠀⠀⠀⣴⣿⣻⡚⠲⠦⢤⡄⣀⢶⡯⡀⠀                     ")
        print("⠀                                                         ⠀⠀⣰⢿⣿⡿⠁⠀⣴⣜⣧⡟⠈⡇⢳⠀⡔⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╗░░█████╗░███╗░░██╗░░░░░██╗░█████╗░██╗░░░██╗██████╗░⠀⢀⣀⣏⡎⢀⠀⡆⠀⠻⡻⣏⠑⣄⡇⢾⢜⡴⢣⣲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██╔══██╗██╔══██╗████╗░██║░░░░░██║██╔══██╗██║░░░██║██╔══██╗⠀⠸⣿⠘⠂⠛⢹⠳⡇⣼⣱⢿⢆⠈⢱⣀⣘⣣⣷⣋⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╦╝██║░░██║██╔██╗██║░░░░░██║██║░░██║██║░░░██║██████╔╝⠀⠀⣿⢶⡢⢤⣿⣀⡈⣽⡿⠋⢸⡀⡞⠁⣈⣱⠤⠞⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██╔══██╗██║░░██║██║╚████║██╗░░██║██║░░██║██║░░░██║██╔══██╗⣤⡶⠞⡆⢿⣦⠶⢫⠟⠛⠀⡠⢊⡴⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╦╝╚█████╔╝██║░╚███║╚█████╔╝╚█████╔╝╚██████╔╝██║░░██║⢿⠀⢀⣧⠀⣀⠴⠋⠀⡠⣪⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("╚═════╝░░╚════╝░╚═╝░░╚══╝░╚════╝░░╚════╝░░╚═════╝░╚═╝░░╚═╝⣏⣤⣾⣯⣿⢷⣄⣲⠯⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀") 
        print("                                                          ⣿⢻⡹⣿⡿⣪⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("                                                          ⣿⣮⣧⣽⠷⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n")
        generatext("Bonjour, avant de pouvoir jouer à ce jeu, je vais te donner quelques consignes pour que tu ne soit pas totalement perdu\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Le but du jeu est de finir le jeu ...\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Logique\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Plus serieusement, le but du jeu est de te balader dans le temple afin de rassembler TOUS les succès, pour les montrer à ton professeur\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Il y en a que trois...")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("ça devrait aller.")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Pour te deplacer de pièce en pièce, tu auras des choix")
        generatext("Il y a des actions possibles également selon les pièces où tu te trouve")
        generatext("la principal est 'decouvrir' elle permet d'en savoir plus sur l'endroit où tu es")
        generatext("la fonction 'quitter' sert à quitter la pièce dans laquelle tu te trouve")
        generatext("et enfin la fonction 'statut' permet de voir toutes les informations te concernant")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Voilà pour les consignes. Si tu est prêt pour y aller, lance toi dans l'aventure !!")
        continuer()
        intro()

    def intro():
        global age
        title()
        generatext("|| Bienvenue au MONT SAGIRI ! ||")
        print("===============================")
        str(input("'Entrer' pour continuer"))
        title()
        generatext("Commençons par créer ton personnage.")

        # Demander un âge et écrire cette information dans le dictionnaire "personnage"
        generatext("Ton prénom : ")
        prenom = str(input(""))
        if msvcrt.kbhit():
            str(input(""))
        personnage["Prenom"] = prenom
        title()
        proposer_age()

    # ********************************************************************************
    # LIEUX
    # ********************************************************************************

    def lieu_hall():
        title()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu es dans le hall d'entrée du temple.")
        generatext("Tu peux choisir où tu veut aller, visite pour trouver d'autres pièces cachées .")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["P : premier etage, D : deuxieme etage "])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            # Gérer ici toutes les réponses possibles, qu'elles soient correctes ou non
            if reponse == "quitter" or reponse == "1":
                title()
                generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                bye()
            elif reponse == "decouvrir" or reponse == "2":
                title()
                generatext("\nVoici le Hall d'entrée du temple du Mont Sagiri, tu peut le visiter en entrant par exemple : 'premier etage' et tu vera ce qui t'y attend ")
                generatext("amuse toi bien !")
                continuer()
            elif reponse == "premier etage" or reponse == "P":
                title()
                lieu_premier_etage()
            elif reponse == "deuxieme etage" or reponse == "D":
                title()
                lieu_deuxieme_etage()
            elif reponse == "statut" or reponse == "3":
                title()
                statut()

    def lieu_premier_etage():
        title_premier_etage()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu est dans le couloir du 1er étage.")
        
        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["H : le hall" , "D : deuxieme etage" , "A : classe A"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")


            if reponse == "decouvrir" or reponse == "2":
                title_premier_etage()
                generatext("\nVoici le premier étage, tu pourra y retrouver la classe A, je t'invite à y aller tu rencontrera un des pillier qui sera ton professeur !")
                if succes_tenue == False:
                    generatext("Il a une surprise pour toi ...")
                continuer()
            elif reponse == "le hall" or reponse =="quitter" or reponse == "H" or reponse == "1":
                title_premier_etage()
                lieu_hall()
            elif reponse == "deuxieme etage" or reponse == "D":
                title_premier_etage()
                lieu_deuxieme_etage()
            elif reponse == "classe A" or reponse == "A":
                title_premier_etage()
                lieu_classe_A()
            elif reponse == "statut" or reponse == "3":
                title_premier_etage()
                statut()

    def lieu_classe_A():
        global succes_tenue
        global succes
        global succes_acquis
        while True:
            title_seconde_A()
            generatext("Tu es dans la classe A.")

            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : pillier, 4 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["P : premier etage"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            if reponse == "pillier" or reponse == "3":
                title_seconde_A()
                print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
                tengen_ascii()
                if succes_combat == True and succes_professeur == False:
                    epreuve_professeur()
                elif succes_tenue == True and succes_acquis !=2:
                    generatext("Tengen : ")
                    generatext("Je suis Tengen pillier du Son, ton professeur de mathematique")
                    generatext("Maintenant que tu as eu ton succes tu peux me montrer tous les succes que tu possède")
                    while True:
                        print("┌────────────────────────────────────────")
                        proposer_actions(["1 : quitter, 2 : montrer, 3 : statut"])  # À compléter
                        # À compléter
                        proposer_lieux(["P : premier etage"])
                        if msvcrt.kbhit():
                            str(input(""))
                        reponse = input("├─> ")
                        print("└────────────────────────────────────────")

                        if reponse =="montrer" or reponse == "2":
                            if succes_professeur == True:
                                title_seconde_A()
                                
                                generatext("Voici tous les succes que tu possède : ")
                                for key, value in succes.items():
                                    print(f"{key} : {value}")
                                print("┌────────────────────────────────────────")
                                time.sleep(1)
                                generatext("...")
                                time.sleep(0.7)
                                generatext("BRAVO !! Tu viens de récupérer tous les succes du jeu !")
                                proposer_actions(["1 : quitter le jeu ; 2 : continuer dans le temple"]) 
                                if msvcrt.kbhit():
                                    str(input(""))
                                reponse = input("├─> ")
                                print("└────────────────────────────────────────")

                                if reponse == "1" or reponse =="quitter":
                                    title_seconde_A()
                                    generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                                    bye()
                                if reponse == "2" or reponse =="continuer":
                                    title_seconde_A()
                                    lieu_classe_A()
                                    
                            else :
                                title_seconde_A()
                                generatext("Voici tous les succes que tu possède : ")
                                for key, value in succes.items():
                                    print(f"{key} : {value}")
                        elif reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                            title_seconde_A()
                            lieu_premier_etage()
                        elif reponse == "statut" or reponse == "3":
                            title_seconde_A()
                            statut()

                elif personnage["souffle num"] == 1 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, tu pourra devoilé ta flammes sans retenue !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] ==2 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, la source d'eau ne sera jamais plus tranquille que dans cette lame...")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] == 3 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, assez resistant pour prendre 1 000 000 000 de Volt d'un coup !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] == 4 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, cette lame pourra te faire voler comme un colibri !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] == 5 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, dur comme la pierre, mais leger comme une feuille de papier !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] == 6 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, à la pleine lune elle s'illuminera !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                elif personnage["souffle num"] == 7 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    katana_ascii()
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ton Katana, assez resistant pour supporter 1 000 000 C°, cette lame est parfaite pour toi !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : UNE LAME A HAUTEUR DE TES CAPACITÉS !")
                    print("└────────────────────────────────────────")                    
                    continuer()
                    title_seconde_A()
                succes_tenue = True
                succes_acquis += 1
                succes["Katana"] = "1"
                generatext("Si tu retourne voir ton professeur il pourra te montrer quelquechose")
                continuer()
                
            elif reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                title_seconde_A()
                lieu_premier_etage()
            elif reponse == "decouvrir" or reponse == "2":
                generatext("Ici, tu est dans la classe A, c'est ici que les pilliers ont appris a devenir plus fort !")
                continuer()
            elif reponse == "statut" or reponse == "4":
                title_seconde_A()
                statut()

    def epreuve_professeur():
        global calc 
        global calc_1 
        global calc_2 
        global calc_3 
        global calc_4 
        global calc_5 
        global essaie
        global score
        global erreur
        global succes_professeur
        global succes_acquis
        if succes_combat == True:
                    title_seconde_A()
                    tengen_ascii()
                    print("┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
                    generatext("Tengen :")
                    generatext("Tu viens de récuperer deux succès pour pouvoir obtenir le troisième,")
                    generatext("tu devra repondre à 5 de ces calculs de mathématique")
                    generatext("affronte moi si tu sens prêt")
                    generatext("Mais ATTENTION !! Pour chaques mauvaise réponse tu perdra 5 point de vie, arriver à 0, ce sera fini...")
                    generatext("Mais seconde condition pour réussir cet épreuve, il faudra répondre correctement à 4 calculs, sinon tu recommence.")
                    generatext("A toi de jouer !")
                    print("└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
                    while True:
                        print("┌────────────────────────────────────────")
                        proposer_actions(["1 : quitter, 2 : affronter, 3 : statut"])  
                        proposer_lieux(["P : premier etage"])
                        if msvcrt.kbhit():
                            str(input(""))  
                        reponse = input("├─> ")
                        print("└────────────────────────────────────────")
                        essaie += 1
                        
                        if reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                            title_seconde_A()
                            lieu_premier_etage()
                        elif reponse == "statut" or reponse == "3":
                            title_seconde_A()
                            statut()
                        elif reponse == "affronter" or reponse == "2":
                            title_seconde_A()

                        try:
                            generatext("Voici le premier calcul : ")
                            generatext("7 + 54 + 18 x 2")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_1 = 7 + 54 + 18 * 2
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_1 = 7 + 54 + 18 * 2
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_1:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_1:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                                    
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le second calcul : ")
                            generatext("3 - 9 + 14 x 4")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_2 = 3 - 9 + 14 * 4
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_2 = 3 - 9 + 14 * 4
                            if msvcrt.kbhit():
                                str(input(""))  
                            calc = int(input("réponse├─> "))
                        if calc == calc_2:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_2:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(calc_2)
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le troisieme calcul : ")
                            generatext("(7 + 14) x 3 - 17")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))                        
                            calc_3 = (7 + 14) * 3 - 17
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_3 = (7 + 14) * 3 - 17
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_3:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_3:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le quatrieme calcul : ")
                            generatext("(18 + (13 x 4)) / 2")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_4 = (18 + (13 * 4)) / 2
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_4 = (18 + (13 * 4)) / 2
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_4:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_4:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le dernier calcul : ")
                            generatext("40 + 1 + 70 + 40 + 5 + 300 + 10 + 200")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_5 = 40 + 1 + 70 + 40 + 5 + 300 + 10 + 200
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_5 = 40 + 1 + 70 + 40 + 5 + 300 + 10 + 200
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_5:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                            continuer()
                        elif calc != calc_5:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        if score < 4:
                            title()
                            generatext(f"Désolé mais tu n'aura pas ton badge du viens de faire ", erreur," erreur")
                            erreur = 0
                            score = 0
                        elif score == 4 or score == 5:
                            title()
                            print(f"Nombre d'essaie : ", essaie)
                            print(f"Nombre d'erreur : ", erreur)
                            print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                            generatext("BRAVO ! tu viens de repondre correctement aux question de ton professeur")
                            generatext("\nTu viens d'avoir un succès")
                            generatext("Succès : L'ELEVE A DÉPASSÉ LE MAITRE")
                            print("└──────────────────────────────────────────────────────────────────────────────────────────")
                            succes["Capacité Intellectuelle"] = "1"
                            succes_acquis += 1
                            succes_professeur = True
                            print("Tu viens de récuperer tous les succès, retourne voir ton professeur !")
                            continuer()
                            lieu_premier_etage()
                            #faire un mode apocalypse avec Muzan qui revient + un fruit plus fort

    def lieu_deuxieme_etage():
        title_deuxieme_etage()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu es dans le couloir du 2eme étage.")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["H : le hall , P : premier etage , S : salle d'entrainement, C : cantine"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")
            if reponse =="le hall" or reponse == "H":
                title_deuxieme_etage()
                lieu_hall()
            elif reponse == "premier etage" or reponse == "quitter" or reponse == "1" or reponse == "P":
                lieu_premier_etage()
            elif reponse == "statut" or reponse == "3":
                title_deuxieme_etage()
                statut()
            elif reponse == "salle d'entrainement" or reponse == "S":
                title_deuxieme_etage()
                simulateur()
            elif reponse =="cantine" or reponse == "C":
                title_deuxieme_etage()
                manger()
            elif reponse == "decouvrir" or reponse == "2":
                title_deuxieme_etage()
                generatext("Voici le couloir du deuxieme etage, tu pourra y retrouver le salle d'entrainement, ou encore la cantine")
                generatext("Je te laisse aller là où tu veux")
                continuer()

    def muzan():
        global nb_combat
        global succes
        global succes_acquis
        global succes_combat
        while True:
            if Muzan["PV"]<=0:
                print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                generatext("BRAVO ! tu viens de battre Muzan le chef des 12 Lunes démoniaques !")
                generatext("\nTu viens d'avoir un succès")
                generatext("Succès : UN HERO NE MEURT JAMAIS")
                print("└──────────────────────────────────────────────────────────────────────────────────────────")
                generatext("Maintenant vas voir ton professeur il a une dernière epreuve pour toi")
                succes["Technique de combat"] = "1"
                succes_combat = True
                succes_acquis += 1
                nb_combat += 1
                continuer()
                lieu_deuxieme_etage()
            if personnage["PV"]<= 0:
                title()
                print("\n░█████╗░██╗░░██╗░█████╗░██╗░░██╗░█████╗░  ██╗██╗")
                print("██╔══██╗██║░░██║██╔══██╗██║░░██║██╔══██╗  ██║██║")
                print("███████║███████║███████║███████║███████║  ██║██║")
                print("██╔══██║██╔══██║██╔══██║██╔══██║██╔══██║  ╚═╝╚═╝")
                print("██║░░██║██║░░██║██║░░██║██║░░██║██║░░██║  ██╗██╗")
                print("╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝  ╚═╝╚═╝")
                generatext("Tu es trop faible, revient dans quelques temps et peut être que tu pourra me battre ")
                generatext("TU AS PERDU !!")
                generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                continuer()
                title()
                mort()
            print("┌──────────────────────────────────────────────────────────────────────────────────────────")
            proposer_actions(["1 : attaquer, 2 : fuire, 3 : statut"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└──────────────────────────────────────────────────────────────────────────────────────────")

            if personnage["PV"] > 0 and reponse == "attaquer" or reponse == "1":
                title()
                if Muzan["PV"] > 0 :
                    Muzan["PV"] = Muzan["PV"]-15
                    personnage["PV"] = personnage["PV"]-15
                    print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                    print(f"Personnage : ",personnage["PV"]," points de vie")
                    print(f"Muzan :",Muzan["PV"]," points de vie")
                    print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
            elif reponse == "fuire" or reponse == "2":
                title()
                generatext("Tu a fuit le combat ce n'est pas une mauvaise chose")
                generatext("Va à la cantine pour te ressourcer")
                simulateur()
            elif reponse == "statut" or reponse == "3":
                title()
                statut()

    def simulateur():
        while True :
            title_salle_combat()
            print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
            generatext("Te voilà dans la salle d'entrainement")
            global nb_combat

            if succes_acquis < 1:
                generatext("Tu n'a pas encore acquis un succes très important pour entrer dans cette salle")
                generatext("revient quand tu l'aura trouver, petit indice il est au premier etage")
                continuer()
                title_salle_combat()
                lieu_deuxieme_etage()

            elif succes_acquis >= 1 and True:
                print("┌────────────────────────────────────────")
                proposer_actions(["1 : quitter, 2 : combattre, 3 : statut"])
                proposer_lieux(["D : deuxieme etage, C : cantine"])
                if msvcrt.kbhit():
                    str(input(""))
                reponse = input("├─> ")
                print("└────────────────────────────────────────")
                if reponse == "quitter" or reponse == "1":
                    title_salle_combat()
                    lieu_deuxieme_etage()
                elif reponse == "statut" or reponse == "3":
                    title_salle_combat()
                    statut()
                elif reponse == "deuxieme etage" or reponse == "D":
                    title_salle_combat()
                    lieu_deuxieme_etage()
                elif reponse == "cantine" or reponse == "C":
                    title_salle_combat()
                    manger()
                elif reponse =="combattre" or reponse == "2" and nb_combat == 2:
                    title_salle_combat()
                    print("████████╗███████╗  ██╗░░░██╗░█████╗░██╗██╗░░░░░░█████╗░  ██╗██╗")
                    print("╚══██╔══╝██╔════╝  ██║░░░██║██╔══██╗██║██║░░░░░██╔══██╗  ██║██║")
                    print("░░░██║░░░█████╗░░  ╚██╗░██╔╝██║░░██║██║██║░░░░░███████║  ██║██║")
                    print("░░░██║░░░██╔══╝░░  ░╚████╔╝░██║░░██║██║██║░░░░░██╔══██║  ╚═╝╚═╝")
                    print("░░░██║░░░███████╗  ░░╚██╔╝░░╚█████╔╝██║███████╗██║░░██║  ██╗██╗")
                    print("░░░╚═╝░░░╚══════╝  ░░░╚═╝░░░░╚════╝░╚═╝╚══════╝╚═╝░░╚═╝  ╚═╝╚═╝")
                    generatext("Tu es face a Muzan, c'est le chef des 12 lunes demoniaques, il a plus de points de vie et fait plus de dégâts")
                    generatext("Tu peux faire statut pour voir tes PV restant")
                    generatext("s'ils sont trop faible va te ressourcer à la cantine")
                    continuer()
                    title_salle_combat()
                    muzan()
                    

                if reponse == "combattre" or reponse == "2" and nb_combat != 2:
                    title_combat()
                    generatext("Te voilà dans un combat contre un mannequin d'entrainement")
                    generatext("Essaye de le battre")

                while True:
                    if personnage["PV"] <= 0:
                        title_combat()
                        generatext("TU viens de mourrir contre le mannequin de combat")
                        generatext("Recommence le jeu pour le réaffronter.")
                        generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                        mort()
                        
                    elif mannequin_combat["PV"]<=0:
                        title_combat()
                        print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                        generatext("BRAVO ! tu viens de battre le mannequin de combat")
                        generatext("Tu peux le refaire autant de fois que tu veux")
                        if nb_combat <= 2 :
                            generatext("Une des 12 lunes demoniaques approche, entraine toi encore un peu !")
                            print("└──────────────────────────────────────────────────────────────────────────────────────────")
                        mannequin_combat["PV"] = 50
                        nb_combat += 1
                        continuer()
                        simulateur()

                    

                    print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                    proposer_actions(["1 : attaquer", "2 : fuire", "3 : statut"])
                    if msvcrt.kbhit():
                        str(input(""))
                    reponse = input("├─> ")
                    print("└──────────────────────────────────────────────────────────────────────────────────────────")

                    if personnage["PV"] > 0 and reponse == "attaquer" or reponse == "1" and nb_combat != 2:

                        if mannequin_combat["PV"] > 0 :
                            title_combat()
                            mannequin_combat["PV"] = mannequin_combat["PV"]-15
                            personnage["PV"] = personnage["PV"]-10
                            print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                            print(f"Personnage : ",personnage["PV"]," points de vie")
                            print(f"mannequin combat :",mannequin_combat["PV"]," points de vie")
                            print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                    elif reponse == "fuire" or reponse == "2":
                        title_combat()
                        generatext("Tu a fuit le combat ce n'est pas une mauvaise chose")
                        generatext("Va à la cantine pour te ressourcer")
                        simulateur()
                    elif reponse == "statut" or reponse == "3":
                        title_combat()
                        statut()

    def manger():
        title_cantine()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu te trouve dans la cantine")
        generatext("Ici tu peux manger des plats, mais ils sont en quantité limités")
        generatext("il te permettent de régénérer tes points de vie")
        generatext("entre le mot 'manger'")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : manger, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["D : deuxieme etage, S : simulateur de catastrophe"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            if reponse =="manger" or reponse == "2":
                title_cantine()
                for key, value in plats_stock.items():
                    print(f"Voilà quelques bon petit plat qu'il te reste : {key} : {value}")
                if msvcrt.kbhit():
                    str(input(""))
                generatext("\nChoisi ton plat : ")
                plat_choisi = str(input(""))

                if not (plat_choisi in plats_stock):
                    plat_choisi = str(input(""))

                elif plats_stock[plat_choisi] <= 0 :
                    generatext("Désolé ce plat n'est plus en stock")

                else:
                    personnage ["PV"] += 15
                    plats_stock[plat_choisi] -= 1
                    os.system('cls')
                    title_cantine()
                    for key, value in plats_stock.items():
                        print(f"Voilà quelques bon petit plat qu'il te reste : {key} : {value}")
                    print("\npoints de vie : ",personnage["PV"] - 15, "+ 15 = ", personnage["PV"])

            elif reponse == "statut" or reponse == "3":
                title_cantine()
                statut()

            elif reponse == "quitter" or reponse == "deuxieme etage" or reponse == "1" or reponse == "D":
                title_cantine()
                lieu_deuxieme_etage()

            elif reponse == "salle de combat" or reponse == "simulateur" or reponse == "S":
                title_cantine()
                simulateur()

    # ********************************************************************************
    # EXECUTION
    # ********************************************************************************
    # Pour lancer le jeu, on appelle la fonction d'introduction
    if __name__ == "__main__":
        os.system('cls')
        consigne()

def textadventure_mha():

    robot_combat = {
        "PV": 50
    }
    Crematorium = {
        "PV": 80
    }
    alter = [
        "1 : One For all (extrêmement puissant)",
        "2 : All for one (tous les pouvoirs)",
        "3 : Erasure (efface les pouvoirs)",
        "4 : Perméabilité (Traverse les surfaces)",
        "5 : Dark Shadow (Bête Noire)",
        "6 : Mi-chaud mi-froid (Eau ET Feu)",
        "7 : Engine (Rapidité)"
    ]

    plats = [
        "ramen"
        "sandwich"
        "riz Gluant"
        "katsudon"
    ]

    plats_stock = {
        "ramen":2,
        "sandwich":2,
        "riz":2,
        "katsudon":2,
        "hamburger":2
    }

    objets_cles = ["smartphone","Tenue de Super Héro","combattant"]
    inventaire = {}

    def title():
        os.system('cls')
        print("██╗░░░██╗██╗░░░██╗███████╗██╗")
        print("╚██╗░██╔╝██║░░░██║██╔════╝██║")
        print("░╚████╔╝░██║░░░██║█████╗░░██║")
        print("░░╚██╔╝░░██║░░░██║██╔══╝░░██║")
        print("░░░██║░░░╚██████╔╝███████╗██║")
        print("░░░╚═╝░░░░╚═════╝░╚══════╝╚═╝")
        print("=============================")

    def statut():
        for key, value in personnage.items():
            if not key == "alter num":
                generatext(f"{key} : {value}")
        continuer()
        title()

    def choix_pouvoir_mha():
        global debile
        if debile == 5:
            title()
            generatext("Bon écoute, je veux bien être gentil mais si tu n'arrive pas à passer l'introduction") 
            generatext("je crois qu'il vaut mieux pour toi que tu retourne jouer aux playmobiles")
            continuer()
            bye()
        # Afficher la liste des pouvoirs (avec leur position) et demander d'en choisir un
        try:
            title()
            generatext(" Les Alter sont très utile dans cet endroit, normalement on nait avec mais tu est un EXCEPTION !!")
            generatext(" Choisis en un : ")
            for i in alter:
                print(i)
            if msvcrt.kbhit():
                str(input(""))
            pouvoir_selectione = int(input("alter numéro : "))

        except ValueError:
            generatext("Choisi un numéro, ça sera beaucoup plus simple pour toi et pour moi :)")
            debile += 1
            continuer()
            choix_pouvoir_mha()
                    
        if pouvoir_selectione > 7 or pouvoir_selectione < 1:
            generatext("et bah alors, tu as menti sur ton âge ? normalement on apprend a compter à la maternelle pas au lycée !")
            debile += 1
            continuer()
            proposer_age()

                # Stocker le nom du pouvoir choisi dans le dictionnaire "personnage
            
        personnage["alter n°"] = alter[pouvoir_selectione - 1]
        generatext("tu viens d'acquérir ton alter ! BRAVO !!")
        personnage["alter num"] = pouvoir_selectione
        statut()
        title()
        lieu_hall()

    def proposer_age():
        global debile
        if debile == 5:
            title()
            generatext("Bon écoute, je veux bien être gentil mais si tu n'arrive pas à passer l'introduction") 
            generatext("je crois qu'il vaut mieux pour toi que tu retourne jouer aux playmobiles")
            continuer()
            bye()
        try:
            title()
            if msvcrt.kbhit():
                str(input(""))
            generatext("\nQuel âge as-tu ?")
            age = int(input(""))
            age_requis = 15 - age

        except ValueError:
            generatext("Réfléchis un peu, si je te demande 'qu'est-ce que tu as fais hier ?' tu me repond pas 'Oui'")
            time.sleep(0.7)
            generatext("c'est pareil ici, Concentre toi garçon !!")
            debile += 1
            continuer()
            proposer_age()

        if age < 15:
            print(f"Desolé mon grand, revient dans {age_requis} ans, pour nous montrer tes talents")
            continuer()
            proposer_age()

        elif age >= 30:
            generatext("T'es un grand bonhomme.... Un peu trop grand..... ")
            continuer()
            proposer_age()

        else:
            personnage["Age"] = age
            choix_pouvoir_mha()

    def ectoplasm_ascii():
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⣿⣷⣶⣤⣀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠄⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣦⡀⠄⠀⠀⠀")
        print("⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣻⣿⣧⠀⠀⠀⠀")
        print("⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀")
        print("⠀⠀⣀⢹⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀")
        print("⠀⠈⠀⢸⣿⣿⣷⣙⣻⢟⣭⣭⢻⣋⣁⣾⣿⡷⡓⢰⠀⠀")
        print("⠀⢰⠀⠈⡟⡻⣿⣿⢣⣿⣿⣿⣷⠻⠿⣛⠅⡎⡀⠸⠀⠀")
        print("⠀⠈⠢⣁⠣⢿⡮⠑⠙⠻⢻⠛⠛⢫⠩⡿⢸⢂⠔⠁⠀⠀")
        print("⠀⠀⠀⠀⢱⣌⠟⢶⣄⢠⢀⠀⢀⡶⠞⣣⣾⠃⠠⠀⠀⠀")
        print("⠀⠀⠀⢀⢿⣧⣿⣦⠘⢻⣿⣿⠛⢱⣮⣿⢿⣷⡀⠀⠀⠀")
        print("⠀⠀⠀⣠⣿⣿⣿⡿⣷⡂⣀⣀⣤⢿⣿⣿⣾⣷⣗⡈⠀⠀")
        print("⠂⢀⣴⣿⣟⣵⣿⢱⣿⢿⣿⣿⣿⣾⡟⣿⣏⢿⣿⣎⠆⢠")
        print("⠐⠀⡙⠻⣾⡿⣣⣿⡿⣾⣿⣻⣿⡻⣿⣞⣿⡎⠟⠉⠀⠀")
        print("⠀⠀⠀⠀⠈⡉⠙⠻⢵⣿⣿⣻⣿⡷⠽⠋⠁⠀⠀⠀⠀⠀")

    # ********************************************************************************
    # INTRODUCTION
    # ********************************************************************************

    def consigne():
        print("Appuie sur entrer pour lance le jeu")
        continuer()
        os.system('cls')
        print("\n                                                           ⠀⠀⠀⠀⠀⢀⣀⠄⠒⠒⠒⠒⠲⣶⡶⠀                   ")
        print("⠀                                                          ⠀⠀⠀⣴⣿⣻⡚⠲⠦⢤⡄⣀⢶⡯⡀⠀                     ")
        print("⠀                                                         ⠀⠀⣰⢿⣿⡿⠁⠀⣴⣜⣧⡟⠈⡇⢳⠀⡔⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╗░░█████╗░███╗░░██╗░░░░░██╗░█████╗░██╗░░░██╗██████╗░⠀⢀⣀⣏⡎⢀⠀⡆⠀⠻⡻⣏⠑⣄⡇⢾⢜⡴⢣⣲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██╔══██╗██╔══██╗████╗░██║░░░░░██║██╔══██╗██║░░░██║██╔══██╗⠀⠸⣿⠘⠂⠛⢹⠳⡇⣼⣱⢿⢆⠈⢱⣀⣘⣣⣷⣋⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╦╝██║░░██║██╔██╗██║░░░░░██║██║░░██║██║░░░██║██████╔╝⠀⠀⣿⢶⡢⢤⣿⣀⡈⣽⡿⠋⢸⡀⡞⠁⣈⣱⠤⠞⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██╔══██╗██║░░██║██║╚████║██╗░░██║██║░░██║██║░░░██║██╔══██╗⣤⡶⠞⡆⢿⣦⠶⢫⠟⠛⠀⡠⢊⡴⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("██████╦╝╚█████╔╝██║░╚███║╚█████╔╝╚█████╔╝╚██████╔╝██║░░██║⢿⠀⢀⣧⠀⣀⠴⠋⠀⡠⣪⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("╚═════╝░░╚════╝░╚═╝░░╚══╝░╚════╝░░╚════╝░░╚═════╝░╚═╝░░╚═╝⣏⣤⣾⣯⣿⢷⣄⣲⠯⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀") 
        print("                                                          ⣿⢻⡹⣿⡿⣪⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("                                                          ⣿⣮⣧⣽⠷⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n")
        generatext("Bonjour, avant de pouvoir jouer à ce jeu, je vais te donner quelques consignes pour que tu ne sois pas totalement perdu\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Le but du jeu est de finir le jeu ...\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Logique\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Plus serieusement, le but du jeu est de te balader dans le lycée afin de rassembler TOUS les succès, pour les montrer à ton professeur\n")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Il y en a que trois...")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("ça devrait aller.")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Pour te deplacer de pièce en pièce, tu auras des choix")
        generatext("Il y a des actions possibles également selon les pièces où tu te trouve")
        generatext("la principale est 'decouvrir' elle permet d'en savoir plus sur l'endroit où tu es")
        generatext("la fonction 'quitter' sert à quitter la pièce dans laquelle tu te trouve")
        generatext("et enfin la fonction 'statut' permet de voir toutes les informations te concernant")
        if msvcrt.kbhit():
            time.sleep(0)
        else:
            time.sleep(1)
        generatext("Voilà pour les consignes. Si tu est prêt pour y aller, lance toi dans l'aventure !!")
        continuer()
        intro()

    def intro():

        title()
        generatext("|| Bienvenue au lycée Yuei ! ||")
        print("===============================")
        str(input("'Entrer' pour continuer"))
        title()
        generatext("Commençons par créer ton personnage.")

        # Demander un âge et écrire cette information dans le dictionnaire "personnage"
        generatext("Ton prénom : ")
        if msvcrt.kbhit():
            str(input(""))
        prenom = str(input(""))
        personnage["Prenom"] = prenom
        title()
        proposer_age()

    # ********************************************************************************
    # LIEUX
    # ********************************************************************************

    def lieu_hall():
        title()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu es dans le hall d'entrée de l'école.")
        generatext("Tu peux choisir où tu veut aller, visite pour trouver d'autres pièces cachées .")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["P : premier etage, D : deuxieme etage "])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            # Gérer ici toutes les réponses possibles, qu'elles soient correctes ou non
            if reponse == "quitter" or reponse == "1":
                title()
                generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                bye()
            elif reponse == "decouvrir" or reponse == "2":
                title()
                generatext("\nVoici le Hall d'entrée du lycée de Super-Héro 'YUEI', tu peut le visiter en entrant par exemple : 'premier etage' et tu vera ce qui t'y attend ")
                generatext("amuse toi bien !")
                continuer()
            elif reponse == "premier etage" or reponse == "P":
                title()
                lieu_premier_etage()
            elif reponse == "deuxieme etage" or reponse == "D":
                title()
                lieu_deuxieme_etage()
            elif reponse == "statut" or reponse == "3":
                title()
                statut()

    def lieu_premier_etage():
        title_premier_etage()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu est dans le couloir du 1er étage.")
        
        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["H : le hall, D : deuxième etage, A : seconde A"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")


            if reponse == "decouvrir" or reponse == "2":
                title()
                generatext("\nVoici le premier étage, tu pourra y retrouver la classe de la Seconde A, je t'invite à y aller tu rencontrera ton professeur !")
                if succes_tenue == False:
                    generatext("Il a une surprise pour toi ...")
                continuer()
            elif reponse == "le hall" or reponse =="quitter" or reponse == "H" or reponse == "1":
                title()
                lieu_hall()
            elif reponse == "deuxieme etage" or reponse == "D":
                title()
                lieu_deuxieme_etage()
            elif reponse == "seconde A" or reponse == "A":
                title()
                lieu_seconde_A()
            elif reponse == "statut" or reponse == "3":
                title()
                statut()

    def lieu_seconde_A():
        global succes_tenue
        global succes
        global succes_acquis
        while True:
            title_seconde_A()
            generatext("Tu es dans la classe de la seconde A.")

            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : professeur, 4 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["P : premier etage"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            if reponse == "professeur" or reponse == "3":
                title_seconde_A()
                print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
                ectoplasm_ascii()

                if succes_combat == True and succes_professeur == False:
                    epreuve_professeur()

                elif succes_tenue == True and succes_acquis !=2:
                    generatext("Ectoplasm : ")
                    generatext("Je suis ectoplasm le professeur de mathematique")
                    generatext("Maintenant que tu as eu ton succes tu peux me montrer tous les succes que tu possède")

                    while True:
                        print("┌────────────────────────────────────────")
                        proposer_actions(["1 : quitter, 2 : montrer, 3 : statut"])  # À compléter
                        # À compléter
                        proposer_lieux(["P : premier etage"])
                        if msvcrt.kbhit():
                            str(input(""))
                        reponse = input("├─> ")
                        print("└────────────────────────────────────────")

                        if reponse =="montrer" or reponse == "2":
                            if succes_professeur == True:
                                title_seconde_A()
                                generatext("Voici tous les succes que tu possède : ")
                                for key, value in succes.items():
                                    print(f"{key} : {value}")
                                print("┌────────────────────────────────────────")
                                time.sleep(1)
                                generatext("...")
                                time.sleep(0.7)
                                generatext("BRAVO !! Tu viens de récupérer tous les succes du jeu !")
                                proposer_actions(["1 : quitter le jeu ; 2 : continuer dans le temple"]) 
                                reponse = input("├─> ")
                                print("└────────────────────────────────────────")

                                if reponse == "1" or reponse =="quitter" :
                                    title_seconde_A()
                                    generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                                    bye()
                                if reponse == "2" or reponse =="continuer":
                                    title_seconde_A()
                                    lieu_seconde_A()

                            else :
                                title_seconde_A()
                                generatext("Voici tous les succes que tu possède : ")
                                for key, value in succes.items():
                                    print(f"{key} : {value}")
                        elif reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                            title_seconde_A()
                            lieu_premier_etage()
                        elif reponse == "statut" or reponse == "3":
                            title_seconde_A()
                            statut()


                elif personnage["alter num"] == 1 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, elle va pouvoir supporter tout la puissance que contient le One For All !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] ==2 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, elle est très flexible pour s'adapter à tous les alter que tu possède !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] == 3 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, Des lunettes pour pouvoir préserver ta vu au maximun !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] == 4 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, elle permet de traverser la matière comme toi, ça t'évitera de te retrouver tous nu...")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] == 5 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, avec ça ta bête noir aura plus d'obscurité qu'il n'en faut !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] == 6 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, elle fait aussi bien été comme hiver, sympa pour ton alter !")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                elif personnage["alter num"] == 7 and succes_tenue == False:
                    print(f"Professeur : Bonjour",personnage["Prenom"],"Regarde ça")
                    print("┌────────────────────────────────────────")
                    generatext("Voilà ta tenue, elle evitera de se déchirer quand tu prend les virages à 200 km/h")
                    generatext("\nTu viens d'avoir un succès")
                    generatext("Succès : SAPÉ COMME JAMAIS")
                    print("└────────────────────────────────────────")
                    continuer()
                    title_seconde_A()
                succes_tenue = True
                succes_acquis += 1
                succes["Tenue de Super Héro"] = "1"
                generatext("Si tu retourne voir ton professeur il pourra te montrer quelquechose")
                continuer()
            elif reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                title_seconde_A()
                lieu_premier_etage()
            elif reponse == "decouvrir" or reponse == "2":
                generatext("Ici, tu est dans la classe de la seconde A, c'est ici que la plupart des grands héros de nos jours on appris ce metier")
                continuer()
            elif reponse == "statut" or reponse == "4":
                title_seconde_A()
                statut()

    def epreuve_professeur():
        global calc 
        global calc_1 
        global calc_2 
        global calc_3 
        global calc_4 
        global calc_5 
        global essaie
        global score
        global erreur
        global succes_professeur
        global succes_acquis
        if succes_combat == True:
                    title_seconde_A()
                    ectoplasm_ascii()
                    print("┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
                    generatext("Ectoplasme :")
                    generatext("Tu viens de récuperer deux succès pour pouvoir obtenir le troisième,")
                    generatext("tu devra repondre à 5 de ces calculs de mathématique")
                    generatext("affronte moi si tu sens prêt")
                    generatext("Mais ATTENTION !! Pour chaques mauvaise réponse tu perdra 5 point de vie, arriver à 0, ce sera fini...")
                    generatext("Mais seconde condition pour réussir cet épreuve, il faudra répondre correctement à 4 calculs, sinon tu recommence.")
                    generatext("A toi de jouer !")
                    print("└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────")
                    while True:
                        print("┌────────────────────────────────────────")
                        proposer_actions(["1 : quitter, 2 : affronter, 3 : statut"])  
                        proposer_lieux(["P : premier etage"])
                        if msvcrt.kbhit():
                            str(input(""))
                        reponse = input("├─> ")
                        print("└────────────────────────────────────────")
                        essaie += 1
                        
                        if reponse == "quitter" or reponse == "premier etage" or reponse == "1" or reponse == "P":
                            title_seconde_A()
                            lieu_premier_etage()
                        elif reponse == "statut" or reponse == "3":
                            title_seconde_A()
                            statut()
                        elif reponse == "affronter" or reponse == "2":
                            title_seconde_A()

                        try:
                            generatext("Voici le premier calcul : ")
                            generatext("7 + 54 + 18 x 2")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_1 = 7 + 54 + 18 * 2
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_1 = 7 + 54 + 18 * 2
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_1:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_1:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                                    
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le second calcul : ")
                            generatext("3 - 9 + 14 x 4")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_2 = 3 - 9 + 14 * 4
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_2 = 3 - 9 + 14 * 4
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_2:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_2:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(calc_2)
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le troisieme calcul : ")
                            generatext("(7 + 14) x 3 - 17")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))                        
                            calc_3 = (7 + 14) * 3 - 17
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_3 = (7 + 14) * 3 - 17
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_3:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_3:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le quatrieme calcul : ")
                            generatext("(18 + (13 x 4)) / 2")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_4 = (18 + (13 * 4)) / 2
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_4 = (18 + (13 * 4)) / 2
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_4:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                        elif calc != calc_4:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        try:
                            generatext("Voici le dernier calcul : ")
                            generatext("40 + 1 + 70 + 40 + 5 + 300 + 10 + 200")
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                            calc_5 = 40 + 1 + 70 + 40 + 5 + 300 + 10 + 200
                        except ValueError:
                            generatext("Tu as sûrement miss clic réessaye")
                            calc_5 = 40 + 1 + 70 + 40 + 5 + 300 + 10 + 200
                            if msvcrt.kbhit():
                                str(input(""))
                            calc = int(input("réponse├─> "))
                        if calc == calc_5:
                            title_seconde_A()
                            generatext("C'est la bonne réponse")
                            score += 1
                            continuer()
                        elif calc != calc_5:
                            title_seconde_A()
                            generatext("Ce n'est pas la bonne réponse")
                            print(f"erreur : ", erreur, " + 1")
                            erreur += 1
                            personnage["PV"] -= 5
                            print(f"points de vie : ", personnage["PV"]+5,"- 5")
                        if personnage["PV"]<= 0:
                            mort()

                        if score < 4:
                            title()
                            generatext(f"Désolé mais tu n'aura pas ton badge du viens de faire ", erreur," erreur")
                            erreur = 0
                            score = 0
                        elif score == 4 or score == 5:
                            title()
                            print(f"Nombre d'essaie : ", essaie)
                            print(f"Nombre d'erreur : ", erreur)
                            print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                            generatext("BRAVO ! tu viens de repondre correctement aux question de ton professeur")
                            generatext("\nTu viens d'avoir un succès")
                            generatext("Succès : L'ELEVE A DÉPASSÉ LE MAITRE")
                            print("└──────────────────────────────────────────────────────────────────────────────────────────")
                            succes["Capacité Intellectuelle"] = "1"
                            succes_acquis += 1
                            succes_professeur = True
                            print("Tu viens de récuperer tous les succès, retourne voir ton professeur !")
                            continuer()
                            lieu_premier_etage()
                            #faire un mode apocalypse avec crematorium qui revient + un fruit plus fort

    def lieu_deuxieme_etage():
        title_deuxieme_etage()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu es dans le couloir du 2eme étage.")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : decouvrir, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["H : le hall , P : premier etage , S : simulateur de catastrophe, C : cantine"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")
            if reponse =="le hall":
                title_deuxieme_etage()
                lieu_hall()
            elif reponse == "premier etage" or reponse == "quitter" or reponse == "1" or reponse == "P":
                lieu_premier_etage()
            elif reponse == "statut" or reponse == "3":
                title_deuxieme_etage()
                statut()
            elif reponse == "simulateur de catastrophe" or reponse == "simulateur" or reponse == "S":
                title_deuxieme_etage()
                simulateur()
            elif reponse =="cantine" or reponse == "C":
                title_deuxieme_etage()
                manger()
            elif reponse == "decouvrir" or reponse == "2":
                title_deuxieme_etage()
                generatext("Voici le couloir du deuxieme etage, tu pourra y retrouver le simulateur de catastrophe, ou encore la cantine")
                generatext("Je te laisse aller là où tu veux")
                continuer()

    def crematorium():
        global nb_combat
        global succes
        global succes_acquis
        global succes_combat
        while True:
            if Crematorium["PV"]<=0:
                print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                generatext("BRAVO ! tu viens de battre ton tout premier super-vilain")
                generatext("\nTu viens d'avoir un succès")
                generatext("Succès : UN HERO NE MEURT JAMAIS")
                print("└──────────────────────────────────────────────────────────────────────────────────────────")
                generatext("Maintenant vas voir ton professeur il a une dernière epreuve pour toi")
                succes["Technique de combat"] = "1"
                succes_combat = True
                succes_acquis += 1
                nb_combat += 1
                continuer()
                lieu_deuxieme_etage()
            if personnage["PV"]<= 0:
                title()
                print("\n░█████╗░██╗░░██╗░█████╗░██╗░░██╗░█████╗░  ██╗██╗")
                print("██╔══██╗██║░░██║██╔══██╗██║░░██║██╔══██╗  ██║██║")
                print("███████║███████║███████║███████║███████║  ██║██║")
                print("██╔══██║██╔══██║██╔══██║██╔══██║██╔══██║  ╚═╝╚═╝")
                print("██║░░██║██║░░██║██║░░██║██║░░██║██║░░██║  ██╗██╗")
                print("╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝  ╚═╝╚═╝")
                generatext("Tu es trop faible, revient dans quelques temps et peut être que tu pourra me battre ")
                generatext("TU AS PERDU !!")
                generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                continuer()
                title()
                mort()
            print("┌──────────────────────────────────────────────────────────────────────────────────────────")
            proposer_actions(["1 : attaquer, 2 : fuire, 3 : statut"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└──────────────────────────────────────────────────────────────────────────────────────────")

            if personnage["PV"] > 0 and reponse == "attaquer" or reponse == "1":
                title()
                if Crematorium["PV"] > 0 :
                    Crematorium["PV"] = Crematorium["PV"]-15
                    personnage["PV"] = personnage["PV"]-15
                    print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                    print(f"Personnage : ",personnage["PV"]," points de vie")
                    print(f"Crematorium :",Crematorium["PV"]," points de vie")
                    print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
            elif reponse == "fuire" or reponse == "2":
                title()
                generatext("Tu a fuit le combat ce n'est pas une mauvaise chose")
                generatext("Va à la cantine pour te ressourcer")
                simulateur()
            elif reponse == "statut" or reponse == "3":
                title()
                statut()

    def simulateur():
        while True :
            title_salle_combat()
            print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
            generatext("Te voilà dans le simulateur de catastrophe")
            global nb_combat

            if succes_acquis < 1:
                generatext("Tu n'a pas encore acquis un succes très important pour entrer dans cette salle")
                generatext("revient quand tu l'aura trouver, petit indice il est au premier etage")
                continuer()
                title_salle_combat()
                lieu_deuxieme_etage()

            elif succes_acquis >= 1 and True:
                print("┌────────────────────────────────────────")
                proposer_actions(["1 : quitter, 2 : combattre, 3 : statut"])
                proposer_lieux(["D : deuxieme etage, C : cantine"])
                if msvcrt.kbhit():
                    str(input(""))
                reponse = input("├─> ")
                print("└────────────────────────────────────────")
                if reponse == "quitter" or reponse == "1":
                    title_salle_combat()
                    lieu_deuxieme_etage()
                elif reponse == "statut" or reponse == "3":
                    title_salle_combat()
                    statut()
                elif reponse == "deuxieme etage" or reponse == "D":
                    title_salle_combat()
                    lieu_deuxieme_etage()
                elif reponse == "cantine" or reponse == "C":
                    title_salle_combat()
                    manger()
                elif reponse =="combattre" or reponse == "2" and nb_combat == 2:
                    title_salle_combat()
                    print("████████╗███████╗  ██╗░░░██╗░█████╗░██╗██╗░░░░░░█████╗░")
                    print("╚══██╔══╝██╔════╝  ██║░░░██║██╔══██╗██║██║░░░░░██╔══██╗")
                    print("░░░██║░░░█████╗░░  ╚██╗░██╔╝██║░░██║██║██║░░░░░███████║")
                    print("░░░██║░░░██╔══╝░░  ░╚████╔╝░██║░░██║██║██║░░░░░██╔══██║")
                    print("░░░██║░░░███████╗  ░░╚██╔╝░░╚█████╔╝██║███████╗██║░░██║")
                    print("░░░╚═╝░░░╚══════╝  ░░░╚═╝░░░░╚════╝░╚═╝╚══════╝╚═╝░░╚═╝")
                    generatext("Tu es face a Crematorium, c'est un super-vilain, il a plus de points de vie et fait plus de dégâts")
                    generatext("Tu peux faire statut pour voir tes PV restant")
                    generatext("s'ils sont trop faible va te ressourcer à la cantine")
                    continuer()
                    title_salle_combat()
                    crematorium()

                if reponse == "combattre" and nb_combat != 2 or reponse == "2":
                    title_combat()
                    generatext("Te voilà dans un combat contre un robot d'entrainement")
                    generatext("Essaye de le battre")

                while True:
                    if personnage["PV"] <= 0:
                        title_combat()
                        generatext("TU viens de mourrir contre le robot de combat")
                        generatext("Recommence le jeu pour le réaffronter.")
                        generatext("Salut l'ami, heureux de t'avoir vu ici !!")
                        mort()
                        
                    elif robot_combat["PV"]<=0:
                        title_combat()
                        print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                        generatext("BRAVO ! tu viens de battre le robot de combat")
                        generatext("Tu peux le refaire autant de fois que tu veux")
                        if nb_combat <= 2 :
                            generatext("Un super-vilain approche, entraine toi encore un peu !")
                            print("└──────────────────────────────────────────────────────────────────────────────────────────")
                        robot_combat["PV"] = 50
                        nb_combat += 1
                        continuer()
                        simulateur()

                    

                    print("┌──────────────────────────────────────────────────────────────────────────────────────────")
                    proposer_actions(["1 : attaquer, 2 : fuire, 3 : statut"])
                    if msvcrt.kbhit():
                        str(input(""))
                    reponse = input("├─> ")
                    print("└──────────────────────────────────────────────────────────────────────────────────────────")

                    if personnage["PV"] > 0 and reponse == "attaquer" and nb_combat != 2 or reponse == "1":

                        if robot_combat["PV"] > 0 :
                            title_combat()
                            robot_combat["PV"] = robot_combat["PV"]-15
                            personnage["PV"] = personnage["PV"]-10
                            print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                            print(f"Personnage : ",personnage["PV"]," points de vie")
                            print(f"robot combat :",robot_combat["PV"]," points de vie")
                            print("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
                    elif reponse == "fuire" or reponse == "2":
                        title_combat()
                        generatext("Tu a fuit le combat ce n'est pas une mauvaise chose")
                        generatext("Va à la cantine pour te ressourcer")
                        robot_combat["PV"] = 50
                        simulateur()
                    elif reponse == "statut" or reponse == "3":
                        title_combat()
                        statut()

    def manger():
        title_cantine()
        print("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
        generatext("Tu te trouve dans la cantine")
        generatext("Ici tu peux manger des plats, mais ils sont en quantité limités")
        generatext("il te permettent de régénérer tes points de vie")
        generatext("entre le mot 'manger'")

        while True:
            print("┌────────────────────────────────────────")
            proposer_actions(["1 : quitter, 2 : manger, 3 : statut"])  # À compléter
            # À compléter
            proposer_lieux(["D : deuxieme etage, S : simulateur de catastrophe"])
            if msvcrt.kbhit():
                str(input(""))
            reponse = input("├─> ")
            print("└────────────────────────────────────────")

            if reponse =="manger" or reponse == "2":
                title_cantine()
                for key, value in plats_stock.items():
                    print(f"Voilà quelques bon petit plat qu'il te reste : {key} : {value}")
                if msvcrt.kbhit():
                    str(input(""))
                generatext("\nChoisi ton plat : ")
                plat_choisi = str(input(""))
                if not (plat_choisi in plats_stock):
                    plat_choisi = str(input(""))
                elif plats_stock[plat_choisi] <= 0 :
                    generatext("Désolé ce plat n'est plus en stock")
                else:
                    personnage ["PV"] += 15
                    plats_stock[plat_choisi] -= 1
                    os.system('cls')
                    title_cantine()
                    for key, value in plats_stock.items():
                        print(f"Voilà quelques bon petit plat qu'il te reste : {key} : {value}")
                    print("\npoints de vie : ",personnage["PV"] - 15, "+ 15 = ", personnage["PV"])
            elif reponse == "statut" or reponse == "3":
                title_cantine()
                statut()
            elif reponse == "quitter" or reponse == "deuxieme etage" or reponse == "1" or reponse == "D":
                title_cantine()
                lieu_deuxieme_etage()
            elif reponse == "simulateur de catastrophe" or reponse == "simulateur" or reponse == "S":
                title_cantine()
                simulateur()

    # ********************************************************************************
    # EXECUTION
    # ********************************************************************************

    # Pour lancer le jeu, on appelle la fonction d'introduction
    if __name__ == "__main__":
        os.system('cls')
        consigne()

os.system('cls')
while True:
    print("░█████╗░██╗░░██╗░█████╗░██╗██╗░░██╗  ██████╗░██╗░░░██╗  ████████╗██╗░░██╗███████╗███╗░░░███╗███████╗")
    print("██╔══██╗██║░░██║██╔══██╗██║╚██╗██╔╝  ██╔══██╗██║░░░██║  ╚══██╔══╝██║░░██║██╔════╝████╗░████║██╔════╝")
    print("██║░░╚═╝███████║██║░░██║██║░╚███╔╝░  ██║░░██║██║░░░██║  ░░░██║░░░███████║█████╗░░██╔████╔██║█████╗░░")
    print("██║░░██╗██╔══██║██║░░██║██║░██╔██╗░  ██║░░██║██║░░░██║  ░░░██║░░░██╔══██║██╔══╝░░██║╚██╔╝██║██╔══╝░░")
    print("╚█████╔╝██║░░██║╚█████╔╝██║██╔╝╚██╗  ██████╔╝╚██████╔╝  ░░░██║░░░██║░░██║███████╗██║░╚═╝░██║███████╗")
    print("░╚════╝░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝  ╚═════╝░░╚═════╝░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚══════╝")
    print("┌────────────────────────────────────────")
    print("Dans quel theme souhaite-tu jouer ?")
    print("1 : My Hero Academia | 2 : Demon Slayer")
    reponse = input("├─> ")
    print("└────────────────────────────────────────")

    if reponse == "1":
        textadventure_mha()
    if reponse == "2":
        textadventure_demon_slayer()
