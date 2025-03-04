import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

// Classe DAOAcces pour gérer les accès à la base de données
public class DAOAcces {
    private static final String URL = "jdbc:mysql://localhost:3306/oriente_objet?useSSL=false";
    private static final String USER = "root";
    private static final String PASSWORD = "admin"; // Remplace par ton mot de passe si nécessaire

    private Connection conn;

    // Constructeur qui initialise la connexion
    public DAOAcces() {
        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Fermer la connexion
    public void close() {
        try {
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Lister les entrées de la table
    public void lister() {
        String selectSQL = "SELECT * FROM Acces";
        try (Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(selectSQL)) {
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Nom: " + rs.getString("nom") +
                        ", Login: " + rs.getString("login") + ", Statut: " + rs.getString("statut") +
                        ", Age: " + rs.getInt("age"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Ajouter un accès dans la table
    public void ajouter(int id, String nom, String login, String statut, int age) {
        String insertSQL = "INSERT INTO Acces (id, nom, login, statut, age) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
            pstmt.setInt(1, id);
            pstmt.setString(2, nom);
            pstmt.setString(3, login);
            pstmt.setString(4, statut);
            pstmt.setInt(5, age);
            pstmt.executeUpdate();
            System.out.println("Accès ajouté !");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Supprimer un accès en fonction de l'ID
    public void supprimer(int id) {
        String deleteSQL = "DELETE FROM Acces WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(deleteSQL)) {
            pstmt.setInt(1, id);
            pstmt.executeUpdate();
            System.out.println("Accès supprimé !");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Mettre à jour le statut d'un utilisateur
    public void mettreAJourStatut(int id, String nouveauStatut) {
        String updateSQL = "UPDATE Acces SET statut = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {
            pstmt.setString(1, nouveauStatut);
            pstmt.setInt(2, id);
            pstmt.executeUpdate();
            System.out.println("Statut mis à jour !");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
