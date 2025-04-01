public class Main {
    public static void main(String[] args) {
        Boisson monCafe = new Cafe();
        monCafe = new Lait(monCafe);
        monCafe = new Sucre(monCafe);
        monCafe = new Caramel(monCafe);
        
        System.out.println("Description: " + monCafe.description());
        System.out.println("Coût: " + monCafe.cout() + "€");
    }
}
