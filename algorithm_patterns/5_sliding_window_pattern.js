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
        // console.log(maxSum)
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        // console.log(arr[i])
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
    // console.log(maxNum);
    return maxNum
}

highestSubSum([1, 6, 9, 2, 1, 9, 5, 2, 8], 4)


// PROBLEM 2
// Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. 
// Note that a subarray must consist of consecutive elements from the original array. In an example. [100,200,300] is a subarray of [100, 200, 300, 400] but [100, 300] would not be.

function maxSubArraySum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    if (arr.length < num) {
        console.log("null")
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    console.log(maxSum);
    return maxSum;
};

maxSubArraySum([100, 200, 300, 400], 2);

// SOLUTION 2 
function maxSubarraySums(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}



// PROBLEM 3
// Write a function called minSubArrayLen which accepts 2 parameters - an array of positive integers and a positive integer.
// This function should return the minimum length of a contiguous subaray of which the sum is greater than or eaqual to the integer passed to the function. If there isn't one, return 0.
function minSubArrayLen(arr, num) {
    let total = 0;
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        if (total >= num) {
            console.log(length)
            return length
        } else if (total < num) {
            total += arr[i];
            length += 1;
        }
    }
    if (total < num) {
        console.log("0")
        return 0
    }
    console.log(total)
}
minSubArrayLen([2, 3, 2, 4, 3], 7);

// SOLUTION 2 (WORKING FROM DUDE)
function minSubArrayLenG(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}


// PROBLEM 4
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {
    let letter1 = 0;
    let counter = 0;
    if (str.length === 0) {
        return 0
    }
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[letter1] !== str[i + 1]) {
            counter++;
            letter1++;
        } else {
            console.log(counter + 1);
            return counter + 1;
        }
    }
    if (counter >= str.length) {
        console.log(str.length);
        return str.length
    }
}
findLongestSubstring("thisisawesome")


// SOLUTION 2 (WORKING FROM DUDE)
function findLongestSubstringS(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}