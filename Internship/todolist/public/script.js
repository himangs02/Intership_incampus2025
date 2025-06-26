const btn_container = document.getElementById("btn-container");
const input= document.getElementById("input");
const add=document.getElementById("Add");
const form = document.getElementById("form");
const container=document.getElementById("container");
const clear=document.getElementById("Clear");

clear.addEventListener("click",async()=>{
    const res=await axios.delete("http://localhost:4000/clear-complete");
    renderTodos(res.data.Todo);
});

container.addEventListener("click",async(e)=>{
    if(e.target.id=="delete"){
        const id=e.target.parentElement.id;
        const res=await axios.delete(`http://localhost:4000/todo/${id}`);
        renderTodos(res.data.Todo);
    }
    if(e.target.id=="Complete"){
        const id=e.target.parentElement.id;
        const res=await axios.put(`http://localhost:4000/todo/${id}`);
        renderTodos(res.data.Todo);
    }
})




//on click a specific button the button color changes
btn_container.addEventListener("click", (e) => {
   if(e.target.id=="Active"||e.target.id=="All"||e.target.id=="Completed"){
    for(let btn of btn_container.children){
        btn.classList.remove("bg-green-500");
        btn.classList.remove("text-white");

    }    
     e.target.classList.add("bg-green-500");
     e.target.classList.add("text-white");
   }

});

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const task = e.target.children[0].value;
    if(task.trim().length==0){
        alert("Please enter a task");
        return;
    }
    let res = await axios.post("http://localhost:4000/add-todo",{task});
     e.target.children[0].value="";
    renderTodos(res.data.Todo);

})

async function getAllTodos(){
    const res = await axios.get("http://localhost:4000/all-todos");
    console.log(res.data); 
    renderTodos(res.data.Todos);
}

function renderTodos(todos){
    container.innerHTML="";
    for(let todo of todos){
        let div = document.createElement("div");
        div.className="flex w-full  justify-between border-2 border-gray-300 h-15 w-50 p-2 m-4";
        div.innerHTML=`
        ${todo.task} <div id=${todo.id} class="flex gap-2 rounded-2xl ">
        <button id="Complete" class="bg-green-500 px-3 py-1">${todo.status?"Undo":"Complete"}</button>
        <button id="delete" class="bg-red-500 px-3 py-1">Delete</button>
        </div>
        `
        container.append(div);
    }
}

getAllTodos(); 