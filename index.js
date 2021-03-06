const inquirer = require("inquirer");
// grabbing the code inside markdown.js
const gMark = require('./markdown.js');
// command line questions
    inquirer
  .prompt([
    {
        name: 'instructions',
        message: "If you wish to separate your description section into bullet points, simply insert || between each comment! (hey || how are you || thats great!)"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a description about your project"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Give an explanation on how to install your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe how to you run and operate your project"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who helped you with building this project?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project",
        choices: ['MIT', 'Apache', 'BSDv3', 'BSDv2', 'LGPL', 'GNUv3', 'GNUv2', 'WTFPL']
    },
    {
        type: 'input',
        name: 'tests',
        message: "Do you have tests in your App?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your Email?"
    },
    {
        type: 'input',
        name: 'contact',
        message: "List other alternatives people can contact with? (Twitter, linkedIn)"
    }
  ])
  .then(answers => {
    //   if no errors build the readme
    gMark.generateReadMe(answers);
  })
  .catch(error => {
    //   if errors console log the error
   console.log(error)
  });

  