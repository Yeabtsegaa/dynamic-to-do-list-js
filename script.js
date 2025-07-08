document.addEventListener("DOMContentLoaded" , function event(){
    const addBUtton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const addtask = ()=>{

        taskText = taskInput.value.trim();

        let noTask = "";

        if(taskText == noTask){
            alert("please add a task")
        }
        if(taskText !== noTask){
           const  li = document.createElement("li")
                li.textContent = taskText;

            let  remove = document.createElement("button")
                remove.textContent = "Remove"
                remove.className = "remove-btn"
            remove.onclick = () =>{
                li.remove();
            }
            
            li.appendChild(remove);
            taskList.appendChild(li);
            taskInput.value = "";
        }
        
    }
    

    addBUtton.addEventListener("click" , addtask)
    taskInput.addEventListener("keypress" , (e) =>{
        if(e.key === "Enter"){
            addtask();
            
        }
    })
   

})
