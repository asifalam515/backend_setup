import Joi from 'joi';

// Joi validation schema for student data
export const studentValidationSchema = Joi.object({
  student: Joi.object({
    id: Joi.string().required(),
    name: Joi.object({
      firstName: Joi.string()
        .trim()
        .max(20)
        .regex(/^[A-Z][a-z]*$/)
        .required()
        .messages({
          'string.base': 'First Name must be a string',
          'string.empty': 'First Name is required',
          'string.max': 'Name cannot be more than 20 characters',
          'string.pattern.base': '{#label} is not in capitalize format',
          'any.required': 'First Name is required',
        }),
      middleName: Joi.string().trim().allow(''),
      lastName: Joi.string()
        .trim()
        .required()
        .pattern(/^[a-zA-Z]+$/)
        .messages({
          'string.base': 'Last Name must be a string',
          'string.empty': 'Last Name is required',
          'string.pattern.base': '{#label} is not valid',
          'any.required': 'Last Name is required',
        }),
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
      'string.empty': 'Gender is required',
      'any.required': 'Gender is required',
      'any.only': '{#label} is not a valid gender',
    }),
    dateOfBirth: Joi.date().optional(),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required',
      'string.email': '{#label} is not a valid email',
      'any.required': 'Email is required',
    }),
    contactNo: Joi.string()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': 'Contact Number is required',
        'string.pattern.base': 'Please fill a valid contact number',
        'any.required': 'Contact Number is required',
      }),
    emergencyContactNo: Joi.string()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': 'Emergency Contact Number is required',
        'string.pattern.base': 'Please fill a valid contact number',
        'any.required': 'Emergency Contact Number is required',
      }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .optional(),
    presentAddress: Joi.string().required().messages({
      'string.empty': 'Present Address is required',
      'any.required': 'Present Address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'string.empty': 'Permanent Address is required',
      'any.required': 'Permanent Address is required',
    }),
    guardian: Joi.object({
      fatherName: Joi.string().required().messages({
        'string.empty': 'Father Name is required',
        'any.required': 'Father Name is required',
      }),
      fatherOccupation: Joi.string().required().messages({
        'string.empty': 'Father Occupation is required',
        'any.required': 'Father Occupation is required',
      }),
      fatherContactNo: Joi.string()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
          'string.empty': 'Father Contact Number is required',
          'string.pattern.base': 'Please fill a valid contact number',
          'any.required': 'Father Contact Number is required',
        }),
      motherName: Joi.string().required().messages({
        'string.empty': 'Mother Name is required',
        'any.required': 'Mother Name is required',
      }),
      motherOccupation: Joi.string().required().messages({
        'string.empty': 'Mother Occupation is required',
        'any.required': 'Mother Occupation is required',
      }),
      motherContactNo: Joi.string()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
          'string.empty': 'Mother Contact Number is required',
          'string.pattern.base': 'Please fill a valid contact number',
          'any.required': 'Mother Contact Number is required',
        }),
    })
      .required()
      .messages({
        'any.required': 'Guardian information is required',
      }),
    localGuardian: Joi.object({
      name: Joi.string().required().messages({
        'string.empty': 'Local Guardian Name is required',
        'any.required': 'Local Guardian Name is required',
      }),
      occupation: Joi.string().required().messages({
        'string.empty': 'Local Guardian Occupation is required',
        'any.required': 'Local Guardian Occupation is required',
      }),
      contactNo: Joi.string()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
          'string.empty': 'Local Guardian Contact Number is required',
          'string.pattern.base': 'Please fill a valid contact number',
          'any.required': 'Local Guardian Contact Number is required',
        }),
      address: Joi.string().required().messages({
        'string.empty': 'Local Guardian Address is required',
        'any.required': 'Local Guardian Address is required',
      }),
    })
      .required()
      .messages({
        'any.required': 'Local Guardian information is required',
      }),
    profileImg: Joi.string().optional(),
    isActive: Joi.string().valid('Active', 'blocked').default('Active'),
  }).required(),
});

export default studentValidationSchema;
