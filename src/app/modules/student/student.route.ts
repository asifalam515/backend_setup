import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();
//routes will call controller function.controllers functions are in student.controller.ts
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
export const StudentRoutes = router;
