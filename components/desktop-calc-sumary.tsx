import { FormValues } from "@/types/form-schema"

export function DesktopCalcSumary({ data }: { data: FormValues }) {
  return (
    <div className="hidden w-full grid-cols-2 rounded-[6px] bg-white p-2 text-sm text-[#32323E] shadow-sm sm:h-48 lg:grid lg:h-36 lg:px-7 lg:py-6 lg:text-[15px]">
      <div className="flex flex-col gap-y-3">
        <p>
          Sálario Bruto:{" "}
          <span className="ml-1 font-semibold">R$ {data.salary},00</span>
        </p>
        <p>
          Dependente: <span className="ml-1 font-semibold">{data.deps}</span>
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
  )
}
