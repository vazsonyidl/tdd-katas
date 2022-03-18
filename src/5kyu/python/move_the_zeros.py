# Reference: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

def move_zeros(array):
    without_zeros =  [x for x in array if x!=0]
    return without_zeros + [0] * (len(array) - len(without_zeros))