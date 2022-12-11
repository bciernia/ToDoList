export class Task{
    constructor(id, desc) {
        this.id = id
        this.desc = desc;
    }

    changeTaskDescription(editedDesc) {
        this.desc = editedDesc;
    }

}