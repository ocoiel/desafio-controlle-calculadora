import Link from "next/link"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function Calculator() {
  return (
    <section className="w-full rounded-sm bg-white p-8 lg:h-[467px] lg:w-[426px]">
      <h2 className="mb-6 text-[17px] font-medium leading-[26px] text-black">
        Calculadora de Férias Online
      </h2>
      <div className="form grid grid-cols-2 gap-x-4 text-black">
        <div className="grid gap-y-4">
          <div>
            <Label>Salário Bruto</Label>
            <div className="relative">
              <div className="boder-[#CECED8] absolute inset-0 z-0 my-[1px] ml-[1px] flex h-[38px] w-10 items-center justify-center rounded border-0 border-y border-l bg-[#EEF2F8]">
                <span className="text-[13px]">R$</span>
              </div>
              <Input className="z-10 pl-11" defaultValue={"0,00"} />
            </div>
          </div>

          <div>
            <Label>Dependentes</Label>
            <Input defaultValue={"0"} />
          </div>

          <div>
            <Label>Abono pecuniário 1/3</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Não" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">Não</SelectItem>
                <SelectItem value="yes">Sim</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-y-4">
          <div>
            <Label>Média de hora extra</Label>
            <div className="relative">
              <div className="boder-[#CECED8] absolute inset-0 z-0 my-[1px] ml-[1px] flex h-[38px] w-10 items-center justify-center rounded border-0 border-y border-l bg-[#EEF2F8]">
                <span className="text-[13px]">R$</span>
              </div>
              <Input className="z-10 pl-11" defaultValue={"0,00"} />
            </div>
          </div>

          <div>
            <Label>Dias de férias</Label>
            <Input defaultValue={"0"} />
          </div>

          <div>
            <Label>Adiantar 13 parcela?</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Não" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">Não</SelectItem>
                <SelectItem value="yes">Sim</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
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
