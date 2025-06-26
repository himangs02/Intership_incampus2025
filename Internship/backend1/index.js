const express = require("express");
const app=express();
const path=require("path"); 
const PORT=4000;

app.use(express.static(path.join(__dirname,"public")));
 app.use("/user",(req,res,next)=>{
     console.log("path specific middleware");
     next();
})

app.get('/', (req, res) => { // / is Home-route
    res.send("Hello World");
  
});


app.get("/user",(req,res)=>{
    res.send("This is a request on '/user'");
})
app.get('/test',(req,res)=>{
    console.log(req.query);
    res.status(201).json({
        data:req.query
    });
})
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/user',(req,res)=>{
    console.log("form submitted");
    console.log(req.body);
    res.send("form submitted succeessfully");
})



app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`);
    
});
//middleware  runs for every request
//two types of middleware
//genric and path specific
//generic app.use(()=>{})
//path specific app.use('/user',{})
//body->formData,json data(secure Data - not available on url )
//query={ name: 'abc', email: 'abc@gmail.com' }
//params=eg: /localhost:4000/user/1213
//app.get("/user/:id")
//req.params={
//id:"1213"}
//Headers->contains token(for authorization)

