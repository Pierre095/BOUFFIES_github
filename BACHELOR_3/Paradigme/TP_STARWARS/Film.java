import java.util.*;

/**
 * Classe représentant un film de la saga Star Wars.
 */
public class Film {
    private String titre;
    private int anneeSortie;
    private double cout;
    private double recette;
    private List<Acteur> acteurs;

    public Film(String titre, int anneeSortie, double cout, double recette) {
        this.titre = titre;
        this.anneeSortie = anneeSortie;
        this.cout = cout;
        this.recette = recette;
        this.acteurs = new ArrayList<>();
    }

    public void ajouterActeur(Acteur acteur) {
        this.acteurs.add(acteur);
    }

    public int nbActeurs() {
        return this.acteurs.size();
    }

    public int nbPersonnages() {
        int total = 0;
        for (Acteur acteur : acteurs) {
            total += acteur.nbPersonnages();
        }
        return total;
    }

    public Object[] calculBenefice() {
        double benefice = this.recette - this.cout;
        return new Object[]{benefice, benefice > 0};
    }

    public boolean isBefore(int annee) {
        return this.anneeSortie < annee;
    }

    public void triActeurs() {
        this.acteurs.sort(Comparator.comparing(Acteur::getNom));
    }

    public String getTitre() {
        return titre;
    }

    public int getAnneeSortie() {
        return anneeSortie;
    }

    public double calculerBenefice() {
        return recette - cout;
    }

    @Override
    public String toString() {
        return "Film{" +
                "titre='" + titre + '\'' +
                ", anneeSortie=" + anneeSortie +
                ", cout=" + cout +
                ", recette=" + recette +
                ", acteurs=" + acteurs +
                '}';
    }
}
