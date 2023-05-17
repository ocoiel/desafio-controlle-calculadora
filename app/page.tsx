export default function IndexPage() {
  return (
    <main className="bg-background lg:container">
      <div className="flex flex-col-reverse justify-between lg:flex-row lg:py-16">
        <section className="w-[452px]">
          <h1 className="text-[38px] font-medium leading-10 text-[#32323E]">
            Como utilizar a calculadora de férias
          </h1>
          <div className="mt-6 space-y-6 text-[#32323E]">
            <p>
              Para ficar tranquilo no seu descanso e com dinheiro no bolso, veja
              como fazer o cálculo de férias:
            </p>
            <ol>
              <li>1. Preencha o valor do seu salário bruto;</li>
              <li>2. Preencha o valor médio da sua hora extra (Opcional);</li>
              <li>3. Informe o número de dependentes, caso tenha;</li>
              <li>4. Preencha a quantidade de dias de férias requisitados;</li>
              <li>5. Informe se vai ter abono pecuniário de 1/3;</li>
              <li>6. Marque se irá adiantar a 1ª parcela do 13º salário.</li>
            </ol>
            <p>
              É previsto por lei que um funcionário CLT pode tirar férias após
              trabalhar um período de 12 meses (1 ano). Porém, é possível que
              dúvidas existam em relação ao cálculo de férias remuneradas.
            </p>
          </div>
          <p className="mt-1">
            Dessa forma, confira um exemplo de como ele é realizado no caso de
            um trabalhador que recebe um salário de R$2400/mês.
          </p>
        </section>
        <section className="w-full rounded-sm bg-white p-10 lg:h-[467px] lg:w-[426px]">
          Direita
        </section>
      </div>
    </main>
  )
}
