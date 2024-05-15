#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function calc() {
    let rainbowTitle = chalkAnimation.rainbow("Let's get start calcalution");
    await sleep();
    rainbowTitle.stop();
}
await calc();
async function ask() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "plz select the operator",
            choices: ["addition", "subtraction", "multiplication", "division"],
        },
        {
            type: "number",
            name: "number1",
            message: "enter the number1",
        },
        {
            type: "number",
            name: "number2",
            message: "enter the number2",
        }
    ])
        .then((answers) => {
        if (answers.operator === "addition") {
            console.log(chalk.green(`${answers.number1} + ${answers.number2} = ${answers.number1 + answers.number2}`));
        }
        else if (answers.operator === "subtraction") {
            console.log(chalk.red(`${answers.number1} - ${answers.number2} = ${answers.number1 - answers.number2}`));
        }
        else if (answers.operator === "multiplication") {
            console.log(chalk.blue(`${answers.number1} * ${answers.number2} = ${answers.number1 * answers.number2}`));
        }
        else if (answers.operator === "division") {
            console.log(chalk.yellow(`${answers.number1} / ${answers.number2} = ${answers.number1 / answers.number2}`));
        }
    });
}
;
async function startAgain() {
    do {
        await ask();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "do you want perform this  action again?"
            }
        ]);
    } while (again.restart === 'Y' || again.restart === 'y' || again.restart === 'yes' || again.restart === 'YES');
}
startAgain();
