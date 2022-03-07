import unittest

from convert_to_camel import to_camel_case


class TestToCamelCase(unittest.TestCase):

    def test_dash(self):
        self.assertEqual(to_camel_case('A-B-C'), 'ABC')

    def test_underscore(self):
        self.assertEqual(to_camel_case('A_B_C'), 'ABC')

    def test_empty(self):
        self.assertEqual(to_camel_case(''), '')

    def test_empty(self):
        self.assertEqual(to_camel_case(None), '')


if __name__ == '__main__':
    unittest.main()
