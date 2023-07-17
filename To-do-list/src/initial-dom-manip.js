import { blankProjectLoad } from "./blank-project-load.js";

export function displayDefaultProject () {
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm () {
    document.getElementById("add-todo-form").style.display= "";
}

export function addItemToChecklist () {
    const addItem =document.getElementById("add-to-checklist").value;
    if (addItem != "") {
        const ul= document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent= addItem;
        const span= document.createElement("span");
        span.className= "remove-item";
        const removeIcon= document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        if(document.querySelectorAll("li").length > 0) {
            console.log("Inside Module if...", document.querySelectorAll("li").length);
            const nodeListCheckList= document.querySelectorAll("li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItem(){
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm(){
    const nodeListCheckList =document.querySelectorAll("li");
    for (let i=0; i<nodeListCheckList.length; i++){
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}