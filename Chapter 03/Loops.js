//  There are 5 types of Loops in Js
// For, While, Do While, For Of, For In

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration number: " + i);
// }

// let sum = 0 // Ye wo variable hai jismein final value store hogi
// let num = 5 // Ye wo variable hai jiski value ko loop ki iteration mein plus kia jayega


// // i ek iterator hai jo iterate hoga aurr apne anderr hii value ko add karta rahega
// for (let i = 0; i < num; i++) {
//     sum += i + 1
// };
// console.log(`The sum of first ${num} numbers is ${sum}`)



// let myname = 'Shaheer'

// for (let i = 0; i < myname.length; i ++) {
//     console.log(myname[i])
// }


let myname = 'Shaheer';

for (let char of myname) {
    console.log(char);
}
