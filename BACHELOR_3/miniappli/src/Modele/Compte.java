package Modele;

public class Compte {
    private String login;
    private String password;

    public Compte(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() { return login; }
    public String getPassword() { return password; }
}
