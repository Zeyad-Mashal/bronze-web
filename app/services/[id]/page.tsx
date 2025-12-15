"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import GetOneService from "../../API/GetOneService";
import AddReservation from "../../API/Reservation";
import { motion, AnimatePresence } from "framer-motion";

interface OneServiceItem {
    _id: string;
    name: string;
    images: Array<{ url: string }>;
    description: string[] | string;
    price: number;
}

export default function ServiceDetail() {
    const params = useParams();
    const id = params?.id as string;

    const [oneService, setOneService] = useState<OneServiceItem | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Reservation form states
    const [reservationLoading, setReservationLoading] = useState(false);
    const [reservationError, setReservationError] = useState("");
    const [reservationSuccess, setReservationSuccess] = useState(false);
    const [showForm, setShowForm] = useState(false);

    // Generate random positions for particles using lazy initialization
    const [particlePositions] = useState<Array<{
        initialX: number;
        initialY: number;
        animateX: number;
        animateY: number;
        left: number;
        top: number;
    }>>(() =>
        Array.from({ length: 6 }, () => ({
            initialX: Math.random() * 100 - 50,
            initialY: Math.random() * 100 - 50,
            animateX: Math.random() * 200 - 100,
            animateY: Math.random() * 200 - 100,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }))
    );

    // Initialize reservation data with service ID
    const serviceIdRef = useRef(id || "");
    const [reservationData, setReservationData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        service: id || ""
    });

    useEffect(() => {
        if (id) {
            GetOneService(setOneService, setError, setLoading, id);
            serviceIdRef.current = id;
        }
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReservationData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setReservationError("");
        setReservationSuccess(false);

        // Validation
        if (!reservationData.name || !reservationData.phone || !reservationData.email || !reservationData.address) {
            setReservationError("يرجى ملء جميع الحقول المطلوبة");
            return;
        }

        // Ensure service ID is current
        const reservationPayload = {
            ...reservationData,
            service: serviceIdRef.current || id || ""
        };

        const result = await AddReservation(reservationPayload, setReservationError, setReservationLoading, setReservationSuccess);

        if (result && result.success) {
            // Reset form
            setReservationData({
                name: "",
                phone: "",
                email: "",
                address: "",
                service: serviceIdRef.current || id || ""
            });
            // Close form after showing success popup
            setTimeout(() => {
                setShowForm(false);
            }, 3000);
            // Auto-hide success popup after 4 seconds
            setTimeout(() => {
                setReservationSuccess(false);
            }, 4000);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-2xl">جاري التحميل...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-2xl text-red-500">{error}</div>
            </div>
        );
    }

    if (!oneService) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-2xl">لا توجد بيانات</div>
            </div>
        );
    }

    const firstImage = oneService.images && oneService.images[0]?.url;
    const secondImage = oneService.images && oneService.images[1]?.url;
    const hasMultipleImages = firstImage && secondImage;

    // Handle description as string or array
    const descriptionArray = Array.isArray(oneService.description)
        ? oneService.description
        : oneService.description
            ? [oneService.description]
            : [];

    return (
        <>
            {/* HERO SECTION */}
            <div className="relative w-full h-screen">
                {firstImage && (
                    <Image
                        src={firstImage}
                        alt={oneService.name}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-5xl font-extrabold tracking-wide mb-4">
                        {oneService.name}
                    </h1>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="min-h-screen bg-black text-white p-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* IMAGE SLIDER */}
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-[#cd7f32]/40 bg-zinc-950 p-3">
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                            {firstImage && (
                                <Image
                                    src={firstImage}
                                    alt="صورة 1"
                                    fill
                                    className={`object-cover absolute inset-0 ${hasMultipleImages ? 'opacity-100 animate-fade1' : 'opacity-100'}`}
                                />
                            )}
                            {secondImage && (
                                <Image
                                    src={secondImage}
                                    alt="صورة 2"
                                    fill
                                    className="object-cover absolute inset-0 opacity-0 animate-fade2"
                                />
                            )}
                            {!firstImage && !secondImage && (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                                    <span className="text-gray-500">لا توجد صور</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-8 bg-zinc-900/60 p-8 rounded-3xl border border-[#cd7f32]/30 shadow-lg">
                        <h1 className="text-3xl font-bold text-center tracking-wide" style={{ color: "#cd7f32" }}>
                            {oneService.name}
                        </h1>

                        {descriptionArray.length > 0 && (
                            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                {descriptionArray.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 bg-black/30 border border-[#cd7f32]/20 rounded-xl"
                                    >
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#cd7f32" }}></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}

                        {oneService.price && (
                            <div
                                className="font-bold text-2xl py-4 rounded-xl text-center shadow-lg"
                                style={{ backgroundColor: "#cd7f32", color: "black" }}
                            >
                                {oneService.price} ريال
                            </div>
                        )}

                        <motion.button
                            onClick={() => setShowForm(!showForm)}
                            className="w-full py-4 font-bold text-xl rounded-xl text-center shadow-lg transition-all hover:scale-105"
                            style={{ backgroundColor: "#cd7f32", color: "black" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {showForm ? "إلغاء الحجز" : "احجز الآن"}
                        </motion.button>
                    </div>
                </div>

                {/* RESERVATION FORM SECTION */}
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="max-w-2xl mx-auto mt-16"
                    >
                        <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border border-[#cd7f32]/40 shadow-2xl">
                            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#cd7f32" }}>
                                نموذج الحجز
                            </h2>


                            {reservationError && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mb-6 p-4 rounded-xl text-center bg-red-600/80 text-white"
                                >
                                    <p className="text-lg">{reservationError}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
                                <div className="flex flex-col">
                                    <label className="mb-2 text-white text-lg font-semibold">
                                        الاسم الكامل <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={reservationData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-[#cd7f32]/30 focus:border-[#cd7f32] focus:outline-none focus:ring-2 focus:ring-[#cd7f32]/50 transition-all"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2 text-white text-lg font-semibold">
                                        رقم الهاتف <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={reservationData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-[#cd7f32]/30 focus:border-[#cd7f32] focus:outline-none focus:ring-2 focus:ring-[#cd7f32]/50 transition-all"
                                        placeholder="05xxxxxxxx"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2 text-white text-lg font-semibold">
                                        البريد الإلكتروني <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={reservationData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-[#cd7f32]/30 focus:border-[#cd7f32] focus:outline-none focus:ring-2 focus:ring-[#cd7f32]/50 transition-all"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2 text-white text-lg font-semibold">
                                        العنوان <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        value={reservationData.address}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-[#cd7f32]/30 focus:border-[#cd7f32] focus:outline-none focus:ring-2 focus:ring-[#cd7f32]/50 transition-all resize-none"
                                        placeholder="أدخل عنوانك الكامل"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={reservationLoading}
                                    className="w-full py-4 font-bold text-xl rounded-xl text-center shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: "#cd7f32", color: "black" }}
                                    whileHover={{ scale: reservationLoading ? 1 : 1.05 }}
                                    whileTap={{ scale: reservationLoading ? 1 : 0.95 }}
                                >
                                    {reservationLoading ? "جاري الإرسال..." : "إرسال طلب الحجز"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                )}

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

            {/* SUCCESS POPUP MODAL */}
            <AnimatePresence>
                {reservationSuccess && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setReservationSuccess(false)}
                        >
                            {/* Popup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: 50 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    duration: 0.5
                                }}
                                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl shadow-2xl border-2 border-[#cd7f32]/50 p-8 max-w-md w-full relative overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                                dir="rtl"
                            >
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#cd7f32]/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#cd7f32]/10 rounded-full blur-2xl"></div>

                                {/* Close button */}
                                <button
                                    onClick={() => setReservationSuccess(false)}
                                    className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Success Icon */}
                                <div className="flex justify-center mb-6 relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: 0.2
                                        }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                                    >
                                        <motion.svg
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="w-12 h-12 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </motion.svg>
                                    </motion.div>
                                </div>

                                {/* Success Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-center relative z-10"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        تم إرسال طلب الحجز بنجاح!
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        شكراً لك! تم استلام طلب حجزك بنجاح وسنتواصل معك قريباً لتأكيد التفاصيل.
                                    </p>

                                    {/* Decorative line */}
                                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#cd7f32] to-transparent mx-auto mb-6"></div>

                                    <motion.button
                                        onClick={() => setReservationSuccess(false)}
                                        className="px-8 py-3 rounded-xl font-semibold text-lg transition-all hover:scale-105 active:scale-95"
                                        style={{
                                            backgroundColor: "#cd7f32",
                                            color: "black"
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        موافق
                                    </motion.button>
                                </motion.div>

                                {/* Animated particles */}
                                {particlePositions.length > 0 && (
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        {particlePositions.map((pos, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{
                                                    opacity: 0,
                                                    x: pos.initialX,
                                                    y: pos.initialY
                                                }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    x: pos.animateX,
                                                    y: pos.animateY,
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                                className="absolute w-2 h-2 rounded-full"
                                                style={{
                                                    backgroundColor: "#cd7f32",
                                                    left: `${pos.left}%`,
                                                    top: `${pos.top}%`
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

