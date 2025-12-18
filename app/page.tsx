"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from "react";
import Image from "../public/COVER_SVJ_ADPERSONAM.webp";
import Image7 from "../public/photo2.jpg";
import HeroSlider from "./Hero";
import TestimonialsSlider from './Testimonials';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ContactSection from './call';
import { motion } from "framer-motion";
import GetBlogs from "./API/GetBlogs";
import GetServices from "./API/GetServices";

interface BlogItem {
  _id: string;
  image: Array<{ url: string }>;
  title: string;
  description: string;
  date: string;
}

interface ServiceItem {
  _id: string;
  name: string;
  description: string;
  images: Array<{ url: string }>;
}
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid date
    }
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  } catch {
    return dateString; // Return original if error
  }
};

export default function Home() {
  const [allBlogs, setAllBlogs] = useState<BlogItem[]>([]);
  const [allServices, setAllServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    GetBlogs(setAllBlogs, () => { }, () => { });
    GetServices(setAllServices, () => { }, () => { });
  }, []);

  return (
    <div className="overflow-hidden  text-black [&_p]:text-black">
      <HeroSlider />

      <section className="w-full text-[#b87333] py-15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          <div className="rounded-xl overflow-hidden shadow-xl border border-[#b87333]">
            <img
              src={Image.src}
              alt="car protection"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* النص */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#b87333] mb-6">
              مرحبا بكم في برونز كفر لحمايه و تغليف السيارات.
            </h1>

            <p className="text-lg leading-8 mb-4">
              برونز كفر هو مركز متخصص في تقديم خدمات احترافية لحماية وتغليف السيارات بأعلى جودة.
              نمتلك خبرة تمتد لأكثر من 15 عامًا في مجال حماية السيارات، تخصصنا خلالها في تقديم أحدث حلول الحماية وتطبيق أفضل الممارسات العالمية للحفاظ على سلامة المركبات وجمالها.

            </p>

            <p className="text-lg leading-8 mb-4">

              نعتني بأدق التفاصيل، لأننا نؤمن إن سيارتك ما تستاهل إلا الأفضل، و لمستنا… هي اللي تكملها.            </p>

            <div className="relative inline-block px-6 py-2 font-bold text-[#b87333] bg-gradient-to-r from-[#B08B4F] to-white rounded-full overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
              <Link href="/about" className="relative z-10 text-black">
                المزيد من المعرفة
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="relative w-full py-24 text-center overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f0f0f0] to-white"></div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B08B4F]/15 to-transparent"
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-[#333]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            خدمات حمايه <span className="text-[#B08B4F]">فاخرة</span> لسيارتك
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-black mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            حلول احترافية لحماية وتلميع السيارات بمعايير عالية وتجربة راقية, خدمات ما بعد البيع (ضمان 10 سنوات)
          </motion.p>

          <motion.a
            href="tel:0123456789"
            className="relative inline-flex items-center gap-3 px-8 py-3 text-lg font-bold rounded-full border border-[#B08B4F] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #B08B4F, #8a6b3c)", color: "#000" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
          >
            <span> تواصل معنا</span>
            <FaWhatsapp className="text-xl" />

            <motion.span
              className="absolute inset-0 bg-white opacity-20 blur-xl"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
        </div>
      </section>

      <section className="w-full py-20 bg-[rgba(0,0,0,0.02)] text-[#b87333]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#b87333]">كيف يمكننا مساعدتك؟</h2>
          <p className="text-lg mb-6">حلول سريعة وفعّالة لجميع مشاكل سيارتك.</p>

          <div className="w-24 h-1 bg-[#B08B4F] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {allServices.map((service) => (
              <Link
                key={service._id}
                href={`/services/${service._id}`}
                className="text-center border-[#b87333] block hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {service.images && service.images[0]?.url && (
                  <img
                    src={service.images[0].url}
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                    alt={service.name}
                  />
                )}
                <h3 className="mt-4 text-xl font-bold text-[#b87333]">{service.name}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <div className="relative inline-block px-6 py-2 font-bold text-[#f3f0ed] bg-gradient-to-r from-[#B08B4F] to-white rounded-full overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl animate-cloud"></span>
              <Link href="/services">
                <span className="relative z-10 text-black">عرض جميع الخدمات</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="min-h-screen bg-[rgba(0,0,0,0.02)]">
        {/* HERO */}
        <section className="relative w-full h-[520px] mb-20">
          <img
            src={Image7.src}
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

          <div className="absolute bottom-10 left-10 max-w-xl text-center">
            <h1 className="text-5xl font-bold mb-3 text-[#333]">
              كيف نخدم عملائنا ؟
            </h1>
            <p className="text-gray-900 text-lg mb-6">
              نقوم باستقبال العميل وتحديد الخدمة المطلوبة, معاينة السيارة وتقديم استشارة مخصصة.

            </p>
            <p className="text-gray-900 text-lg mb-6">
              تنفيذ الخدمة باحترافية وجودة عالية, التسليم والتأكيد على رضا العميل, الاتفاق على التفاصيل و المدة والتكلفة.

            </p>
            <button className="px-7 py-3 rounded-lg font-semibold text-black" style={{ backgroundColor: "#C49A6C" }}>
              اقرأ الآن
            </button>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-[#b87333] text-center">آخر الأخبار</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[#b87333]">
            {allBlogs.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl overflow-hidden bg-white border border-[#b87333]/20 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-56 bg-white flex items-center justify-center border-b border-[#b87333]/30">
                  {item.image && item.image[0]?.url && (
                    <img
                      src={item.image[0].url}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 tracking-wide text-[#d8a26e]">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="text-[#C49A6C] text-xs tracking-wider">{formatDate(item.date)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <TestimonialsSlider />
      <ContactSection />
      <a
        href="https://wa.me/966532164658" // غير الرقم برقمك على الواتساب بصيغة دولية بدون + أو صفر بادئ
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
