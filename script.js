const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log()

rl.question("Enter your first number: ", (number1) => {
  rl.question("Enter an operator (+, -, *, /): ", (operator) => {
    rl.question("Enter your second number: ", (number2) => {
      const a = parseFloat(number1);
      const b = parseFloat(number2);
      let result;

      switch(operator) {
        case "+": result = a + b; 
          break;
        case "-": result = a - b;
          break;
        case "*": result = a * b;
          break;
        case "/": result = a / b;
          break;
      }

      console.log();
      console.log(`Result: ${result}`)
      console.log();
      rl.close();
    })
  })
})