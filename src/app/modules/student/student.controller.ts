import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { z } from 'zod';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod
    const studentValidationSchema = z.object({
      id: z.string(),
      name: z.object({
        firstName:z.string().max(20,{message:"first name cannot be more than 20 character"})
    });

    const { student: studentData } = req.body;

    // // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData, {
    //   abortEarly: false,
    // });

    // if (error) {
    //   // Validation failed, send error response with all validation errors
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Validation error',
    //     errors: error.details.map((detail) => ({
    //       field: detail.context?.key,
    //       message: detail.message,
    //     })),
    //   });
    // }

    // Validation passed, proceed with creating student

// data validation using zod
const zodparseData = studentValidationSchema.parse(studentData)

    const result = await StudentServices.createStudentIntoDB(zodparseData);

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    // Handle any unexpected errors
    console.error('Error creating student:', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error('Error getting all students:', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error('Error getting single student:', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
