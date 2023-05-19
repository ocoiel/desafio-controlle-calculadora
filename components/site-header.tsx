import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="ml-8 flex h-16 items-center space-x-4 lg:container sm:justify-between sm:space-x-0">
        <MainNav />
      </div>
    </header>
  )
}
