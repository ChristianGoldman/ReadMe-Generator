const fs = require('fs');

// double pipes code goes here
// function formatAnswer(answer) {
//     if (answer has double pipe) { ***fix
//         const strArray = answer.split('||'); ? ***fix
//         let retStr = '';
//         let newLine = '';
//         for (each str in strArray) { ***fix
//             retStr += newLine + '*' + str;
//             newLine = '<br />';
//         }
//         return retStr;
//     } else {
//         return answer;
//     }
// }
function generateReadMe(answers) {
    const licenses = 
    {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        BSDv3: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        BSDv2: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        LGPL: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        GNUv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        GNUv2: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        WTFPL: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"

    }
    // const usersAnswer = `${answers.description}`
    // const formattedDescription = formatAnswer(usersAnswer);
    const readMe = `
# ${answers.title}
${licenses[answers.license]}
## Description  
${answers.description}
## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
${answers.installation}  
## Usage   
${answers.usage}
## Contribution
${answers.contributing}
## Tests 
${answers.tests}
## Questions
${answers.contact}  
${answers.email}  
[GitHub Username](https://github.com/${answers.github})  `
    fs.writeFileSync("project.md", readMe);
    console.log("saved succesfully!");
}

module.exports = {generateReadMe}