const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, task: 'Aprender GitHub Actions', completed: false }
];

// Obtener todas las tareas
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// Crear una tarea
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

module.exports = app;