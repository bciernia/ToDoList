import {createBtn, createDiv, createLi, createParagraph} from "../../design-system/core/core.js";
import {TaskList} from "./taskList.js";
import {changeModalVisibility, fillModalWithTaskToEdit} from "../task-modal/createTaskModal.js";

const taskContainer = document.querySelector('.task-container');
export const taskList = new TaskList();

const removeTask = (event) => {
    taskList.removeTaskFromList(Number(event.target.closest('li').dataset.taskId));
    createTaskList();
}

const editTask = (event) => {
    const task = taskList.editTask([Number(event.target.closest('li').dataset.taskId)] - 1);
    taskList.removeTaskFromList(Number(event.target.closest('li').dataset.taskId));
    fillModalWithTaskToEdit(task);
}

export const createTaskList = () => {
    taskContainer.innerText = "";

    taskList.getTasks().forEach((task, i) => {
        const {id, description} = task;
        const newLi = createLi([]);
        const newDiv = createDiv(['task']);
        const newParagraph = createParagraph(description);
        const editTaskBtn = createBtn('Edit', ['btn', 'btn-edit-task']);
        const removeTaskBtn = createBtn('X', ['btn', 'btn-remove-task'])

        newDiv.appendChild(newParagraph);
        newDiv.appendChild(editTaskBtn);
        newDiv.appendChild(removeTaskBtn);
        newLi.appendChild(newDiv);
        newLi.dataset.taskId = id;

        editTaskBtn.addEventListener('click', editTask);
        removeTaskBtn.addEventListener('click', removeTask);

        taskContainer.appendChild(newLi);
    })
}






