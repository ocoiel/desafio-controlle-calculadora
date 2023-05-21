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
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Evento</TableHead>
            <TableHead>Ref</TableHead>
            <TableHead>Proventos</TableHead>
            <TableHead>Descontos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Valor férias</TableCell>
            <TableCell>-</TableCell>
            <TableCell>R$ {vacationInitialValue.toFixed(2)}</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/3 férias</TableCell>
            <TableCell>-</TableCell>
            <TableCell>R$ {(vacationInitialValue / 3).toFixed(2)}</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell>
              {hasAbono ? `R$ ${abonoValue.toFixed(2)}` : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/3 abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell>
              {hasAbono ? `R$ ${(abonoValue / 3).toFixed(2)}` : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Adiantamento 1 parcela 13</TableCell>
            <TableCell></TableCell>
            <TableCell>
              {hasThirteenth
                ? `R$ ${(parseInt(data.salary) / 2).toFixed(2)}`
                : null}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INSS</TableCell>
            <TableCell>{realAliquotINSS}%</TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {inssVal.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IRRF</TableCell>
            <TableCell>{realAliquotIRRF}%</TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {irrfVal.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Totais</TableCell>
            <TableCell></TableCell>

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
              - R${(inssVal + irrfVal).toFixed(2)}
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
