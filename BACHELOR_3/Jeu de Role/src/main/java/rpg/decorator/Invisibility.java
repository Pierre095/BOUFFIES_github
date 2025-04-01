package main.java.rpg.decorator;

import main.java.rpg.core.Character;

public class Invisibility extends CharacterDecorator {
    
    public Invisibility(Character decoratedCharacter) {
        super(decoratedCharacter);
    }
    
    @Override
    public int getPowerLevel() {
        return super.getPowerLevel() + 15;
    }
    
    @Override
    public String getDescription() {
        return super.getDescription() + "\nCapacité spéciale: Invisibilité (permet de se déplacer sans être vu)";
    }
}