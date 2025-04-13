package main.java.rpg.settings;

import main.java.rpg.core.Character;

public class GameSettings {
    private static GameSettings instance;
    
    private int maxStatPoints;
    
    private GameSettings() {
        // Valeur par défaut
        this.maxStatPoints = 50;
    }
    
    public static synchronized GameSettings getInstance() {
        if (instance == null) {
            instance = new GameSettings();
        }
        return instance;
    }
    
    public int getMaxStatPoints() {
        return maxStatPoints;
    }
    
    public void setMaxStatPoints(int maxStatPoints) {
        this.maxStatPoints = maxStatPoints;
    }
    
    public boolean isValid(Character character) {
        int totalStats = character.getStrength() + character.getAgility() + character.getIntelligence();
        return totalStats <= maxStatPoints;
    }
}
