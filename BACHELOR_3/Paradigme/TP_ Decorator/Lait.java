class Lait extends Decorateur {
    public Lait(Boisson boisson) {
        super(boisson);
    }
    
    @Override
    public String description() {
        return boisson.description() + ", Lait";
    }
    
    @Override
    public double cout() {
        return boisson.cout() + 0.5;
    }
}