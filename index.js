import {createDiv, createParagraph, createBtn, createSpan} from "./modules/design-system/core/core.js";
import {TaskList} from "./modules/task-system/task/taskList.js";
import {Task} from "./modules/task-system/task/task.js";

const addTaskBtn = document.querySelector('#add-task-btn');
const taskContainer = document.querySelector('.task-container');
const newTaskForm = document.querySelector('#new-task-section');
const closeNewTaskSectionBtn = document.querySelector('#close-section');
const addTaskForm = document.querySelector('.new-task-form');

const taskList = new TaskList();

const removeTask = event => {
    taskList.removeTaskFromList(Number(event.target.dataset.taskId));
    createTaskList();
}

const createTaskList = () => {
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

            createTaskList(taskList);
        })


        newBtn.addEventListener('click', () => {

        })
    })
}

addTaskBtn.addEventListener('click', () => {
    newTaskForm.classList.toggle('create-task-section-active');
})

closeNewTaskSectionBtn.addEventListener('click', () => {
    newTaskForm.classList.toggle('create-task-section-active');
})

addTaskForm.addEventListener('submit', event => {
    event.preventDefault();
    const task = new Task(taskList.tasks.length+1, newTaskForm.querySelector('.task-desc-area').value);
    newTaskForm.classList.toggle('create-task-section-active');
    taskList.tasks.push(task);
    createTaskList();
})