# Reference: https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090/train/python

def sequence(x):
    if x is None:
        return []
    return list(map(int, sorted(map(str, range(1, x + 1)))))


# another solution where key is a transformation
def sequence_another(x):
    return sorted(range(1, x + 1), key=str)
