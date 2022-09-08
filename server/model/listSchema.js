const mongoose = require('mongoose');

const listSchema = new mongoose.Schema([
        {
            description:{
                type: String,
            },
            amount:{
                type: Number,
            },
            whoPaid:{
                type: String,
            },
            whom:[{type: String}],
            date:{
                type: Date,
                default:Date.now
            },
        }]
    

    );

const List = mongoose.model("List",listSchema);

 module.exports =List;