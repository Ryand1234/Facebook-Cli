
const { call } = require('./call_api');

function profile(){

var uri_l = "https://graph.facebook.com/me?access_token=";

call(uri_l, "profile");

}

function show_profile(data){

		console.log(data);

}

module.exports = {

	show_profile: show_profile,
	profile: profile
	

};