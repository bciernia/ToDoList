import {Task} from "../task/task.js";
import {taskList ,createTaskList} from "../task/taskListCreation.js";

const TASK_MODAL_ACTIVE = 'create-task-section-active'

const newTaskForm = document.querySelector('#new-task-section');
const addTaskForm = document.querySelector('.new-task-form');

export const changeModalVisibility = () => {
    newTaskForm.classList.toggle(TASK_MODAL_ACTIVE);
}

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = new Task(newTaskForm.querySelector('.task-desc-area').value);
    newTaskForm.querySelector('.task-desc-area').value = "";
    taskList.addTaskToList(task);
    createTaskList();
    changeModalVisibility();
});


