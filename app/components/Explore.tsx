import Link from "next/link";

const links = [
  { title: "ABOUT US", href: "/about" },
  { title: "FLOWER COLLECTIONS", href: "/flower-collections" },
  { title: "WORKSHOPS", href: "/workshops" },
  { title: "FLORAL ACADEMY", href: "/floral-academy" },
];

export default function Explore() {
  return (
    <section
  id="explore"
  data-cursor="light"
      className="bg-[#0B0B3B] py-36 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <p className="text-center font-body italic text-white/60">
          Discover
        </p>

        <h2 className="mt-3 mb-20 text-center font-heading text-5xl">
          Explore Maison de Lia
        </h2>

        {links.map((item) => (
          <Link
            key={item.title}
            href={item.href}
           className="group flex items-center justify-between border-b border-white/20 py-8 transition-all duration-300 hover:border-white hover:pl-4"
          >
            <span className="font-menu text-sm tracking-[0.35em]">
              {item.title}
            </span>

            <span className="text-2xl transition duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        ))}

      </div>
    </section>
  );
}