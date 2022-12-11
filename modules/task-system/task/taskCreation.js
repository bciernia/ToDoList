import {createBtn, createDiv, createParagraph} from "../../design-system/core/core.js";

export const createTaskList = (taskContainer, taskList) => {
    taskContainer.innerText = "";

    taskList.getTasks().forEach((task, i) => {
        const {id, desc} = task;
        const newLi = document.createElement('li');
        const newDiv = createDiv(['task']);
        const newParagraph = createParagraph(desc);
        const newBtn = createBtn('X', ['btn', 'btn-remove-task'])

        newDiv.appendChild(newParagraph);
        newDiv.appendChild(newBtn);
        newLi.appendChild(newDiv);
        newLi.dataset.taskId = id;

        taskContainer.appendChild(newLi);

        newDiv.addEventListener('click', () => {
            taskContainer.innerText = "";
            taskList.tasks.splice(task.id-1, 1);
            createTaskList(taskContainer,taskList);
        })

        newBtn.addEventListener('click', () => {

        })
    })
}