"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi"; // Cleaner award-winning icon

export default function PortfolioCard({ img, title, link, category }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[0.8rem] md:rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 mb-2 md:mb-0"
    >
      {/* Image Container */}
      <div className="relative h-[110px] md:h-[180px] w-full overflow-hidden bg-slate-100">
        <Image
          src={img}
          alt={title}
          fill
          className="hover:object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
          <Link href={link} target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl"
            >
              <FiArrowUpRight size={30} />
            </motion.div>
          </Link>
        </div>

        {/* Category Tag */}
        <div className="absolute top-1 md:top-6 left-1 md:left-6 px-2 md:px-4 py-0.9 md:py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
          {category || "Project"}
        </div>
      </div>

      {/* Text Details */}
      <div className="p-3 md:p-8">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-[14px] md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-[12px] md:text-sm text-gray-400 mt-2 font-medium">
              Click to view site
            </p>
          </div>

          {/* Subtle Accent using Old Color */}
          <div className="w-2 h-2 rounded-full bg-[#fc462a] mt-2 group-hover:animate-ping" />
        </div>
      </div>
    </motion.div>
  );
}
