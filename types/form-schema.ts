import { z } from "zod"

export const formSchema = z.object({
  salary: z.string(),
  deps: z.string().min(0).default("0"),
  abono: z.enum(["yes", "no"]).default("no"),
  extra: z.string().min(0).default("0"),
  vacationDays: z.string(),
  thirteenth: z.enum(["yes", "no"]).default("no"),
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
