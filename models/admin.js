var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var adminSchema = new Schema({
	name: 		{ type: String },
	site: 		{ type: String },
	encargado: 		{ type: String, enum :
					['Blue', 'Gold', 'Black', 'Patito', 'Pink']
					},
	description: 	{ type: String }    
});


module.exports = mongoose.model('Admin', adminSchema);