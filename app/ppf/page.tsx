// pages/ppf.js أو components/PPFService.jsx
"use client";

import Image from "next/image";
import img from "../../public/ppf/male-worker-wrapping-car-with-ptotective-foil_1303-27665.jpg";
import img2 from "../../public/ppf/car-wrapping-with-foil-car-service_1303-32327.jpg";
import img3 from "../../public/ppf/car-wrapping-with-foil-car-service_1303-32329.jpg";

export default function PPFService() {
  return (

    <>
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
     حماية السيارة PPF
     </h1>
    
   </div>

   
 </div>
 <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SLIDER */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-[#cd7f32]/40 bg-zinc-950 p-3">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">

            {/* IMAGE 1 */}
            <Image
              src={img2}
              alt={"صورة 1"}
              fill
              className="object-cover absolute inset-0 opacity-100 animate-fade1"
            />

            {/* IMAGE 2 */}
            <Image
              src={img3}
              alt="صورة 2"
              fill
              className="object-cover absolute inset-0 opacity-0 animate-fade2"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 bg-zinc-900/60 p-8 rounded-3xl border border-[#cd7f32]/30 shadow-lg">
          <h1 className="text-3xl font-bold text-center tracking-wide" style={{ color: "#cd7f32" }}>
            حماية السيارة PPF
          </h1>

          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            {[
              "ضمان 10 سنوات",
              "فحص مجاني بعد كل 6 أشهر",
              "غسيل مجاني عند كل فحص",
              "حماية مقدمة السيارة",
             
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-black/30 border border-[#cd7f32]/20 rounded-xl"
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#cd7f32" }}></span>
                {item}
              </div>
            ))}
          </div>

          <div
            className="font-bold text-2xl py-4 rounded-xl text-center shadow-lg"
            style={{ backgroundColor: "#cd7f32", color: "black" }}
          >
            1300 ريال
          </div>
        </div>
      </div>

      {/* KEYFRAMES GLOBAL (Tailwind + custom) */}
      <style global jsx>{`
        @keyframes fade1 {
          0%,50% { opacity: 1; }
          50.01%,100% { opacity: 0; }
        }

        @keyframes fade2 {
          0%,50% { opacity: 0; }
          50.01%,100% { opacity: 1; }
        }

        .animate-fade1 {
          animation: fade1 4s infinite linear;
        }

        .animate-fade2 {
          animation: fade2 4s infinite linear;
        }
      `}</style>
    </div>

</>
  );
}
