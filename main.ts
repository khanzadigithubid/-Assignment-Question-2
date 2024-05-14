// 2. Evaluating a number game:

// .  Prompt the user to enter a number.
// .  Compare the entered number with a dynamic number value.
// .  Output the result indicating whether the entered number is greater than, equal to, or less than the dynamic number value.

import inquirer from "inquirer";
let dynamicNumber = Math.floor(Math.random() * 100 + 1); 
let userNumber = await inquirer.prompt([
    {
    name: "name",
    type: "number",
    message: "Enter the number"
    }
]);

// Compare the entered number with the dynamic number value
let {name} = userNumber
if (name == dynamicNumber) {
    console.log("Entered number is greater than the dynamic number value.");
} else if (name === dynamicNumber) {
    console.log("Entered number is equal to the dynamic number value.");
} else {
    console.log("Entered number is less than the dynamic number value.");
}
