# Team Profile Generator

## Description

This is a command-line application that takes in user input about a team consisting of a Manager, Engineers and Interns to create a team profile written in HTML. This application was made with Node.js using the npm inquirer.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Credits](#credits)
-   [Questions](#questions)

## Installation

1. To install this application, please clone the repository.
2. Open the filepath in VS Code and open the integrated terminal.
3. Run `npm install`.
4. Then run `node index.js`.

## Usage

To use this application, the user inputs the name, employee id, and email address of the the employee as prompted. Based on if the employee's role is a Manager, Engineer, or Intern, they answer an additional question regarding that team member. After answering a set of questions for one team member, the user can select if they woud like to add another Engineer, another Intern, or if they are done building the team. After the user selects that they are done building the team, then application will exit. In a new folder called 'dist', the teamProfile.html will be generated.

![usage image](https://github.com/claricetran/team-profile-generator/blob/main/assets/images/teamprofilegenerator.gif?raw=true)

## Credits

Thanks to [Joe](https://github.com/Rufasa85) for the starter code.

Thanks to [SBoudrias](https://github.com/SBoudrias) for the example on [how to validate in Inquirer](https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/input.js).

[How to Validate Emails with Regex article](https://www.abstractapi.com/tools/email-regex-guide)

## License

None

## Questions

If you have any questions, checkout my [GitHub](https://github.com/claricetran). <br/>
Alternatively, you can email me at <tran.clarice@gmail.com>
