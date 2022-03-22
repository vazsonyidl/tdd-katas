// Reference: https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

const addUpDigits = number => {
    return String(number).split('').reduce((total, current) => total += +current, 0);
}

const digital_root = (number) => {
    const digitSum = addUpDigits(number);
    return String(digitSum).length === 1 ? digitSum : digital_root(digitSum);
}
