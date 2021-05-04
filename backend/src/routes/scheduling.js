import { Router } from 'express';
import { getAll, add, updateSituation } from '../controllers/schedules.js';

const route = Router();

export default (app) => {
  app.use('/scheduling', route);

  route.get('/', (_, res) => {
    const schedules = getAll();
    return res.json(schedules).status(200);
  });

  route.post('/', (req, res) => {
    let result = null;
    try {
      result = add(req.body);
    } catch {
      return res.status(500);
    }

    return result.error
      ? res.status(400).send(result.error)
      : res.status(200).send(result.message);
  });

  route.post('/situation/:id', (req, res) => {
    let result = null;
    try {
      const id = Number(req.params.id);
      result = updateSituation(id, req.query.situation);
    } catch {
      return res.status(500);
    }

    return result.error
      ? res.status(400).send(result.error)
      : res.status(200).send(result.message);
  });
};
