import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#F8F3E7] py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 md:flex-row">

        <div className="relative h-[520px] w-full md:w-1/2">
          <Image
            src="/images/hero.jpg"
            alt="Maison de Lia"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="md:w-1/2">

          <p className="uppercase tracking-[0.3em] text-gray-500">
            ABOUT
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#10104A]">
            Maison de Lia
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            Maison de Lia was born from a love for natural flowers and
            meaningful moments. Every arrangement is thoughtfully designed
            to tell a story through texture, colour and emotion.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block border-b border-[#10104A] pb-2 tracking-[0.2em]"
          >
            READ MORE →
          </Link>

        </div>

      </div>
    </section>
  );
}