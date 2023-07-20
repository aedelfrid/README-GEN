const licenses = {
  MIT: {
    title: `MIT`,
    shield: `https://img.shields.io/badge/license-MIT-blue`,
    url: `https://opensource.org/license/mit/`
  },
  Mozilla: {
    title: `Mozilla Public License 2.0`,
    shield: `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`,
    url: `https://opensource.org/license/mit/`
  },
  GNUAGPLv3: {
    title: `AGPL v3`,
    shield: `https://img.shields.io/badge/License-AGPL_v3-blue.svg`,
    url: `https://www.gnu.org/licenses/agpl-3.0`
  },
  Apache: {
    title: `Apache 2.0 License`,
    shield: `https://img.shields.io/badge/License-Apache_2.0-blue.svg`,
    url: `https://opensource.org/licenses/Apache-2.0`
  },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT' :
      license = licenses.MIT
      return `[![License: ${license.title}][${license.shield}]][${license.url}]`;
      case 'Mozilla Public License 2.0' :
      license = licenses.Mozilla
      return `[![License: ${license.title}][${license.shield}]][${license.url}]`;
      case 'GNU AGPLv3' :
      license = licenses.GNUAGPLv3
      return `[![License: ${license.title}][${license.shield}]][${license.url}]`;
      case 'Apache 2.0 License' :
      license = licenses.Apache
      return `[![License: ${license.title}][${license.shield}]][${license.url}]`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT' :
      return licenses.MIT.url;
    case 'Mozilla Public License 2.0' :
      return licenses.Mozilla.url;
    case 'GNU AGPLv3' :
      return licenses.GNUAGPLv3.url;
    case 'Apache 2.0 License' :
      return licenses.Apache.url;
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github, title) {
  switch (license) {
    case 'MIT' :
      return `
        Copyright ${getFullYear()} ${github}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),\n
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,\n
        and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n
        
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,\n 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\n 
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n 
        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH\n 
        THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n `;
    case 'Mozilla Public License 2.0' :
      return `
        This Source Code Form is subject to the terms of the\n
        Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed\n
        with this file, You can obtain one at\n
        https://mozilla.org/MPL/2.0/.
      `;
    case 'GNU AGPLv3' :
      return `
        ${title}<br>
        Copyright (C) ${getFullYear()} ${github}<br>

    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as
        published by the Free Software Foundation, either version 3 of the
        License, or (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Affero General Public License for more details.
    
        You should have received a copy of the GNU Affero General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
    case 'Apache 2.0 License' :
      return `
        Copyright ${getFullYear()} ${github}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
    
          http://www.apache.org/licenses/LICENSE-2.0
    
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
  }
};

const renderIntro = (title, description) => `
# ${title}
  
  ## Description
    
    ${description}<br>
  `
;

const renderTableOfContents = (sectionsIncl) => {

  let TOC = ``;
  
  for (let i=0; i < sectionsIncl.length; i++) {
    TOC += `[${sectionsIncl[i]}](##-${sectionsIncl[i]})<br>`
  }


  return `
  ## Table of Contents

    ${TOC}<br>
  `
};

const renderInstall = (installation) => `
        
  ## Installation
        
    ${installation}<br>
  `
;

const renderUsageIns = (usage) => `
        
  ## Usage
        
    ${usage}<br>
  `
;

const renderQuestionsContact = (github, githubLink, email) => `
        
  ## Questions
        
  Please direct questions to the following;
    ${github} ${githubLink}\n
      
    ${email}\n
  `
;

const renderTestsIns = (tests) => `
    
  ## Testing
    
  ${tests}\n
  `
;

const renderContributeIns = (contributing) => `
        
  ## Authors
        
  Contributions are what make the open source community such an amazing place to learn,<br>
  inspire, and create. Any contributions you make are greatly appreciated.<br>

  If you have a suggestion that would make this better, please fork the repo and create a <br>
  pull request. You can also simply open an issue with the tag "enhancement". <br>
  Don't forget to give the project a star! Thanks again!<br>
     
  ${contributing}\n
  `
;


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { 
    sectionsIncl, title, description, installation, usage, contributing,
    tests ,license, github, githubLink, email
  } = data
  
  let formattedMD = renderIntro(title, description) + renderTableOfContents(sectionsIncl)

  if (installation) {
     formattedMD += renderInstall(installation)
  };

  if (usage) {
    formattedMD += renderUsageIns(usage)
  };

  formattedMD += renderQuestionsContact(github, githubLink, email);

  if (contributing) {
    formattedMD += renderContributeIns(contributing)
  };

  if (tests) {
    formattedMD += renderTestsIns(tests)
  };

  formattedMD += renderLicenseBadge(license)

  formattedMD += renderLicenseLink(license)

  formattedMD += renderLicenseSection(license, github, title)

  return formattedMD

};

module.exports = generateMarkdown;