"use client";
import Image from "next/image";
import img5 from "../../public/contact.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function ContactSection() {
  return (
    <section id="contact" className="w-full">

      {/* ===== Hero Section Full Screen ===== */}
      <div className="relative w-full h-screen">
        <Image
          src={img5}
          alt="contact"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4">
            اتصل بنا
          </h1>
          <p className="text-lg text-gray-200">

            نحن نسعي لغد مشرق
          </p>
        </div>
      </div>

      {/* ===== Contact Cards Section ===== */}
      <div className="py-20 bg-black">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-16 relative after:absolute after:w-24 after:h-1 after:bg-[#CD7F32] after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px]">
          تواصل معنا حماية السيارة المدينة المنورة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

          {/* LOCATION */}
          <div className="border border-[#CD7F32] rounded-2xl p-6 shadow-md bg-black">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">الموقع</h3>

              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow border border-[#CD7F32]">
                <FaLocationDot className="text-2xl text-[#CD7F32]" />
              </div>
            </div>

            <p className="text-gray-300 mt-3 leading-relaxed">
              طريق الأمير محمد بن عبدالعزيز، بني حارثة، مقابل بلدية أحد، المدينة المنورة
            </p>
            <p className="text-gray-300 leading-relaxed mt-1">
              طريق السلام، مقابل البيك المدينة المنورة 42353
            </p>

            <button className="mt-5 border border-[#CD7F32] rounded-full px-6 py-2 font-medium text-[#CD7F32] hover:bg-[#CD7F32] hover:text-black transition">
              تواصل معنا
            </button>

            <p className="text-gray-500 text-sm mt-2"></p>
          </div>

          {/* EMAIL */}
          <div className="border border-[#CD7F32] rounded-2xl p-6 shadow-md bg-black">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">البريد الإلكتروني</h3>

              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow border border-[#CD7F32]">
                <MdEmail className="text-2xl text-[#CD7F32]" />
              </div>
            </div>

            <p className="text-gray-300 mt-3">info@prorays.me</p>

            <button className="mt-5 border border-[#CD7F32] rounded-full px-6 py-2 font-medium text-[#CD7F32] hover:bg-[#CD7F32] hover:text-black transition">
              تواصل معنا
            </button>

            <p className="text-gray-500 text-sm mt-2"></p>
          </div>

          {/* PHONE */}
          <div className="border border-[#CD7F32] rounded-2xl p-6 shadow-md bg-black">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">رقم الهاتف</h3>

              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow border border-[#CD7F32]">
                <FaPhone className="text-2xl text-[#CD7F32]" />
              </div>
            </div>

            <p className="text-gray-300 mt-3">0544339334</p>

            <button className="mt-5 border border-[#CD7F32] rounded-full px-6 py-2 font-medium text-[#CD7F32] hover:bg-[#CD7F32] hover:text-black transition">
              تواصل معنا
            </button>

            <p className="text-gray-500 text-sm mt-2"></p>
          </div>

        </div>


      </div>


      {/* ===== Contact Form + Map ===== */}
      {/* === MAP (Simple Orange Styled) === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-16 px-4">

        {/* === MAP === */}
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.553391733144!2d39.614131!3d24.469629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd7d8ec92c2c3f%3A0x5c27da89c06e474f!2z2KfYsdmK2Kkg2KfZhNiq2LHZitin2LPZitip!5e0!3m2!1sar!2ssa!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>


          <div className="absolute inset-0 bg-orange-500/20 mix-blend-multiply pointer-events-none"></div>
        </div>

        {/* === FORM === */}
        <div className="bg-black/95 p-8 rounded-2xl shadow-xl text-white backdrop-blur-md max-w-md w-full mx-auto mb-20">
          <form className="flex flex-col gap-5 ">

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">اسمك</span>
              <input
                className="p-3 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="text"
                placeholder="اكتب اسمك"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">بريدك الإلكتروني</span>
              <input
                className="p-3 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="email"
                placeholder="example@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">الموضوع</span>
              <input
                className="p-3 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="text"
                placeholder="عن ماذا تريد الاستفسار؟"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">رسالتك</span>
              <textarea
                className="p-3 h-28 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-[#B08B4F]"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </label>

            <button
              className="w-full py-3 font-bold rounded-lg bg-gradient-to-r from-[#B08B4F] to-black text-white hover:opacity-90 transition"
              type="submit"
            >
              إرسال
            </button>
          </form>
        </div>


      </div>


    </section>
  );
}
