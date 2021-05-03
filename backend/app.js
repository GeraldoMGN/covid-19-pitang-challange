import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => 
  console.log(`Listening at http://localhost:${port}`));