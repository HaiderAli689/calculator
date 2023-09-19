import inquirer from "inquirer";
async function calculator() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulus', 'Exponent'],
        },
    ]);
    const num1 = parseFloat(userInput.num1);
    const num2 = parseFloat(userInput.num2);
    let result;
    switch (userInput.operation) {
        case 'Addition':
            result = num1 + num2;
            break;
        case 'Subtraction':
            result = num1 - num2;
            break;
        case 'Multiplication':
            result = num1 * num2;
            break;
        case 'Division':
            if (num2 === 0) {
                console.log('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        case 'Modulus':
            if (num2 === 0) {
                console.log('Cannot calculate modulus with zero.');
                return;
            }
            result = num1 % num2;
            break;
        case 'Exponent':
            result = Math.pow(num1, num2);
            break;
        default:
            console.log('Invalid operation selected.');
            return;
    }
    console.log(`Result: ${result}`);
}
calculator();
