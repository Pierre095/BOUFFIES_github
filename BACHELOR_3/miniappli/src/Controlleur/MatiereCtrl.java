package Controleur;

import java.io.IOException;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import Modele.Matiere;

@WebServlet(urlPatterns = {"/home", "/ajouter", "/modifier"})
public class MatiereCtrl extends HttpServlet {
    private static final List<Matiere> listeMatieres = new ArrayList<>();

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("matieres", listeMatieres);
        request.getRequestDispatcher("/WEB-INF/vue/home.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String path = request.getServletPath();

        if ("/ajouter".equals(path)) {
            String nom = request.getParameter("nom");
            int nbHeures = Integer.parseInt(request.getParameter("nbHeures"));
            listeMatieres.add(new Matiere(nom, nbHeures));
        } else if ("/modifier".equals(path)) {
            String nom = request.getParameter("nom");
            int nbHeures = Integer.parseInt(request.getParameter("nbHeures"));
            for (Matiere m : listeMatieres) {
                if (m.getNom().equals(nom)) {
                    m.setNbHeures(nbHeures);
                    break;
                }
            }
        }

        // Après ajout ou modification, on revient à la page principale
        response.sendRedirect("home");
    }
}
