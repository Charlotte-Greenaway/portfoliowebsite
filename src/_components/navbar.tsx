import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

export default function NavBar() {
  const menuItems = [
    { title: "About Me", href: "#aboutMe" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ]
  return (
    <header className="flex h-20 w-full items-center justify-between bg-white px-4 md:px-6 max-w-5xl mx-auto">
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        CHARLOTTE GREENAWAY
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-4 p-4">
            {menuItems.map((item) => (
              <SheetTrigger asChild key={item.title}>
              <Link
                href={item.href}
                className="text-lg font-medium"
                prefetch={false}
              >
                {item.title}
              </Link>
              </SheetTrigger>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden gap-6 text-lg font-medium lg:flex">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            className="hover:text-gray-800"
            prefetch={false}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

