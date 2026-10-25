import Image from "next/image";

export default function Hero() {
  return (
    <section
      data-cursor="light"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Maison de Lia"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Main Title */}
        <h1 className="font-heading text-5xl tracking-[0.08em] text-white md:text-7xl">
          MAISON DE LIA
        </h1>

        {/* Subtitle */}
        <p className="mt-5 font-menu text-xs uppercase tracking-[0.35em] text-white/80">
          Wedding Florals • Custom Bouquets • Workshops & Academy
        </p>

        {/* Description */}
        <p className="mt-8 max-w-2xl font-body text-sm italic leading-7 text-white/60">
          Proudly Vietnamese, bringing heartfelt floral artistry to Toronto
        </p>

        {/* Explore Button */}
       <a
  href="#explore"
  className="mt-14 rounded-full border border-white px-8 py-3 font-menu text-[11px] uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-white hover:text-[#0B0B3B]"
>
  Explore ↓
</a>

      </div>

    </section>
  );
}