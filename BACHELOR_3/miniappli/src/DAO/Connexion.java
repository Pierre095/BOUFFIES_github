package DAO;

public class Connexion {
    public static boolean verifierLogin(String login, String password) {
        // Simulation de la BDD
        return "admin".equals(login) && "admin".equals(password);
    }
}
