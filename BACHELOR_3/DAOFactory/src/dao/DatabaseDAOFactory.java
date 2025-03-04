package dao;

public class DatabaseDAOFactory implements DAOFactory {
    @Override
    public StudentDAO getStudentDAO() {
        return new DatabaseStudentDAO();  // Nous allons définir cette classe dans le bonus
    }
}
