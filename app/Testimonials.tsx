"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

// قاعدة الصور — كل صورة اسمها rev1.png أو rev2 أو غيره
const reviewImages = [
  "/rev2.png",
  "/rev3.png",
  "/rev4.png",
  "/rev5.png",
  "/rev1.png",
  "/rev6.png",
];

export default function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 text-white" dir="rtl">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">ماذا يقول العملاء عنا</h2>
        <p className="text-xl text-gray-300 mt-2">آراء بعض عملائنا</p>
        <div className="w-28 h-1 bg-[#cd7f32] mx-auto mt-4"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Previous Button */}
        <div
          ref={prevRef}
          className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-50"
        >
          <div className="bg-[#cd7f32] hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        {/* Next Button */}
        <div
          ref={nextRef}
          className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-50"
        >
          <div className="bg-[#cd7f32] hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation as {
              prevEl?: HTMLElement | null;
              nextEl?: HTMLElement | null;
            };
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {reviewImages.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`Review ${i + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
