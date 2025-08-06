// let marks = 85;

// switch (true) {
//   case (marks > 95):
//     console.log(`Marks = ${marks} - A**`);
//     break;

//   case (marks >= 90 && marks <= 95):
//     console.log(`Marks = ${marks} - A*`);
//     break;

//   case (marks >= 85 && marks <= 90):
//     console.log(`Marks = ${marks} - A`);
//     break;

//   default:
//     console.log(`Marks = ${marks} - We don't have the grading criteria less than 85, we're sorry!`);
//     break;
// }



// MDN Web Docs
let expr = "Papayas";

switch (expr) {

  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}



// const foo = 0;
// switch (foo) {
  
//     case -1:
//     console.log("negative 1");
//     break;
  
//     case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through

//     case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
  
//     case 2:
//     console.log(2);
//     break;
  
//     default:
//     console.log("default");
// }
// Logs 0 and 1