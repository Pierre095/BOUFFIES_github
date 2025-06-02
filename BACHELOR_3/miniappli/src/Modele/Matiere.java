package Modele;

public class Matiere {
    private String nom;
    private int nbHeures;

    public Matiere(String nom, int nbHeures) {
        this.nom = nom;
        this.nbHeures = nbHeures;
    }

    public String getNom() {
        return nom;
    }

    public int getNbHeures() {
        return nbHeures;
    }

    public void setNbHeures(int nbHeures) {
        this.nbHeures = nbHeures;
    }
}
