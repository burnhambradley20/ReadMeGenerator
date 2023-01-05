// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the installation instruction?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how to make contributions?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how to run test?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3'],
        message: 'choose a license'
    },
    {
        type: 'input',
        name: 'GithubID',
        message: 'enter Github ID'
    },
    {
        type: 'input', 
        name: 'Email',
        message: 'enter email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();


