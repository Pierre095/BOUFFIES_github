package dao;

import model.Student;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseStudentDAO implements StudentDAO {
    private Connection connection;

    public DatabaseStudentDAO() {
        try {
            // Remplacez par vos informations de connexion
            this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/studentdb", "user", "password");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void addStudent(Student student) {
        try {
            String query = "INSERT INTO students (id, firstName, lastName, age) VALUES (?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, student.getId());
            statement.setString(2, student.getFirstName());
            statement.setString(3, student.getLastName());
            statement.setInt(4, student.getAge());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Student getStudent(int id) {
        try {
            String query = "SELECT * FROM students WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return new Student(
                    resultSet.getInt("id"),
                    resultSet.getString("firstName"),
                    resultSet.getString("lastName"),
                    resultSet.getInt("age")
                );
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();
        try {
            String query = "SELECT * FROM students";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                students.add(new Student(
                    resultSet.getInt("id"),
                    resultSet.getString("firstName"),
                    resultSet.getString("lastName"),
                    resultSet.getInt("age")
                ));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return students;
    }

    @Override
    public void updateStudent(Student student) {
        try {
            String query = "UPDATE students SET firstName = ?, lastName = ?, age = ? WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, student.getFirstName());
            statement.setString(2, student.getLastName());
            statement.setInt(3, student.getAge());
            statement.setInt(4, student.getId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteStudent(int id) {
        try {
            String query = "DELETE FROM students WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
