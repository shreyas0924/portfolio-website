"use client"

import React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex gap-6 font-mono text-xl md:text-2xl">
          Shreyas P
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4 space-x-1 font-mono text-xl md:text-2xl">
            <div className="hidden md:block">
              <Link href="../projects" className="mx-4">
                {" "}
                Projects
              </Link>
              <Link href={siteConfig.links.resume} target="_blank">
                Resume
              </Link>
            </div>
            <ThemeToggle />
            <div className="md:hidden">
              <Menu
                className={`h-6 w-6 cursor-pointer ${
                  isMenuOpen ? "text-primary" : ""
                }`}
                onClick={handleMenuToggle}
              />
              {isMenuOpen && (
                <div className="absolute right-0 top-full mr-4 mt-2 justify-start rounded border-2 border-gray-300 bg-background shadow-md dark:border-gray-700">
                  <Link href="../projects" className="block p-2">
                    Projects
                  </Link>
                  <Link
                    href={siteConfig.links.resume}
                    target="_blank"
                    className="block p-2"
                  >
                    Resume
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
