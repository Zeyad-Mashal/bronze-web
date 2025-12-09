"use client";
import logo from "../../public/logoo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaTiktok,
  FaSnapchat
} from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // function to check if a path is active
  const isActive = (path: string) => pathname === path;

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full overflow-visible transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      style={{ direction: "rtl", backgroundColor: "black" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 text-xs md:text-sm w-full max-w-screen-xl mx-auto ">
        {/* Social Icons */}
        <div className="hidden md:flex gap-3 pt-3">
          <a href="https://www.instagram.com/bronzecoverksa?igsh=MW9taTQ4MjVuZHRobg%3D%3D&utm_source=qr" target="_blanck"><FaInstagram className="hover:text-[#CD7F32] cursor-pointer" /></a>
          <a href="https://x.com/bronzecoverksa">          <FaXTwitter className="hover:text-[#CD7F32] cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577951902863&mibextid=wwXIfr&rdid=iKNGQa4lkcYyr4dF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16mG7gwG4A%2F%3Fmibextid%3DwwXIfr#" target="_blanck">          <FaFacebook className="hover:text-[#CD7F32] cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@bronzecoverksa?_t=zs-8xvd89gu6mq&_r=1" target="_blanck">          <FaTiktok className="hover:text-[#CD7F32] cursor-pointer" />
          </a>
          <a href="https://www.snapchat.com/@bronzecoverksa?invite_id=2AQS-zxI&locale=en_EG&share_id=Exrf6Tr-RGuMfT81RdFCeQ&sid=7292b94127ab4e27b8779a103efc4058" target="_blanck"><FaSnapchat className="hover:text-[#CD7F32] cursor-pointer" />
          </a>
        </div>

        {/* Phone Number */}
        {/* <div className="flex items-center gap-2 pt-2 text-[#CD7F32] font-semibold">
          <FaWhatsapp className="text-xl" />
          <span className="text-white">0544339334</span>
        </div> */}
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6  text-sm w-full max-w-screen-xl mx-auto">

        {/* Logo */}
        <Image
          src={logo}
          alt="Bronze Cover Logo"
          className="h-10 md:h-14 lg:h-16 w-auto"
          priority
        />


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6  text-lg font-semibold whitespace-nowrap">
          <Link
            href="/"
            className={`transition-all duration-300 hover:text-[#CD7F32] hover:scale-105 ${isActive("/") ? "text-[#CD7F32]" : "text-white"
              }`}
          >
            الصفحة الرئيسية
          </Link>

          {/* خدماتنا Dropdown Desktop */}
          <div className="relative group">
            <Link
              href="/services"
              className={`transition-all duration-300 hover:text-[#CD7F32] hover:scale-105 ${pathname.startsWith("/services") ? "text-[#CD7F32]" : "text-white"
                }`}
            >
              خدماتنا ▾
            </Link>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 mt-2 bg-black/90 border border-gray-600 rounded shadow-lg w-60 py-2 z-50
                opacity-0 scale-95 invisible
                group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                transition-all duration-300 transform origin-top"
            >
              <Link href="/ppf" className="block px-4 py-2 hover:bg-gray-800">
                حماية السيارة PPF
              </Link>
              <Link href="/tint" className="block px-4 py-2 hover:bg-gray-800">
                تظليل عازل حراري للسيارات
              </Link>
              <Link href="/nano" className="block px-4 py-2 hover:bg-gray-800">
                النانو سيراميك للسيارات
              </Link>
              <Link href="/leather" className="block px-4 py-2 hover:bg-gray-800">
                أرضيات جلد للسيارات
              </Link>
            </div>
          </div>

          <Link href="/about" className="hover:text-[#CD7F32]">معلومات عنا</Link>
          <Link href="/contact" className="hover:text-[#CD7F32]">اتصل بنا</Link>
        </nav>

        {/* Call Button (Desktop) */}
        <a
          href="https://wa.me/966544339334"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 font-bold text-white bg-gradient-to-r from-[#B08B4F] to-black rounded-full"
        >
          اتصل الآن <FaWhatsapp className="text-xl" />
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-md p-6 transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-3xl mb-8"
          onClick={() => setOpen(false)}
        >
          <HiX />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-white text-lg font-semibold">
          <Link href="/" onClick={() => setOpen(false)}>الصفحة الرئيسية</Link>

          {/* خدماتنا Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => setServicesOpen((s) => !s)}
              className="flex justify-between items-center w-full text-left text-white font-semibold text-lg
                         hover:text-[#CD7F32] transition-colors duration-300"
            >
              خدماتنا ▾
            </button>
            <div
              className={`flex flex-col ml-4 mt-2 overflow-hidden transition-all duration-300
                ${servicesOpen ? "max-h-96" : "max-h-0"}`}
            >
              <Link
                href="/ppf"
                className="py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                حماية السيارة PPF
              </Link>
              <Link
                href="/tint"
                className="py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                تظليل عازل حراري للسيارات
              </Link>
              <Link
                href="/nano"
                className="py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                النانو سيراميك للسيارات
              </Link>
              <Link
                href="/leather"
                className="py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                أرضيات جلد للسيارات
              </Link>
            </div>
          </div>

          <Link href="/about" onClick={() => setOpen(false)}>معلومات عنا</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>اتصل بنا</Link>
        </nav>
      </div>
    </header>
  );
}
