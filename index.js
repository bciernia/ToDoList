import {changeModalVisibility} from "./modules/task-system/task-modal/createTaskModal.js"

const addTaskBtn = document.querySelector('#add-task-btn');
const closeNewTaskSectionBtn = document.querySelector('#close-section');


addTaskBtn.addEventListener('click', () => {
    changeModalVisibility();
})

closeNewTaskSectionBtn.addEventListener('click', () => {
    changeModalVisibility();
})
