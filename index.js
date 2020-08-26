// * The generated README includes 1 badge that's specific to the repository.

//pull in inquirer and fs to write to the file
const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
const questions = [];

// function to initialize program
// function init() {}
//reference the var on line 1 and use the prompt method()
//this is asyncronous
inquirer
  .prompt([
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
  ])
  //below you see what happens WHEN the response returns
  .then(function (response) {
    //strigify the returned response WITH FORMATTING
    let responseObj = JSON.stringify(response, null, 4);
    console.log(responseObj);
    // function to write README file
    // function writeToFile(fileName, data) {}
    fs.writeFile("readME.md", responseObj, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });


// // function call to initialize program
// init();

