// PROBLEM 1
// Write a function called "Power" that accepts a base and an exponent. The function should return the powerof the base to the exponent. This function should mimic the functionality of MAth.pow(). 
function power(base, exp) {
    if (exp === 0) {
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

// PROBLEM 3
// write a function which takes in an array of numbers and returns the product of them all.
const productOfArray = (arr) => {
    let result = 1;
    const helper = (helperInput) => {
        if (helperInput.length === 0) {
            return;
        } else {
            result *= helperInput[0];
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    console.log(result);
    return result;
}
productOfArray([1, 2, 3, 4])

// SOLUTION 2
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


// PROBLEM 4
// Write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function. 
function recursiveRange(num) {
    if (num === 0) return 0;
    console.log(num)
    return num + recursiveRange(num - 1)
}
recursiveRange(4);


// PROMLEM 5  Fibonacci!
//Write a function that accepts a number and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,... which starts with 1 and 1, and where every number thereafter is equal to the sum of the prevous two numbers. 

function fib(num) {
    let num1 = 0
    let num2 = 1
    let current = num1 + num2
    const helper = (helperInput) => {
        if (helperInput === 2) return current;
        num1 = num2
        num2 = current;
        current = num1 + num2
        //   console.log(current)
        helper(helperInput - 1)
    }
    helper(num)
    console.log(current)
    return current
}
fib(5)

// SOLUTION 2
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}


// PROBLEM 6
// Reverse the string  ex.  taxi,.., ixat
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// PROBLEM 7
// Check if it is a palindrome. read forward and backwards the same.  ex. race car
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

// PROBLEM 8
// Accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false. 
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

// PROBLEM 9
// Write a function which accepts an array of arrays and returns a new array with all values flattened
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

// PROBLEM 10