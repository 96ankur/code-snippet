'use strict';
/******************************************************************
 * EXPRESS ROUTING TO REDIRECT USER REQUEST TO THE GIVEN CONTROLLER
********************************************************************/
const adminRoutes = require('./Admin/admin.routes');
const userRoutes = require('./User/user.routes');
const responseHelper = require('../services/customResponse');
const checkConnection = require('../services/middleware/mongoDbConnectionCheck');
module.exports = (app) => {
/**
* Handling the Default Route
*/
	app.get('/',(req,res) => {// eslint-disable-line
		let responseData = {};
		responseData.msg = 'UnAuthorized Access';
		return responseHelper.error(res,responseData);
	});
	
	app.use(checkConnection);
/**
* Handling Admin and User Routes with the defined path for usage
*/
	app.use('/admin',adminRoutes(app));
	app.use('/api/v1',userRoutes(app));
};