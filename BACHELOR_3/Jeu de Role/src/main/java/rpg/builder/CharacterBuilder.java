package main.java.rpg.builder;

import main.java.rpg.core.Character;
import main.java.rpg.settings.GameSettings;

public class CharacterBuilder {
    private String name;
    private int strength;
    private int agility;
    private int intelligence;

    public CharacterBuilder() {
        // Initialisation avec des valeurs par défaut
        this.name = "Sans nom";
        this.strength = 5;
        this.agility = 5;
        this.intelligence = 5;
    }

    public CharacterBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public CharacterBuilder setStrength(int strength) {
        this.strength = strength;
        return this;
    }

    public CharacterBuilder setAgility(int agility) {
        this.agility = agility;
        return this;
    }

    public CharacterBuilder setIntelligence(int intelligence) {
        this.intelligence = intelligence;
        return this;
    }

    public Character build() throws IllegalStateException {
        Character character = new Character(name, strength, agility, intelligence);
        
        // Vérifier si le personnage respecte les règles du jeu
        if (!GameSettings.getInstance().isValid(character)) {
            throw new IllegalStateException("Le personnage ne respecte pas les règles du jeu!");
        }
        
        return character;
    }
}