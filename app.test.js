const request = require('supertest');
const app = require('./app');

describe('Pruebas CRUD de la API To-Do', () => {
  
  test('GET /todos - Debe retornar la lista inicial', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /todos - Debe crear una nueva tarea', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ task: 'Probar el pipeline', completed: false });
    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe('Probar el pipeline');
  });

  test('PUT /todos/:id - Debe actualizar una tarea', async () => {
    const res = await request(app)
      .put('/todos/1')
      .send({ completed: false });
    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(false);
  });

  test('DELETE /todos/:id - Debe eliminar una tarea', async () => {
    const res = await request(app).delete('/todos/1');
    expect(res.statusCode).toBe(204);
  });

});