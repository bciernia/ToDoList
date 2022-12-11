import {createDiv, createParagraph, createBtn, createSpan} from "./modules/design-system/core/core.js";
import {TaskList} from "./modules/task-system/task/taskList.js";
import {Task} from "./modules/task-system/task/task.js";

const addTaskBtn = document.querySelector('#add-task-btn');
const taskContainer = document.querySelector('.task-container');
const newTaskForm = document.querySelector('#new-task-section');
const closeNewTaskSectionBtn = document.querySelector('#close-section');
const addTaskForm = document.querySelector('.new-task-form');

const taskList = new TaskList();

addTaskBtn.addEventListener('click', () => {
    newTaskForm.classList.toggle('create-task-section-active');
})

closeNewTaskSectionBtn.addEventListener('click', () => {
    newTaskForm.classList.toggle('create-task-section-active');
})

addTaskForm.addEventListener('submit', event => {
    event.preventDefault();

    const task = new Task(taskList.tasks.length+1, 'desc');
    const newDiv = createDiv(['task']);
    const newParagraph = createParagraph(newTaskForm.querySelector('.task-desc-area').value);
    const newBtn = createBtn('X', ['btn', 'btn-remove-task'])

    taskList.tasks.push(task);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newBtn);
    taskContainer.appendChild(newDiv);

    newDiv.addEventListener('click', () => {
        console.log(`Clicked ${newParagraph.innerText} task`);
    })

    newTaskForm.classList.toggle('create-task-section-active');

    newBtn.addEventListener('click', () => {

    })

})