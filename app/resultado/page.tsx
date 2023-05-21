"use client"

import { useAtom } from "jotai"

import { FormValues } from "@/types/form-schema"
import { formDataAtom } from "@/lib/atoms"
import { TableResult } from "@/components/table-result"

export default function Resultado() {
  const [data] = useAtom(formDataAtom)
  return (
    <div className="lg:container">
      <section className="p-4 lg:p-0">
        <h1 className="mb-5 mt-12 text-[22px] font-medium">Cálculo</h1>
        <div className="grid w-full grid-cols-2 rounded-[6px] bg-white p-2 text-sm text-[#32323E] shadow-sm sm:h-48 lg:h-36 lg:px-7 lg:py-6 lg:text-[15px]">
          <div className="flex flex-col gap-y-3">
            <p>
              Sálario Bruto:{" "}
              <span className="ml-1 font-semibold">R$ {data.salary},00</span>
            </p>
            <p>
              Dependente:{" "}
              <span className="ml-1 font-semibold">{data.deps}</span>
            </p>
            <p>
              Abono pecuniário:{" "}
              <span className="ml-1 font-semibold">
                {data.abono === "no" ? "Não" : "Sim"}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p>
              Média de hora extra:{" "}
              <span className="ml-1 font-semibold">R$ {data.extra},00</span>
            </p>
            <p>
              Dias de férias:{" "}
              <span className="ml-1 font-semibold">{data.vacationDays}</span>
            </p>
            <p>
              Adiantar 1ª parcela 13º:{" "}
              <span className="ml-1 font-semibold">
                {data.thirteenth === "no" ? "Não" : "Sim"}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="p-4 lg:p-0">
        <h1 className="mb-5 mt-12 text-[22px] font-medium">Resultado</h1>
        <TableResult data={data} />
      </section>
    </div>
  )
}
