package main.java.rpg.decorator;

import main.java.rpg.core.Character;

public class FireResistance extends CharacterDecorator {
    
    public FireResistance(Character decoratedCharacter) {
        super(decoratedCharacter);
    }
    
    @Override
    public int getPowerLevel() {
        return super.getPowerLevel() + 10;
    }
    
    @Override
    public String getDescription() {
        return super.getDescription() + "\nCapacité spéciale: Résistance au feu (immunise contre les dégâts de feu)";
    }
}