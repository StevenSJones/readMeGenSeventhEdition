//pull in inquirer and fs to write to the file
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GITHUB username?",
    name: "githubUser",
  },
  {
    type: "input",
    message: "What is your GITHUB repo name?",
    name: "githubRepo",
  },
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
    message: "Would you like to provide a table of contents for the work in question?",
    name: "tableOfContentsInput",
  },
  {
    type: "input",
    message: "Would you like to provide the installation for the work in question?",
    name: "installationInput",
  },
  {
    type: "input",
    message: "Would you care to provide the usage for the work in question?",
    name: "usageInput",
  },
  {
    type: "input",
    message: "Would you like to provide the license for the work in question?",
    name: "licenseInput",
  },
  {
    type: "input",
    message: "Would you like to provide the contributing for the work in question?",
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
];

//reference the var on line 1 and use the prompt method()
//this is asyncronous
inquirer
  .prompt(questions)
  //below you see what happens WHEN the response returns
  .then(function (response) {
    console.log("response: ", response);
    //strigify the returned response WITH FORMATTING
    //let responseObj = JSON.stringify(response, null, "\t");
    let responseObj = response;
    console.log(responseObj);
    //instead of stringify I am passing the response obj into the function and since the
    responseObj = generateMarkdown(responseObj);

    fs.writeFile("readME.md", responseObj, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  });
