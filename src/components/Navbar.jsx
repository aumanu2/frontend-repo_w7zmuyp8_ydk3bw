import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="text-xl font-semibold tracking-tight">
            BlueWear
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden gap-8 text-sm font-medium text-neutral-700 sm:flex">
          <a href="#new" className="hover:text-black">New Arrivals</a>
          <a href="#men" className="hover:text-black">Men</a>
          <a href="#women" className="hover:text-black">Women</a>
          <a href="#sale" className="text-rose-600 hover:text-rose-700">Sale</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden rounded-full bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 sm:inline-flex" aria-label="Account">
            <User className="h-5 w-5" />
          </button>
          <button className="relative inline-flex items-center rounded-full bg-black p-2 text-white hover:bg-neutral-800" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-600 px-1 text-xs font-semibold text-white">2</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white sm:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="grid gap-2 text-sm font-medium text-neutral-700">
              <a href="#new" className="rounded-md px-2 py-2 hover:bg-neutral-100">New Arrivals</a>
              <a href="#men" className="rounded-md px-2 py-2 hover:bg-neutral-100">Men</a>
              <a href="#women" className="rounded-md px-2 py-2 hover:bg-neutral-100">Women</a>
              <a href="#sale" className="rounded-md px-2 py-2 text-rose-600 hover:bg-rose-50">Sale</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
