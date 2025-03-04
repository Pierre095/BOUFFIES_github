import dao.*;
import model.Student;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Choisir la fabrique souhaitée
        DAOFactory daoFactory = new InMemoryDAOFactory();  // Ou DatabaseDAOFactory pour le bonus

        // Obtenir l'instance de StudentDAO
        StudentDAO studentDAO = daoFactory.getStudentDAO();

        // Ajouter des étudiants
        studentDAO.addStudent(new Student(1, "John", "Doe", 20));
        studentDAO.addStudent(new Student(2, "Jane", "Smith", 22));

        // Récupérer et afficher un étudiant
        Student student = studentDAO.getStudent(1);
        System.out.println("Student with ID 1: " + student);

        // Afficher tous les étudiants
        List<Student> students = studentDAO.getAllStudents();
        System.out.println("All Students: " + students);

        // Mettre à jour un étudiant
        student.setAge(21);
        studentDAO.updateStudent(student);
        System.out.println("Updated student: " + studentDAO.getStudent(1));

        // Supprimer un étudiant
        studentDAO.deleteStudent(2);
        System.out.println("All Students after deletion: " + studentDAO.getAllStudents());
    }
}
