// Reference: https://www.codewars.com/kata/58fecb82f3dff0a347000018/train/javascript

function removeZeros(number) {
    return number.join('').replace(/^0+|0+$/g, '').split('').map(Number);
}

removeZeros([0, 2, 3,0, 9, 9, 0, 0, 9, 0]);

// The missing part here is that the code is too long, should be below 53 chars