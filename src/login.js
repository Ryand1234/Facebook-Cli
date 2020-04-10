const axios = require('axios');
const { exec } = require('child_process')
const https = require('https');
const fs = require('fs');
const request = require('request')
const url = require('url')
const homedir = require('os').homedir();
require('dotenv').config({ path: homedir + '/.facebook/.env' })

function login(){

var url =  "https://www.facebook.com/dialog/oauth?client_id=" +  process.env.APP_ID +
      "&redirect_uri=https://localhost:3000"+
      "&scope=user_likes,user_posts,user_photos,user_videos"

console.log("Please visit ", url);

console.log(' ')
console.log(" Waiting for authorization.")
console.log("")



//checkStatus();

}

module.exports = login;