import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function IndexPage() {
  return (
    <main className="bg-background lg:container">
      <div className="flex flex-col-reverse justify-between lg:flex-row lg:py-16">
        <section className="mt-2 px-7 text-[#32323E] lg:w-[452px]">
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
              Dessa forma, confira um exemplo de como ele é realizado no caso de
              um trabalhador que recebe um salário de R$2400/mês.
            </p>
          </div>
        </section>
        <section className="w-full rounded-sm bg-white p-10 lg:h-[467px] lg:w-[426px]">
          <h2 className="mb-6 text-[17px] font-medium leading-[26px] text-black">
            Calculadora de Férias Online
          </h2>
          <div className="form grid grid-cols-2 gap-x-4">
            <div className="">
              <Label>Salário Bruto</Label>
              <Input defaultValue={"0,00"} />

              <Label>Dependentes</Label>
              <Input defaultValue={"0"} />

              <Label>Abono pecuniário 1/3</Label>
              <Input />
            </div>
            <div className="">
              <Label>Média de hora extra</Label>
              <Input defaultValue={"0,00"} />

              <Label>Dias de férias</Label>
              <Input defaultValue={"0"} />

              <Label>Adiantar 13 parcela</Label>
              <Input />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
