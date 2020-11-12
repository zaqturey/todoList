import * as Msgs from './modules/msgs.js'

let toDoTasks = document.getElementById("todo");
let doneTasks = document.getElementById("done");
let inputBox1 = document.getElementById("inputTask");
let addTaskButton = document.getElementById("addTask-btn");
let errorMasages = document.getElementById("messages");
let errorMessage = "";
addTaskButton.addEventListener("click",addTask);

function addTask(e){
    e.preventDefault();
    if(isTextBoxEmpty(inputBox1)){
        // errorMasages.innerHTML = Msgs.showErrorMessage(errorMessage);
        // document.getElementById('inputTask').onclick = Msgs.showErrorMessage(errorMessage);
        // document.getElementById('inputTask').addEventListener('click', Msgs.showErrorMessage(errorMessage));
        // errorMasages.innerHTML = (document.getElementById('addTask-btn').onclick = Msgs.showErrorMessage(errorMessage));
        if (typeof addTaskButton != "undefined") {
            errorMasages.innerHTML = addTaskButton.onload('click', Msgs.showErrorMessage(errorMessage));
        }

    }else if(isTextBoxFilled(inputBox1)){
        // errorMasages.innerHTML = (document.getElementById('addTask-btn').onclick = Msgs.removeErrorMessage());
        if (typeof addTaskButton != "undefined") {
            errorMasages.innerHTML = addTaskButton.onload('click', Msgs.removeErrorMessage());
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
                errorMessage = addTaskButton.addEventListener('click', Msgs.showErrorMessage(errorMessage));
            } else if(isTextBoxFilled(inputBox2)){
                errorMessage = addTaskButton.addEventListener('click', Msgs.removeErrorMessage());
            }
        });
    
            let doneButton = document.createElement("button");
            doneButton.classList = "done";
            doneButton.innerText = "Färdig";
            unCompletedTaskList.appendChild(doneButton);
            
            doneButton.addEventListener("click",function(){
                if(isTextBoxEmpty(inputBox2)){
                    Msgs.showErrorMessage(errorMessage);
                    inputBox2.disabled = true;
                    editButton.innerText = "Ändra";

                } else if(isTextBoxFilled(inputBox2)){
                    document.getElementById('addTask-btn').onload('click', Msgs.removeErrorMessage());
                
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

// function showErrorMessage(){
//     if(errorMessage == "") {
//         errorMessage += " Du har ingen uppgift att göra.<br> Lägg till en uppgift och låt den inte vara tom.";
//         errorMasages.innerHTML = errorMessage;
//     }
// }

// function removeErrorMessage(){
//     errorMessage = "";
//     errorMasages.innerHTML = errorMessage;
// }

function isTextBoxEmpty(input){

    return input.value.trim() == "";
}
function isTextBoxFilled(input){

    return input.value != "";
}
/*function generateErrorMessage(inputBox1,inputBox2){
    let inputBox2 = document.getElementByClassName("inputBox2");
    let errors = "";
     if(isTextBoxEmpty(inputBox1)){
        showErrorMessage();
        errors +="Du har ingen uppgift att göra.<br> Lägg till en uppgift och låt den inte vara tom.";
    } else if(isTextBoxFilled(inputBox1)){
        removeErrorMessage();
    }
     if(isTextBoxEmpty(inputBox2)){
        showErrorMessage();
        errors +="Hur man slutför en tom uppgift.";
    } else if(isTextBoxFilled(inputBox2)){
        removeErrorMessage();
    }
    return errors;
}*/



