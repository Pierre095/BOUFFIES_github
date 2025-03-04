import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Configuration de la connexion à la base de données
        String url = "jdbc:mysql://localhost:3306/oriente_objet?useSSL=false";
        String user = "root"; // Remplace si nécessaire
        String password = "admin"; // Met ton mot de passe si tu en as un

        // Initialisation de la connexion à la base de données via la classe DAOAcces
        DAOAcces daoAcces = new DAOAcces();

        try {
            // Tester la connexion à la base de données
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connexion réussie à la base de données !");
            conn.close();
        } catch (SQLException e) {
            System.out.println("Erreur de connexion à la base de données !");
            e.printStackTrace();
            return;  // Arrêter si la connexion échoue
        }

        // Menu pour interagir avec la base de données
        Scanner scanner = new Scanner(System.in);
        boolean continuer = true;

        while (continuer) {
            System.out.println("\nChoisissez une action :");
            System.out.println("1. Lister les accès");
            System.out.println("2. Ajouter un accès");
            System.out.println("3. Supprimer un accès");
            System.out.println("4. Mettre à jour le statut d'un accès");
            System.out.println("5. Quitter");
            System.out.print("Votre choix : ");
            int choix = scanner.nextInt();
            scanner.nextLine(); // Consommer le saut de ligne après l'entier

            switch (choix) {
                case 1:
                    // Lister tous les accès
                    System.out.println("Liste des accès :");
                    daoAcces.lister();
                    break;

                case 2:
                    // Ajouter un accès
                    System.out.print("Entrez l'ID : ");
                    int idAjouter = scanner.nextInt();
                    scanner.nextLine(); // Consommer le saut de ligne
                    System.out.print("Entrez le nom : ");
                    String nomAjouter = scanner.nextLine();
                    System.out.print("Entrez le login : ");
                    String loginAjouter = scanner.nextLine();
                    System.out.print("Entrez le statut : ");
                    String statutAjouter = scanner.nextLine();
                    System.out.print("Entrez l'âge : ");
                    int ageAjouter = scanner.nextInt();

                    daoAcces.ajouter(idAjouter, nomAjouter, loginAjouter, statutAjouter, ageAjouter);
                    break;

                case 3:
                    // Supprimer un accès
                    System.out.print("Entrez l'ID de l'accès à supprimer : ");
                    int idSupprimer = scanner.nextInt();
                    daoAcces.supprimer(idSupprimer);
                    break;

                case 4:
                    // Mettre à jour le statut d'un accès
                    System.out.print("Entrez l'ID de l'accès à mettre à jour : ");
                    int idMettreAJour = scanner.nextInt();
                    scanner.nextLine(); // Consommer le saut de ligne
                    System.out.print("Entrez le nouveau statut : ");
                    String nouveauStatut = scanner.nextLine();
                    daoAcces.mettreAJourStatut(idMettreAJour, nouveauStatut);
                    break;

                case 5:
                    // Quitter le programme
                    continuer = false;
                    System.out.println("Au revoir !");
                    break;

                default:
                    System.out.println("Choix invalide !");
                    break;
            }
        }

        // Fermer la connexion
        daoAcces.close();
    }
}
