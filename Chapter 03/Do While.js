// Ask the user for their favorite color 
// (pretend with a variable)
// and keep asking until they say "blue".


let user_color = prompt("Color here: ")
do {
    if (user_color == "blue"){
        console.log("Exiting the code")
        break;
    } else {
        console.log(`User choose ${user_color}, not "Blue"`)
    }
} while (user_color == "blue");
