const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(question).then((response) => {
    console.log(response);
    writeToFile("Readme.md", generateMarkdown(response));
  });
}

// function call to initialize program
init();
