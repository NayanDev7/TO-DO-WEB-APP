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

    const checkBox = document.createElement("button");
    checkBox.className = "btn-check";

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text;

    const closeBtn = document.createElement("button");
    closeBtn.className = "btn-close";
    closeBtn.textContent = "❌";

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(closeBtn);

    taskList.appendChild(listItem);

    newTask.value = "";

    closeBtn.addEventListener("click",function(){
        taskList.removeChild(listItem)
    })

    

}
};