"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isMoved, setIsMoved] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 lg:px-20 ${
        scrolled
          ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="z-[110]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter text-slate-900 flex items-center mr-20"
          >
            Ezy<span className="text-blue-600">Sphere</span>
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-1 animate-pulse" />
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-y-0 space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-200/20"
          >
            Let&apos;s Talk
          </motion.button>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <div className="md:hidden z-[110]">
          <button
            onClick={() => setIsMoved(!isMoved)}
            className="p-2 text-slate-900 focus:outline-none"
          >
            {isMoved ? <IoClose size={32} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>

        {/* DECORATIVE SEMI-CIRCLE (Parallax style) */}
        <motion.div
          animate={{ y: scrolled ? -100 : 0 }}
          className="absolute top-0 left-1/3 opacity-10 pointer-events-none -z-10"
        >
          <Image
            src="/assets/semi-circle.png"
            alt="decoration"
            width={120}
            height={120}
          />
        </motion.div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMoved && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-white z-[100] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMoved(false)}
                  className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <Link
                href="/#contact"
                onClick={() => setIsMoved(false)}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 text-xs md:text-md px-7"
              >
                Connect With Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
