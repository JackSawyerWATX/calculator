## Simple Calculator (CLI)

This is a tiny command-line calculator written in Node.js. It prompts the user for two numbers and an operator (+, -, *, /), performs the calculation, and prints the result.

### Files

- `script.js` — the interactive calculator script that uses Node's `readline` to get input from the terminal.

### Requirements

- Node.js (any modern version; v10+ will work). To check your Node version run `node -v` in a terminal.

### How to run (Windows PowerShell)

1. Open PowerShell and change directory to the project folder:

```powershell
cd 'C:\Users\jonat\OneDrive\Desktop\calculator'
```

2. Run the script with Node:

```powershell
node .\script.js
```

3. Follow the prompts. Example session:

```
Enter your first number: 12.5
Enter an operator (+, -, *, /): *
Enter your second number: 4

Result: 50
```

### Behavior and notes

- The script uses `parseFloat` when converting input to numbers, so decimal values are supported.
- Dividing by zero will produce JavaScript's `Infinity` (no custom handling in the current script).
- The script currently does not validate the operator or inputs beyond `parseFloat` — entering a non-numeric value will produce `NaN` as the result; entering an unsupported operator will leave the result `undefined`.

### Suggestions / Next steps

- Add input validation (ensure numbers are valid and operator is one of +, -, *, /).
- Handle division-by-zero with a friendly error message.
- Support repeated calculations in a loop or add command-line flags for non-interactive use.

## I love you all! Happy coding!
