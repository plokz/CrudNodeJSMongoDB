var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Test Conection!");
});

routes = require('./routes/admins')(app);

mongoose.connect('mongodb://localhost/admins', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(1337, function() {
  console.log("Node server running on http://localhost:1337");
});