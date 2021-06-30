//OBJECTS
let instructor = {
    firstName: "Drew",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

// Lists all keys of Object in an array
Object.keys(instructor)

// Lists all values of Object in an array
Object.values(instructor)

// Lists all [key, values] in an object. Each [key, value gets its own array]
Object.entries(instructor)

// Returns boolean whether the key exists in the object or not (true/false)
instructor.hasOwnProperty("firstName")


//ARRAYS
let names = ["Drew", "Joe", "David"]

//Dealing with the end of an Array
//pushing to an Array is O(1)
names.push("Kevin")
//poping an Array is O(1)
names.pop("Kevin")

//Dealing with the beginning of an Array
//unshifting to an Array is O(N)
names.unshift("Kevin")
//shifting to an Array is O(N)
names.shift("Kevin")

