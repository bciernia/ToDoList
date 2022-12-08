import {createDiv, createParagraph, createBtn, createSpan} from "./modules/design-system/core/core.js";

const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('.task-container');

addTaskBtn.addEventListener('click', () => {
    const newDiv = createDiv();
    const newParagraph = createParagraph('Test');

    newDiv.appendChild(newParagraph);
    taskList.appendChild(newDiv);

    newDiv.addEventListener('click', () => {
        console.log(`Clicked ${newParagraph.innerText} task`);
    })
})