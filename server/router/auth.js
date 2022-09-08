const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const Authenticate = require("../middleware/authenticate");


 
require('../db/conn')
const User = require('../model/userSchema');
const Event = require('../model/eventSchema');
const List = require('../model/listSchema');

router.get('/', (req,res) => {
    res.send(`Hello world from the server router js`);
});




// async await method :->

router.post('/register',async(req,res) => {

    const {name,email,password,cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please Filled the field Properly"});
    }
   
    try {
    const userExist = await User.findOne({email: email})

    if(userExist) {
        return res.status(422).json ({error: "Email already Exist"});
    }else if(password != cpassword){
        return res.status(422).json ({error: "password doesn't matched"});
    }else {
        const user = new User({name,email,password,cpassword});

        const userRegister= await user.save();
    
            res.status(201).json({message: "user registered successfully"});
    }

   
    } catch (err){
        console.log(err);
    }
});



// login route
router.post('/login',async(req,res) => {

    try{
        let token;
    const {email,password} = req.body;
        if(!email || !password) {
            return res.status(400).json({error: "Please filled the data"});
            console.log("error")
        }

        const userLogin = await User.findOne({email: email});
        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

             token = await userLogin.generateAuthToken();
             console.log(token);

             res.cookie("jwtoken",token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
             })
            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials password"});
            }else {
                res.json({message:"user signin successfully"});
            }
        }else {
                res.status(400).json({error: "Invalid Credentials email"});
        }

    } catch(err) {
        console.log(err);
    }
});

// Home page Authentication here

router.get('/' ,Authenticate,(req,res) => {
    res.send(req.rootUser);
});

// Create new expense sheet

router.post('/',async(req,res) => {
    const {name} = req.body;
    if(!name){
        return res.status(422).json({error: "Please Filled the data"});
    }
    try {
        const eventExist = await Event.findOne({name:name})

        if(eventExist){
            return res.status(422).json({error:"event already Exist"});
        }else {
            const event = new Event({name})
            const eventRegister= await event.save();
            
            res.status(201).json({message: "event register successfully"})
        }
    } catch (err){
        console.log(err);
    }
});


// post expenses

router.post('/addexpense',async(req,res) => {
    
    const {description,amount,date,whoPaid,whom}= req.body;
    try{
        const list = new List({description,amount,date,whoPaid,whom});
        
        const listRegister = await list.save();
        
        res.status(201).send("expense added");
    }catch (err){
        console.log(err);
    }
});

// get expenses
router.get("/addexpense",async(req,res)=>{
    const list = await List.find();
    res.status(200).json({
        success: true,
        list
    })
})

module.exports = router;
