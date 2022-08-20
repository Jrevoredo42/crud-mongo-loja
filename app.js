const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();

server.listen(process.env.PORT, () => {
    console.log('Server is running')
})

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if(err) {
        console.log(err);
        }else{
        console.log('connected to mongoDB')
        }
    })


module.exports = server;