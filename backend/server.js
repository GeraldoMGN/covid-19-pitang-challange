import startServer from './src/app.js';

const port = process.env.PORT || 4000;
const app = startServer();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
