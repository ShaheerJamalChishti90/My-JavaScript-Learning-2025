// let i = 0; 
// while (i <= 10) {
//     console.log("Hey! This is", i)
//     i ++
// }
// console.log("The program is end here! Thankyou for using our code")

// let i = 100; 
// while (i >= 50) {
//     i --
//     if (i == 78){
//         console.log("This is the 78th Birthday of Pakistan")
//     }
//     else {
//         console.log("Hey! This is", i)
//     }
// }
// console.log("The program is end here! Thankyou for using our code")


// while (true) {
//     let i = 0;
//     i ++ 
//     if (i < 10) {
//         console.log(i)
//     }
//     else {
//         console.log("The code is finished and I is no longer greater than 10!")
//     };
// }



// DO WHILE LOOP!
// var i = 101;
// do {
//  console.log(i);
// } while (i < 100, i --){
//     if (i == 50) {
//         console.log("")
//     }
// };

// Start with a number 10 and keep subtracting 1 until you reach 0.
// let i = 10
// while (i >= 0){
//     console.log(i)
//     i --
// }

// You have 7 chocolates. Print "🍫 Chocolate eaten!" until none are left.
// let c = 7
// let i = 7
// while (c >= 1){
//     console.log(`${c}th 🍫 eaten! ${i -= 1} left.`)
//     c --
// }
// console.log("🍫 Chocolate Finished!")

// Start with a number 1 and keep doubling it until it’s greater than 100.
let i = 1
while (i < 150){
    console.log(i)
    i ++ 
    if (i > 100){
        console.log(`i = ${i}, 'I' has has been increased and now is greater than 100`)
        break;
    }
    
}
console.log("Loop exited bc the value is now greater than 100")
