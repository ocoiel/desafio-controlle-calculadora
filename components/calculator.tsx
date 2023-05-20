import { CalculatorForm } from "./calculator-form"

export function Calculator() {
  return (
    <section className="w-full rounded-sm bg-white p-8 lg:h-[467px] lg:w-[426px]">
      <h2 className="mb-6 text-[17px] font-medium leading-[26px] text-black">
        Calculadora de Férias Online
      </h2>
      <CalculatorForm />
    </section>
  )
}
