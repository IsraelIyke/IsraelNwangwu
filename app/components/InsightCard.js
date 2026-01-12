"use client";
import Image from "next/image";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";

export default function InsightCard({ date, title, link, img, tag }) {
  return (
    <div className="group relative bg-slate-50 rounded-[1.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
      {/* Thumbnail Container */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={img}
          fill
          alt={title}
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
        />

        {/* Play Overlay */}
        <Link href={link} target="_blank" className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/50 transition-colors flex items-center justify-center">
          <BsPlayCircleFill className="text-white/80 group-hover:text-[#fc462a] text-6xl transition-all transform group-hover:scale-110" />
        </Link>

        {/* Category Tag */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-slate-900">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
          {date}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>

        <Link href={link} target="_blank" className="inline-block mt-6">
          <button className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-slate-900 group-hover:text-[#fc462a]">
            Watch Analysis
            <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
