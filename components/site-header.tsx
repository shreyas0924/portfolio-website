import Link from "next/link"

import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex gap-6 font-mono text-2xl md:gap-10">
          Shreyas P
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4 space-x-1 font-mono text-2xl">
            <Link href="../projects">Projects</Link>
            <Link href="../contact">Contact</Link>
            <Link href={siteConfig.links.resume} target="_blank">
              Resume
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
