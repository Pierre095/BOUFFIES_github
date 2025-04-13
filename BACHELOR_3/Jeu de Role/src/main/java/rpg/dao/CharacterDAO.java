package main.java.rpg.dao;

import main.java.rpg.core.Character;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CharacterDAO implements DAO<Character> {
    private Map<String, Character> charactersDB = new HashMap<>();

    @Override
    public void save(Character character) {
        charactersDB.put(character.getName(), character);
    }

    @Override
    public Character findByName(String name) {
        return charactersDB.get(name);
    }

    @Override
    public List<Character> findAll() {
        return new ArrayList<>(charactersDB.values());
    }
}
