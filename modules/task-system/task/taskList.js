class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTaskToList(task) {
        this.tasks.push(task);
    }

    clearTaskList() {
        this.tasks.length = 0;
    }

    removeTaskFromList(no) {
        this.tasks.splice(no - 1, 1);
    }

    getTasks() {
        return this.tasks
    }
}