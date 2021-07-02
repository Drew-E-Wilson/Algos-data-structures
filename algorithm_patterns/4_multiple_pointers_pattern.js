// MULTIPLE POINTERS PATTERN

//PROBLEM 1
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            // console.log([arr[left], arr[right]])
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}
sumZero([-4, -3, -2, -1, 0, 1, 7, 10])



// PROBLEM 2
// Impliment a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//Solution 1
const countUniqueValues = (arr) => {
    let first = 0;
    let second = first + 1;
    let total = 0;
    while (first < arr.length) {
        if (arr[first] === arr[second]) {
            first++;
            second++;
        } else {
            total += 1
            first++;
            second++;
        }
    }
    // console.log(total);
    return total;
}
countUniqueValues([-1, 1, 2, 3, 4, 5])


//Solution 2
function numberOfUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(i + 1);
    return i + 1;
}
numberOfUniqueValues([])


// PROBLEM 3
// Write a function called 'areThereDuplicates' which accepts a variable number of arguments, and checks whether there are any duplicates amond the arguments passed in. 
const areThereDuplicates = (...nums) => {
    let obj = {};
    for (let mee of nums) {
        if (obj[mee] === 1) {
            obj[mee] += 1
            console.log("true")
            return true
        } else {
            obj[mee] = 1;
        }
    }
    for (let moo in obj) {
        if (obj[moo] <= 1) {
            console.log("false");
            return false
        }
    }
    console.log(obj)
}

// Solution 2
function areThereDuplicatesMaybe() {
    // console.log(arguments)
    console.log(new Set(arguments).size !== arguments.length);
    return new Set(arguments).size !== arguments.length;
}

areThereDuplicatesMaybe(1, 2, 3, 3, 4, 5)
areThereDuplicatesMaybe("a", "b", "c", "d", "e", "f")


// PROBLEM 4
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equels the target average. There may be more than one pair that matches the average target.

//create a function averagePair
function averagePair(arr, target) {
    //create an empty array to contain your answers. 
    let result = [];
    //create a first index counter set to 0
    let first = 0;
    // create a last index counter .length -1 
    let last = arr.length - 1;
    //loop over input while loop?
    while (first < arr.length / 2) {
        let sum = arr[first] + arr[last];
        if (sum / 2 === target) {
            // if statement. take both numbers and divide by two.
            result.push([arr[first], arr[last]]);
            //if numbers average = target, add the empty array
            first++
            // else incriment the numbers
        } else if (sum / 2 > target) {
            last--
        } else {
            first++
        }
    }
    console.log(result);
    return result
}
averagePair([1, 3, 4, 6], 3.5)

// PROBLEM 5 
// Write a functin called isSubsequences which takes in two string and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check if the characts in the first string appear somewhere in the second string, without their order changing. 