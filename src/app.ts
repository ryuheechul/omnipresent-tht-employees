import express from 'express';
import employees from './employees.json';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send(employees);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
