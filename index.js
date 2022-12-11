import {changeModalVisibility} from "./modules/task-system/create-task-modal/createTaskModal.js"

const addTaskBtn = document.querySelector('#add-task-btn');
const closeNewTaskSectionBtn = document.querySelector('#close-section');


addTaskBtn.addEventListener('click', () => {
    changeModalVisibility();
})

closeNewTaskSectionBtn.addEventListener('click', () => {
    changeModalVisibility();
})
