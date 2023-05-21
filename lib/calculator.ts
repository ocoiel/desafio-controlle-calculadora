import { FormValues } from "@/types/form-schema"
import { INSS, IRRF } from "@/types/tax"

const VALUE_DISCOUNT_FIX = INSS[4].minValue * 0.14 - 163.82
const VALUE_DEPENDENT_DEDUCTIONS = 189.59

export function calculator(data: FormValues) {
  const salaryRaw = parseInt(data.salary)
  const deps = parseInt(data.deps)
  const vacationDays = parseInt(data.vacationDays)
  const extra = parseInt(data.extra)

  const hasAbono = data.abono === "no" ? false : true
  const hasThirteenth = data.thirteenth === "no" ? false : true

  let liquidVacation = ((salaryRaw + extra) / 30) * vacationDays
  const thirdVacation = liquidVacation / 3

  const totalValueVacation = liquidVacation + thirdVacation

  const vacationInitialValue = liquidVacation

  let abonoValue = 0
  if (hasAbono) {
    abonoValue = salaryRaw / 3
    const abonoOneThird = abonoValue / 3
    liquidVacation += abonoValue + abonoOneThird
  }

  let thirteenthValue = 0
  if (hasThirteenth) {
    thirteenthValue = salaryRaw / 2 // Considerando 50% do salário base (isso é variável)
    liquidVacation += thirteenthValue
  }

  const { inssVal, irrfVal, totalDiscount } = calculateINSSandIRRF(
    totalValueVacation,
    deps
  )

  const realAliquotINSS = ((inssVal / totalValueVacation) * 100)
    .toFixed(2)
    .replace(".", ",")
  const realAliquotIRRF = ((irrfVal / totalValueVacation) * 100)
    .toFixed(2)
    .replace(".", ",")

  return {
    vacationInitialValue,
    liquidVacation,
    abonoValue,
    hasAbono,
    thirteenthValue,
    hasThirteenth,
    inssVal,
    irrfVal,
    realAliquotINSS,
    realAliquotIRRF,
    totalDiscount,
  }
}

function calcularINSS(value: number) {
  const inssValues = INSS.filter(
    (el) => el.minValue <= value && value <= el.maxValue
  )[0]

  const firstRange = INSS[0].maxValue * (INSS[0].percent / 100)
  const secondRange =
    (INSS[1].maxValue - INSS[0].maxValue) * (INSS[1].percent / 100)
  const thirdRange =
    (INSS[2].maxValue - INSS[1].maxValue) * (INSS[2].percent / 100)

  let inssVal = 0
  switch (inssValues.range) {
    case 1:
      inssVal = (inssValues.percent / 100) * value
      break
    case 2:
      let secondRangeSalary =
        (value - INSS[0].maxValue) * (INSS[1].percent / 100)
      inssVal = firstRange + secondRangeSalary
      break
    case 3:
      let thirdRangeSalary =
        (value - INSS[1].maxValue) * (INSS[2].percent / 100)
      inssVal = firstRange + secondRange + thirdRangeSalary
      break
    case 4:
      let fourthRangeSalary =
        (value - INSS[2].maxValue) * (INSS[3].percent / 100)
      inssVal = firstRange + secondRange + thirdRange + fourthRangeSalary
      break
    case 5:
      inssVal = VALUE_DISCOUNT_FIX
      break
    default:
      inssVal = 0
  }

  // Era pra ser null no lugar do 0
  let aliquota = inssVal !== VALUE_DISCOUNT_FIX ? inssVal / value : 0
  return {
    inssVal: +inssVal.toFixed(2),
    inssPorcent: +aliquota,
  }
}

function calculateINSSandIRRF(value: number, numDependents: number) {
  const { inssVal, inssPorcent } = calcularINSS(value)

  const irrfValues = IRRF.filter(
    (el) =>
      el.minValue < value - inssVal &&
      (el.maxValue === null || el.maxValue > value - inssVal)
  )[0]

  const irrfBase = value - inssVal - numDependents * VALUE_DEPENDENT_DEDUCTIONS
  const irrfPorcent = (irrfValues && irrfValues.percent / 100) || 0
  const irrfDeduc = (irrfValues && irrfValues.parcelTax) || 0
  const irrfVal = Math.max(irrfBase * irrfPorcent - irrfDeduc, 0)
  const totalDiscount = +(inssVal + irrfVal).toFixed(2)

  const aliquotaIrrf = (irrfVal / irrfBase) * 100

  return {
    inssVal: inssVal || 0,
    inssPorcent: inssPorcent || 0,
    irrfVal: irrfVal || 0,
    irrfPorcent: irrfPorcent || 0,
    grossVal: +value.toFixed(2),
    totalDiscount,
    liquidVal: value - totalDiscount,
    aliquotaIrrf: +aliquotaIrrf.toFixed(2),
  }
}
