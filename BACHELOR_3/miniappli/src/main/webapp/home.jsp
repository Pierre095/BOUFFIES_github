<%@ page import="java.util.List" %>
<%@ page import="Modele.Matiere" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Liste des matières</title>
</head>
<body>
    <h2>Bienvenue</h2>

    <h3>Liste des matières :</h3>
    <ul>
        <%
            List<Matiere> matieres = (List<Matiere>) request.getAttribute("matieres");
            if (matieres != null) {
                for (Matiere m : matieres) {
        %>
            <li>
                <%= m.getNom() %> - <%= m.getNbHeures() %> heures
                <form action="modifier" method="post" style="display:inline;">
                    <input type="hidden" name="nom" value="<%= m.getNom() %>" />
                    Nouvelles heures : <input type="number" name="nbHeures" required />
                    <input type="submit" value="Modifier" />
                </form>
            </li>
        <%
                }
            }
        %>
    </ul>

    <h3>Ajouter une matière :</h3>
    <form action="ajouter" method="post">
        Nom : <input type="text" name="nom" required />
        Heures : <input type="number" name="nbHeures" required />
        <input type="submit" value="Ajouter" />
    </form>
</body>
</html>
