import { FormValues } from "@/types/form-schema"

export function calculator(data: FormValues) {
  // Transformando strings em inteiros
  const salaryRaw = parseInt(data.salary)
  const deps = parseInt(data.deps)
  const vacationDays = parseInt(data.vacationDays)
  const extra = parseInt(data.extra)

  // Transformando strings em boleanos
  const hasAbono = data.abono === "no" ? false : true
  const hasThirteenth = data.thirteenth === "no" ? false : true

  // Passo 1 - Cálculo do acréscimo de 1/3 sobre o salário base
  const increaseOneThird = salaryRaw * (1 / 3)

  // Passo 2 - Primeiro cálculo, baseado no numero de dias de férias
  let liquidVacation = (salaryRaw + increaseOneThird) * (vacationDays / 30)

  // Passo 2.1 - Separando o valor inicial sem as outras variáveis
  const vacationInitialValue = liquidVacation

  // Passo 3 - Adicionar média de horas extras
  const extraRate = salaryRaw / 220 // Considerando 220 horas mensais (8h/dia)
  const extraTotal = extraRate * extra * (vacationDays / 30)
  liquidVacation += extraTotal

  // Passo 4 - Verificar se tem abono pecuniário (venda de férias)
  if (hasAbono) {
    const abonoValue = liquidVacation / 3
    const abonoOneThird = abonoValue / 3
    liquidVacation += abonoValue + abonoOneThird
  }

  // Passo 5 - Verificar se tem adiantamento do décimo terceiro salário
  if (hasThirteenth) {
    const thirteenthValue = salaryRaw / 2 // Considerando 50% do salário base (isso é variável)
    liquidVacation += thirteenthValue
  }

  // Passo 6 - Subtrair os descontos do INSS e IRRF
  const discountINSS = discountINSSCalc(salaryRaw)
  const discountIRRF = discountIRRFCalc(salaryRaw, deps)
  liquidVacation -= discountINSS + discountIRRF

  return { vacationInitialValue, liquidVacation }
}

function discountINSSCalc(salary: number): number {}

function discountIRRFCalc(salary: number, deps: number): number {}
