// PROBLEM 1
// Write a function called "Power" that accepts a base and an exponent. The function should return the powerof the base to the exponent. This function should mimic the functionality of MAth.pow(). 
function power(base, exp) {
    if (exp <= 0) {
        return 1;
    }
    return base * power(base, exp - 1)
}


// PROBLEM 2
// Write a function called "factorial" which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it. e. 4 * 3 * 2 * 1
const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}