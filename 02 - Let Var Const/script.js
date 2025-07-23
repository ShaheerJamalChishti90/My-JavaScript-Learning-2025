// var and let are used to define a variable and a blocked scoped variable
// Let also doesnt allow to redeclare the value; but i can add the value in the same variable later by removing the let

let boy_name = "Shaheer Jamal";
boy_name = "Abdul Basit";
let age = 19;

// const means the constant value; these values cannot be change throughout the code
const language = "Python";
// language = "Urdu" -- This line is going to throw an error bc i can not redeclare the const 

// console.log(boy_name, "is a ", age, "year old", language, "developer")
// console.log(`${boy_name} is a ${age} year old developer who has the command on ${language}`)


// To create  an Object in Js
const obj = {
                "City":"Karachi",
                "City":"Lahore",
                "City":"Islamabad"    
            }

console.log(boy_name)