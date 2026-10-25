
"use client";

import Link from "next/link";
import { useState } from "react";

const menuLeft = [
  { label: "About", href: "/about" },
  { label: "Collections", href: "/flower-collections" },
  { label: "Workshops", href: "/workshops" },
];

const menuRight = [
  { label: "Academy", href: "/floral-academy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinks = [...menuLeft, ...menuRight];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-6 md:px-10 md:py-8">
        {/* Left menu */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {menuLeft.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-60 lg:tracking-[0.22em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link
          href="/"
          className="text-center text-white transition-opacity duration-300 hover:opacity-70"
        >
          <span className="block whitespace-nowrap font-heading text-xl tracking-[0.1em] md:text-2xl">
            Maison de Lia
          </span>
          <span className="mt-1 block text-[8px] tracking-[0.3em]">
            FLORAL STUDIO
          </span>
        </Link>

        {/* Right menu */}
        <nav className="hidden items-center justify-end gap-6 md:flex lg:gap-8">
          {menuRight.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-60 lg:tracking-[0.22em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden bg-[#F8F3E7] transition-all duration-500 md:hidden ${
          isOpen
            ? "max-h-[420px] border-t border-[#0B0B3B]/10"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-7 py-3">
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-[#0B0B3B]/10 py-4 text-[10px] uppercase tracking-[0.22em] text-[#0B0B3B] last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
