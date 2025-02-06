public class Mechant extends Personnage {

    private Boolean coteObscur;

    public Mechant() {
        this.coteObscur = false;
    }
    public Mechant(Boolean coteObscur) {
        this.coteObscur = coteObscur;
    }

    public Boolean getCoteObscur() {
        return coteObscur;
    }

    public void setCoteObscur(Boolean coteObscur) {
        this.coteObscur = coteObscur;
    }

    @Override
    public String toString() {
        return "Mechant{" +
                "coteObscur=" + coteObscur +
                '}';
    }
}