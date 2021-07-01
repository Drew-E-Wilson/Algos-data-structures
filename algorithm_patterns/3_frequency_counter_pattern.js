// 1. FREQUENCY COUNTERS
// Uses objects or sets to collect values/frequencies of values. Often help avoid nested loops or 0(N^2) operations with arrays / strings.

//Problem 1. Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
    };
    for (let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    };
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

}
same([1, 2, 3, 2], [9, 1, 4, 4])


// Problem 2. 
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed be rearranging the letters of another word. Ex. cinema forms iceman.

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("false")
        return false
    }
    const obj = {};
    for (let letter of str1) {
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }
    console.log(obj)
    for (let letter of str2) {
        if (!obj[letter]) {
            console.log("false")
            return false
        } else {
            obj[letter] -= 1;
            console.log(obj)
        }
    }
    console.log("true")
    return true
}
anagram("ppyah", "happy")


