import pytest
from TP_lambdaCloture.mainS import (carre, carres, somme, somme_totale, double, triple, mots_a, count_long_words, mots, h, filterMap, fibonacci, calculateDiscount, discount_20)

def test_exercice1():
    assert carre(4) == 16
    assert carres == [1, 4, 9, 16, 25]
    assert somme(3, 4) == 7
    assert somme_totale == 15

def test_exercice2():
    assert double(5) == 10
    assert triple(5) == 15

def test_exercice3():
    assert set(mots_a) == set(['apple', 'abricot', 'ananas'])
    assert count_long_words(mots) == 3

def test_exercice5():
    assert h(5) == 16  # (5 + 3) * 2

def test_exercice6():
    strings = ["", "hello", "", "world"]
    result = filterMap(lambda x: x != "", str.upper, strings)
    assert result == ["HELLO", "WORLD"]

def test_exercice7():
    assert fibonacci(10) == 55

def test_exercice8():
    products = [100, 200, 300]
    total = calculateDiscount(products, discount_20)
    assert total == 480  # (100 + 200 + 300) * 0.8