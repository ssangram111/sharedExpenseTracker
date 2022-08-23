const mongoose = require('mongoose')

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   }).then(() => {
     console.log(`mongodb Connected`)
   }).catch((err) =>{
     console.log(err);
   })