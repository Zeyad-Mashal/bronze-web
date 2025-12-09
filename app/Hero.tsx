"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    "/bronze1.jpg",
    "/bronze2.jpg",
    "/bronze3.jpg",
    "/bronze4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mt-16" style={{ aspectRatio: "16/9" }}>
      {/* الخلفية blur */}
      <div
        className="sscale-110 opacity-60 "
        style={{
          backgroundImage: `url(${slides[index]})`,
          backgroundSize: "contain", // بدل cover
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* الصورة الأساسية */}
      <Image
        src={slides[index]}
        alt="Hero Slide"
        fill
        priority
        className="object-contain relative z-10 transition-all duration-700"
      />

      {/* Overlay على الديسكتوب */}


      {/* Overlay على الموبايل */}
      <div className="absolute inset-0 bg-black/30 z-[5] md:hidden"></div>

      {/* ⭐ النقط (Dots Indicators) ⭐ */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === i ? "bg-white scale-125" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
// } from "recharts";
// import { Menu, Search, Bell, User, Star } from "lucide-react";

// // Dashboard single-file component
// // Dependencies: tailwindcss, framer-motion, lucide-react, recharts

// export default function Dashboard() {
//   const stats = [
//     { id: 1, title: "Revenue", value: "$30,000", change: "+8%" },
//     { id: 2, title: "Daily Sales", value: "$10,000", change: "+4%" },
//     { id: 3, title: "Avg. Appt Time", value: "3 hrs", change: "-1%" },
//     { id: 4, title: "Customer Rating", value: "4.27/5", change: "+0.2" },
//   ];

//   const areaData = [
//     { name: "Mon", New: 30, Returning: 20 },
//     { name: "Tue", New: 40, Returning: 25 },
//     { name: "Wed", New: 35, Returning: 22 },
//     { name: "Thu", New: 50, Returning: 44 },
//     { name: "Fri", New: 42, Returning: 36 },
//     { name: "Sat", New: 60, Returning: 48 },
//     { name: "Sun", New: 55, Returning: 40 },
//   ];

//   const barData = [
//     { name: "Mon", Appointments: 10, Canceled: 2 },
//     { name: "Tue", Appointments: 18, Canceled: 3 },
//     { name: "Wed", Appointments: 22, Canceled: 5 },
//     { name: "Thu", Appointments: 30, Canceled: 6 },
//     { name: "Fri", Appointments: 25, Canceled: 4 },
//     { name: "Sat", Appointments: 28, Canceled: 3 },
//     { name: "Sun", Appointments: 20, Canceled: 2 },
//   ];

//   const appointments = [
//     {
//       id: 1,
//       name: "Devon Lane",
//       time: "04:00 PM",
//       date: "18th Nov 2022",
//       service: "Car Diagnostic",
//       car: "Toyota Corolla 1.3 - A45-123",
//       email: "dolores.chambers@example.com",
//     },
//     {
//       id: 2,
//       name: "Annette Black",
//       time: "04:00 PM",
//       date: "18th Nov 2022",
//       service: "Inner Cleaning",
//       car: "Honda Yaris - B45-123",
//       email: "jessica.hanson@example.com",
//     },
//     {
//       id: 3,
//       name: "Robert Fox",
//       time: "04:00 PM",
//       date: "18th Nov 2022",
//       service: "Car Diagnostic",
//       car: "Citroen - C45-123",
//       email: "nevaeh.simmons@example.com",
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen flex bg-black text-white"
//       style={{
//         // custom CSS variables for bronze palette
//         ["--bronze"]: "#CD7F32",
//         ["--bronze-600"]: "#A56A2A",
//         ["--bronze-200"]: "#E8B880",
//       }}
//     >
//       {/* SIDEBAR */}
//       <aside className="w-72 hidden md:flex flex-col bg-[#0F0F0F] border-r border-[#111] p-6 gap-6">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-[var(--bronze-200)] flex items-center justify-center text-black font-bold">
//             C
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold">CERRO SYSTEMS</h3>
//             <p className="text-xs text-gray-400">Admin Panel</p>
//           </div>
//         </div>

//         <nav className="flex-1">
//           <ul className="space-y-2">
//             <li className="px-3 py-2 rounded-lg bg-gradient-to-r from-[rgba(205,127,50,0.06)] to-transparent text-[var(--bronze-200)] font-medium">
//               Dashboard
//             </li>
//             <li className="px-3 py-2 rounded-lg hover:bg-white/5">Campaign</li>
//             <li className="px-3 py-2 rounded-lg hover:bg-white/5">Customers</li>
//             <li className="px-3 py-2 rounded-lg hover:bg-white/5">Appointment</li>
//             <li className="px-3 py-2 rounded-lg hover:bg-white/5">Reviews</li>
//             <li className="px-3 py-2 rounded-lg hover:bg-white/5">Invoices</li>
//           </ul>
//         </nav>

//         <div className="mt-auto">
//           <div className="bg-gradient-to-br from-[rgba(205,127,50,0.12)] to-transparent rounded-xl p-3 flex items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center">🙂</div>
//             <div>
//               <div className="text-sm font-semibold">Floyd Miles</div>
//               <div className="text-xs text-gray-400">Star Employee</div>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* MAIN */}
//       <main className="flex-1 p-6 md:p-10">
//         {/* Topbar */}
//         <header className="flex items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-3">
//             <button className="md:hidden p-2 bg-[#111] rounded-md">
//               <Menu size={18} />
//             </button>

//             <h2 className="text-lg font-semibold">Dashboard Overview</h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="relative hidden md:block">
//               <input
//                 className="bg-[#111] rounded-full px-4 py-2 text-sm placeholder:text-gray-400 w-72 outline-none"
//                 placeholder="Search..."
//               />
//               <Search className="absolute right-3 top-2 text-gray-400" size={16} />
//             </div>

//             <button className="p-2 rounded-full bg-[#111]">
//               <Bell size={18} />
//             </button>

//             <div className="flex items-center gap-2">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--bronze)] to-[var(--bronze-600)] flex items-center justify-center text-black font-bold">
//                 J
//               </div>
//               <div className="hidden md:block text-right">
//                 <div className="text-sm font-medium">Jonathan</div>
//                 <div className="text-xs text-gray-400">jonathan@gmail.com</div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Stats cards */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {stats.map((s) => (
//             <motion.div
//               key={s.id}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: s.id * 0.06 }}
//               className="rounded-2xl p-4 bg-[#121212] border border-[#1a1a1a]"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-xs text-gray-400">{s.title}</div>
//                   <div className="text-2xl font-bold mt-1">{s.value}</div>
//                 </div>
//                 <div className="text-sm text-[var(--bronze-200)] font-semibold">{s.change}</div>
//               </div>
//               <div className="mt-3 h-12 bg-gradient-to-r from-transparent to-[rgba(205,127,50,0.06)] rounded" />
//             </motion.div>
//           ))}
//         </section>

//         {/* Charts area */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//           <div className="lg:col-span-2 rounded-2xl bg-[#0F0F0F] p-4 border border-[#111]">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold">Appointment Statistics</h3>
//               <div className="text-sm text-gray-400">This Week</div>
//             </div>

//             <div style={{ width: "100%", height: 260 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#111" />
//                   <XAxis dataKey="name" stroke="#888" />
//                   <YAxis stroke="#888" />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Appointments" fill="var(--bronze)" />
//                   <Bar dataKey="Canceled" fill="#6b7280" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="rounded-2xl bg-[#0F0F0F] p-4 border border-[#111]">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold">Customers</h3>
//               <div className="text-sm text-gray-400">Last Week</div>
//             </div>

//             <div style={{ width: "100%", height: 260 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={areaData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#111" />
//                   <XAxis dataKey="name" stroke="#888" />
//                   <YAxis stroke="#888" />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="New" stroke="var(--bronze)" strokeWidth={2} dot={false} />
//                   <Line type="monotone" dataKey="Returning" stroke="#8b5cf6" strokeWidth={2} dot={false} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </section>

//         {/* Appointments table */}
//         <section className="rounded-2xl bg-[#0F0F0F] p-4 border border-[#111]">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="font-semibold">Appointment of the week</h3>
//             <a className="text-sm text-[var(--bronze-200)]">See More</a>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="text-left text-gray-400">
//                   <th className="py-3 pr-6">Name</th>
//                   <th className="py-3 pr-6">Time & Date</th>
//                   <th className="py-3 pr-6">Email</th>
//                   <th className="py-3 pr-6">Service Required</th>
//                   <th className="py-3 pr-6">Car Model & Registration No</th>
//                   <th className="py-3 pr-6">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appointments.map((a) => (
//                   <tr key={a.id} className="border-t border-[#111]">
//                     <td className="py-4 pr-6">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center">{a.name[0]}</div>
//                         <div>
//                           <div className="font-medium">{a.name}</div>
//                           <div className="text-xs text-gray-400">{a.email}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-4 pr-6">{a.time} <div className="text-xs text-gray-400">{a.date}</div></td>
//                     <td className="py-4 pr-6">{a.email}</td>
//                     <td className="py-4 pr-6">{a.service}</td>
//                     <td className="py-4 pr-6">{a.car}</td>
//                     <td className="py-4 pr-6">
//                       <button className="px-3 py-1 rounded-full bg-[var(--bronze)] text-black text-xs">View Details</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
