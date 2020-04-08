#!/usr/bin/env node
require('dotenv').config();
var chalk = require('chalk');
var figlet = require('figlet');
var clear = require('clear');
const args = require('minimist')(process.argv.slice(2));

var { login_question, profileOptions } = require('./question')

var user_info;

const begin = async () => {
	//User Login Data ( Email, Password )
	user_info = await login_question();
	
	//if successfull login 
	home();
}


if(args.l == undefined){
	printUsage();
} else {
	//begin Facebook CLI
	begin()
}


// Facebook title in ASCII form 
function title(){
	console.log(chalk.green(figlet.textSync('FaceBook  CLI', { horizontalLayout: 'fitted' })));
}


async function home() {
		//clear screen for better view
		clear();

		title();
		
		//to select one of the option in profile
		var select = await profileOptions();

		//All the option and corresponding response
		// Fully not Implemented

		if (select.option == 'Profile') {
			//profile()
			home()
		} else if (select.option == 'Friends') {
			//Friends()
			home()
		} else if (select.option == 'Notification') {
			//Notification()
			home();
		} else if (select.option == 'Message') {
			//Message()
			home();
		} else {
			//Logout()
			process.exit(1);
		}
}

function printUsage() {
	console.error(chalk.red("Flag not supplied"));
	console.log(chalk.red("Usage:  "));
	console.log(chalk.red("		-l 		login"));
	process.exit(1);
}