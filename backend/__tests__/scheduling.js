/* eslint-disable no-undef */
import request from 'supertest';
import startServer from '../src/app.js';
import { removeAll } from '../src/repositories/schedules.js';

beforeEach(() => removeAll());

const addSchedule = async (app, personBody) => {
  await request(app)
    .post('/scheduling')
    .send(personBody)
    .set('Content-Type', 'application/json');
};

describe('Get all schedules', () => {
  it('It should respond OK', (done) => {
    const app = startServer();

    request(app)
      .get('/scheduling')
      .expect(200)
      .then(() => done());
  });
});

describe('Add schedules', () => {
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

    await addSchedule(app, personBody);
    await addSchedule(app, personBody);

    await request(app)
      .post('/scheduling')
      .send({
        ...personBody,
        name: 'John Smith',
      })
      .set('Content-Type', 'application/json')
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('Limite de agendamento para esta hora atingido, tente outro horário.');
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

describe('Update situation', () => {
  it('It should respond OK', async (done) => {
    const app = startServer();
    const personBody = {
      vaccinationDate: new Date(),
      name: 'John Doe',
      birthDate: new Date(),
    };

    await addSchedule(app, personBody);

    request(app)
      .get('/scheduling')
      .expect(200)
      .end((_, res) => {
        request(app)
          .post(`/scheduling/situation/${res.body[0].id}`)
          .query({ situation: 'vaccinated' })
          .expect(200)
          .then(() => {
            done();
          });
      });
  });
});
