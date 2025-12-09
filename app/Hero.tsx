"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./Hero.css"
const slides = [
  "/h1.png",
  "/h2.png",
  "/h3.png",
  "/h4.png",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // تشغيل السلايدر كل 3 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">

      {/* الصورة الأساسية */}
      <Image
        src={slides[index]}
        alt="Hero Slide"
        width={1000}
        height={1000}
        priority
      />
      {/* Dots Indicators */}
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === i ? "bg-black scale-125" : "bg-black/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
