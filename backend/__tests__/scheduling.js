/* eslint-disable no-undef */
import request from 'supertest';
import startServer from '../src/app.js';

describe('Test getAll schedules', () => {
  it('It should respond OK', () => {
    const app = startServer();

    request(app)
      .get('/scheduling')
      .expect(200);
  });
});

describe('Test add schedules', () => {
  it('It should add correctly', async () => {
    const app = startServer();

    await request(app)
      .post('/scheduling')
      .send({
        vaccinationDate: new Date(),
        name: 'John Doe',
        birthDate: new Date(),
      })
      .set('Content-Type', 'application/json')
      .expect(200);
  });

  it('It should not add more than two to the same time', async (done) => {
    const app = startServer();
    const personBody = {
      vaccinationDate: new Date(),
      name: 'John Doe',
      birthDate: new Date(),
    };

    await request(app)
      .post('/scheduling')
      .send({
        ...personBody,
        name: 'John Smith',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    await request(app)
      .post('/scheduling')
      .send({
        ...personBody,
        name: 'John Smith',
      })
      .set('Content-Type', 'application/json')
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('Too many scheduled vaccinations at this time.');
      });

    await request(app)
      .get('/scheduling')
      .expect(200)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2);
        done();
      });
  });
});
