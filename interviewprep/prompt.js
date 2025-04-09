const readline = require('readline');

// Create an interface to ask the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("What is your age? ", function(age) {
  console.log(`Your age is ${age}`);
  rl.close(); // Close the interface after receiving input
});