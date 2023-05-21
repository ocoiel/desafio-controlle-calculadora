import { FormValues } from "@/types/form-schema"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export function TableResult({ data }: { data: FormValues }) {
  // const liquidValue = calculate(data)

  return (
    <div className="mb-8 rounded-lg bg-white text-[#32323E] shadow-sm">
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
            <TableCell>R$ 600,00</TableCell>
            <TableCell className="flex items-center justify-end lg:mr-32">
              -
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">1/3 férias</TableCell>
            <TableCell>-</TableCell>
            <TableCell>R$ 600,00</TableCell>
            <TableCell className="flex items-center justify-end lg:mr-32">
              -
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">Abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">1/3 abono pecuniário</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">Adiantamento 1 parcela 13</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">INSS</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">IRRF</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className="w-2/5">Totais</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            {/* <TableCell className="mr-32 flex items-center justify-end"></TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex w-full items-center justify-between border-t border-[#E8ECF2] text-sm">
        <div className="w-1/2 p-4">Valor líquido de férias</div>
        <div className="flex w-1/2 items-center justify-center bg-[#FEFFCF] p-4">
          R$ 600,00
        </div>
      </div>
    </div>
  )
}
