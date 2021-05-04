import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(routes());

  return app;
};

export default startServer;
