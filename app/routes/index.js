//routes/index.js

const storeRoutes = require('./store')
const paymentRoutes = require('./payments')


module.exports = function(app, db) {
	storeRoutes(app, db);
	paymentRoutes(app, db);
}