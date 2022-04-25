import express, { Request, Response } from 'express';
import helmet from 'helmet';
import router from './routes';

const app = express();
const Port = 2556;

app.use(helmet());
app.use(express.json());

app.use(router);

app.listen(Port, () => {
  console.log(`server started at http://localhost:${Port}`);
});
