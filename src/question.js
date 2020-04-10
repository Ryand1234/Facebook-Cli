const inquirer = require('inquirer');

function profileOptions(){
	const questions = [
		{
			name: 'option',
			type: 'list',
			message: 'Choose what you want to do: ',
			choices: ['Profile', 'Friends', 'Notification', 'Message', 'Logout'],
			default: 'Profile'
		}
	];

	return inquirer.prompt(questions);

}

module.exports = profileOptions;