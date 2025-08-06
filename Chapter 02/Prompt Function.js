// In Node.Js you cant use the prompt(), alert() and confirm() like you can use them in the browser
// so for using the prompt(), you gota download one package 
// Run the below command in your command-line-terminal
// npm install prompt-sync


const prompt = require("prompt-sync")();

let x = prompt("Enter x: ");
let y = prompt("Enter y: ");

console.log(`x is ${x}`);
console.log(`y is ${y}`);
