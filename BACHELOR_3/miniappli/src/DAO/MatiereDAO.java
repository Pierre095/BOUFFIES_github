package DAO;

import Modele.Matiere;
import java.util.ArrayList;
import java.util.List;

public class MatiereDAO {
    private static List<Matiere> matieres = new ArrayList<>();

    public static List<Matiere> getAll() {
        return matieres;
    }

    public static void ajouterMatiere(Matiere m) {
        matieres.add(m);
    }

    public static void updateNote(int id, double note) {
        matieres.get(id).setNote(note);
    }
}
