const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter Project Title",
    projectTitle: "projectTitle",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter Description",
    description: "description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter Installation Instructions",
    installInstructions: "installationInstructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter user information",
    usageInformation: "UsageInformation",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter Contribution Guidelines ",
    contributionGuidelines: "contribution Guidelines",
  },
  {
    type: "input",
    name: "instructions",
    message: "Please enter Test Instructions ",
    testInstructions: "test instructions",
  },
  {
    type: "list",
    name: "license",
    message: "select the license",
    choices: ["MIT", "APACHE2.0", "ISC", "NONE"],
  },
  {
    type: "input",
    name: "username",
    message: "please enter github username",
  },
  {
    type: "input",
    name: "email",
    message: "please enter github email",
  },

  {
    type: "input",
    name: "test",
    message: "please enter test scenarios",
  },
  {
    type: "input",
    name: "questions",
    message: "please enter all questions",
  },
];

// // function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(fileName, data);
// }

//function to initialize program
function init() {
  const README = Date.now();
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("README.md", generateMarkdown(response), "utf8", (err) => {
      if (err) throw err;
    });
  });
}

init();
