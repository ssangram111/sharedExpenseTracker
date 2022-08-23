const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({ path:'./config.env' });

// const User = require('./model/userSchema');
require('./db/conn');
const PORT = process.env.PORT;

app.use(express.json());
// we link the router files to make our route easy
app.use(require('./router/auth'));











app.listen(PORT,() =>{
  console.log(`server is running at port no ${PORT}`)
})