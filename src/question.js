const inquirer = require('inquirer');

 function login_question(){
	const questions = [
		{
			name: 'email',
			type: 'email',
			message: 'Enter your Facebook Email Id: ',
			validate: function(value){
				if (value.length){
					return true;
				} else {
					return "Please Enter your Email Id";
				}
			}
		},
		{
			name: 'passwd',
			type: 'password',
			message: 'Enter your Password: ',
			validate: function(value){
				if (value.length){
					return true;
				} else {
					return "Please Enter your Password";
				}
			}
		}
	];
	return inquirer.prompt(questions);

}

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

module.exports = {
	login_question: login_question,
	profileOptions: profileOptions

};