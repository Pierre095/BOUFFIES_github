
package com.example.coursapi.repository;

import com.example.coursapi.model.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CoursRepository extends JpaRepository<Cours, Long> {
    List<Cours> findByMatiereContainingIgnoreCase(String matiere);
}
