// taskController.js
const TaskModel = require("../models/taskModel");

async function createTask(req, res) {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Titulo y descripción requeridos" });
  }

  try {
    await TaskModel.create(title, description);
    res.status(201).json({ message: "Tarea creada correctamente" });
  } catch (error) {
    console.error("Error creando la tarea", error);
    res.status(500).json({ error: "Ups... ha ocurrido un error" });
  }
}

async function getTasks(req, res) {
  try {
    // Obtener todas las tareas desde el modelo
    const tasks = await TaskModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error creando la tarea", error);
    res.status(500).json({ error: "Ups... ha ocurrido un error" });
  }
}

module.exports = { createTask, getTasks };
