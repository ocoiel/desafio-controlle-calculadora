// Dados atualizados de 2023
// Fonte: https://www.mobills.com.br/tabelas/inss/ e https://www.mobills.com.br/tabelas/irrf/

export const INSS = [
  { initialRange: 0, lastRange: 1302, aliquot: 0.075 },
  { initialRange: 1302.1, lastRange: 2571.29, aliquot: 0.09 },
  { initialRange: 2571.3, lastRange: 3856.94, aliquot: 0.12 },
  { initialRange: 3856.95, lastRange: 7507.49, aliquot: 0.14 },
]

export const IRRF = [
  { initialRange: 0, lastRange: 1903.98, aliquot: 0, deduction: 0 },
  {
    initialRange: 1903.99,
    lastRange: 2826.65,
    aliquot: 0.075,
    deduction: 142.8,
  },
  {
    initialRange: 2826.66,
    lastRange: 3751.05,
    aliquot: 0.15,
    deduction: 354.8,
  },
  {
    initialRange: 3751.06,
    lastRange: 4664.68,
    aliquot: 0.225,
    deduction: 636.13,
  },
  {
    initialRange: 4664.69,
    lastRange: Infinity,
    aliquot: 0.275,
    deduction: 869.36,
  },
]
