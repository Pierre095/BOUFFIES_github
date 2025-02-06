/**
 * Classe représentant un personnage du côté lumineux de la Force.
 */
public class Force extends Personnage {
    private String sabreCouleur;

    public Force(String nom, String sabreCouleur) {
        super(nom);
        this.sabreCouleur = sabreCouleur;
    }

    public String getSabreCouleur() {
        return sabreCouleur;
    }

    @Override
    public String toString() {
        return super.toString() + ", sabreCouleur='" + sabreCouleur + "'}";
    }
}

