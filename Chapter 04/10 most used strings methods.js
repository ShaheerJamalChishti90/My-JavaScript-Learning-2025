let myString = "   Hello, world! This is a test.   ";

// 1. .trim()
console.log(".trim():", myString.trim()); 
// Output: "Hello, world! This is a test."

// 2. .slice()
console.log(".slice(0, 15):", myString.trim().slice(0, 15)); 
// Output: "Hello, world! T"

// 3. .split()
console.log(".split(' '):", myString.trim().split(" ")); 
// Output: ["Hello,", "world!", "This", "is", "a", "test."]

// 4. .replace()
console.log(".replace('test', 'example'):", myString.trim().replace("test", "example")); 
// Output: "Hello, world! This is a example."

// 5. .replaceAll()
console.log(".replaceAll(' ', '-'):", myString.trim().replaceAll(" ", "-"));
// Output: "Hello,-world!--This-is-a-test."

// 6. .concat()
let additionalString = " Have a great day!";
console.log(".concat():", myString.trim().concat(additionalString));
// Output: "Hello, world! This is a test. Have a great day!"

// 7. .toLowerCase()
console.log(".toLowerCase():", myString.toLowerCase()); 
// Output: "   hello, world! this is a test.   "

// 8. .toUpperCase()
console.log(".toUpperCase():", myString.toUpperCase()); 
// Output: "   HELLO, WORLD! THIS IS A TEST.   "

// 9. .includes()
console.log(".includes('world'):", myString.includes("world")); 
// Output: true

// 10. .indexOf()
console.log(".indexOf('is'):", myString.indexOf("is")); 
// Output: 22

// 11. .startsWith()
console.log(".startsWith('   Hello'):", myString.startsWith("   Hello")); 
// Output: true

// 12. .endsWith()
console.log(".endsWith('test.   '):", myString.endsWith("test.   ")); 
// Output: true