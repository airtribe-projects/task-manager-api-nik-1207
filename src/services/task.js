const { TaskDTO } = require("../dto/tasks");
const { createTask, deleteTask, getTaskByID, getTasks, updateTask } = require("../dao/tasks");

class TaskServices {
  createTask(taskPayload) {
    return createTask(taskPayload);
  }

  getTaskByID(taskID) {
    return getTaskByID(taskID);
  }

  getTasks() {
    return getTasks();
  }

  updateTask(taskID, taskPayload) {
    return updateTask(taskID, taskPayload);
  }

  deleteTask(taskID) {
    return deleteTask(taskID);
  }
}

module.exports = {
  TaskServices
};
