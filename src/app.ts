import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

// parser or middleware
app.use(express.json());
app.use(cors());

//api/v1/students/create-student
// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 'asif';

  res.send(a);
};

app.get('/', getAController);
export default app;
