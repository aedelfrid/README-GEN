// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./assets/modules/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Welcome to the READMEGEN, would you like to generate a README?'
    },
    {   
        when: (answers) => answers.start == true,
        type: 'checkbox',
        name: 'sectionsIncl',
        message: 'What sections would you you like to include? (Note: The description and License are included by default)',
        choices: ['Installation','Usage','Contributing','Tests']
    },
    {
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'description',
        message: 'What does your project do?'
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Installation')
        },
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Usage')
        },
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'githubLink',
        message: 'Please provide a link to your GitHub Profile'
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'email',
        message: 'What is your Email?'
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Contributing')
        },
        type: 'input',
        name: 'contributing',
        message: 'What is the best way to contribute to your project?'
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Tests')
        },
        type: 'input',
        name: 'tests',
        message: 'What is the best way to test your project?'
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'checkbox',
        name: 'licenseSelect',
        message: 'Which license would you like to use?',
        choices: ['MIT','Mozilla Public License 2.0','GNU AGPLv3','The Unlicense']
    },
];

// inquirer function

const askQuestion = async () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const md = generateMarkdown(answers)
            
            writeToFile(answers.title, md)
        })

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`./generated-assets/${fileName}.md`, data, (err) => {
        if (err) throw err
        else console.log('Saved');
    });
};

// TODO: Create a function to initialize app
function init() {
    askQuestion();
};
// Function call to initialize app

init();