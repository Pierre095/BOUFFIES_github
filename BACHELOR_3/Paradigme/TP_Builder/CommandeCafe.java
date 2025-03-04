class CommandeCafe {
    private String typeCafe;
    private String typeLait;
    private int quantiteSucre;
    private String options;

    private CommandeCafe(ConstructeurCommande builder) {
        this.typeCafe = builder.typeCafe;
        this.typeLait = builder.typeLait;
        this.quantiteSucre = builder.quantiteSucre;
        this.options = builder.options;
    }

    public void afficherCommande() {
        System.out.println("Commande: " + typeCafe + ", Lait: " + (typeLait != null ? typeLait : "Aucun") +
                ", Sucre: " + quantiteSucre + ", Options: " + (options != null ? options : "Aucune"));
    }

    public static class ConstructeurCommande {
        private String typeCafe;
        private String typeLait;
        private int quantiteSucre;
        private String options;

        public ConstructeurCommande(String typeCafe) {
            this.typeCafe = typeCafe;
        }

        public ConstructeurCommande definirLait(String typeLait) {
            this.typeLait = typeLait;
            return this;
        }

        public ConstructeurCommande definirSucre(int quantiteSucre) {
            this.quantiteSucre = quantiteSucre;
            return this;
        }

        public ConstructeurCommande ajouterOptions(String options) {
            this.options = options;
            return this;
        }

        public CommandeCafe construire() {
            return new CommandeCafe(this);
        }
    }
}