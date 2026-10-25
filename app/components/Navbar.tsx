import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-8">

        {/* Menu trái */}
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-white md:flex">
          <Link href="/about">About</Link>
          <Link href="/flower-collections">Collections</Link>
          <Link href="/workshops">Workshops</Link>
        </nav>

        {/* Logo */}
       <Link
  href="/"
  className="font-heading text-lg tracking-[0.12em] text-white transition-opacity duration-300 hover:opacity-80"
>
  Maison de Lia
</Link>

        {/* Menu phải */}
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-white md:flex">
          <Link href="/floral-academy">Academy</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}