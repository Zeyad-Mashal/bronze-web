"use client";
import Image from "next/image";

import hero from "../../public/about/about1.webp";
import ppfImg from "../../public/ppf-bronze.png";
import nanoImg from "../../public/nano-bronze.png";
import tintImg from "../../public/shadowing-bronze.png";
import leatherImg from "../../public/ground-bronze.png";
import glassImg from "../../public/photo4.jpg";
import polishImg from "../../public/photo5.jpg";
import interiorNano from "../../public/photo6.jpg";
import type { StaticImageData } from "next/image";

export default function BrandProfile() {
  return (
    <section className="w-full">

      {/* ====================== HERO ====================== */}
      <div className="relative w-full h-[90vh]">
        <Image src={hero} alt="Bronze Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">ملف تعريفي — برونز كفر</h1>
          <p className="text-lg max-w-2xl">
            خبرة لأكثر من 15 عامًا في تقديم حلول حماية وتغليف السيارات بأعلى جودة
          </p>
        </div>
      </div>

      {/* ====================== BRAND IDENTITY ====================== */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-[#b87d36] text-center mb-10">التعريف بالبراند</h2>

        <p className="text-black text-lg leading-8 text-center mb-8">
          برونز كفر هو مركز متخصص في تقديم خدمات احترافية لحماية وتغليف السيارات بأعلى جودة.
          نمتلك خبرة تمتد لأكثر من 15 عامًا في هذا المجال، وقدمنا خلالها حلولًا مبتكرة باستخدام أحدث تقنيات الحماية.
        </p>

        <p className="text-black text-lg leading-8 text-center mb-8">
          نعتني بأدق التفاصيل… لأن سيارتك تستاهل الأفضل.
          <strong className="text-[#b87d36]"> <strong className="text-[#b87d36]">
            &quot;لمستنا… هي اللي تكملها.&quot;
          </strong>
          </strong>
        </p>

        {/* Vision - Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="p-8 border border-[#b87d36]/40 rounded-2xl shadow-xl bg-white">
            <h3 className="text-3xl font-bold text-[#b87d36] mb-4">🌟 الرؤية</h3>
            <p className="text-black leading-7">
              أن نكون الخيار الأول في السعودية لكل من يبحث عن حماية فاخرة، وأناقة تدوم،
              ولمسة احترافية تميز سيارته.
            </p>
          </div>

          <div className="p-8 border border-[#b87d36]/40 rounded-2xl shadow-xl bg-white">
            <h3 className="text-3xl font-bold text-[#b87d36] mb-4">🎯 الرسالة</h3>
            <p className="text-black leading-7">
              نوفر حلول حماية متكاملة للسيارات باستخدام أقوى التقنيات وأفضل الخامات،
              لنضمن للعميل حماية طويلة المدى ولمسة فخامة استثنائية.
            </p>
          </div>
        </div>
      </div>

      {/* ====================== SERVICE STEPS ====================== */}
      <div className="w-full bg-[#f8f8f8] py-20 px-6">
        <h2 className="text-4xl font-bold text-[#b87d36] text-center mb-10">📍 خطوات الخدمة</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {[
            "استقبال العميل وتحديد الخدمة",
            "معاينة السيارة وتقديم الاستشارة",
            "الاتفاق على المدة والتكلفة",
            "تنفيذ الخدمة باحترافية",
            "التسليم وضمان رضا العميل",
          ].map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-[#b87d36]/40 shadow-xl">
              <h3 className="text-xl font-bold text-[#b87d36] mb-3">0{index + 1}</h3>
              <p className="text-black">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====================== SERVICES SECTION ====================== */}
      <div className="w-full py-20 px-6">
        <h2 className="text-4xl font-bold text-[#b87d36] text-center mb-14">خدماتنا</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ======== خدمة 1 ======== */}
          <ServiceCard img={ppfImg} title="حماية الطلاء PPF" desc="حماية مقدمة — نصفية — كاملة Premium و Ultra" />

          {/* ======== خدمة 2 ======== */}
          <ServiceCard img={nanoImg} title="النانو سيراميك" desc="نانو خارجي — نانو داخلي — حماية شاشات" />

          {/* ======== خدمة 3 ======== */}
          <ServiceCard img={tintImg} title="تظليل عازل حراري" desc="تظليل حراري نانو سيراميك بأعلى جودة" />

          {/* ======== خدمة 4 ======== */}
          <ServiceCard img={leatherImg} title="أرضيات جلد فاخرة" desc="راحة وفخامة داخل المقصورة بجلد مقاوم للتآكل" />

          {/* ======== خدمة 5 ======== */}
          <ServiceCard img={polishImg} title="تلميع خارجي احترافي" desc="تلميع طبقات متعددة يعيد اللمعان كالوكالة" />

          {/* ======== خدمة 6 ======== */}
          <ServiceCard img={glassImg} title="حماية الزجاج الأمامي" desc="طبقة حماية شفافة مع ضمان حتى سنة" />

          {/* ======== خدمة 7 ======== */}
          <ServiceCard img={interiorNano} title="النانو الداخلي" desc="حماية المراتب والديكورات والجلود ضد البقع" />

        </div>
      </div>

    </section>
  );
}
interface ServiceCardProps {
  img: StaticImageData | string;
  title: string;
  desc: string;
}
/* ======= COMPONENT FOR SERVICES ======= */
function ServiceCard({ img, title, desc }: ServiceCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b87d36]/40 bg-white hover:-translate-y-1 transition-all duration-300">
      <div className="w-full h-64 overflow-hidden">
        <Image src={img} alt={title} className="w-full h-full bg-white" />
      </div>


      <div className="p-6 text-right">
        <h3 className="text-2xl font-bold text-[#b87d36] mb-2">{title}</h3>
        <p className="text-black leading-7">{desc}</p>
      </div>
    </div>
  );
}
