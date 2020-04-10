const https = require('https');
const fs = require('fs');
const { exec } = require('child_process')
const homedir = require('os').homedir();

const options = {
  key: fs.readFileSync(homedir + '/.facebook/key.pem'),
  cert: fs.readFileSync(homedir + '/.facebook/cert.pem')
};

var server;
const port = 3000;
const hostname = "localhost";

//functino to save codes
function write_code(code, token){

	var path = homedir + '/.facebook/.' + token;

		fs.writeFile(path, code, function(err) {

        	if (err) throw (err) 
    	    
    	    console.log(token + " is generated");
    		
    		if(server){
    		
    			console.log("Run facebook -a to authenticate your profile.");		
    			
    			server.close();
    			process.exit(1);
    		
    		}
	   
	    });

		

}



//To start server to let redirect url to hit
function start_server(){
server = https.createServer(options, function (req, res) {
  res.writeHead(200);

  var str = req.url;
  var code = str.split("=")[1]

  res.end("Authenticating...............\nPlease Check Terminal for status of your Login and further steps.");

  write_code(code, "code");
  

}).listen(port, hostname, () =>{
	
	console.log(`Server Running at https://${hostname}:${port}`)

	});

}


module.exports ={
	
	start_server: start_server,
	write_code: write_code

}


