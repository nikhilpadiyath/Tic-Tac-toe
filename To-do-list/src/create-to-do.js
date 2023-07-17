import { compareAsc, format, parseISO, startOfToday} from 'date-fns';
import { clearForm } from './initial-dom-manip.js';

let toDoArray = [];

export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    if(Title=="" || Description=="" || DueDate==""){
        alert("Title, Description and Due Date are required fields");
        return;
    }

    if(parseISO(DueDate) < startOfToday()) {
        alert("You have entered a previous date");
        console.log("Due Date entered:",parseISO(DueDate));
        console.log("Current date:",startOfToday());
        return;
    }

    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i=0; i<nodeListCheckList.length; i++){
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        CheckListArray.push(strippedCheckList);
    }

    let CheckList = CheckListArray.join(", ");
    console.log("Called CreateToDo module...creating todo now");
    console.log({Title,Description,DueDate,Priority,CheckList});
    console.log ("Pushing this object to the toDoArray");
    toDoArray.push({Title,Description,DueDate,Priority,CheckList});
    console.log(toDoArray);

    clearForm();

    return {Title,Description,DueDate,Priority,CheckList};

}
