class Sucre extends Decorateur {
    public Sucre(Boisson boisson) {
        super(boisson);
    }
    
    @Override
    public String description() {
        return boisson.description() + ", Sucre";
    }
    
    @Override
    public double cout() {
        return boisson.cout() + 0.2;
    }
}