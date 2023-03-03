// TODO: Include packages needed for this application
const fs = require("fs"); // file system in place, node module that deals with all files, typically needed in node applications 
const inquirer = require("Inquirer"); // the software that we need to download to run this project 
const path = require("path"); // taking all of the const responses and putting them into generateMarkdown.js
const generateMarkdown = require("./generateMarkdown"); // pulling what we create in generateMarkdown.js and putting it back in index.js 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Type the name of your project.",
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a detailed description of your project.",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please select the license that is applicable to your project.",
        choices: ["None", "MIT", "BSD3", "APACHE2.0", "MPL2.0", "BSD2", "Boost1.0", "Creative Commons", "Other"],
    },

    {
        type: "input",
        name: "require",
        message: "Provide a list of your project dependancies here:",
    },

    {
        type: "input",
        name: "usage",
        message: "What coding languages were used in the creation of your project?",
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
