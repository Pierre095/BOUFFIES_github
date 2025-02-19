package dao;

public class InMemoryDAOFactory implements DAOFactory {
    @Override
    public StudentDAO getStudentDAO() {
        return new StudentDAOImpl();
    }
}
