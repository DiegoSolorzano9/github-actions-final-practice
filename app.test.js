const request = require('supertest');
const app = require('./app');

describe('Pruebas de la API To-Do', () => {
  test('Debe obtener la lista de tareas', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('Debe crear una nueva tarea', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ task: 'Nueva tarea de prueba', completed: false });
    expect(res.statusCode).toEqual(201);
    expect(res.body.task).toBe('Nueva tarea de prueba');
  });
});