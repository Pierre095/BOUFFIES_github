abstract class Decorateur implements Boisson {
    protected Boisson boisson;
    
    public Decorateur(Boisson boisson) {
        this.boisson = boisson;
    }
    
    @Override
    public abstract String description();
    
    @Override
    public abstract double cout();
}