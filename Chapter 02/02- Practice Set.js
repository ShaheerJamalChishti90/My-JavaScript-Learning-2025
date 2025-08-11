// Question 01: Check wether the age lie between 10 and 20

// let age = 5;

// if (age > 10 && age < 20) {
//     if (age < 15 && age > 20 ){
//         console.log(`Yes the age of a person lies between 15 and 20!`)
//     }
// } else {
//     console.log(`No! The age of a person doesnt lie between 10 and 20!`)
// }

// Demonstrate the use of switch case statement in Js
// let day = "Friday";

// switch (day) {
//     case "Monday":
//         console.log(`Today the day is Monday!`);
//         break;

//     case "Tuesday":
//         console.log(`Today the day is Tuesday!`)
//         break;

//     case "Wednesday":
//         console.log(`Today the day is Wednesday!`)
//         break;
    
//     case "Thursday":
//         console.log(`Today the day is Thursday!`)
//         break;
    
//     case "Friday":
//         console.log(`Today the day is Friday!`)
//         break;

//     case "Saturday":
//         console.log(`Today the day is Saturday!`)
//         break;

//     case "Sunday":
//         console.log(`Today the day is Sunday!`)
//         break;

//     default:
//         console.log(`This is the default case and we dont have such day in our standard week system!`)
//         break;
// }


// Write a program to check if the number is divisible by 2 or 3
// let num = 44

// if (num % 2 == 0 && num % 3 == 0) {
//     console.log(`The number ${num} is divisible by both 2 and 3`)
// }

// else if (num % 2 == 0) {
//     console.log(`The number ${num} is divisible by 2`)
// } 

// else {
//     if (num % 3 == 0) {
//         console.log(`The number ${num} is divisible by 3`)
//     }
// }


// Print if the driver is eligible to drive or not based on his age using ternary operator
let age = 8;
let drive = (age >= 18) ? "You can drive!":"You can not drive!";
console.log(drive)