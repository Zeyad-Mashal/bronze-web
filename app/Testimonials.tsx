"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

const reviews = [
  // { name: "علي الشهراني", time: "1 year ago", text: "طلبت عندهم سيارتي و ما شاء الله التظليل مزبوط." },
  { name: "محمد الشهري", time: "1 year ago", text: "ثالث سياره أضبطها عندهم شغلهم جبار." },
  { name: "سعيد الحربي", time: "1 year ago", text: "عزل رائع من أفضل ما يكون." },
  { name: "خالد الزهراني", time: "1 year ago", text: "جودة واحترافيه. الف شكر." },
  { name: "زياد مشعل", time: "6 months ago", text: "خدمة ممتازة جدا وسريعة." },
  { name: "عبدالرحمت محمد", time: "3 months ago", text: "أنصح الجميع بتجربة الخدمة لديهم." },
  { name: "عبدالرحمت محمد", time: "3 months ago", text: "أنصح الجميع بتجربة الخدمة لديهم." },
  { name: "عبدالرحمت محمد", time: "3 months ago", text: "أنصح الجميع بتجربة الخدمة لديهم." },
];

export default function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20  text-white" dir="rtl">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">ماذا يقول العملاء عنا</h2>
        <p className="text-xl text-gray-300 mt-2">تجارب حقيقية من عملائنا</p>
        <div className="w-28 h-1 bg-[#cd7f32] mx-auto mt-4"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Custom Navigation Arrows */}
        <div ref={prevRef} className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-50">
          <div className="bg-[#cd7f32] hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        <div ref={nextRef} className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-50">
          <div className="bg-[#cd7f32] hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation will be attached to the custom elements via onBeforeInit
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            // attach custom navigation elements safely
            const nav = swiper.params.navigation as unknown as {
              prevEl?: HTMLElement | null;
              nextEl?: HTMLElement | null;
            };
            nav.prevEl = prevRef.current as unknown as HTMLElement | null;
            nav.nextEl = nextRef.current as unknown as HTMLElement | null;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-linear-to-b from-[#B08B4F] to-white shadow-md rounded-2xl p-6 h-full mb-5">
                <h3 className="font-semibold text-black text-lg">{review.name}</h3>
                <p className="text-sm opacity-70">{review.time}</p>

                <div className="flex gap-1 my-3">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#cd7f32" className="w-5 h-5">
                      <path d="M12 .587l3.668 7.431L23.4 9.748l-5.7 5.556L19.435 24 12 19.897 4.565 24l1.734-8.696L.6 9.748l7.732-1.73L12 .587z" />
                    </svg>
                  ))}
                </div>

                <p className="leading-relaxed">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
