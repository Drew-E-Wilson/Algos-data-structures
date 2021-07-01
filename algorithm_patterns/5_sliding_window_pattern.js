// SLIDING WINDOW PATTERN
// This invloves creating a window which can either be an array or number from one position to another..
// Depending on certain conditions, the window either increases or closes (and a new window is created).
// Useful for keeping track of a subset of data in an array/string/etc.

// PROBLEM 1
// Write a function called maxSubarraySum which accepts ana rray of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        console.log("null")
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
        console.log(maxSum)
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log(arr[i])
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)



// Same problem, different input for practice
const highestSubSum = (arr, num) => {
    let maxNum = 0;
    let tempNum = 0;
    if (arr.length < num) return null;
    for (i = 0; i < num; i++) {
        maxNum += arr[i];
        // console.log(maxNum);
    }
    tempNum = maxNum;
    for (i = num; i < arr.length; i++) {
        tempNum = tempNum - arr[i - num] + arr[i];
        maxNum = Math.max(maxNum, tempNum)
    }
    console.log(maxNum);
    return maxNum
}

highestSubSum([1, 6, 9, 2, 1, 9, 5, 2, 8], 4)