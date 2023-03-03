// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github License](https://img.shields.io/badge/license-$(license)-yellowgreen.svg)`;
  } return "";
}

// TODO: Create a function that returns the license link - this function checks if it is not 'none', and then returns a link to a license file
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](./LICENSE)`;
  }
  return "";
}


// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty stringgit
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

