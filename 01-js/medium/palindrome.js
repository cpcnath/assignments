/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

    // Convert the string to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();

    // Check if the string is the same as its reverse
    return lowerStr === lowerStr.split('').reverse().join('');

return true;
}


module.exports = isPalindrome;

