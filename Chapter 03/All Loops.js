// Below is the link expalining all the loops in JS
// https://chatgpt.com/share/689f0d83-e774-800a-b5b0-1da3e1ab8129

// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Cookie " + i);
}
console.log("Cookie Loop Ended!")

// While Loop
let candies = 3;

while (candies > 0) {
    console.log("Candy eaten!");
    candies--;
}
console.log("Fac this shit, we're out of candies!")

// Do While Loop
let balloons = 0;

do {
    console.log("Blow a balloon!");
    balloons++;
} while (balloons < 3);
console.log("Fac this shit!, all ballons are blown up and we're out of em now!")

// For of Loop
let fruits = ["🍎", "🍌", "🍇"];

for (let fruit of fruits) {
    console.log("I like " + fruit);
}
console.log("Fac this shit!,we're out of fruits now!")

// For In Loop
let toy = { name: "Car", color: "Red", wheels: 4 };

for (let key in toy) {
    console.log(key + ": " + toy[key]);
}



