const createHttpError = require("http-errors");
const { DB: Database } = require("../database");

function createTask(taskPayload) {
  Database.set(taskPayload);
  return taskPayload;
}

function deleteTask(taskID) {
  const item = Database.get(taskID);
  if (item === undefined) {
    throw createHttpError(404, "Task not found");
  }
  Database.delete(taskID);
  return item;
}

function updateTask(taskID, taskPayload) {
  const prevTask = Database.get(taskID);
  if (prevTask === undefined) {
    throw createHttpError(404, "Task not found");

  }
  const updatedTask = {
    ...prevTask,
    ...taskPayload,
  };
  Database.update(taskID, updatedTask);
  return updatedTask;
}

function getTaskByID(taskID) {
  const item = Database.get(taskID);
  if (item === undefined) {
    throw createHttpError(404, "Task not found");
  }
  return item;
}

function getTasks() {
  return Database.getTasks();
}


module.exports = {
  createTask,
  deleteTask,
  updateTask,
  getTaskByID,
  getTasks
};