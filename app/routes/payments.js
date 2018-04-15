//store routes
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db) {

	/*
		URL /store/
		METHOD - GET** used for getting basic return for now
		will be used to intergrate payments 
	*/
	app.get('/payments', (req, res) => {

		res.send('this is payments');

	});

};

