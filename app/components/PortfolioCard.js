"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function PortfolioCard({ img, title, link, category }) {
  // Logic to handle missing links
  const handleLinkClick = (e) => {
    if (!link || link === "" || link === "#") {
      e.preventDefault();
      alert("This project has not yet been deployed or documented. Stay tuned!");
    }
  };

  return (
    <div className="group relative bg-white rounded-[0.8rem] md:rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 mb-2 md:mb-0 hover:-mt-2 hover:-mb-2">
      {/* Image Container */}
      <div className="relative h-[110px] md:h-[180px] w-full overflow-hidden bg-slate-100">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
          <Link 
            href={link || "#"} 
            target={link ? "_blank" : "_self"}
            onClick={handleLinkClick}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl transition-transform hover:scale-110">
              <FiArrowUpRight size={25} className="md:size-[30px]" />
            </div>
          </Link>
        </div>

        {/* Category Tags */}
        <div className="absolute top-1 md:top-4 left-1 md:left-4 flex flex-wrap gap-1">
          {(Array.isArray(category) ? category : [category]).map((cat, i) => (
            <div 
              key={i}
              className="px-2 md:px-4 py-0.5 md:py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Text Details */}
      <div className="p-3 md:p-8">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-[14px] md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
            <button 
              onClick={handleLinkClick}
              className="text-[10px] md:text-sm text-gray-400 mt-2 font-medium hover:text-[#fc462a] transition-colors"
            >
              {link ? "Click to view site" : "Coming Soon"}
            </button>
          </div>

          <div className="w-2 h-2 rounded-full bg-[#fc462a] mt-2 group-hover:animate-ping" />
        </div>
      </div>
      
      {/* Overlay Link for the entire card */}
      <Link 
        href={link || "#"} 
        target={link ? "_blank" : "_self"}
        onClick={handleLinkClick}
        className="absolute inset-0 z-0"
        aria-label={`View ${title}`}
      />
    </div>
  );
}
