import { Calculator } from "@/components/calculator"
import { Instructions } from "@/components/instructions"

export default function IndexPage() {
  return (
    <main className="bg-background lg:container">
      <div className="flex flex-col-reverse justify-between lg:flex-row lg:py-16">
        <Instructions />
        <Calculator />
      </div>
    </main>
  )
}
