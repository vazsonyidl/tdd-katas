# Reference: https://www.codewars.com/kata/566fc12495810954b1000030/python

def nb_dig(n, d):
    return ''.join(map(lambda x: str(x ** 2), range(0, n + 1))).count(str(d))
