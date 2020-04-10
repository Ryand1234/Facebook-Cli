const axios = require('axios')
const http = require('http')
const request = require('request')
const fs = require('fs')
const url = require('url')
const sleep = require('sleep')
const { exec } = require('child_process')
const homedir = require('os').homedir();
require('dotenv').config({ path: homedir + '/.facebook/.env' });

var { write_code } = require('./load_script')

//To generate the Access Token which will be used to access Authorised routes
// uri : redirect_url where we will hit to get the dialog box to log into the account

function access_token(code){

	var uri_1 = "https://graph.facebook.com/v6.0/oauth/access_token?client_id=" + process.env.APP_ID + "&redirect_uri=https://localhost:3000/" + "&client_secret=" + process.env.APP_SECRET + "&code=" + code + "#_=_";
	var uri = url.parse(uri_1);

	//console.log(uri_1)
	var options = {
		method: 'GET',
		url: uri,
		headers: {
			'Accept': 'application/json',
			'Accept-Charset': 'utf-8'
		}
	}


request(options, (err, res, body)=> {

		//data: response we get if redirect url is visited 

		const data = JSON.parse(body);
		const access_token = data.access_token;


		if (access_token == undefined){

			console.log(data.error);
			process.exit(1);

		} else {

			//console.log(access_token)
			write_code(access_token, "token");

			//remove .code file .
			//.code file is not of our used as code can be used only once
			// to generate Access Token
			exec('rm ' + homedir + '/.facebook/.code', (err, stdout, stderr) =>{
				if(err) {
				
				 throw(err)
				
				}

			});

			console.log("You have been authenticated.\n Run facebook -c to start the Facebook CLI console.");
		}

	});

}


//To read Code generated to exchange it with graph.facebook.com api to get 
//Access Token
function read_code(){
	var path = homedir + '/.facebook/.code';

	fs.readFile(path, (error, data)=>{
		if (error){
			console.error("Either the file .code is deleted \nCode has been used before.")
			process.exit(1);
		} else {
			access_token(data);
		}

	});
}

module.exports = {
	access_token: access_token,
	checkAccessKey: read_code
}