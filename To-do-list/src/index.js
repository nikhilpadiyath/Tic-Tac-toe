
import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from './initial-dom-manip.js';
import './style.css';

document.addEventListener('DOMContentLoaded',(event) => {
blankProjectLoad();
//initialdomManip();

let clickEventsModule = (function() {
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);

    const clearButton = document.querySelector(".reset-btn");
    clearButton.addEventListener("click",clearForm);

    const submitButton = document.querySelector(".submit-btn");
    submitButton.addEventListener("click", createToDo);

})();

//const myToDo = createToDo("Grocery Run","Go get groceries","25/3/2023","Low", "Meat, Fish, Veggies");
//const myToDo2 = createToDo("Cricket","To play Cricket","26/3/2023","Medium","Bat, Ball, Stumps");
//console.log("Show me properties of myToDo",myToDo);
//console.log("Show me properties of myToDo2",myToDo2);
})
