#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currencies = {
    USD: 1, // MAIN CURRENCY
    PKR: 280,
    INR: 83.311,
    BDT: 109.667,
    LKR: 298.623,
    SAR: 3.75,
    EUR: 0.922427,
    SYP: 13001.9,
    AED: 3.6725,
    AFN: 71.313,
};
let currenciesKeyToArry = Object.keys(currencies); // this method is use to iterate over each key and coveret it in to an arry
let currency = await inquirer.prompt([
    {
        message: "Select from which currency you want to converet",
        type: "list",
        name: "from",
        choices: currenciesKeyToArry,
    },
    {
        message: "Select to which currency you want to converet",
        type: "list",
        name: "to",
        choices: currenciesKeyToArry,
    },
    {
        message: "Enter the amount you want to coveret",
        type: "number",
        name: "amount",
    },
]);
let amount_to_Dollar = currency.amount / currencies[currency.from]; //inside object currencies square brackets [] we use currency.from,to access the value of what ever user select in currency.from
let covereted_dollar_to_desire_currency = amount_to_Dollar * currencies[currency.to];
console.log(chalk.bgGreen("\n", covereted_dollar_to_desire_currency));
