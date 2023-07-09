// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
        name: 'sections to include',
        message: 'What sections would you you like to include? (Note: The description and License are included by default)',
        choices: ['Installation','Badges', 'Usage','Support','Roadmap', 'Contributing','Authors']
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
    }
];

// inquirer function

const askQuestion = async () => {
    inquirer.prompt(questions).then((answers) => {
            console.log(answers)
            return answers
        })
};

const sectionsHandler = async (data) => {
    if (await data._canBegin == true) {
        data.sectionsIncl = askQuestion(questions[1]);
    }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
};

// TODO: Create a function to initialize app
(async function init() {
    await askQuestion();
})();
// Function call to initialize app
