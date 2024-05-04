#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// initializing account balance and pin code //
let balance = 500000
let pinnumber = 3817

console.log(chalk.hex('#0f1056')("⁺-^-+_+-^-⁺ Welcome to Iqrz-ATM-Machine ⁺+-^+-_-+^-⁺"));

let pinAnswer = await inquirer.prompt([
    {
    name:"pin",
    type:"number",
    message:chalk.hex('	#81b1ce')("Enter your pin code(3817): ")
    }
])
if(pinAnswer.pin === pinnumber){
    console.log(chalk.hex('#65fe08')("Pin is correct, Login successful."))
    // console.log(current account balance is ${balance})

let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message:chalk.hex('	#81b1ce')("Select an operation"),
        choices:["Withdraw amount","Check balance"]
    }
])
if(operationAns.operation === "Withdraw amount"){
    let withdrawAns = await inquirer.prompt([
        {
            name:"withdrawmethod",
            type:"list",
            message:chalk.hex('	#81b1ce')("Select a withdrawl method: "),
            choices:["Fast Cash","Enter Amount"]
        }
    ])
    if(withdrawAns.withdrawmethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name:"fastcash",
                type:"list",
                message:chalk.hex('	#81b1ce')("Select amount:"),
                choices:[1000,2000,5000,10000,50000,100000,500000]
            }
        ])
        if(fastCashAns.fastcash > balance){
            console.log(chalk.hex('	#a91101')("Insufficient balance!"))
        }
        else{
            balance -= fastCashAns.fastcash
            console.log(`${fastCashAns.fastcash} withdrawn succesfully`);
            console.log(chalk.hex('#65fe08')(`your remaining balance is ${balance}`))
        }
    }
    else if(withdrawAns.withdrawmethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type: "number",
                message:chalk.hex('	#81b1ce')("Enter the amount to withdraw:")
            }
        ])
        if(amountAns.amount > balance){
            console.log(chalk.hex('	#a91101')("Insufficient balance"))
        }
        else{
            balance -=amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`)
            console.log(chalk.hex('	#151269')(`your remaining balance is: ${balance}`))
        }
    }
}
    else if (operationAns.operation === "Check balance"){
    
        console.log(chalk.hex('#65fe08')(`Your account balance is: ${balance}`))
    }}
else{
    console.log(chalk.hex('	#a91101')("Pin is incorrect, Try again"));
}