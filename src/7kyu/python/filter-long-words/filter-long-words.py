# Reference: https://www.codewars.com/kata/5697fb83f41965761f000052/train/python

def filter_long_words(sentence, n):
    return [item for item in sentence.split(' ') if len(item) > n]
