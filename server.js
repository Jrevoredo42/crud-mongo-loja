const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const employeRouter = require('./src/routes/employeRoutes')

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
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
    
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use('/api/employees', employeRouter);
    
module.exports = server;