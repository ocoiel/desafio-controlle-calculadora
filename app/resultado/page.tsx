"use client"

import { useAtom } from "jotai"

import { formDataAtom } from "@/lib/atoms"
import { DesktopCalcSumary } from "@/components/desktop-calc-sumary"
import { MobileCalcSumary } from "@/components/mobile-calc-sumary"
import { TableResult } from "@/components/table-result"

export default function Resultado() {
  const [data] = useAtom(formDataAtom)
  return (
    <div className="lg:container">
      <section className="p-4 lg:p-0">
        <h1 className="mb-4 text-[22px] font-medium lg:mb-5 lg:mt-12">
          Cálculo
        </h1>
        <DesktopCalcSumary data={data} />
        <MobileCalcSumary data={data} />
      </section>
      <section className="p-4 lg:p-0">
        <h1 className="mb-5 mt-12 text-[22px] font-medium">Resultado</h1>
        <TableResult data={data} />
      </section>
    </div>
  )
}
