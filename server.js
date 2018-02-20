// In charge of creating our Express connection and running the Node Server.
// Require the following npm packages inside of the server.js file:
//    * express
//    * method-override
//    * body-parser
//    * express-handlebars
//    * mySql
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

var routes = require('./controllers/routes.js');
app.use('/',routes);
 
var port = 3000;
app.listen(port);

