// There are 3 Conditional Statements in Js
// IF, ELSE-IF, ELSE

// IF Condition
let x = 5;
let y = 5;
console.log()

console.log(`This is the only IF Statement`)
if (y < 10){
    console.log(`y = ${x} is less than 10!`)
}
console.log()

console.log(`This is the IF-ElSE Statement`)
if (x > 10){
    console.log(`x = ${x} is greater than 5!`)
}
else {
    console.log(`x = ${x} is not greater than the hardcoded number!`)
}
console.log()

console.log(`This is the IF-ElSE_IF-Else Statement`)
if (x > 10){
    console.log(`${x} is greater than 10!`)
}
else if (10 > x > 1){
    console.log(`${x} is in between 1 and 10, as its greater than 1 but less than 10!`)
}
else{
    console.log(`Fuck this ${x}, its not either greater than 1 or 10!`)
}


// Ternary Operator: ?
console.log()
console.log("Learning bout Ternary Operator")

let marks = 85;
(marks > 80) ? console.log("He's passed with the flying colors"):console.log("His result is evaluated yet")