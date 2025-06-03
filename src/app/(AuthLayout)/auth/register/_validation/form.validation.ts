import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .regex(/^[a-zA-Z]+$/, { message: 'First name must contain only letters' })
      .min(2, { message: 'First name must be at least 2 characters' })
      .nonempty('First name is required'),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters' })
      .nonempty('Last name is required'),
    email: z
      .string()
      .nonempty('Email is required')
      .email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .nonempty('Password is required')
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'Password must contain at least one special character',
      }),
    phone: z.string().optional(),
    referralCode: z.string().optional(),
    confirmPassword: z.string().nonempty('Please confirm your password'),
    terms: z.boolean().refine((value) => value === true, {
      message:
        'In order to create an account, it is required to consent to the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
