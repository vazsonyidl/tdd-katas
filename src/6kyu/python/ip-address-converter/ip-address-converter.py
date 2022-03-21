# Reference: https://www.codewars.com/kata/541a354c39c5efa5fa001372/python

from re import findall

def ip_to_num(ip):
    return int(''.join(map(lambda x: f"{int(x):08b}",  ip.split('.'))), 2)

def num_to_ip(num):
    return '.'.join(map(lambda x: str(int(x, 2)), findall('\d{8}', f"{int(num):032b}")))



    from re import findall

# Reference: https://www.codewars.com/kata/5936371109ca68fe6900000c/train/python

def number_and_IP_address(s):
    return str(int(''.join(map(lambda x: f"{int(x):08b}",  
        s.split('.'))), 2)) if '.' in s else '.'.join(
        map(lambda x: str(int(x, 2)), findall('\d{8}', f"{int(s):032b}")))