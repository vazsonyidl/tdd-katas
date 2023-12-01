import * as fs from "fs";

const extractFirstDigitFromLine = (line) => {
    const firstNumberIndex =  line.search(/\d/);
    return Number(line[firstNumberIndex]);
}

const extractLastDigitFromLine = (line) => {
    return Number(line.match(/\d(?!.*\d)/g)?.pop());
}

const getLineDoubleDigitValue = (line) => {
    const [firstDigit, secondDigit] = [
        extractFirstDigitFromLine(line), extractLastDigitFromLine(line)
    ];

    return firstDigit * 10 + secondDigit;
}

const file = fs.readFileSync('./input', {encoding: 'utf-8'});

const lines = file.split(/\n/);

const sum = lines.reduce((total, line) => {
    total += getLineDoubleDigitValue(line);
    return total;
}, 0);

