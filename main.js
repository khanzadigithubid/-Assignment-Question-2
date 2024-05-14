"use strict";
// 2. Evaluating a number game:
Object.defineProperty(exports, "__esModule", { value: true });
// .  Prompt the user to enter a number.
// .  Compare the entered number with a dynamic number value.
// .  Output the result indicating whether the entered number is greater than, equal to, or less than the dynamic number value.
var inquirer_1 = require("inquirer");
var dynamicNumber = Math.floor(Math.random() * 100 + 1);
var userNumber = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "number",
        message: "Enter the number"
    }
]);
// Compare the entered number with the dynamic number value
var name = userNumber.name;
if (name == dynamicNumber) {
    console.log("Entered number is greater than the dynamic number value.");
}
else if (name === dynamicNumber) {
    console.log("Entered number is equal to the dynamic number value.");
}
else {
    console.log("Entered number is less than the dynamic number value.");
}
