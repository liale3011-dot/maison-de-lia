"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [light, setLight] = useState(true);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const element = document
        .elementFromPoint(e.clientX, e.clientY)
        ?.closest("[data-cursor]");

      if (element) {
        setLight(element.getAttribute("data-cursor") === "light");
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate(${position.x - 18}px, ${position.y - 18}px)`,
      }}
    >
     <div
  className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
    light
      ? "border border-white/30 bg-white/10 backdrop-blur-md"
      : "border border-[#0B0B3B]/10 bg-[#F8F3E7]/30 backdrop-blur-md"
  }`}
      >
        <Image
  src={
    light
      ? "/logo/cursor-logo-white.png"
      : "/logo/cursor-logo-navy.png"
  }
  alt="Maison de Lia"
  width={32}
  height={32}
  className="w-8 h-auto object-contain"
/>
      </div>
    </div>
  );
}