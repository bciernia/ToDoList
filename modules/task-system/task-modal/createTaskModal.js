import {Task} from "../task/task.js";
import {taskList ,createTaskList} from "../task/taskListCreation.js";

const TASK_MODAL_ACTIVE = 'create-task-section-active'

const newTaskForm = document.querySelector('#new-task-section');
const addTaskForm = document.querySelector('.new-task-form');
const taskDescriptionTextBox = newTaskForm.querySelector('.task-desc-area');

export const changeModalVisibility = () => {
    newTaskForm.classList.toggle(TASK_MODAL_ACTIVE);
}

export const fillModalWithTaskToEdit = (task) => {
    newTaskForm.classList.toggle(TASK_MODAL_ACTIVE);
    taskDescriptionTextBox.value = task.description;
}

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = new Task(taskDescriptionTextBox.value);
    newTaskForm.querySelector('.task-desc-area').value = "";
    taskList.addTaskToList(task);
    createTaskList();
    changeModalVisibility();
});
