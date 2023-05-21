import { atomWithStorage } from "jotai/utils"

import { FormValues } from "@/types/form-schema"

const formDataAtom = atomWithStorage<FormValues>("clt", {
  salary: "0",
  deps: "0",
  abono: "no",
  extra: "0",
  vacationDays: "0",
  thirteenth: "no",
})

export { formDataAtom }
