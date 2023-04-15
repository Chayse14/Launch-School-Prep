const variables = (prompt)=>{
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}
let firstNumber = variables('What is your first number?');
let secondNumber = variables("What is your second number?");
console.log(firstNumber * secondNumber);