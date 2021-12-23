import express from 'express';
import http from 'http';

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const PORT = 8080;

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello World');
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port ${PORT}`);
});
