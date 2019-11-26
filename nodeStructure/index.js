require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = require('express')();
const router = require('express').Router();
const _ = require('lodash');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const winston = require('./config/logging');

app.use(helmet());
app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: winston.stream }));


require('./config/db');

router.use((req,res,next) => {
    
    function isConnected(mongo){
        return _.indexOf(
            [1],
            _.get(mongo, 'connection.readyState', null)
        ) !== -1 
    }

    if(!isConnected(mongoose)) checkAndConnectDb();

    next();
})

const route = require('./route/route');

app.use('/',route);

const server = app.listen(process.env.PORT, (err) => {
    if(err) console.log(err);
    console.log("Server running at port: ", process.env.PORT);
})

process.on('unhandledRejection', (ex) => {
    throw ex;
});

// CleanUp before termination
const sigs = ['SIGINT', 'SIGTERM', 'SIGQUIT']
sigs.forEach(sig => {
process.on(sig, shutdown);

    function shutdown(){
        server.close((err) => {          // here server is closed, so that it will not accept new requests
            console.log('Server closed');
            cleanUp();
            process.exit(0);               // exiting the process with status 0
        });
        setTimeout((err) => {
            console.log('Forcing server close !!!', err);
            cleanUp()
            process.exit(1)
          }, 5000)
    }
})

function cleanUp(){                         // here all the running resources are cleaned up
    mongoose.connection.close(function(){
        console.log("Mongoose connection is disconnected due to application termination");
    })
}