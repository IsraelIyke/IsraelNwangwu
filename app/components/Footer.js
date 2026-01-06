"use client";
import React from "react";
import Link from "next/link";
import { FaArrowUp, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      id="footer"
      className="bg-slate-900 pt-20 pb-10 border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Column */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <div className="text-3xl font-black text-white tracking-tighter">
                Ezy<span className="text-blue-600">Sphere</span>
              </div>
            </Link>
            <p className="mt-6 text-gray-400 font-light leading-relaxed">
              Crafting high-impact digital products at the intersection of speed
              and usability. Specializing in{" "}
              <span className="text-white">Next.js</span> and{" "}
              <span className="text-white">Flutter</span>.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Menu
              </h4>
              <nav className="flex flex-col gap-3 text-gray-400 text-sm">
                <Link
                  href="#about"
                  className="hover:text-[#fc462a] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-[#fc462a] transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#portfolio"
                  className="hover:text-[#fc462a] transition-colors"
                >
                  Portfolio
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Connect
              </h4>
              <nav className="flex flex-col gap-3 text-gray-400 text-sm">
                <Link
                  href="#testimonial"
                  className="hover:text-blue-600 transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="#insights"
                  className="hover:text-blue-600 transition-colors"
                >
                  Insights
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="hidden sm:block space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Social
              </h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/IsraelIyke/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/israel-ikechukwu-nwangwu"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href="https://youtube.com/@reactNextLib"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaYoutube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs tracking-wider uppercase font-medium">
            © {currentYear} Israel Nwangwu. Built with{" "}
            <span className="text-[#fc462a]">❤</span> in Next.js
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <FaArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
