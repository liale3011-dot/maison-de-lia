
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LetterSection() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-cursor="dark"
      className="overflow-hidden bg-[#0B0B3B] py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-body italic text-white/60">
          Maison de Lia
        </p>

        <h2 className="mt-3 text-center font-heading text-6xl text-white">
          About Lia
        </h2>

        <div
          ref={sectionRef}
          className="relative mx-auto mt-24 h-[760px] max-w-[1000px]"
        >
          {/* Envelope */}
          <Image
            src="/images/envelope.png"
            alt="Envelope"
            width={600}
            height={500}
            className="absolute left-1/2 top-28 z-10 -translate-x-1/2"
          />

          {/* Polaroid */}
          <Image
            src="/images/polaroid.png"
            alt="Polaroid"
            width={360}
            height={360}
            className={`absolute left-[80px] top-[220px] z-20 -rotate-[8deg] shadow-2xl transition-all duration-1000 ${
              show
                ? "translate-x-0 opacity-100"
                : "-translate-x-32 opacity-0"
            }`}
          />

          {/* Letter */}
          <div
            className={`absolute right-[-20px] top-20 z-30 h-[600px] w-[435px] rotate-[4deg] transition-all duration-1000 ${
              show
                ? "translate-x-0 opacity-100"
                : "translate-x-32 opacity-0"
            }`}
          >
            {/* Paper */}
            <Image
              src="/images/letter.png"
              alt="Letter"
              fill
              sizes="435px"
              className="object-contain shadow-2xl"
            />

            {/* Text */}
            <div className="absolute left-[55px] top-[55px] w-[320px]">
              <p
                className={`text-right text-xs tracking-[0.2em] text-[#0B0B3B]/70 transition-all duration-700 ${
                  show ? "opacity-100" : "opacity-0"
                }`}
              >
                EST. 2026
              </p>

              <p
                className={`mt-8 font-body italic text-[#5D6482] transition-all duration-700 delay-100 ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Dear Friend,
              </p>

              <p
                className={`mt-6 font-body leading-7 text-[#404040] transition-all duration-700 delay-300 ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Thank you for stopping by.
              </p>

              <p
                className={`mt-4 font-body leading-7 text-[#404040] transition-all duration-700 delay-500 ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Maison de Lia was born from my love for flowers and the quiet
                beauty they bring into everyday life.
              </p>

              <p
                className={`mt-4 font-body leading-7 text-[#404040] transition-all duration-700 delay-[900ms] ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Every bouquet is created with intention, inspired by nature,
                and designed to tell a meaningful story.
              </p>

              <p
                className={`mt-4 font-body leading-7 text-[#404040] transition-all duration-700 delay-[1100ms] ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                I hope my flowers become a small part of your most cherished
                memories.
              </p>

              <p
                className={`mt-8 font-body italic transition-all duration-700 delay-[1300ms] ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                With love,
              </p>

              <p
                className={`mt-2 font-heading text-3xl text-[#0B0B3B] transition-all duration-700 delay-[1500ms] ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Lia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
