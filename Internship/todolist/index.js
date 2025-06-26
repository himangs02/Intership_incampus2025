const express = require("express");
const app=express();
const path=require("path"); 
const {v4:uuidv4} = require('uuid');
const PORT=4000;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


let Todo=[

];

app.post("/add-todo",(req,res)=>{
    const task = req.body.task;
    Todo.push({task:task,status:false,id:uuidv4()});
    res.status(201).json({Todo});
    
})
app.delete("/todo/:id",(req,res)=>{
    const id=req.params.id;
    Todo=Todo.filter((todo)=>{
        return todo.id!==id;
    });
    res.status(200).json({Todo});
})
app.put("/todo/:id", (req, res) => {
    const id = req.params.id;
    Todo = Todo.map((todo) => {
        if (todo.id === id) {
            return { ...todo, status: !(todo.status )}; // ← Fix here
        }
        return todo;
    });
    res.status(200).json({ Todo });
});


app.get("/all-todos", (req, res) => {
    res.status(200).json({ Todos: Todo }); // Capital “T” to match frontend usage
});

app.delete("/clear-complete",(req,res)=>{
    Todo=Todo.filter((todo)=>{
        return todo.status==false;
    })
    res.status(200).json({Todo});
})
app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`);
    
});