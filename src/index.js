#!/usr/bin/env node
require('dotenv').config();
const args = require('minimist')(process.argv.slice(2));
const sleep = require('sleep');
var keypress = require('keypress');
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

var profileOptions = require('./question')
const { read_code } = require('./token');
const login = require('./login')
const { start_server } = require('./load_script')
const printUsage = require('./usage')
const { checkAccessKey } = require('./token')


//To generate the code through which user will be able to log into

function genCode() {



	//login function implemented in login.js file
	login();


	//To start the server to visit the redirect url
	start_server();

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


//Help Option
if(args.h) {
	printUsage();
}

//TO generate Code
if(args.s){
	genCode();
}

//Facebook CLI Console Option
if(args.c){
	home();
}

//Authentication Option
if(args.a){
	checkAccessKey();
}





