/**
 * Classe représentant un personnage du côté obscur.
 */
public class CoteObscur extends Personnage {
    private String pouvoir;

    public CoteObscur(String nom, String pouvoir) {
        super(nom);
        this.pouvoir = pouvoir;
    }

    public String getPouvoir() {
        return pouvoir;
    }

    @Override
    public String toString() {
        return super.toString() + ", pouvoir='" + pouvoir + "'}";
    }
}

