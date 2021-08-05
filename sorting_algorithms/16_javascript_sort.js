// Using the built in .sort() method.
// Works on "strings" but not on numbers
// Built in on string sorts them alphabetically 
const strings = ["happy", "sad", "tired", "excited"];
console.log(strings.sort());

// Now add a function to sort them by length. If it returns a negative number, str1 is shorter. If it returns a positive number, str2 is shorter
const sortStringLength = (str1, str2) => {
    return str1.length - str2.length
}
console.log(strings.sort(sortStringLength));


// How to sort Numbers
const number = [12, 54, 2, 1, 18, 95, 64, 7]
const sortNumbers = (num1, num2) => {
    return num1 - num2;
}
console.log(number.sort(sortNumbers))
