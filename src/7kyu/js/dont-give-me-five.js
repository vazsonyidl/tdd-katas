// Reference: https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

const range = (start, end) => {
    return Array.from({
        length: Math.max(start, end) - Math.min(start, end) + 1
    },(_, i) => Math.min(start, end) + i)
        .filter(val => !String(val).split('').includes('5')).length;
}
