public abstract class Personnage {
    protected String nom;

    public Personnage(String nom) {
        this.nom = nom;
    }

    public String getNom() {
        return nom;
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "{" +
                "nom='" + nom + '\'' +
                '}';
    }
}
