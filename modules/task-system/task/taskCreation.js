import {createBtn, createDiv, createLi, createParagraph} from "../../design-system/core/core.js";

export const createTaskList = (taskContainer, taskList) => {
    taskContainer.innerText = "";

    taskList.getTasks().forEach((task, i) => {
        const {id, desc} = task;
        const newLi = createLi([]);
        const newDiv = createDiv(['task']);
        const newParagraph = createParagraph(desc);
        const newBtn = createBtn('X', ['btn', 'btn-remove-task'])

        newDiv.appendChild(newParagraph);
        newDiv.appendChild(newBtn);
        newLi.appendChild(newDiv);
        newLi.dataset.taskId = id;

        taskContainer.appendChild(newLi);

        newBtn.addEventListener('click', event => {
            taskContainer.innerText = "";
            taskList.removeTaskFromList(Number(event.target.dataset.taskId));
            createTaskList(taskContainer, taskList);
        })
    })
}

