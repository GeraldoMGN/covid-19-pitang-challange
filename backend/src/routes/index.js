import { Router } from 'express';
import scheduling from './scheduling.js';

export default () => {
  const app = Router();
  scheduling(app);

  return app;
};
