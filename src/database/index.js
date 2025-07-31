const { Task } = require("../dto/tasks");
const Data = require("../../task.json");

class Database {
  tasks = [];
  constructor() {
    this.tasks = Data.tasks;
  }
  set(task) {
    this.tasks.push(task);
  }
  get(id) {
    return this.tasks[id - 1];
  }
  delete(id) {
    this.tasks.splice(id, 1);
  }
  getTasks() {
    return this.tasks;
  }
  getTaskByID(id) {
    return this.tasks[id - 1];
  }
  update(id, task) {
    this.tasks[id - 1] = task;
  }
}

const DB = new Database();

module.exports = {
  Database,
  DB
};