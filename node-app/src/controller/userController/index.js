'use strict';
const bcrypt = require('bcrypt');
const logger = require('../../services/logger');
const log = new logger('userAuthController').getChildLogger();
const jwtService = require('../../services/jwt');
const responseHelper = require('../../services/customResponse');
const {User, validate} = require('../../db/models/user');
/*******************
 * PRIVATE FUNCTIONS
 ********************/
/**
 * Method to Compare password
 */
let _comparePassword = (reqPassword,userPassword) => {
	return new Promise((resolve,reject)=>{
		//compare password with bcrypt method, password and hashed password both are required
		bcrypt.compare(reqPassword, userPassword, function(err, isMatch) {
			if (err) reject(err);
			resolve(isMatch);
		});
	});
};
/**
 * Method to generate jwt token
 */
let _generateUserToken = (tokenData) => {
	//create a new instance for jwt service
	let tokenService = new jwtService();
	let token = tokenService.createJwtToken(tokenData);
	return token;
};
/**************************
 * END OF PRIVATE FUNCTIONS
 **************************/
module.exports = {
	/**
	* Method to handle user login
	*/
	login: async (req,res) => {
		let reqObj = req.body;
		log.info('Recieved request for User Login:',reqObj);
		let responseData = {};
		try {
			let query = { user_email: reqObj.user_email };
			//check if user email is present in the database, then only login request will process
			let userData = await userDbHandler.getUserDetailsByQuery(query);
			//if no user found, return error
			if(!userData.length) {
				responseData.msg = 'Email Id doesn\'t exists';
				return responseHelper.error(res,responseData);
			}
			let reqPassword = reqObj.user_password;
			let userPassword = userData[0].user_password;
			//compare req body password and user password,
			let isPasswordMatch = await _comparePassword(reqPassword,userPassword);
			//if password does not match, return error
			if(!isPasswordMatch) {
				responseData.msg = 'Email Id and Password do not match';
				return responseHelper.error(res,responseData);
			}
			//patch token data obj
			let tokenData = {
				user_name : userData[0].user_name,
				sub : userData[0]._id,
				user_email : userData[0].user_email
			};
			//generate jwt token with the token obj
			let jwtToken  = _generateUserToken(tokenData);
			log.info('User login found',userData);
			//update the response Data
			responseData.msg = `welcome ${userData[0].user_name}`;
			responseData.data = { authToken : jwtToken };
			return responseHelper.success(res,responseData);
		}
		catch(error) {
			log.error('failed to get user signup with error::',error);
			responseData.msg = 'failed to get user login';
			return responseHelper.error(res,responseData);
		}
	},
	/**
	* Method to handle user signup
	*/
	signup: async (req,res) => {
		let reqObj = req.body;
		const {error} = validate(reqObj);
		if (error) return res.status(400).send(error.details[0].message);
		log.info('Recieved request for User Signup:',reqObj);
		let responseData = {};
		try {
			let query = { user_email: reqObj.user_email };
			//check if user email is present in the database, then reject the signup request
			let userData = await userDbHandler.getUserDetailsByQuery(query);
			//return error if user data found has length > 0
			if(userData.length) {
				responseData.msg = 'Email Id already exists';
				return responseHelper.error(res,responseData);
			}else {
				//create a new user in the database
				let newUser = await userDbHandler.createUser(reqObj);
				log.info('User created in the database collection',newUser);
				//update the response Data
				responseData.msg = 'user created successfully';
				return responseHelper.success(res,responseData);
			}
		}
		catch(error) {
			log.error('failed to get user signup with error::',error);
			responseData.msg = 'failed to create user';
			return responseHelper.error(res,responseData);
		}
	}
};