import java.util.ArrayList;
import java.util.List;

/**
 * Classe représentant un acteur dans un film.
 */
public class Acteur {
    private String nom;
    private int age;
    private List<Personnage> personnages;

    public Acteur(String nom, int age) {
        this.nom = nom;
        this.age = age;
        this.personnages = new ArrayList<>();
    }

    public void ajouterPersonnage(Personnage personnage) {
        this.personnages.add(personnage);
    }

    public int nbPersonnages() {
        return this.personnages.size();
    }

    public String getNom() {
        return nom;
    }

    @Override
    public String toString() {
        return "Acteur{" +
                "nom='" + nom + '\'' +
                ", age=" + age +
                ", personnages=" + personnages +
                '}';
    }
}
