// TODO: Create a function that returns a license badge based on which license is passed in
// GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
function renderLicenseBadge(license) { if (license == 'GNU AGPLv3') {
  return `[![License](https://img.shields.io/badge/License-GNU%20AGPLv3-blue)]`
}};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

## Description

${data.description}

## Installation

${data.installation}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Github ID 

${data.GithubID}

## Email 

${data.Email}

`;

}

module.exports = generateMarkdown;
