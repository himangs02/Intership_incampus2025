const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log(error);
});
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:125
    },
    avaiable:{
        type:Boolean,
        default:false
    },
    arr:[
        {
            type:String
        }
    ]
})

const User = mongoose.model("User",userSchema);

app.get('/create', async(req, res) => {

    try{
        
        let newUser=await User.create({
            name:"Himangshu",
            email:"himangshukumardas756dcemnjkren95@gmail.com",
            password:"123456",
            age:18,
            arr:["hello","world"]
        });
        console.log(newUser);
    }catch(error){
        req.status(400).json({error:error.message});
        console.log(error);
    }
});

app.get("/users",async(req,res)=>{
    try {
        let user =await User.find();
        res.status(200).json({user});
    } catch (error) {
        req.status(400).json({error:error.message});
        console.log(error);
        
    }
})

app.get("/update/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        let user =await User.findById(id);
        res.status(200).json({user});
    } catch (error) {
        req.status(400).json({error:error.message});
        console.log(error);

    }
})



console.log(process.env.DATABASE_URL);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});