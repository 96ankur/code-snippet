const express = require('express');
const router = express.Router();


router.post('/user',async (req, res)=>{
    const {name, age} = req.body
    const db = req.app.locals.db;
    await db.collection('students').insertOne({name, age});
    res.status(200).send({message:'User created successfully', meta:{execTime:process.hrtime(req._startAt)[1]/1000000}});
});

router.get('/user/:name',async (req, res)=>{
    const name = req.params.name
    const db = req.app.locals.db;
    const result = await db.collection('students').findOne({name});
    res.send(result);
});

module.exports = router;