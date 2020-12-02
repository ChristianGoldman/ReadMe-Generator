const inquirer = require("inquirer");
const gMark = require('./markdown.js');

// inquirer questions for the user
// next 4 questions......
// use || to seperate lines
// check for || 
// add this to before generate readme markdown.js 
// add split() on double pipes
// google split on double pipes
    inquirer
  .prompt([
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
        message: "Give a brief explanation on how to install your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "usage goes here"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Can other developers contribute?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project",
        choices: ['MIT', 'Apache']
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
        message: "How can people contact you?"
    }
  ])
  .then(answers => {
    gMark.generateReadMe(answers);

  })
  .catch(error => {
   console.log(error)
  });