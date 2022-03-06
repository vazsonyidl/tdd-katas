# Reference: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
# Idea: split string by _ or - characters, join with first capitalized


import re


def to_camel_case(text):
    if text is None:
        return ''

    return ''.join(word if idx == 0 else word[0].upper() + word[1:]
                   for idx, word in enumerate(re.split('-|_', text)))


print(to_camel_case('the_stealth_warrior'))
print(to_camel_case("The-Stealth-Warrior"))
print(to_camel_case("A-B-C"))
