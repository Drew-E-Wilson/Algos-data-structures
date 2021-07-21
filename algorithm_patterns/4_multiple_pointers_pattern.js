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
numberOfUniqueValues([-1, 1, 2, 3, 4, 5])


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

// Solution 2
function averagePairs(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}

// PROBLEM 5 
// Write a functin called isSubsequences which takes in two string and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check if the characts in the first string appear somewhere in the second string, without their order changing. 
function isSubsequence(str1, str2) {
    let combined = str1 + str2;
    let word1 = 0;
    let word2 = word1 + str1.length - 1;
    while (word2 < combined.length) {
        if (combined[word1] === combined[word2]) {
            word1++;
            word2++;
            if (word1 === str1.length) {
                console.log("true");
                return true;
            }
        } else {
            word2++;
        }
    }
    if (word1 < str1.length) {
        console.log("false");
        return false;
    }
}

isSubsequence("aba", "abracadabera")

// Solution 2
function isThisSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// Solution 3 with recursive

function isSubsequences(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}



// Problem 6
const swapping = (arr) => {
    let higherLeft = 0;
    let higherRight = 0;
    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length / 2; i++) {
            higherLeft++
            // console.log(arr[i])
        }
        for (let i = arr.length / 2; i < arr.length; i++) {
            higherRight++
            // console.log(arr[i])
        }
    }
    if (arr.length % 2 !== 0) {
        arr.length / 2 - 1;
        for (let i = 0; i < arr.length / 2; i++) {
            higherLeft++
            // console.log(arr[i])
        }
        for (let i = 0; i < arr.length / 2; i++) {
            higherRight++
            // console.log(arr[i])
        }
    }

    let totalSwap = 0;

    if (higherRight = higherLeft) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = 0;
                arr[i + 1] = 1;
                totalSwap++;
            }
        }
    } else if (higherRight < higherLeft) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = 0;
                arr[i + 1] = 1;
                totalSwap++;
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                arr[i] = 1;
                arr[i + 1] = 0;
                totalSwap++;
            }
        }
    }
    console.log(totalSwap);
}


swapping([1, 0, 1, 1, 0, 1, 1, 1])