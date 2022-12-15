export class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTaskToList(task) {
        this.tasks.push(task);
    }

    clearTaskList() {
        this.tasks.length = 0;
    }

    getTaskToEdit(taskNumber) {
        return this.tasks[taskNumber];
    }

    removeTaskFromList(taskNumber) {
        this.tasks.splice(taskNumber - 1, 1);
    }

    getTasks() {
        return this.tasks.map((task, i) => {
            return{
                id: i+1,
                description: task.description,
            };
        });
    }
}