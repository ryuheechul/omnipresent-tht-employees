import express from 'express';
import { polish } from './employees';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(await polish());
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
