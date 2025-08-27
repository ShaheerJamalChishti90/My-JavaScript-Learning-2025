// These are higher-order functions—you give them another function,
//  and they process the array in a powerful way.


// For each Method
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num ** 2); // 2, 4, 6
});


// Mapping Method
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]


// Filter Method
let evens = numbers.filter(function(num) {
  return num % 2 === 0;  // keep even numbers
});
console.log(evens); // [2]



let nums = [10, 15, 20, 25];

// forEach: print numbers
nums.forEach(n => console.log(n)); 
// 10, 15, 20, 25

// map: multiply all numbers by 2
let doubledNums = nums.map(n => n * 2);
console.log(doubledNums); // [20, 30, 40, 50]

// filter: keep numbers greater than 15
let greaterThan15 = nums.filter(n => n > 15);
console.log(greaterThan15); // [20, 25]
