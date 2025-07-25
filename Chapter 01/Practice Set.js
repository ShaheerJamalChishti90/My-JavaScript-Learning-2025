// Create a variable of type string and try to add a number to it and use the "typeof" operator to find the type of that variable 

let a = "75" + 5
console.log(a)
console.log(typeof a)

// Create a const object, can you change it to hold a number later?

const b = {
    country:"germany",
    "capital":"berlin"
    }  

// b = "Shaheer" // we can not change the const value to any other datatype


// but we can change the particular value of the object like this
b["capital"] = "Frankfurt" 

// Try to add a new key to the const b object (yes im able to add a new key to this object)

b["military_rank"] = "25th Globally" 


console.log(b)