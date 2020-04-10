const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

var profileOptions = require('./question')

// Facebook title in ASCII form 
function title(){
	console.log(chalk.green(figlet.textSync('FaceBook  CLI', { horizontalLayout: 'fitted' })));
}


function home() {
		//clear screen for better view
		clear();

		title();
		
		//to select one of the option in profile
		var select = profileOptions();


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

		console.log("END");
}

module.exports = home;