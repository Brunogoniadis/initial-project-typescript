import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hello words!' });
});

app.listen(3333);
