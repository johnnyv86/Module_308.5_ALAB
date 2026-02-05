/* ------------------------------------------------------------------------------------------------------------
    1 - THINKING FUNCTIONALLY
------------------------------------------------------------------------------------------------------------- */
// 1. Take an array of numbers and return the sum.
function sumArray(numbers) {                    // (numbers is an array [1, 2, 3, 4, 5])
    let sum = 0                                 // starts sum at 0
    for (const n of numbers) {                  // (for . . . of) iterate through each number
        sum += n;                               // Add each number to sum
    }
    return sum;                                 // Returns the final sum
}


// 2. Take an array of numbers and return the average.
function averageArray(numbers) {
    if (numbers.length === 0) return 0;         // Checks if array is empty (avoids division by zero)
    return sumArray(numbers) / numbers.length;  // sum of all numbers / Divides by `number.length` = returns mean
}

// 3. Take an array of strings and return the longest string.
function longestString(strings) {
    if (strings.length === 0) return "";        // If string is empty, will return an empty string

    let longest = strings[0];                   // Assums first string is the longest
    for (const str of strings) {                // (for . . . of) iterate through each number
        if (str.length > longest.length) {      // If `str.length` is greater, update `longest`
            longest = str;
        }
    }
    return longest; //                          // Return the longest string
}

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strings, miniLength) { // (srigns): array of strings | (miniLength): number
    const result = [];                            // will loop through each string
    for (const str of strings) {                  // (for . . . of) iterate through each string
        if (str.length > miniLength) {            // If its `.length` is greater than `miniLength`
            result.push(str);                     // push str into `result` to be returned 
        }
    }
    return result;
}


// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion
                                                    // Recursion - a function calling itself
function printNumberRecursively(n, current = 1) {   // (n): the max number to print
                                                    // (current): which number being printed (default to 1)
    if(current > n) {                               // will stop (no more calls)
        return;
    }
    console.log(current);                           // (current) number being printed
    printNumberRecursively(n, current + 1);         // (current + 1) calls the same function
}                                                   // for (let i=1; i<=n; i++) loop type replaced by 



/* ------------------------------------------------------------------------------------------------------------
    2 - THINKING METHODICALLY (Array Methods)
------------------------------------------------------------------------------------------------------------- */
// CONSTANT
const peopleData = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

// 1. Sort the array by age.
const sortedByAge = [...peopleData].sort((a, b) => {
    return Number(a.age) - Number(b.age);
});
/* EXPLANATION ----
    [...peopleData]: makes a shallow copy (prevents mutation of original array)
    (sort): expects a comparator: 
        if results < 0 -> a before b
        if results > 0 -> b before a 

    Number(a.age) - Number(b.age)
        sorts ascending by numeric age
---------------------------------------------------------------------------------------- */

// 2. Filter the array to remove entries with an age greater than 50.
const age50OrLess = sortedByAge.filter((person) => Number(person.age) <= 50);
/* EXPLANATION ----
    (filter): keeps elements that the callbacks return as (true)
    keeps ONLY people with (age <= 50)
---------------------------------------------------------------------------------------- */


// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedPeople = age50OrLess.map((person) => {
    return {
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: String(Number(person.age) + 1)
    };
});
/* EXPLANATION ----
    (job: person.occupation)
        `occupation` key changed to `job`
    (age: String(Number(person.age) + 1))
        increment every age by 1
---------------------------------------------------------------------------------------- */


// 4. Use the reduce method to calculate the sum of the ages.
const totalAge = mappedPeople.reduce((sum, person) => {
    return sum + Number(person.age);
}, 0);
/* EXPLANATION ----
    [reduce(callback, initialValue)]
        for each (person), add Number(person.age) to (sum)
        final (totalAge) is the sum of ages
---------------------------------------------------------------------------------------- */

// 5. Then use the result to calculate the average age
const averageAgeMapped = mappedPeople.length > 0    // Avoid dividing by zero if array is empty
    ? totalAge / mappedPeople.length
    : 0;


/* =============================================================================================================================================
    PART 3: THINKING CRITICALLY 
============================================================================================================================================= */
// 1. Take an object and increment its age field.
function incrementAgeField(obj) {
    if (typeof obj.age === "undefined") {   // Assess if (obj.age) exist or not
        obj.age = 0;                        // If (obj.age) doesn't exist, sets it to 0
    } else {
        obj.age = Number(obj.age);          // If (obj.age) does exist, will ensure it is a number
    }
    obj.age += 1;                           // Increments age by 1
}

// 2. Take an object, make a copy, and increment the age field of the copy. 
function incrementAgeInplace(person) {
    incrementAgeField(person);              // calls the ORIGINAL object directly
    person.update_at = new Date();          // sets (update_at) to a NEW Date instance (current time)
    return person;                          // (person): is an object: changes inside function persist outside
}

// 3. Return the copy
function incrementAgeCopy(person) {
    const copy = {...person};               // Makes a shallow copy
                                            // modifies & returns copy leaving original as is
    incrementAgeField(copy);                // New Object:
    copy.updated_at = new Date();                   // Same Properties
                                                    // Same Values
    return copy;                                    // Different Object
}
