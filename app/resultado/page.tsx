export default function Resultado() {
  return (
    <div className="container">
      <section>
        <h1>Cálculo</h1>
        <div className="grid w-full grid-cols-2 rounded-[6px] bg-white text-[15px] text-[#32323E] md:h-40 md:p-4 lg:h-36 lg:p-6">
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
        <h1>Resultado</h1>
        {/* Tabela */}
      </section>
    </div>
  )
}
