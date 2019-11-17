require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const server = express();
const gadgets = require('./routers/gadgetRouter');

server.use(helmet());
server.use(express.json());
server.use('/api/gadgets', gadgets);

server.get('/', (req,res) => {
    res.json('Hello World')
})

module.exports = server;