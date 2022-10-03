const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
   
});

const memberSchema= new mongoose.Schema({
    members:{
        type: String,
        required: true
    }
});

const Member = mongoose.model("Member",memberSchema);

const Event = mongoose.model("Event",eventSchema);

 module.exports ={Event,Member};
//  module.exports = Member;
