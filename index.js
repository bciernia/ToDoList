import {createDiv, createParagraph, createBtn, createSpan} from "./modules/design-system/core/core.js";
import {TaskList} from "./modules/task-system/task/taskList.js";

const addTaskBtn = document.querySelector('#add-task-btn');
const taskContainer = document.querySelector('.task-container');

const taskList = new TaskList();

addTaskBtn.addEventListener('click', () => {
    const newDiv = createDiv();
    const newParagraph = createParagraph('Test');

    newDiv.appendChild(newParagraph);
    taskContainer.appendChild(newDiv);

    newDiv.addEventListener('click', () => {
        console.log(`Clicked ${newParagraph.innerText} task`);
    })
})