//store routes
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db) {
	/*
		URL /store/
		METHOD - GET** used for getting basic return for now
		all of these routes will be used to get datasets for store
	*/
	app.get('/store', (req, res) => {

		res.send('this is home');

	});

};

