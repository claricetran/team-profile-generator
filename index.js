const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./util/generateHtml");
const team = [];
let askAbout = "Manager";
const menuOptions = ["Engineer", "Intern", "Done Building Team"];

function gatherTeam() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: `What is the ${askAbout}'s name?`,
			},
			{
				type: "input",
				name: "id",
				message: `What is the ${askAbout}'s employee id?`,
			},
			{
				type: "input",
				name: "email",
				message: `What is the ${askAbout}'s email?`,
				validate(value) {
					const pass = value.match(
						/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
					);
					if (pass) {
						return true;
					}
					return "Please enter a valid email. (example@gmail.com)";
				},
			},
		])
		.then((answers) => {
			switch (askAbout) {
				case "Manager":
					askManager(answers);
					break;
				case "Engineer":
					askEngineer(answers);
					break;
				case "Intern":
					askIntern(answers);
					break;
				default:
					console.log("That's not a valid role.");
					break;
			}
		});
}

function askManager(genQs) {
	inquirer
		.prompt({
			type: "input",
			name: "officeNumber",
			message: "What is the Manager's office number?",
			validate(value) {
				const pass = value.match(/^[0-9]+$/);
				if (pass) {
					return true;
				}
				return "Please enter a valid room number.";
			},
		})
		.then((answers) => {
			const manager = new Manager(genQs.name, genQs.id, genQs.email, answers.officeNumber);
			team.push(manager);
			menuSelect();
		});
}

function askEngineer(genQs) {
	inquirer
		.prompt({
			type: "input",
			name: "github",
			message: "What is the Engineer's GitHub username?",
		})
		.then((answers) => {
			const engineer = new Engineer(genQs.name, genQs.id, genQs.email, answers.github);
			team.push(engineer);
			menuSelect();
		});
}

function askIntern(genQs) {
	inquirer
		.prompt({
			type: "input",
			name: "school",
			message: "What is the Intern's school?",
		})
		.then((answers) => {
			const intern = new Intern(genQs.name, genQs.id, genQs.email, answers.school);
			team.push(intern);
			menuSelect();
		});
}

function menuSelect() {
	inquirer
		.prompt({
			type: "list",
			name: "ask",
			message: "What type of team member would you like to add to your team?",
			choices: menuOptions,
		})
		.then((answers) => {
			askAbout = answers.ask;
			if (answers.ask == "Done Building Team") {
				console.log("Building team complete. Exiting application.");
				fs.writeFile("./dist/teamProfile.html", generateHTML(team), (err) =>
					err ? console.log(err) : console.log("teamProfile.html successfully generated.")
				);
			} else {
				gatherTeam();
			}
		});
}

gatherTeam();
