document.addEventListener("DOMContentLoaded" , function event(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const addTask = ()=>{

        taskText = taskInput.value.trim();

        

        if(!taskText ){
            alert("please add a task")
        }
        else {
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
          
    

    addButton.addEventListener("click" , addTask)
    taskInput.addEventListener("keypress" , (e) =>{
        if(e.key === "Enter"){
            addTask();
            
        }
    })
   

})
