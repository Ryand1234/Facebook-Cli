# Facebook-Cli

Facebook Command Line Interface built on Node JS. 

## Get Started
To get started first clone this repo

then create a .env file as below
```
APP_ID=<YOUR_APP_ID>
APP_SECRET=<YOUR_APP_SECRET>
```

To get APP_ID and APP_SECRET, Your need the following:

1. A [Facebook Developer Account](https://developers.facebook.com/apps/)
2. A registered Facebook App with Basic Settings configured

## Login
To get code for log in type
`facebook -s`

then visit the provided url to log in and provide access to the app.

## Authentication
To authenticate your self type
`facebook -a`

It will generate the Access Code which will be required to access authorized routes.

## Facebook CLI Console
To enter the console type 
`facebook -c`

It will take you to the available features of the CLI
