// For arrays, use methods like "slice", "the spread operator", and "concat", that make copies of arrays so you do not mutate them. 
// Strings are immutable so you need to use meathods like "slice, "substr", or "substring" to make copies of strings
// To make copies of objects use Object.assign, or the spread operator

// Problem 1
const collectOddValues = (arr) => {
    let newArr = [];
    if (arr.length === 0) {
        return newArr
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    console.log(newArr)
    return newArr
}

collectOddValues([1, 2, 3, 4, 5])