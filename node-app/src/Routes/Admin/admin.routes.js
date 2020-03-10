const Router = require('express').Router();
module.exports = () => {
	Router.get('/',(req,res) => res.send('Test Route admin'));
	return Router;
};