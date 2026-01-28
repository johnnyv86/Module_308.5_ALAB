/* =====================================
    PART 1: THINKING FUNCTIONALLY
======================================*/

// Take an array of numbers and return the sum.
function sumArray(numbers) { // (numbers) is an array (e.g., `[1,2,3]`)
    let sum = 0; // starts sum at 0
    for (const n of numbers) { // (for...of) to iterate through each number.
        sum += n; // Add each number to sum
    }
    return sum; // Returns the final sum
}

// Take an array of numbers and return the average.
function averageArray(numbers) {
    if (numbers.length === 0) return 0; // Checks for empty arrays to avoid division by zero.
    return sumArray(numbers) / numbers.length; // Divides by `numbers.length` to get the mean.
}

// Take an array of strings and return the longest string.
function longestString(strings) {
    if strings.length === 0) return ""; // If array empty, return an empty string.

    let longest = strings[0]; // Assums the first string is the longest.
    for (const str of strings) {
        if (str.length > longest.length) { // If `str.length` is greater, update `longest`.
            longest = str;
        }
    }
    return longest; // Returns the longest string 
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(strings, minLength) { // - (strings): array of strings. | (minLength): number.
    const result = []; // Loop through each string:
    for (const str of strings) {
        if (str.length > minLength) { //  If its `.length` is greater than `minLength`.
            result.push(str); // push it into `result`
        }
    }
    return result;
}

// For example, stringsLongerThan(
// ['say', 'hello', 'in', 'the', 'morning'], 3); 
// would return ["hello", "morning"].


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumberRecursively(n, current = 1) {
    if (current > n) {
        return;
    }
    console.log(current);
    printNumberRecursively(n, current + 1);
}

/* Recursion - A function calling itself ======================
    (n): the max number to print
    (current): which number being printed (will default to 1).
    if (current > n): will stop (no more calls)
Recursion - SETPS =============================================
    (current): Print
    (current + 1): Calls the same function
    for (let i=1; i<=n; i++) loop type replaced by Recursion
=============================================================*/




/* ===============================================
    PART 2: THINKING METHODICALLY (Array Methods)
================================================*/

const peopleData = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
const sortedByAge = [...peopleData].sort((a, b) => {
    return Number(a.age) - Number(b.age);
});
/* [...peopleData] =======================================================
        makes a Shallow Copy - prevents mutation of original array

    (sort): expects a comparator:
        If results < 0 -> a before b
        if results > 0 -> b before a
    
    Number(a.age) - Number(b.age)
        sorts ascending by numeric age
========================================================================*/

// Filter the array to remove entries with an age greater than 50.
const age50OrLess = sortedByAge.filter((person) => Number(person.age) <= 50);
// (filter): keeps elements for which the callback returns (true)
// Keeps ONLY people with (age <= 50)


// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedPeople = age50OrLess.map((person) => {
    return {
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: String(Number(person.age)+ 1)
    };
});

// Use the reduce method to calculate the sum of the ages.
const totalAge = mappedPeople.reduce((sum, person) => {
    return sum + Number(person.age);
}, 0);
/* [reduce(callback, initialValue)] ======================
    For each (person), add  Number(person.age) to (sum)
    Final (totalAge) is the sum of ages
========================================================*/

// Then use the result to calculate the average age.
const averageAgeMapped = mappedPeople.length > 0 // Avoid divide-by-zero if array is empty
? totalAge / mappedPeople.length
: 0; 