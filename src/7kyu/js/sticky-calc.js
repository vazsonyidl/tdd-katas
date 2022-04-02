// https://www.codewars.com/kata/5900750cb7c6172207000054/train/javascript

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function stickyCalc (operation, val1, val2){
    return Math.round(operations[operation](+(Math.round(val1) + '' + Math.round(val2)), val2));
}

console.log(stickyCalc('+', 4, 7));

