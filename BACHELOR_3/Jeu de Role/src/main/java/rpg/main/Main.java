package main.java.rpg.main;

import main.java.rpg.builder.CharacterBuilder;
import main.java.rpg.core.Character;
import main.java.rpg.core.Party;
import main.java.rpg.dao.CharacterDAO;
import main.java.rpg.decorator.FireResistance;
import main.java.rpg.decorator.Invisibility;
import main.java.rpg.decorator.Telepathy;
import main.java.rpg.settings.GameSettings;

public class Main {
    public static void main(String[] args) {
        System.out.println("Démarrage du générateur de personnages de JDR");
        
        GameSettings.getInstance().setMaxStatPoints(60);
        
        // Création du DAO
        CharacterDAO characterDAO = new CharacterDAO();
        
        Party adventurers = new Party();
        
        try {
            Character warrior = new CharacterBuilder()
                    .setName("Aragorn")
                    .setStrength(20)
                    .setAgility(15)
                    .setIntelligence(10)
                    .build();
            
            Character mage = new CharacterBuilder()
                    .setName("Gandalf")
                    .setStrength(8)
                    .setAgility(12)
                    .setIntelligence(25)
                    .build();
            
            Character rogue = new CharacterBuilder()
                    .setName("Legolas")
                    .setStrength(12)
                    .setAgility(25)
                    .setIntelligence(15)
                    .build();
            
            Character enhancedWarrior = new FireResistance(warrior);
            Character enhancedMage = new Telepathy(new Invisibility(mage));
            Character enhancedRogue = new Invisibility(rogue);
            
            characterDAO.save(enhancedWarrior);
            characterDAO.save(enhancedMage);
            characterDAO.save(enhancedRogue);
            
            adventurers.addCharacter(enhancedWarrior);
            adventurers.addCharacter(enhancedMage);
            adventurers.addCharacter(enhancedRogue);
            
            // Affichage des descriptions
            System.out.println("\n=== PERSONNAGES CRÉÉS ===");
            for (Character character : characterDAO.findAll()) {
                System.out.println("\n" + character.getDescription());
                System.out.println("------------------------");
            }
            
            adventurers.sortByPower();
            System.out.println("\n=== EQUIPE TRIÉE PAR PUISSANCE ===");
            for (Character character : adventurers.getAllCharacters()) {
                System.out.println(character.getName() + " - Puissance: " + character.getPowerLevel());
            }
            
            adventurers.sortByName();
            System.out.println("\n=== EQUIPE TRIÉE PAR NOM ===");
            for (Character character : adventurers.getAllCharacters()) {
                System.out.println(character.getName() + " - Puissance: " + character.getPowerLevel());
            }
            
            System.out.println("\nPuissance totale de l'équipe: " + adventurers.getTotalPower());
            
            // Simulation de combat
            simulateCombat(enhancedWarrior, enhancedRogue);
            
        } catch (IllegalStateException e) {
            System.err.println("Erreur lors de la création des personnages: " + e.getMessage());
        }
    }
    
    private static void simulateCombat(Character character1, Character character2) {
        System.out.println("\n=== SIMULATION DE COMBAT ===");
        System.out.println(character1.getName() + " VS " + character2.getName());
        
        int power1 = character1.getPowerLevel();
        int power2 = character2.getPowerLevel();
        
        System.out.println("Puissance de " + character1.getName() + ": " + power1);
        System.out.println("Puissance de " + character2.getName() + ": " + power2);
        
        if (power1 > power2) {
            System.out.println(character1.getName() + " remporte le combat!");
        } else if (power2 > power1) {
            System.out.println(character2.getName() + " remporte le combat!");
        } else {
            System.out.println("Le combat se termine par une égalité!");
        }
    }
}