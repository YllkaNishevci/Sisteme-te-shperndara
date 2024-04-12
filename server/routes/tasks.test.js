// tasks.test.js
const express = require('express');
const supertest = require('supertest');
const router = require('./tasks');
const Task = require('../model/tasks');

jest.mock('../model/tasks'); // Mocking the Task module

const app = express();
app.use(express.json());
app.use('/', router);

describe('Task Routes', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('GET / should return all tasks', async () => {
    Task.find.mockResolvedValueOnce([{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }]);
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('GET /:id should return a specific task', async () => {
    const taskId = '123';
    Task.findById.mockResolvedValueOnce({ id: taskId, title: 'Task 1' });
    const response = await supertest(app).get(`/${taskId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(taskId);
  });

  // Write similar tests for POST, PATCH, and DELETE routes
});
