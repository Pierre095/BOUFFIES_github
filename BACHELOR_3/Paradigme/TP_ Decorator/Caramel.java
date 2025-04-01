class Caramel extends Decorateur {
    public Caramel(Boisson boisson) {
        super(boisson);
    }
    
    @Override
    public String description() {
        return boisson.description() + ", Caramel";
    }
    
    @Override
    public double cout() {
        return boisson.cout() + 0.7;
    }
}