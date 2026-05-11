const express = require('express');
const app = express();
app.use(express.json());
const unusedVariable = 'error intencional';

// Entidad de dominio: Tareas (Todos)
let todos = [
  { id: 1, task: 'Configurar GitHub Actions', completed: true }
];

// READ: Obtener todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// CREATE: Agregar uno
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: req.body.completed || false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE: Marcar como completado
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

// DELETE: Eliminar
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

module.exports = app;