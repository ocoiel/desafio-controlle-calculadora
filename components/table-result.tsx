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
            <TableHead className="w-2/5">Evento</TableHead>
            <TableHead>Ref</TableHead>
            <TableHead>Proventos</TableHead>
            <TableHead className="flex items-center justify-end lg:mr-16">
              Descontos
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-2/5">Valor férias</TableCell>
            <TableCell>-</TableCell>
            <TableCell>R$ {vacationInitialValue.toFixed(2)}</TableCell>
            <TableCell className="flex items-center justify-end lg:mr-32">
              -
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">1/3 férias</TableCell>
            <TableCell>-</TableCell>
            <TableCell>R$ {(vacationInitialValue / 3).toFixed(2)}</TableCell>
            <TableCell className="flex items-center justify-end lg:mr-32">
              -
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">Abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {abonoValue.toFixed(2)}</TableCell>
            <TableCell className="mr-32 flex items-center justify-end"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">1/3 abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell>R$ {(abonoValue / 3).toFixed(2)}</TableCell>
            <TableCell className="mr-32 flex items-center justify-end"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">Adiantamento 1 parcela 13</TableCell>
            <TableCell></TableCell>
            <TableCell>
              R$ {hasThirteenth ? (parseInt(data.salary) / 2).toFixed(2) : null}
            </TableCell>
            <TableCell className="mr-32 flex items-center justify-end"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">INSS</TableCell>
            <TableCell>{realAliquotINSS}%</TableCell>
            <TableCell></TableCell>
            <TableCell className="mr-32 flex items-center justify-end">
              R$ {inssVal.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">IRRF</TableCell>
            <TableCell>{realAliquotIRRF}%</TableCell>
            <TableCell></TableCell>
            <TableCell className="mr-32 flex items-center justify-end">
              R$ {irrfVal.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-3/5">Totais</TableCell>
            <TableCell></TableCell>

            <TableCell>
              {(
                vacationInitialValue +
                oneThirdVacation +
                abonoValue +
                abonoValue / 3 +
                (hasThirteenth ? parseInt(data.salary) / 2 : 0)
              ).toFixed(2)}
            </TableCell>
            <TableCell className="mr-32 flex items-center justify-end"></TableCell>
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
