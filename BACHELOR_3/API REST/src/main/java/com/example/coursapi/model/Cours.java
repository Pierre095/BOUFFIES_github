
package com.example.coursapi.model;

import jakarta.persistence.*;

@Entity
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matiere;
    private int nbHeures;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMatiere() { return matiere; }
    public void setMatiere(String matiere) { this.matiere = matiere; }
    public int getNbHeures() { return nbHeures; }
    public void setNbHeures(int nbHeures) { this.nbHeures = nbHeures; }
}
