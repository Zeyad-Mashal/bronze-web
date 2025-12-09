"use client";
import Image from "next/image";
import img from "../../public/about/about1.webp";
import img2 from "../../public/about/IMG_2660-1024x768.jpg.webp";
import img3 from "../../public/about/IMG_2780-1024x768.jpg.webp";
import img4 from "../../public/about/seraec.webp";
import img5 from "../../public/about/IMG_3411-rawznxb68yfs4jgenlu7ox6j017bglvlngm1wmn99c.jpg";
import Testimonials from "../Testimonials";

export default function AboutSection() {
  return (
    <section id="about" className="w-full">
      {/* ===== HERO ===== */}
    <div className="relative w-full h-screen">
  <Image
    src={img}
    alt="About Us"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl font-extrabold tracking-wide mb-4 ">
      نبذة عنا
    </h1>
    <p className="text-lg text-gray-200">
      حماية السيارة عازل حراري وفانو سيراميك
    </p>
  </div>
</div>


      {/* ===== MAIN ABOUT SECTION ===== */}
      <div className="w-full py-20 px-6 md:px-14 lg:px-28 ">
        <div className="max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          
  {/* IMAGE */}
          <div className="flex-1 flex items-center justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b87d36]/40">
              <Image
                src={img5} // غيّر الصورة هنا
                alt="Pro Rays Center"
                width={500}
                height={480}
                className="object-cover"
              />
            </div>
          </div>




          {/* TEXT */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-[#b87d36] mb-6">
              مرحبًا بكم في <span >برو رايز</span> شركة حماية السيارات
            </h2>

            <p className="text-white leading-8 mb-3">
              لقد حملت سيارتك حمل احلامك، فهي صديق الرحلات الطويلة ووجهات الليل المتاخرة أو متعة يوم الاحد البسيطة...
              نحن ندرك كل تلك الذكريات، ولذلك نحن هنا لحمايتها.
            </p>

            <p className="text-white leading-8 mb-3">
              في مركز برو رايز للحماية، ندرك هذا الارتباط العميق؛ لذلك نحن لا نحمي سيارتك فحسب، بل نحمي ايضا
              الاحساس والفخر الذي تستمده منها.
            </p>

            <p className="text-white leading-8 mb-3">
              خدماتنا من العزل الحراري، افلام حماية الطلاء، والتظليل الاحترافي... كلها تقدم لوحة جديدة من
              الرفاهية والراحة.
            </p>

            <p className="text-white leading-8">
              احجز الآن مع برو رايز وتمتع بحماية تدوم وجمالية فريدة.
            </p>
          </div>

        

        </div>
      </div>

        <div className="w-full py-20 px-6 md:px-14 lg:px-28 ">
        <div className="max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          
  {/* IMAGE */}
          <div className="flex-1 flex items-center justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b87d36]/40">
              <Image
                src={img2} // غيّر الصورة هنا
                alt="Pro Rays Center"
                width={500}
                height={480}
                className="object-cover"
              />
            </div>
          </div>




          {/* TEXT */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-[#b87d36] mb-6">
               حماية طلاء السيارة
            </h2>

            <p className="text-white leading-8 mb-3">
              ان سيارتك ليست مجرد مركبة، بل هي مصدر فخر واعتزاز، لكن كل خدش أو شق أو بهتان في الطلاء قد يجعلك تشعر بخسارة شخصية. في برو رايز لحماية السيارات ندرك تمامًا قيمة سيارتك بالنسبة لك، ولهذا نقدم أفضل حلول حماية الطلاء للحفاظ على مظهرها خاليًا من العيوب..
            </p>

          
          </div>

        

        </div>
      </div>
        <div className="w-full py-20 px-6 md:px-14 lg:px-28 ">
        <div className="max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          
  {/* IMAGE */}
          <div className="flex-1 flex items-center justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b87d36]/40">
              <Image
                src={img3} // غيّر الصورة هنا
                alt="Pro Rays Center"
                width={500}
                height={480}
                className="object-cover"
              />
            </div>
          </div>




          {/* TEXT */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-[#b87d36] mb-6">
              تظليل عازل حراري
            </h2>

            <p className="text-white leading-8 mb-3">
              إن سيارتك ليست مجرد مركبة؛ إنها مصدر فخر وامتداد لشخصيتك، لكن كل خدش أو بهتان في الطلاء قد يجعلك تشعر بخسارة جزء من هذا الفخر. في برو رايز لحماية السيارات ندرك جيدًا قيمة سيارتك بالنسبة لك، ولهذا نقدم حلولًا متخصصة للحفاظ على مظهرها خاليًا من العيوب..
            </p>

           
          </div>

        

        </div>
      </div>
        <div className="w-full py-20 px-6 md:px-14 lg:px-28 ">
        <div className="max-w-[1500px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          
  {/* IMAGE */}
          <div className="flex-1 flex items-center justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#b87d36]/40">
              <Image
                src={img4} // غيّر الصورة هنا
                alt="Pro Rays Center"
                width={500}
                height={480}
                className="object-cover"
              />
            </div>
          </div>




          {/* TEXT */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-[#b87d36] mb-6">
             نانو سيراميك
            </h2>

            <p className="text-white leading-8 mb-3">
             نقدم لك تقنية النانو سيراميك المتطورة، التي تُشكل درعًا قويًا ومرنًا ضد الخدوش، والأشعة الضارة، والملوثات البيئية، لتمنحك ليس مجرد حماية، بل تجربة متجددة مع مظهر سيارتك الذي تحبه. ومع أسعارنا التنافسية وقيمتنا الاستثنائية، نضمن لك أن استثمارك في النانو سيراميك سيعود عليك بجمال وحماية تدوم لسنوات.ا.
            </p>

          

           

           
          </div>

        

        </div>
      </div>
      <Testimonials/>
    </section>
  );
}
