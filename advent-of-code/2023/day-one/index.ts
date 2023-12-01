export const extractFirstDigitFromLine = (line: string): number => {
    const firstNumberIndex =  line.search(/\d/);
    return Number(line[firstNumberIndex]);
}

export const extractLastDigitFromLine = (line: string): number => {
    return Number(line.match(/\d(?!.*\d)/g)?.pop());
}

export const getLineDoubleDigitValue = (line: string): number => {
    const [firstDigit, secondDigit] = [
        extractFirstDigitFromLine(line), extractLastDigitFromLine(line)
    ];

    return firstDigit * 10 + secondDigit;
}

