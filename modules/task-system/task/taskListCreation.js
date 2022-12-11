import {createBtn, createDiv, createLi, createParagraph} from "../../design-system/core/core.js";
import {TaskList} from "./taskList.js";

const taskContainer = document.querySelector('.task-container');
export const taskList = new TaskList();

const removeTask = (event) => {
    taskList.removeTaskFromList(Number(event.target.closest('li').dataset.taskId));
    createTaskList();
}

export const createTaskList = () => {
    taskContainer.innerText = "";

    taskList.getTasks().forEach((task, i) => {
        const {id, description} = task;
        const newLi = createLi([]);
        const newDiv = createDiv(['task']);
        const newParagraph = createParagraph(description);
        const newBtn = createBtn('X', ['btn', 'btn-remove-task'])

        newDiv.appendChild(newParagraph);
        newDiv.appendChild(newBtn);
        newLi.appendChild(newDiv);
        newLi.dataset.taskId = id;


        newLi.addEventListener('click', removeTask);
        taskContainer.appendChild(newLi);
    })
}






