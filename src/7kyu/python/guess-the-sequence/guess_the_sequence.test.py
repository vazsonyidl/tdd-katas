import unittest

from guess_the_sequence import sequence, sequence_another


class TestToCamelCase(unittest.TestCase):
    def test_sequence(self):
        self.assertEqual(sequence(4), [1, 2, 3, 4])

    def test_sequence_over_ten(self):
        self.assertEqual(sequence(11), [1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9])

    def test_sequence_empty(self):
        self.assertEqual(sequence(None), [])


if __name__ == '__main__':
    unittest.main()
