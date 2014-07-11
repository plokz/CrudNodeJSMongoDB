//File: routes/admins.js
module.exports = function(app) {

  var Admin = require('../models/admin.js');

  //GET - Return all admins in the DB
  findAllAdmins = function(req, res) {
  	Admin.find(function(err, admins) {
  		if(!err) {
        console.log('GET /admins')
  			res.send(admins);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a Admin with specified ID
  findById = function(req, res) {
  	Admin.findById(req.params.id, function(err, admin) {
  		if(!err) {
        console.log('GET /admin/' + req.params.id);
  			res.send(admin);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new Admin in the DB
  addAdmin = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var admin = new Admin({
  		name:       req.body.name,
  		site: 	    req.body.site,
  		encargado:    req.body.encargado,
  		description:  req.body.description
  	});

  	admin.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(admin);
  };

  //PUT - Update a register already exists
  updateAdmin = function(req, res) {
  	Admin.findById(req.params.id, function(err, admin) {
  		admin.name        = req.body.petId;
  		admin.site       = req.body.site;
  		admin.encargado     = req.body.encargado;
  		admin.description   = req.body.description;

  		admin.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(admin);
  		});
  	});
  }

  //DELETE - Delete a Admin with specified ID
  deleteAdmin = function(req, res) {
  	Admin.findById(req.params.id, function(err, admin) {
  		admin.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/admins', findAllAdmins);
  app.get('/admin/:id', findById);
  app.post('/admin', addAdmin);
  app.put('/admin/:id', updateAdmin);
  app.delete('/admin/:id', deleteAdmin);

}