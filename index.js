// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./assets/modules/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Welcome to the READMEGEN, would you like to generate a README?',
        default: true,
    },
    {   
        when: (answers) => answers.start == true,
        type: 'checkbox',
        name: 'sectionsIncl',
        message: 'What sections would you you like to include? (Note: The description and License are included by default)',
        choices: ['Installation','Usage','Contributing','Tests'],
        default: ['Installation','Usage','Contributing','Tests'],
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        default: `READMEGEN`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
        default: `README GEN is a helpful tool to quickly make a professional RRADME for your project.`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Installation')
        },
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        default: `You can install README GEN by cloning the github project and running 'npm i' in your CLI to install the dependencies.`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Usage')
        },
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        default: `You can use README GEN by running 'node index.js' in your CLI and answering all the questions.`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        default: `aedelfrid`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'githubLink',
        message: 'Please provide a link to your GitHub Profile',
        default: `https://github.com/aedelfrid`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
        default: `almck51@gmail.com`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Contributing')
        },
        type: 'input',
        name: 'contributing',
        message: 'What is the best way to contribute to your project?',
        default: 
        `If you'd like to contribute to README GEN, simply clone the project and checkout to a new branch then commit as normal. 
        Finally, when ready for merging please seek permission from aedlfrid.`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true && 
                answers.sectionsIncl.includes('Tests')
        },
        type: 'input',
        name: 'tests',
        message: 'What is the best way to test your project?',
        default: `Run the project and generate a readme!`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {
        when: (answers) => {
            return answers.start == true
        },
        type: 'list',
        name: 'licenseSelect',
        message: 'Which license would you like to use?',
        choices: ['MIT','Mozilla Public License 2.0','GNU AGPLv3','Apache 2.0 License'],
        default: `MIT`,
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
];

// inquirer function

const askQuestion = async () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const md = generateMarkdown(answers)
            
            writeToFile(answers.title, md.toString())
        })

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`./assets/generated-assets/${fileName.split(' ').join('_')}.md`, data, (err) => {
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