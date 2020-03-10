const Router = require('express').Router();
const userAuthController = require('../../controller/userController');
const userAuthenticated = require('../../services/middleware/userAuthenticate');
module.exports = () => {
/***************************
 * START NON AUTHORIZED ROUTES
 ***************************/
	/*
	**Login and Signup Route
	*/
	Router.post('/user/login',userAuthController.login);
	Router.post('/user/signup',userAuthController.signup);

	/****************************
 * END OF NON AUTHORIZED ROUTES
 ****************************/

	/**********************
 * AUTHORIZED ROUTES
 **********************/
	/**
	 * Middlerware for Handling Request Authorization
	 */
	Router.use('/',userAuthenticated);
	/**
	 * User Dashboard Route
	 */
	Router.get('/user/profile',(req,res)=>{res.send({data:'Profile Component still in progress..'});});
	/**************************
 * END OF AUTHORIZED ROUTES
 **************************/
	return Router;
};