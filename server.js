
const express = require('express');
const router = require('./router/auth_router')


const server = express();

server.use(express.json());
server.use('/api/auth',router)


server.listen(5000,()=>{
    console.log('server listening on port 5000')
})
