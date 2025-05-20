package main.java.rpg.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Party {
    private List<Character> characters;

    public Party() {
        this.characters = new ArrayList<>();
    }

    public void addCharacter(Character character) {
        characters.add(character);
    }

    public boolean removeCharacter(Character character) {
        return characters.remove(character);
    }

    public boolean removeCharacterByName(String name) {
        return characters.removeIf(character -> character.getName().equals(name));
    }

    public int getTotalPower() {
        return characters.stream().mapToInt(Character::getPowerLevel).sum();
    }

    public List<Character> getAllCharacters() {
        return new ArrayList<>(characters);
    }

    public void sortByPower() {
        Collections.sort(characters, Comparator.comparing(Character::getPowerLevel).reversed());
    }

    public void sortByName() {
        Collections.sort(characters, Comparator.comparing(Character::getName));
    }

    public int getSize() {
        return characters.size();
    }
}