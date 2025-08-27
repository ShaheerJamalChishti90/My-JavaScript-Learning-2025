let mixed = [1, "hello", true];
let fruits = ["apple", "banana", "mango"];
console.log(fruits);  // ["apple", "banana", "mango"]

// Indexing
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"

// Changing a value 
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]

// Using the length  fucntion
console.log(fruits.length); // 3

// Using the push and pop function
fruits.push("grape");
console.log(fruits); // ["apple", "orange", "mango", "grape"]

let lastFruit = fruits.pop();
console.log(lastFruit); // "grape"
console.log(fruits);    // ["apple", "orange", "mango"]




