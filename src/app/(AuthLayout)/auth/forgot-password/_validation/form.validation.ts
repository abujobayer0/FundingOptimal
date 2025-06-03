import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export { forgotPasswordSchema, type ForgotPasswordFormValues };
