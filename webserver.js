//express and body parser are np modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const webserver = express();
const { credentials } = require('./config/mysql_credentials');
const dataBase = mysql.createConnection(credentials);

webserver.use(bodyParser.urlencoded({ extended: false }));
webserver.use(bodyParser.json());

dataBase.connect((error) => {
    if (error) throw error;
    console.log("databaseconnection successful")
});


webserver.use(express.static(__dirname + "/client" + "/public")); //sets our root folder, is where the html is housed

webserver.listen(9000, () => {
    console.log('webserver listening on port 9000')
})