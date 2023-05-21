// Dados atualizados de 2023
// Fonte: https://www.mobills.com.br/tabelas/inss/ e https://www.mobills.com.br/tabelas/irrf/

export const INSS = [
  { percent: 7.5, minValue: 0, maxValue: 1320, range: 1 },
  { percent: 9, minValue: 1320.01, maxValue: 2571.29, range: 2 },
  { percent: 12, minValue: 2571.3, maxValue: 3856.94, range: 3 },
  { percent: 14, minValue: 3856.95, maxValue: 7507.49, range: 4 },
  { percent: 14.5, minValue: 7507.5, maxValue: 12856.5, range: 4 },
  { percent: 16.5, minValue: 12856.51, maxValue: 25712.99, range: 4 },
  { percent: 19, minValue: 25713.0, maxValue: 50140.33, range: 4 },
  { percent: 22, minValue: 50140.33, maxValue: Infinity, range: 5 },
]

export const IRRF = [
  { percent: 0, parcelTax: 0, minValue: 0, maxValue: 2112.0 },
  { percent: 7.5, parcelTax: 158.4, minValue: 2112.01, maxValue: 2826.65 },
  { percent: 15, parcelTax: 370.4, minValue: 2826.66, maxValue: 3751.05 },
  { percent: 22.5, parcelTax: 651.73, minValue: 3751.06, maxValue: 4664.68 },
  { percent: 27.5, parcelTax: 884.96, minValue: 4664.69, maxValue: null },
]
