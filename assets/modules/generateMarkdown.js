// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {`[![MIT License][license-shield]][license-url]`}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const renderIntro = () => {`
# ${title}
  
  ## Description
    
    ${description}
  `
};

const renderTableOfContents = () => {

  TOC = ``;
  
  for (let i=0; i < sectionsIncl.length; i++) {
    TOC += `[${sectionsIncl[i]}](##-${sectionsIncl[i]})/n`
  }


  `
  ## Table of Contents

    ${TOC}
  `
};

const renderInstall = () => {`
        
  ## Installation
        
    ${installation}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { 
    sectionsIncl, title, description, installation, usage, contributing,
    tests, github, githubLink
  } = data
  
  const usageIns = `
        
  ## Usage
        
    ${usage}
  `
/////////////////////////////////////////////
  const questionsContact = `
        
  ## Questions
        
  Please direct questions to the following;
    ${github} ${githubLink}
      
    ${email}
  `
///////////////////////////////////////////////
  const contributeIns = `
        
  ## Authors
        
  Contributions are what make the open source community such an amazing place to learn,<br>
  inspire, and create. Any contributions you make are greatly appreciated.<br>

  If you have a suggestion that would make this better, please fork the repo and create a <br>
  pull request. You can also simply open an issue with the tag "enhancement". <br>
  Don't forget to give the project a star! Thanks again!<br>
     
  ${contributing}
  `

//////////////////////////////////////////////////

const testsIns = `
    
  ## Testing
    
  ${tests}
`
  
// I know the above section is terrible and nigh unreadable but
// this is the only way it works the way it want it to.

  const formattedMD = intro

  if (installation) {
     formattedMD + install
  };

  if (usage) {
    formattedMD + usageIns
  };

  formattedMD + questionsContact;

  if (contributing) {
    formattedMD + contributeIns
  };

  if (test) {
    formattedMD + testsIns
  };

  return formattedMD

};

module.exports = generateMarkdown;