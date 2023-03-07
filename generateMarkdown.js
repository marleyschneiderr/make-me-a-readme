// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Creative Commons':
        return '![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)';
      case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'MPL 2.0':
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      default:
        return 'License information not available';
    }
  }
  return 'No License';
}

// TODO: Create a function that returns the license link - this function checks if it is not 'none', and then returns a link to a license file
function renderLicenseLink(license) {
  if (license !== "None") {
    switch (license) {
      case 'MIT':
        return '[MIT](https://opensource.org/licenses/MIT)';
      case 'Creative Commons':
        return '[Creative Commons](https://creativecommons.org/licenses/by/4.0/)';
      case 'Apache 2.0':
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'MPL 2.0':
        return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
      default:
        return '';
    }
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (!licenseBadge && !licenseLink) {
    return '';
  }
  return "## License\n\nThis project is licensed under the " +licenseLink + "license. " +licenseBadge;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Live Application URL
${data.link}

## Screenshot of Live Application
![alt-text](${data.screenshot})

## Table of Contents
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)

## Installation
${data.installation}

## Dependencies 
${data.require}

## Usage
${data.usage}

## Contributors 
${data.contributors}

## Testing
${data.test}

## License
${renderLicenseSection(data.license)}

## Questions
If you have questions, please send them [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).`;
}

module.exports = generateMarkdown;

