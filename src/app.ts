import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;
import cors from 'cors';

// parser or middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 'asif';

  res.send(a);
});

export default app;
