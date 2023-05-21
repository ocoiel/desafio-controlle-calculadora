import { FormValues } from "@/types/form-schema"

export function MobileCalcSumary({ data }: { data: FormValues }) {
  return (
    <div className="grid grid-cols-2 gap-1 text-sm text-[#32323E] shadow-sm lg:hidden">
      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Sálario Bruto:{" "}
          <p className="ml-1 font-semibold">R$ {data.salary},00</p>
        </p>
      </div>

      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Dependente: <p className="ml-1 font-semibold">{data.deps}</p>
        </p>
      </div>

      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Abono pecuniário:{" "}
          <p className="ml-1 font-semibold">
            {data.abono === "no" ? "Não" : "Sim"}
          </p>
        </p>
      </div>

      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Média de hora extra:{" "}
          <p className="ml-1 font-semibold">R$ {data.extra},00</p>
        </p>
      </div>

      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Dias de férias:{" "}
          <p className="ml-1 font-semibold">{data.vacationDays}</p>
        </p>
      </div>

      <div className="block rounded-[6px] border border-[#E8ECF2] bg-white px-2 py-4 text-center">
        <p>
          Adiantar 1ª parcela 13º:{" "}
          <p className="ml-1 font-semibold">
            {data.thirteenth === "no" ? "Não" : "Sim"}
          </p>
        </p>
      </div>
    </div>
  )
}
