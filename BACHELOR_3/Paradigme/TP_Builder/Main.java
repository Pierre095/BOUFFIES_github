public class Main {
    public static void main(String[] args) {
        CommandeCafe cafeNoir = new CommandeCafe.ConstructeurCommande("Café Noir").construire();
        CommandeCafe cafeLaitSucre = new CommandeCafe.ConstructeurCommande("Café").definirLait("Lait entier").definirSucre(2).construire();
        CommandeCafe cafeGourmand = new CommandeCafe.ConstructeurCommande("Café").definirLait("Lait d'amande").definirSucre(1).ajouterOptions("Chantilly, Sirop caramel").construire();
        
        cafeNoir.afficherCommande();
        cafeLaitSucre.afficherCommande();
        cafeGourmand.afficherCommande();
    }
}
