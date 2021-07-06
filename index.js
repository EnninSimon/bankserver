//import express, body-parser, database, model
const express = require('express');
const bodyParser = require('body-parser');
const {listBankController,deleteBankController, updateBankController,createBankController} = require('./controllers')


//create an instance of express server
const server = express();


//middlewares 
server.use(bodyParser.json());


//routes
//view banks - get method
server.get('/bank', listBankController)
//create a bank - post method
server.post('/bank', createBankController)
//update a bank - put method
server.put('/bank', updateBankController)
//delete a bank - delete method
server.delete('/bank', deleteBankController)

//start server
server.listen(3000, () => console.log('server is ready'))