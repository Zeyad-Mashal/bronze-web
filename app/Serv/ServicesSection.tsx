"use client";
import Image from "next/image";
import Link from "next/link";

import service from "../../public/9232.jpg.webp";
import service1 from "../../public/نانوسيراميك.webp";
import service2 from "../../public/ارضيات جلد.webp";
import service3 from "../../public/ppf.webp";
import service4 from "../../public/IMG_2499-1-926x1024.webp";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">

      {/* ===== HERO ===== */}
      <div className="relative w-full h-screen">
        <Image
          src={service}
          alt="Services"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4">
            خدماتنا
          </h1>
          <p className="text-lg text-gray-200">
            أفضل أنظمة حماية السيارات في المملكة
          </p>
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="w-full py-20 px-6 md:px-14 lg:px-28 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-14">
            نقدم خدمات متعددة
          </h2>
          <div className="w-28 h-[3px] bg-[#b87d36] mx-auto mb-14"></div>

          {/* GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* SERVICE CARD 1 */}
            <div className="bg-black/40 border border-[#b87d36] rounded-2xl p-5 shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
              <div className="w-full h-[230px] overflow-hidden rounded-xl mb-4">
                <Image src={service4} alt="service" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-white text-xl font-bold mb-2">تظليل العازل حراري</h3>
              <p className="text-gray-300 leading-7 mb-4">
                استمتع برحلة أكثر برودة وراحة مع تظليل الزجاج العازل للحرارة بتقنيات حديثة.
              </p>

              <div className="flex justify-between items-center">
                <span className="bg-[#b87d36] text-black px-4 py-2 rounded-md font-bold">
                  850 ريال
                </span>
                <Link
                  href="/tint"
                  className="text-[#b87d36] hover:text-white transition flex items-center gap-2"
                >
                  المزيد من التفاصيل →
                </Link>
              </div>
            </div>

            {/* SERVICE CARD 2 */}
            <div className="bg-black/40 border border-[#b87d36] rounded-2xl p-5 shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
              <div className="w-full h-[230px] overflow-hidden rounded-xl mb-4">
                <Image src={service3} alt="service" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-white text-xl font-bold mb-2">حماية السيارة PPF</h3>
              <p className="text-gray-300 leading-7 mb-4">
                أفضل حماية للطلاء ضد الخدوش باستخدام أفلام حماية متطورة.
              </p>

              <div className="flex justify-between items-center">
                <span className="bg-[#b87d36] text-black px-4 py-2 rounded-md font-bold">
                  1300 ريال
                </span>
                <Link
                  href="/ppf"
                  className="text-[#b87d36] hover:text-white transition flex items-center gap-2"
                >
                  المزيد من التفاصيل →
                </Link>
              </div>
            </div>

            {/* SERVICE CARD 3 */}
            <div className="bg-black/40 border border-[#b87d36] rounded-2xl p-5 shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
              <div className="w-full h-[230px] overflow-hidden rounded-xl mb-4">
                <Image src={service1} alt="service" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-white text-xl font-bold mb-2">النانو سيراميك</h3>
              <p className="text-gray-300 leading-7 mb-4">
                طبقة حماية فاخرة تضيف لمعة وتحصين ضد عوامل البيئة والخدوش.
              </p>

              <div className="flex justify-between items-center">
                <span className="bg-[#b87d36] text-black px-4 py-2 rounded-md font-bold">
                  1050 ريال
                </span>
                <Link
                  href="/nano"
                  className="text-[#b87d36] hover:text-white transition flex items-center gap-2"
                >
                  المزيد من التفاصيل →
                </Link>
              </div>
            </div>

            {/* SERVICE CARD 4 */}
            <div className="bg-black/40 border border-[#b87d36] rounded-2xl p-5 shadow-xl backdrop-blur-md hover:scale-[1.02] transition">
              <div className="w-full h-[230px] overflow-hidden rounded-xl mb-4">
                <Image src={service2} alt="service" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-white text-xl font-bold mb-2">ارضيات جلد للسيارات</h3>
              <p className="text-gray-300 leading-7 mb-4">
                قم بترقية الجزء الداخلي من سيارتك باستخدام أرضيات جلدية متينة وأنيقة تضيف الراحة والأناقة.
              </p>

              <div className="flex justify-between items-center">
                <span className="bg-[#b87d36] text-black px-4 py-2 rounded-md font-bold">
                  600 ريال
                </span>
                <Link
                  href="/leather"
                  className="text-[#b87d36] hover:text-white transition flex items-center gap-2"
                >
                  المزيد من التفاصيل →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
