export default function Resultado() {
  return (
    <div className="lg:container">
      <section>
        <h1 className="mb-5 mt-12 text-[22px] font-medium">Cálculo</h1>
        <div className="grid w-full grid-cols-2 rounded-[6px] bg-white p-4 text-[15px] text-[#32323E] sm:h-48 md:p-4 lg:h-36 lg:px-7 lg:py-6">
          <div className="flex flex-col gap-y-3">
            <p>
              Sálario Bruto:{" "}
              <span className="ml-1 font-semibold">R$ 3.000,00</span>
            </p>
            <p>
              Dependente: <span className="ml-1 font-semibold">1</span>
            </p>
            <p>
              Abono pecuniário: <span className="ml-1 font-semibold">Não</span>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p>
              Média de hora extra:{" "}
              <span className="ml-1 font-semibold">R$ 0,00</span>
            </p>
            <p>
              Dias de férias: <span className="ml-1 font-semibold">20</span>
            </p>
            <p>
              Adiantar 1ª parcela 13º:{" "}
              <span className="ml-1 font-semibold">Não</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="mb-5 mt-12 text-[22px] font-medium">Resultado</h1>
        {/* Tabela */}
      </section>
    </div>
  )
}
