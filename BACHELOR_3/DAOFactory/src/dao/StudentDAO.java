package dao;

import model.Student;
import java.util.List;

public interface StudentDAO {
    void addStudent(Student student);
    Student getStudent(int id);
    List<Student> getAllStudents();
    void updateStudent(Student student);
    void deleteStudent(int id);
}
