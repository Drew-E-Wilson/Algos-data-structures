// MULTIPLE POINTERS PATTERN

//PROBLEM 1
// Write a function called sumZero which acceots a sorted array f integers. The function should find the first pair where the sum is 0. Return an array that includes both values tht sum to zero or undefined if a pair does not exist. 

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
