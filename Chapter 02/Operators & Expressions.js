// Operators in JS


// Arithmetic Operators
// + - * / %  ** ++ --

// let x = 2 
// let y = 4

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y)
// console.log(x ++ y)
// console.log(x -- y)

// let a = 7 
// let b = 3

// console.log(a % b)


// console.log(`The value of x++ is ${x++}`)
// console.log(`1: The value of x is ${x}`)
// console.log(`2: if I do x++ then the value is still ${x++}`)
// console.log(`3: No, but the value of x in the backend is already incremented! and now if you print x so the value is  ${x}`)

// console.log("-------------------------------------------")

// console.log(`But the value of ++x is ${++x}`)


// Assignment Operators
// = -= += *= /= 

// let x = 30

// console.log(x += 5 )
// console.log(x -= 5)
// console.log(x *= 5)
// console.log(x /= 5) 

// Comparision Operators
// > < >= <= != == === ?

let a = 5
let b =  10

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(5 != 3);     // true, because 5 is not equal to 3
console.log(5 != '5');   // false, because values are equal (type is ignored)

console.log(5 == '5');   // true, because values are equal (type doesn't matter)
console.log(0 == false); // true, because JavaScript considers them equal
console.log(null == undefined); // true, because both represent "no value"


console.log(5 === 5);     // true, same value and same type
console.log(5 === '5');   // false, same value but different type (number vs string)
console.log(true === 1);  // false, true is boolean, 1 is number


console.log(5 !== '5');   // true, value is same but type is different
console.log(3 !== 3);     // false, both value and type are same


let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
// If age is 18 or more, canVote will be "Yes", otherwise "No"
console.log(canVote); // "Yes"


// Logical Operators
// Logical AND (&&): Returns true if both operands are true, otherwise returns false.
let x = 5;
let y = 10;
let result1 = (x < 10 && y > 5); // true because both conditions are true

// Logical OR (||): Returns true if at least one operand is true, otherwise returns false.
let ab = 3;
let ba = 8;
let result2 = (ab < 2 || ba > 5); // true because at least one condition is true

// Logical NOT (!): Returns true if the operand is false, and vice versa.
let c = true;
let result3 = !c; // false, because c is true and ! flips it to false

// Example of combining logical operators:
let isValid = (x > 0 && y < 20) || (a === 3 && b !== 7);

