const http = require('http')
const request = require('request')
const fs = require('fs')
const url = require('url')
const homedir = require('os').homedir();
require('dotenv').config({ path: homedir + '/.facebook/.env' });

const { show_profile } = require('./profile');

function access_code(uri_l, option){
	var path = homedir + '/.facebook/.token';

	fs.readFile(path, (error, data)=>{
		if (error){
			console.error("Either the file .code is deleted \nCode has been used before.")
			process.exit(1);
		} else {

				uri_l = uri_l + data;
				
				call_api(uri_l, option);

		}

	});
}

function call_api(uri_l, option){


	var uri = url.parse(uri_l);

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

		if (data == undefined){

			console.log(data.error);
			process.exit(1);

		} else {
				console.log(data)
				if(option == 'profile'){
					show_profile(data);
				}
		}

	});

}

module.exports = {
	call: access_code
};