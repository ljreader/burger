// In charge of creating our Express connection and running the Node Server.
// Require the following npm packages inside of the server.js file:
//    * express
//    * method-override
//    * body-parser
//    * express-handlebars
//    * mySql
var express = require('express');
var bodyParser = require('body-parser');
var methodOveride = require('method-override');
var bodyParset = require('body-parser');
var expressHandlebars = require('express-handlebars');

var app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.set(methodOverride('_method'));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('vies engine','handlebars');

var part = 3000;
app.listen(port);

