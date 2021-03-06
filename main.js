import * as Msgs from './modules/msgs.js'

let toDoTasks = document.getElementById("todo");
let doneTasks = document.getElementById("done");
let inputBox1 = document.getElementById("inputTask");
let addTaskButton = document.getElementById("addTask-btn");
var errorMasages = document.getElementById("messages");
var errorMessage = "";
addTaskButton.addEventListener("click",addTask);

function addTask(e){
    e.preventDefault();
    if(isTextBoxEmpty(inputBox1)){
        if (typeof(addTaskButton) != "undefined" && addTaskButton != null) {
            addTaskButton.onclick = Msgs.showErrorMessage(errorMessage, errorMasages);
        }

    }else if(isTextBoxFilled(inputBox1)){
        if (typeof(addTaskButton) != "undefined" && addTaskButton != null) {
            addTaskButton.onclick = Msgs.removeErrorMessage(errorMessage, errorMasages);
        }       
        let unCompletedTask = document.createElement("div");
        unCompletedTask.classList = "toComplete";

        let unCompletedTaskList = document.createElement("li");
        unCompletedTaskList.classList = "listToComplete";

        let inputBox2 = document.createElement("input");
        inputBox2.classList = "inputBox2";
        inputBox2.disabled = true;
        inputBox2.value = inputBox1.value;
        unCompletedTaskList.appendChild(inputBox2);

        let editButton = document.createElement("button");
        editButton.classList = "edit";
        editButton.innerText = "Ändra";
        unCompletedTaskList.appendChild(editButton);

        editButton.addEventListener("click",function(){
            if(editButton.innerText == "Ändra"){
                inputBox2.disabled = false;
                editButton.innerText = "Spara";
                
            } else{
                inputBox2.disabled = true;
                editButton.innerText = "Ändra";
            }

            if(isTextBoxEmpty(inputBox2)){
                if (typeof(editButton) != "undefined" && addTaskButton != null) {
                    editButton.onclick = Msgs.showErrorMessage(errorMessage, errorMasages);
                }
            } else if(isTextBoxFilled(inputBox2)){
                if (typeof(editButton) != "undefined" && addTaskButton != null) {
                    editButton.onclick = Msgs.removeErrorMessage(errorMessage, errorMasages);
                }
            }
        });
    
            let doneButton = document.createElement("button");
            doneButton.classList = "done";
            doneButton.innerText = "Färdig";
            unCompletedTaskList.appendChild(doneButton);
            
            doneButton.addEventListener("click",function(){
                if(isTextBoxEmpty(inputBox2)){
                    if (typeof(editButton) != "undefined" && addTaskButton != null) {
                        editButton.onclick = Msgs.showErrorMessage(errorMessage, errorMasages);
                    }
                    inputBox2.disabled = true;
                    editButton.innerText = "Ändra";

                } else if(isTextBoxFilled(inputBox2)){
                    if (typeof(editButton) != "undefined" && addTaskButton != null) {
                        editButton.onclick = Msgs.removeErrorMessage()
                    }                    
                
                let completedTask = document.createElement("div");
                completedTask.classList="completedTasks";
                let compleatedTaskList = document.createElement("li");
                compleatedTaskList.appendChild(inputBox2);
                compleatedTaskList.classList="completedList";
                doneTasks.appendChild(completedTask);
                compleatedTaskList.appendChild(editButton);
                compleatedTaskList.appendChild(deleteButton);
                completedTask.appendChild(compleatedTaskList);
                this.parentElement.remove();
            }
            });

        let deleteButton = document.createElement("button");
        deleteButton.classList = "delete";
        deleteButton.innerText = "Radera";
        unCompletedTaskList.appendChild(deleteButton);
        deleteButton.addEventListener("click",function(){this.parentElement.remove();});

        unCompletedTask.appendChild(unCompletedTaskList);
        toDoTasks.appendChild(unCompletedTask);
        inputBox1.value = "";
    }
}

function isTextBoxEmpty(input){

    return input.value.trim() == "";
}
function isTextBoxFilled(input){

    return input.value != "";
}
