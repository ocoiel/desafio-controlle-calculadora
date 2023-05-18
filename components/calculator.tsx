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
        <div className="">
          <Label>Salário Bruto</Label>
          <div className="relative">
            <div className="boder-[#CECED8] absolute inset-0 z-0 my-[1px] ml-[1px] flex h-[38px] w-10 items-center justify-center rounded border-0 border-y border-l bg-[#EEF2F8]">
              <span>R$</span>
            </div>
            <Input className="z-10 pl-11" defaultValue={"0,00"} />
          </div>

          <Label>Dependentes</Label>
          <Input defaultValue={"0"} />

          <Label>Abono pecuniário 1/3</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Label>Média de hora extra</Label>
          <Input defaultValue={"0,00"} />

          <Label>Dias de férias</Label>
          <Input defaultValue={"0"} />

          <Label>Adiantar 13 parcela</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}
