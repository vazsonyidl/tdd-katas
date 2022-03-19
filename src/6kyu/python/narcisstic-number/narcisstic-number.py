# Reference: https://www.codewars.com/kata/5287e858c6b5a9678200083c/python

def narcissistic( value ):
    return sum(map(lambda x: int(x) ** int(len(str(value))), str(value))) == value