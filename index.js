// TODO: Include packages needed for this application
const fs = require("fs"); // file system in place, node module that deals with all files, typically needed in node applications 
const inquirer = require("inquirer"); // the software that we need to download to run this project 
const path = require("path"); // taking all of the const responses and putting them into generateMarkdown.js
const generateMarkdown = require("./generateMarkdown.js"); // pulling what we create in generateMarkdown.js and putting it back in index.js 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Type your project title.",
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a detailed description of your project.",
    },

    {
        type: "input",
        name: "screenshot",
        message: "Please provide a relative path to the image you want to use to display a screenshot of your deployed application.",
    },

    {
        type: "input",
        name: "link",
        message: "Please provide a live URL link where a user can access your deployed application.",
    },

    {
        type: "list",
        name: "license",
        message: "Please select the license that is applicable to your project.",
        choices: [
            "None", 
            "MIT", 
            "Apache 2.0", 
            "MPL 2.0", 
            "Creative Commons", 
            "Other"],
    },

    {
        type: "input",
        name: "require",
        message: "Provide a list of your project dependencies here:",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installing your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide directions for usage of your project:",
    },

    {
        type: "input",
        name: "creator",
        message: "What is your Github Username?",
    },

    {
        type: "input",
        name: "email",
        message: "Type your primary email address.",
    },

    {
        type: "input",
        name: "contributors",
        message: "Please list all users that assisted with the creation of this project.",
    },

    {
        type: "input",
        name: "test",
        message: "Please provide the testing instructions for this application.",
    },  
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating Professional README File..."); // loading the readme file that is being generated after the prompts are entered
        writeFile("./finalproduct/README.md", generateMarkdown({ ...responses })); // writes the readme file when function is completed 
      });
    }

// Function call to initialize app
init();
