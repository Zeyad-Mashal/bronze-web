"use client";

export default function Contact() {
  return (
    <section className="w-full py-20  flex justify-center items-center">


      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6" dir="rtl">



        {/* ------- TEXT SECTION ------- */}
        <div className="text-center  text-white">
          <h2 className="text-4xl font-bold  mb-5 text-[#B08B4F] font-bold">احجز خدمة خبير اليوم!</h2>

          <p className="leading-8 mb-6 text-black">
            امنح سيارتك التجربة اللي تليق بها مع خدمات حماية فائقة الجودة,
            نحن في برونز كوفر نؤمن ان سيارتك ليست مجرد وسيلة نقل بل تجربة راقية يستحق ان يعيشها عميل برونز كوفر.

            من خلال خبرتنا وفريقنا المتخصص، نقدّم لك خدمات احترافية تشمل:
          </p>

          <ul className="space-y-3 text-right text-black text-lg">
            <li className="list-disc mr-5">حماية السيارة <span className="text-[#B08B4F] font-bold">PPF</span> من الخدوش والعوامل الخارجية.</li>
            <li className="list-disc mr-5">تظليل العازل الحراري للسيارات لتقليل الحرارة والحفاظ على المظهر الأنيق.</li>
            <li className="list-disc mr-5">النانو سيراميك لطبقة حماية تدوم لسنوات.</li>
          </ul>
        </div>



        {/* ------- FORM ------- */}
        <div className="bg-black/70 p-8 rounded-2xl shadow-xl text-white backdrop-blur-md">
          <form className="flex flex-col gap-5">

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">اسمك</span>
              <input
                className="p-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="text"
                placeholder="اكتب اسمك"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">بريدك الإلكتروني</span>
              <input
                className="p-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="email"
                placeholder="example@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">الموضوع</span>
              <input
                className="p-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-[#B08B4F]"
                type="text"
                placeholder="عن ماذا تريد الاستفسار؟"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-white">رسالتك</span>
              <textarea
                className="p-3 h-28 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-[#B08B4F]"
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
