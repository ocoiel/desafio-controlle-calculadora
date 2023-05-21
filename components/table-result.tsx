import { FormValues } from "@/types/form-schema"
import { calculator } from "@/lib/calculator"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export function TableResult({ data }: { data: FormValues }) {
  const {
    vacationInitialValue,
    abonoValue,
    realAliquotINSS,
    realAliquotIRRF,
    hasThirteenth,
    hasAbono,
    inssVal,
    irrfVal,
    totalDiscount,
  } = calculator(data)

  const oneThirdVacation = vacationInitialValue / 3
  // const percentDiscountINSS =
  //   discountINSS / (vacationInitialValue + oneThirdVacation)
  const total =
    vacationInitialValue +
    oneThirdVacation +
    abonoValue +
    abonoValue / 3 +
    (hasThirteenth ? parseInt(data.salary) / 2 : 0) -
    totalDiscount

  return (
    <div className="mb-8 rounded-lg bg-white text-[#32323E] shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="items-center justify-center p-0 pl-2 lg:p-4">
              Evento
            </TableHead>
            <TableHead className="w-[30px] items-center justify-center p-0 lg:p-4">
              Ref
            </TableHead>
            <TableHead>Proventos</TableHead>
            <TableHead>Descontos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              Valor férias
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4">
              -
            </TableCell>
            <TableCell>R$ {vacationInitialValue.toFixed(2)}</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              1/3 férias
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4">
              -
            </TableCell>
            <TableCell>R$ {(vacationInitialValue / 3).toFixed(2)}</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              Abono pecuniário
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4"></TableCell>
            <TableCell>
              {hasAbono ? `R$ ${abonoValue.toFixed(2)}` : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              1/3 abono pecuniário
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4"></TableCell>
            <TableCell>
              {hasAbono ? `R$ ${(abonoValue / 3).toFixed(2)}` : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              Adiantamento 1 parcela 13
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4"></TableCell>
            <TableCell>
              {hasThirteenth
                ? `R$ ${(parseInt(data.salary) / 2).toFixed(2)}`
                : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              INSS
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4">
              {realAliquotINSS}%
            </TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {inssVal.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              IRRF
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4">
              {realAliquotIRRF}%
            </TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {irrfVal.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="items-center justify-center p-0 pl-2 lg:p-4">
              Totais
            </TableCell>
            <TableCell className="w-[30px] items-center justify-center p-0 lg:p-4"></TableCell>

            <TableCell className="font-semibold text-green-600">
              R${" "}
              {(
                vacationInitialValue +
                oneThirdVacation +
                abonoValue +
                abonoValue / 3 +
                (hasThirteenth ? parseInt(data.salary) / 2 : 0)
              ).toFixed(2)}
            </TableCell>
            <TableCell className="text-red-500">
              {" "}
              R${(inssVal + irrfVal).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex w-full items-center justify-between border-t border-[#E8ECF2] text-sm">
        <div className="w-1/2 p-4">Valor líquido de férias</div>
        <div className="flex w-1/2 items-center justify-center bg-[#FEFFCF] p-4">
          R$ {total.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
