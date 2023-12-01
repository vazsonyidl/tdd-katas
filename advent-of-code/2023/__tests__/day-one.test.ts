import {extractFirstDigitFromLine, extractLastDigitFromLine, getLineDoubleDigitValue} from "../day-one/index";

describe('Day 1: Trebuchet?! - Part one', () => {
    it('extracts SINGLE leading number', () => {
        expect(extractFirstDigitFromLine('8eight')).toEqual(8)
    });

    it('extracts first digit after letters', () => {
        expect(extractFirstDigitFromLine('asd8eight')).toEqual(8)
    });

    it('extracts first digit after any number of letters', () => {
        expect(extractFirstDigitFromLine('twothreefdbl6five3zcqvcqxkcvdfkl4')).toEqual(6)
    });

    it('ignores any leading digit in a line', () => {
        expect(extractLastDigitFromLine('88eight')).toEqual(8)
        expect(extractLastDigitFromLine('8asdasd128eight')).toEqual(8)
    });

    it('gets double digit number from line', () => {
        const testLines = [
            '1abc2',
            'pqr3stu8vwx',
            'treb7uchet',
            'a1b2c3d4e5f',
            'four15'
        ];

        const expectedValues = [12, 38, 77, 15, 15]

        testLines.forEach((line, index) => {
            expect(getLineDoubleDigitValue(line)).toEqual(expectedValues[index])
        })
    })
})