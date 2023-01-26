const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
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
					console.log("Building team complete. Exiting application. Generating HTML.");
					generateHTML(team);
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
			askAbout = answers.menuOptions;
			gatherTeam();
		});
}

gatherTeam();
