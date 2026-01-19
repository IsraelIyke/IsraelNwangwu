"use client";
import React from "react";
import PortfolioCard from "./PortfolioCard";

const projects = [
  {
    id: 1,
    img: "/images/varlcproject.png",
    title: "Edtech Tutorial Platform",
    link: "https://www.varlc.com",
    category: "Web",
  },
  {
    id: 2,
    img: "/images/jayvee.png",
    title: "GIS and Engr Consultants",
    link: "https://www.jayveeconsultants.com",
    category: "Web",
  },
  {
    id: 3,
    img: "/images/ezynotifytg.png",
    title: "Telegram Notification Bot",
    link: "https://t.me/ezynotify_bot",
    category: "telegram bot",
  },
  {
    id: 4,
    img: "/images/braxxorwb.png",
    title: "Water Material Site",
    link: "https://www.braxxor.com",
    category: "Web",
  },
  {
    id: 5,
    img: "/images/flowvahub.png",
    title: "Flowva React Assessment",
    link: "https://flowva-assessment.vercel.app",
    category: "Web",
  },
  {
    id: 6,
    img: "/images/spfood.png",
    title: "Food Delivery Demo",
    link: "https://spfoodchain.vercel.app",
    category: "Web",
  },
  {
    id: 7,
    img: "/images/telectify.png",
    title: "Internet of Things",
    link: "https://telectify.vercel.app",
    category: "IoT",
  },
  {
    id: 8,
    img: "/images/ezynotify.png",
    title: "Notification Platform",
    link: "https://ezynotify.pages.dev",
    category: "Web",
  },
  {
    id: 9,
    img: "/images/cv2.png",
    title: "CV Generator Platform",
    link: "https://cv-v2-ten.vercel.app",
    category: "Web",
  },
  {
    id: 10,
    img: "/images/google.png",
    title: "Advanced Google",
    link: "https://google-like-a-pro.vercel.app",
    category: "Web",
  },
  {
    id: 11,
    img: "/images/dev.png",
    title: "Profile Generator",
    link: "https://dp-gen-devfest.vercel.app",
    category: "Web",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-aos="fade-up"
      data-aos-easing="linear"
      className="relative py-10 md:py-24 bg-[#fffaf9]"
    >
      {" "}
      {/* Soft blend of original peach */}
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Proven Track Record
            </span>
            <h2
              className="animate__animated
                  animate__fadeInLeft
                  animate__delay-0.6s  animate__slow  text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
            >
              Featured <br /> <span className="text-[#fc462a]">Projects</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-[300px] text-md md:text-lg font-light leading-snug">
            A selection of my best work across{" "}
            <span className="text-slate-900 font-medium">
              web, mobile, telegram bot and IoT
            </span>{" "}
            systems.
          </p>
        </div>

        {/* Grid Section */}
        <div layout className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8">
          {projects.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay={200}
              // data-aos-delay={index * 200}
              // data-aos-easing="linear"
            >
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" className="mt-10 md:mt-20 text-center">
          <p className="text-gray-400 mb-6">
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
