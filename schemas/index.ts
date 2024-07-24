import * as z from 'zod';

export const NewPasswordSchema = z.object({
  password: z.string().min(1, 'Password is required!'),
});

export const ResetSchema = z.object({
  email: z.string().email(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required!'),
  code: z.optional(z.string())
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password is required!'),
  name: z.string().min(1, 'Name is required!'),
});
