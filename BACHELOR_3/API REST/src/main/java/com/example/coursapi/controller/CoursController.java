
package com.example.coursapi.controller;

import com.example.coursapi.model.Cours;
import com.example.coursapi.repository.CoursRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cours")
public class CoursController {
    private final CoursRepository coursRepository;

    public CoursController(CoursRepository coursRepository) {
        this.coursRepository = coursRepository;
    }

    @GetMapping
    public List<Cours> getAllCours() {
        return coursRepository.findAll();
    }

    @PostMapping
    public Cours addCours(@RequestBody Cours cours) {
        return coursRepository.save(cours);
    }

    @DeleteMapping("/{id}")
    public void deleteCours(@PathVariable Long id) {
        coursRepository.deleteById(id);
    }

    @GetMapping("/search")
    public List<Cours> searchByMatiere(@RequestParam String matiere) {
        return coursRepository.findByMatiereContainingIgnoreCase(matiere);
    }
}
