import Link from "next/link"

import { CalculatorForm } from "./calculator-form"
import { Button } from "./ui/button"

export function Calculator() {
  return (
    <section className="w-full rounded-sm bg-white p-8 lg:h-[467px] lg:w-[426px]">
      <h2 className="mb-6 text-[17px] font-medium leading-[26px] text-black">
        Calculadora de Férias Online
      </h2>
      <CalculatorForm />
      {/* Vai ter q sair daqui */}
      <div className="mt-10 flex flex-col items-center gap-y-2">
        <Link className="w-full" href="/resultado">
          <Button className="w-full font-bold">Calcular</Button>
        </Link>
        <Button className="w-full font-medium text-[#5F5F5F]" variant={"ghost"}>
          Limpar
        </Button>
      </div>
    </section>
  )
}
