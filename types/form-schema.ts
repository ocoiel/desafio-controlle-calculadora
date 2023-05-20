import { z } from "zod"

export const formSchema = z.object({
  salary: z.number().min(0),
  deps: z.number().min(0).default(0),
  abono: z.enum(["yes", "no"]).default("no"),
  extra: z.number().min(0).default(0),
  vacationDays: z.number().min(1).default(30),
  thirteenth: z.enum(["yes", "no"]).default("no"),
})

export type FormValues = z.infer<typeof formSchema>
