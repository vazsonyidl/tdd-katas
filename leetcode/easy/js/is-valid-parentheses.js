// Reference: https://leetcode.com/problems/valid-parentheses/

const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
};

const isValid = (s) => {
    if(s.split('').length % 2) return false;

    const stack = [];

    for(let bracket of s.split('')) {
        if(['(', '[', '{'].includes(bracket)) stack.push(bracket);
        if([')', ']', '}'].includes(bracket) && stack.pop() !== pairs[bracket]) return false;
    }

    return stack.length === 0;
}

/**
 * @memory consumiton should be improved
 */