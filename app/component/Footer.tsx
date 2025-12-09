
import img from "../../public/logoo.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16" dir="rtl">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* --- Logo + Text --- */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-right">
          <img
            src={img.src}
            alt="logo"
            className="w-33 mb-4"
          />
          <p className="leading-8 text-gray-300 text-sm">برونز كفر مركز متخصص في تقديم خدمات احترافية لحماية وتغليف السيارات بأعلى جودة.
            نمتلك خبرة تمتد لأكثر من 15 عامًا في مجال حماية السيارات، تخصصنا خلالها في تقديم أحدث حلول الحماية وتطبيق أفضل الممارسات العالمية للحفاظ على سلامة المركبات وجمالها.
            <br />
            نعتني بأدق التفاصيل، لأننا نؤمن إن سيارتك ما تستاهل إلا الأفضل، و**"لمستنا… هي اللي تكملها."
          </p>
        </div>

        {/* --- Working Hours --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">ساعات العمل</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>الأحد
              ١:٠٠–١٠:٠٠م</li>
            <li>الاثنين
              ١:٠٠–١٠:٠٠م </li>
            <li>الثلاثاء
              ١:٠٠–١٠:٠٠م</li>
            <li>الأربعاء
              ١:٠٠–١٠:٠٠م</li>
            <li>الخميس
              ١:٠٠–١٠:٠٠م</li>
            <li>الجمعة: مغلق</li>
            <li>السبت
              ١:٠٠–١٠:٠٠م</li>
          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">روابط سريعة</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-[#B08B4F] hover:underline">الصفحة الرئيسية</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">حماية PPF</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">تظليل</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline"> العازل الحراري</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">نانو سيراميك خارجي وداخلي</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">أرضيات جلد</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">تلميع السيارات</a></li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          {/* <h3 className="text-xl font-bold text-[#B08B4F] mb-4">المواقع</h3> */}
          {/* <p className="text-gray-300 text-sm mb-4 leading-7">
            الرياض – طريق خريص، بجوار وكالة رنج روفر.
          </p>
          <span><a href="https://maps.app.goo.gl/zHY4x2C3crwy3Fsr7" target="_blanck">الموقع علي الخريطه</a></span> */}
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14492.740181723586!2d46.8294754!3d24.7548438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fabdbf9e446f3%3A0x19d384c9a094d0e!2zQnJvbnplIGNvdmVyIC0g2KjYsdmI2YbYsiDZg9mI2qTYsQ!5e0!3m2!1sar!2seg!4v1765285302387!5m2!1sar!2seg"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </div>

          <h3 className="text-xl font-bold text-[#B08B4F] mt-6 mb-3">اتصل بنا</h3>
          <p className="text-gray-300"><a href="tel:+966532164658">0532164658</a></p>
        </div>

      </div>

      {/* --- Lower Bar --- */}
      <div className="text-center text-gray-400 text-sm border-t border-white/10 mt-10 pt-6">
        جميع الحقوق محفوظة © شركة برونز كفر
      </div>
    </footer>
  );
}
