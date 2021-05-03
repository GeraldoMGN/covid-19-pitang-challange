import { Router } from 'express';
import { getAll } from '../logic/schedules.js';

const route = Router();

export default (app) => {
  app.use('/scheduling', route);

  route.get('/', (_, res) => {
    const schedules = getAll();
    return res.json(schedules).status(200);
  });
};
