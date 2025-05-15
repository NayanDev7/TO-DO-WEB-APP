const newTask = document.querySelector("#input");
const addTask = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

addTask.addEventListener("click",function(){
    addToList();
});

newTask.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        addToList();
    }
});

function addToList(){
    let text = newTask.value;
    if(text){
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    
}
};