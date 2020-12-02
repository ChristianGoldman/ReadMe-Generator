const fs = require('fs');

// double pipes code goes below

function generateReadMe(answers) {
    const licenses = 
    {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    const readMe = `
# ${answers.title}
${licenses[answers.license]}
## Description  
${answers.description}
## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
${answers.title}  
## Usage   
${answers.title}
## Contributing
${answers.title}
## Tests 
${answers.title}
## Questions
${answers.contact}  
${answers.email}  
[GitHub Username](https://github.com/${answers.github})  `
    fs.writeFileSync("project.md", readMe);
    console.log("saved succesfully");
}

module.exports = {generateReadMe}