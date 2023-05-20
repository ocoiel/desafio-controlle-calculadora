"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { FormValues, defaultValues, formSchema } from "@/types/form-schema"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export function CalculatorForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onSubmit",
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-4 text-black">
          <div className="grid gap-y-4">
            <div>
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  // I have an error with uncontrolled input that i have to resolve
                  <FormItem>
                    <FormLabel>Salário Bruto</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="boder-[#CECED8] absolute inset-0 z-0 my-[1px] ml-[1px] flex h-[38px] w-10 items-center justify-center rounded border-0 border-y border-l bg-[#EEF2F8]">
                          <span className="text-[13px]">R$</span>
                        </div>
                        <Input
                          // type="number"
                          className="z-10 pl-11"
                          placeholder="0,00"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="deps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dependentes</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label>Abono pecuniário 1/3</Label>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] text-sm">
                    <p>
                      Significa que você pode vender um terço (1/3) de suas
                      férias para a empresa, recebendo uma remuneração a mais
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <FormField
                control={form.control}
                name="abono"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Não" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no">Não</SelectItem>
                        <SelectItem value="yes">Sim</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid gap-y-4">
            <div>
              <FormField
                control={form.control}
                name="extra"
                render={({ field }) => (
                  // I have an error with uncontrolled input that i have to resolve
                  <FormItem>
                    <FormLabel>Média de hora extra</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="boder-[#CECED8] absolute inset-0 z-0 my-[1px] ml-[1px] flex h-[38px] w-10 items-center justify-center rounded border-0 border-y border-l bg-[#EEF2F8]">
                          <span className="text-[13px]">R$</span>
                        </div>
                        <Input
                          type="number"
                          className="z-10 pl-11"
                          placeholder="0,00"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="vacationDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dias de férias</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="thirteenth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adiantar 13 parcela?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Não" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no">Não</SelectItem>
                        <SelectItem value="yes">Sim</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
