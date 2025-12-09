"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/bronze1.jpg",
  "/bronze2.jpg",
  "/bronze3.jpg",
  "/bronze4.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // تشغيل السلايدر كل 3 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full mt-16" style={{ aspectRatio: "16/9" }}>

      {/* الخلفية Blur */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${slides[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* الصورة الأساسية */}
      <Image
        src={slides[index]}
        alt="Hero Slide"
        fill
        priority
        className="object-contain relative z-[10] transition-all duration-700"
      />

      {/* Overlay للموبايل */}
      <div className="absolute inset-0 bg-black/30 z-[5] md:hidden"></div>

      {/* Dots Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === i ? "bg-white scale-125" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
