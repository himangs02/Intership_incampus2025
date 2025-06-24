const express = require("express");
const app=express();
const PORT=4000;

app.get('/', (req, res) => { // / is Home-route
    res.send("Hello World");
  
});

app.get('/user',(req,res)=>{
    // res.send("This is a request on '/user'");
    let user={
        name:"Raj",
        age:20,
        email:"raj@gmail.com"
    }
    res.json(user);
})
app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`);
    
});