export class Task{
    constructor(description) {
        this.description = description;
    }

    changeTaskDescription(editedDesc) {
        this.description = editedDesc;
    }
}