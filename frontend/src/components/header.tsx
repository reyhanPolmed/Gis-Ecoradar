import { Leaf } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Peta Isu Lingkungan</h1>
        </div>
      </div>
    </header>
  )
}
