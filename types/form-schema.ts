import { z } from "zod"

export const formSchema = z.object({
  salary: z.number().min(0),
  deps: z.number().min(0),
  abono: z.enum(["yes", "no"]),
  extra: z.number().min(0),
  vacationDays: z.number().min(1),
  thirteenth: z.enum(["yes", "no"]),
})

export type FormValues = z.infer<typeof formSchema>

export const defaultValues: Partial<FormValues> = {
  // salary: 0,
  // deps: 0,
  // abono: "no",
  // extra: 0,
  // vacationDays: 30,
  // thirteenth: "no",
}
