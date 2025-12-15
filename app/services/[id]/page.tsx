"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import GetOneService from "../../API/GetOneService";

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

    useEffect(() => {
        if (id) {
            GetOneService(setOneService, setError, setLoading, id);
        }
    }, [id]);

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

