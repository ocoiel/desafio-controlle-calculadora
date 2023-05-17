import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-32" />
      </Link>
    </div>
  )
}
