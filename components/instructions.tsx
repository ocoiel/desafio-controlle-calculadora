export function Instructions() {
  return (
    <section className="mb-8 mt-2 px-7 text-[#32323E] lg:w-[452px]">
      <h1 className="max-w-sm text-[29px] font-medium leading-10 lg:text-[38px]">
        Como utilizar a calculadora de férias
      </h1>
      <div className="mt-6 flex h-[300px] flex-col gap-y-6 text-sm lg:h-[350px] lg:min-w-[435px] lg:text-base">
        <p>
          Para ficar tranquilo no seu descanso e com dinheiro no bolso, veja
          como fazer o cálculo de férias:
        </p>
        <div className="pl-6">
          <ol className="list-decimal">
            <li>Preencha o valor do seu salário bruto;</li>
            <li>Preencha o valor médio da sua hora extra (Opcional);</li>
            <li>Informe o número de dependentes, caso tenha;</li>
            <li>Preencha a quantidade de dias de férias requisitados;</li>
            <li>Informe se vai ter abono pecuniário de 1/3;</li>
            <li>Marque se irá adiantar a 1ª parcela do 13º salário.</li>
          </ol>
        </div>
        <p>
          É previsto por lei que um funcionário CLT pode tirar férias após
          trabalhar um período de 12 meses (1 ano). Porém, é possível que
          dúvidas existam em relação ao cálculo de férias remuneradas.
        </p>
        <p className="-mt-6 border-red-500">
          Dessa forma, confira um exemplo de como ele é realizado no caso de um
          trabalhador que recebe um salário de R$2400/mês.
        </p>
      </div>
    </section>
  )
}
