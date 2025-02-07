        import java.util.*;

/**
 * Classe principale pour tester le projet.
 */
public class Main {
    public static void main(String[] args) {
        // Création des films
        Film film1 = new Film("Un nouvel espoir", 1977, 11000000, 775000000);
        Film film2 = new Film("L'Empire contre-attaque", 1980, 18000000, 538000000);
        Film film3 = new Film("Le Retour du Jedi", 1983, 32500000, 475000000);
        Film film4 = new Film("La Menace fantôme", 1999, 115000000, 924000000);
        Film film5 = new Film("L'Attaque des clones", 2002, 115000000, 649000000);
        Film film6 = new Film("La Revanche des Sith", 2005, 113000000, 868000000);
        Film film7 = new Film("Le Réveil de la Force", 2015, 245000000, 2068000000);
        Film film8 = new Film("Les Derniers Jedi", 2017, 317000000, 1333000000);
        Film film9 = new Film("L'Ascension de Skywalker", 2019, 275000000, 1074000000);

        // Création des acteurs et personnages
        Acteur acteur1 = new Acteur("Mark Hamill", 71);
        Personnage personnage1 = new Force("Luke Skywalker", "Bleu");
        acteur1.ajouterPersonnage(personnage1);

        Acteur acteur2 = new Acteur("David Prowse", 45);
        Personnage personnage2 = new CoteObscur("Darth Vader", "Étranglement de force");
        acteur2.ajouterPersonnage(personnage2);

        // Acteurs Episode 1-3
        Acteur haydenChristensen = new Acteur("Hayden Christensen", 41);
        Personnage anakinSkywalker = new Force("Anakin Skywalker", "Bleu");
        haydenChristensen.ajouterPersonnage(anakinSkywalker);

        Acteur ewanMcGregor = new Acteur("Ewan McGregor", 51);
        Personnage obiWanKenobi = new Force("Obi-Wan Kenobi", "Bleu");
        ewanMcGregor.ajouterPersonnage(obiWanKenobi);

        Acteur nataliePortman = new Acteur("Natalie Portman", 41);
        Personnage padmeAmidala = new Force("Padmé Amidala", "");
        nataliePortman.ajouterPersonnage(padmeAmidala);

        // Acteurs Episode 4-6
        Acteur carrieFisher = new Acteur("Carrie Fisher", 60);
        Personnage leia = new Force("Leia Organa", "Bleu");
        carrieFisher.ajouterPersonnage(leia);

        Acteur harrisonFord = new Acteur("Harrison Ford", 80);
        Personnage hanSolo = new Force("Han Solo", "");
        harrisonFord.ajouterPersonnage(hanSolo);

        // Acteurs Episode 7-9
        Acteur daisyRidley = new Acteur("Daisy Ridley", 30);
        Personnage rey = new Force("Rey", "Jaune");
        daisyRidley.ajouterPersonnage(rey);

        Acteur johnBoyega = new Acteur("John Boyega", 30);
        Personnage finn = new Force("Finn", "");
        johnBoyega.ajouterPersonnage(finn);

        // Ajout des acteurs aux films
        film1.ajouterActeur(acteur1);
        film1.ajouterActeur(acteur2);
        film1.ajouterActeur(harrisonFord);
        film1.ajouterActeur(carrieFisher);

        film4.ajouterActeur(ewanMcGregor);
        film4.ajouterActeur(nataliePortman);

        film5.ajouterActeur(haydenChristensen);
        film5.ajouterActeur(ewanMcGregor);
        film5.ajouterActeur(nataliePortman);

        film6.ajouterActeur(haydenChristensen);
        film6.ajouterActeur(ewanMcGregor);

        film7.ajouterActeur(daisyRidley);
        film7.ajouterActeur(johnBoyega);
        film7.ajouterActeur(harrisonFord);
        film7.ajouterActeur(carrieFisher);

        film8.ajouterActeur(daisyRidley);
        film8.ajouterActeur(johnBoyega);
        film8.ajouterActeur(carrieFisher);

        film9.ajouterActeur(daisyRidley);
        film9.ajouterActeur(johnBoyega);

        // Stockage des films
        List<Film> films = new ArrayList<>();
        films.add(film1);
        films.add(film2);
        films.add(film3);
        films.add(film4);
        films.add(film5);
        films.add(film6);
        films.add(film7);
        films.add(film8);
        films.add(film9);

        // Affichage des films
        afficherCollection(films);

        // Sauvegarde des films
        makeBackUp(films);
    }

    public static Film creerFilmInteractif() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez le titre du film : ");
        String titre = scanner.nextLine();
        System.out.print("Entrez l'année de sortie : ");
        int annee = scanner.nextInt();
        System.out.print("Entrez le coût du film : ");
        double cout = scanner.nextDouble();
        System.out.print("Entrez la recette du film : ");
        double recette = scanner.nextDouble();

        return new Film(titre, annee, cout, recette);
    }

    public static void afficherCollection(List<Film> films) {
        for (Film film : films) {
            System.out.println(film);
        }
    }

    public static void makeBackUp(List<Film> films) {
        for (Film film : films) {
            double benefice = film.calculerBenefice();
            System.out.println(film.getAnneeSortie() + " - " + film.getTitre() + " - " + benefice);
        }
    }
}
