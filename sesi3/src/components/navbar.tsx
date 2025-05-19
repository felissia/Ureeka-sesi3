"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "About Me", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Get In Touch", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center ml-8">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Felicia Teja Irawan
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-600",
                pathname === item.href ? "text-gray-800" : "text-gray-500",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden flex flex-1 justify-end">
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  pathname === item.href ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
