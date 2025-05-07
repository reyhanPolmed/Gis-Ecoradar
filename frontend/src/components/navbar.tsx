"use client"
import { Layers } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <header className="sticky flex justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex w-full h-14 items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-green-600" />
            <span className="font-bold"><span className="text-green-600">ECORADAR</span> MEDAN</span>
          </Link>
        </div>

        {/* Navigation in the center */}
        <nav className="flex items-center space-x-6 text-sm font-medium ml-28">
          <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground">
            Home
          </Link>
          <Link to="/data-spasial" className="transition-colors hover:text-foreground/80 text-foreground">
            Data Spasial
          </Link>
          <Link to="/about-us" className="transition-colors hover:text-foreground/80 text-foreground">
            About Us
          </Link>
        </nav>

        {/* Login button on the right */}
        {/* <div className="flex items-center">
          <Button size="sm">Login</Button>
        </div> */}
      </div>
    </header>
  )
}
