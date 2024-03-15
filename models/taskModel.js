const { getDatabase } = require("../db");

const TaskModel = {
  create: async function (title, description) {
    const db = getDatabase();
    const collection = db.collection("tasks");

    try {
      const result = await collection.insertOne({ title, description });
    } catch (error) {
      console.error("Error creando la tarea", error);
      throw error;
    }
  },

  getAllTasks: async function () {
    const db = getDatabase();
    const collection = db.collection("tasks");

    try {
      const tasks = await collection.find({}).toArray();
      return tasks;
    } catch (error) {
      console.error("Error obteniendo tareas", error);
      throw error;
    }
  },
};

module.exports = TaskModel;
