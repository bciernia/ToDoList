import {createDiv, createParagraph, createBtn, createSpan} from "./modules/design-system/core/core.js";
import {TaskList} from "./modules/task-system/task/taskList.js";
import {Task} from "./modules/task-system/task/task.js";
import {createTaskList} from "./modules/task-system/task/taskCreation.js"

const addTaskBtn = document.querySelector('#add-task-btn');
const taskContainer = document.querySelector('.task-container');
const newTaskForm = document.querySelector('#new-task-section');
const closeNewTaskSectionBtn = document.querySelector('#close-section');
const addTaskForm = document.querySelector('.new-task-form');

const taskList = new TaskList();

const removeTask = event => {
    taskList.removeTaskFromList(Number(event.target.dataset.taskId));
    createTaskList(taskContainer, taskList);
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
    newTaskForm.querySelector('.task-desc-area').value = "";
    taskList.tasks.push(task);
    createTaskList(taskContainer, taskList);
})