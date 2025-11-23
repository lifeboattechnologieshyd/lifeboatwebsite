import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[a-z]/, 'Must contain lowercase letter')
    .regex(/[0-9]/, 'Must contain number')
    .regex(/[^A-Za-z0-9]/, 'Must contain special character'),
  confirmPassword: z.string(),
  accountType: z.enum(['personal', 'business']),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export const passwordStrength = (password) => {
  let strength = 0
  let feedback = []

  if (password.length >= 8) {
    strength += 1
  } else {
    feedback.push('At least 8 characters')
  }

  if (/[A-Z]/.test(password)) {
    strength += 1
  } else {
    feedback.push('One uppercase letter')
  }

  if (/[a-z]/.test(password)) {
    strength += 1
  } else {
    feedback.push('One lowercase letter')
  }

  if (/[0-9]/.test(password)) {
    strength += 1
  } else {
    feedback.push('One number')
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    strength += 1
  } else {
    feedback.push('One special character')
  }

  return {
    strength: strength,
    percentage: (strength / 5) * 100,
    feedback: feedback,
    level: strength <= 2 ? 'Weak' : strength === 3 ? 'Fair' : strength === 4 ? 'Good' : 'Strong'
  }
}

export default {
  loginSchema,
  registerSchema,
  contactSchema,
  passwordStrength
}
