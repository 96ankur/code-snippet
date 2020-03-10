const _ = require('lodash');
const mongoose = require('mongoose');

module.exports = (req,res,next) => {
    function isConnected(mongo){
        return _.indexOf(
            [1],
            _.get(mongo, 'connection.readyState', null)
        ) !== -1 
    }
    if(!isConnected(mongoose)) checkAndConnectDb();
    next();
}