// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `\n* [License](#license)\n`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation](#installatiion)

  * [Useage](#useage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is license under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

### Questions

If you have any questions about the repo open an issue or contact me directly at ${data.email}.

You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
