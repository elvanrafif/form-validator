import { z } from "zod"

export const userFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).max(99, { message: "Age must be 99 or less" }),
  country: z.string().min(1, { message: "Please select a country" }),
})

export type UserFormValues = z.infer<typeof userFormSchema>

