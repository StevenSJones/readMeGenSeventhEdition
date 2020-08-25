// * The generated README includes 1 badge that's specific to the repository.
// array of questions for user
const questions = [];

inquirer.prompt([
  {
    type: "input",
    message: "What is your title for the work in question?",
    name: "titleInput",
  },
  {
    type: "input",
    message: "Please provide a description of the work in question.",
    name: "descriptionInput",
  },
  {
    type: "input",
    message: "Please provide a table of contents for the work in question.",
    name: "tableOfContentsInput",
  },
  {
    type: "input",
    message: "Please provide the installation for the work in question.",
    name: "installationInput",
  },
  {
    type: "input",
    message: "Please provide the usage for the work in question.",
    name: "usageInput",
  },
  {
    type: "input",
    message: "Please provide the license for the work in question.",
    name: "licenseInput",
  },
  {
    type: "input",
    message: "Please provide the contributing for the work in question.",
    name: "contributingInput",
  },
  {
    type: "input",
    message: "Please provide the tests for the work in question.",
    name: "testsInput",
  },
  {
    type: "input",
    message: "Please provide the questions for the work in question.",
    name: "questionsInput",
  },
]);
//pull in inquirer and fs to write to the file
const inquirer = require("inquirer");
const fs = require("fs");

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
