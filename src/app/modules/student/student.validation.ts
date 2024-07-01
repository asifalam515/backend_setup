import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'Name can not be more than 20 characters' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First Name is not in capitalize format',
      }
    ),
  middleName: z.string().optional(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: 'Last Name is not valid',
  }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z
    .string()
    .regex(/^\d{10,15}$/, 'Please fill a valid contact number'),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z
    .string()
    .regex(/^\d{10,15}$/, 'Please fill a valid contact number'),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z
    .string()
    .regex(/^\d{10,15}$/, 'Please fill a valid contact number'),
  address: z.string(),
});

const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: 'Email is not valid' }),
  contactNo: z
    .string()
    .regex(/^\d{10,15}$/, 'Please fill a valid contact number'),
  emergencyContactNo: z
    .string()
    .regex(/^\d{10,15}$/, 'Please fill a valid contact number'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['Active', 'blocked']).default('Active'),
});
export default studentValidationSchema;
