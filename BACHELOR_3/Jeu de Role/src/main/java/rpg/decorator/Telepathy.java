package main.java.rpg.decorator;

import main.java.rpg.core.Character;

public class Telepathy extends CharacterDecorator {
    
    public Telepathy(Character decoratedCharacter) {
        super(decoratedCharacter);
    }
    
    @Override
    public int getPowerLevel() {
        return super.getPowerLevel() + 20;
    }
    
    @Override
    public String getDescription() {
        return super.getDescription() + "\nCapacité spéciale: Télépathie (permet de lire dans les pensées)";
    }
}
