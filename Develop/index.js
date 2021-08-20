// TODO: Include packages needed for this application
const inquiror = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown'); 
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

const licenses = []; 
const questions = [
    {
        type: "input",
        name: "title", 
        message: "Enter the title of your project",
    },
    {
        type: "input",
        name: "email", 
        message: "enter your email address",
    },
    {
        type: "input",
        name: "github", 
        message: "Enter yourt Github username",
    },
    {
        type: "input",
        name: "description", 
        message: "Enter a breif description of your project",
    },
    {
        type: "input",
        name: "installation", 
        message: "Enter the steps required to install your project",
    },
    {
        type: "input",
        name: "useage", 
        message: "Provide instructions and an examples for use",
    },
    {
        type: "input",
        name: "contibuting", 
        message: "list your collaborators",
    },
    {
        type: "list",
        name: "license", 
        message: licenses,
    },
    {
        type: "input",
        name: "tests", 
        message: "Exmplain how to run the tests included in your application",
    },  
];

// TODO: Create a function to write README file
const writeToFile = (readmeInput) => {
    fs.writeFile("./Examples/README.md", generateMarkdown(readmeInput), (err) =>{
        if (err) {
            return console.log(err); 
        }
        
        console.log("File Created!!!:"); 
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data); 
        return writeToFile(data); 
    })
    .catch((err) => {
        console.log(err); 
    }); 
}

// Function call to initialize app
init();
