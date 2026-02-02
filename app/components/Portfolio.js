"use client";
import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    id: 1,
    img: "/images/varlcproject.png",
    title: "Edtech Tutorial Platform",
    link: "https://www.varlc.com",
    category: ["Web"],
  },
  {
    id: 2,
    img: "/images/jayvee.png",
    title: "GIS and Engr Consultants",
    link: "https://www.jayveeconsultants.com",
    category: ["Web"],
  },
  {
    id: 3,
    img: "/images/zovack.png",
    title: "WhatsApp Automation Services",
    link: "https://www.zovack.com/en",
    category: ["Web"],
  },
  {
    id: 4,
    img: "/images/ezynotifytg.png",
    title: "Telegram Notification Bot",
    link: "https://t.me/ezynotify_bot",
    category: ["Telegram Bot"],
  },
   {
    id: 5,
    img: "/images/aitrivia.png", 
    title: "AI based trivia App",
    link: "https://play.google.com/store/apps/details?id=com.ezysphere.aitrivia",
    category: ["Mobile"],
  },
  {
    id: 6,
    img: "/images/braxxorwb.png",
    title: "Water Material Site",
    link: "https://www.braxxor.com",
    category: ["Web"],
  },
  {
    id: 7,
    img: "/images/flowvahub.png",
    title: "Flowva React Assessment",
    link: "https://flowva-assessment.vercel.app",
    category: ["Web", "Assessment"],
  },
   {
    id: 8,
    img: "/images/grid.png",
    title: "Grid-based Prediction Game",
    link: "",
    category: ["Mobile"],
  },
   {
    id: 9,
    img: "/images/lendsqr.png",
    title: "Lendsqr React Assessment",
    link: "https://flowva-assessment.vercel.app",
    category: ["Web", "Assessment"],
  },
   {
    id: 10,
    img: "/images/padisquare.png",
    title: "Padisquare Flutter Assessment",
    link: "https://flowva-assessment.vercel.app",
    category: ["Mobile", "Assessment"],
  },
   {
    id: 11,
    img: "/images/ezyplayer.png",
    title: "MX Player Clone",
    link: "",
    category: ["Mobile"],
  },
  {
    id: 12,
    img: "/images/spfood.png",
    title: "Food Delivery Demo",
    link: "https://spfoodchain.vercel.app",
    category: ["Web"],
  },
  {
    id: 13,
    img: "/images/telectify.png",
    title: "Internet of Things",
    link: "https://telectify.vercel.app",
    category: ["IoT, Web"],
  },
   {
    id: 14,
    img: "/images/estimateQ.png",
    title: "Building Material Estimator",
    link: "https://flowva-assessment.vercel.app",
    category: ["Mobile"],
  },
  {
    id: 15,
    img: "/images/ezynotify.png",
    title: "Notification Platform",
    link: "https://ezynotify.pages.dev",
    category: ["Web"],
  },
  {
    id: 16,
    img: "/images/cv2.png",
    title: "CV Generator Platform",
    link: "https://cv-v2-ten.vercel.app",
    category: ["Web"],
  },
  {
    id: 17,
    img: "/images/google.png",
    title: "Advanced Google",
    link: "https://google-like-a-pro.vercel.app",
    category: ["Web"],
  },
  {
    id: 18,
    img: "/images/dev.png",
    title: "Profile Generator",
    link: "https://dp-gen-devfest.vercel.app",
    category: ["Web"],
  },
];
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  // Dynamically extract all unique categories
  const categories = ["All", ...new Set(projects.flatMap((p) => p.category))];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab));

  return (
    <section
      id="portfolio"
      data-aos="fade-up"
      className="relative py-10 md:py-24 bg-[#fffaf9]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Proven Track Record
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              Featured <br /> <span className="text-[#fc462a]">Projects</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border ${
                  activeTab === cat
                    ? "bg-[#fc462a] border-[#fc462a] text-white shadow-lg scale-105"
                    : "bg-white border-slate-200 text-slate-500 hover:border-[#fc462a] hover:text-[#fc462a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8 min-h-[500px]">
          {filteredProjects.map((item, index) => (
            <div
              key={`${activeTab}-${item.id}`} // Important for re-triggering AOS
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" className="mt-10 md:mt-20 text-center">
          <p className="text-gray-400 mb-6 font-medium">
            Need a custom solution built with speed?
          </p>
          <a href="mailto:nwangwuisrael@gmail.com">
            <button className="px-12 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#fc462a] transition-all transform hover:scale-105 shadow-2xl">
              Start a Conversation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
