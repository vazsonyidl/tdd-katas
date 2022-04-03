// Reference: https://leetcode.com/problems/palindrome-number/

const isPalindrome = num => {
    return reverse(num) === num;
}

const reverse = num => {
    let reversed = 0;
    let number = num;
    while (number > 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return reversed;
}