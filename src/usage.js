var chalk = require('chalk');

function printUsage() {
	console.error(chalk.red("Flag not supplied"));
	console.log(chalk.red("Usage:  "));
	console.log(chalk.red("		-s 		To generate Code"));
	console.log(chalk.red("		-a 		Authentication"));
	console.log(chalk.red("		-c 		Facebook CLI Console"));
	console.log(chalk.red("		-h 		Help"));
	process.exit(1);
}

module.exports = printUsage;