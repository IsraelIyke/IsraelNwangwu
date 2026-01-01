"use client";
import React from "react";
import { motion } from "framer-motion";
import InsightCard from "./InsightCard";

const insights = [
  {
    id: 1,
    date: "Sept 2024",
    title: "The Future of Frontend is Changing (v0 & Shadcn)",
    link: "https://www.youtube.com/watch?v=TBIjgBVFjVI",
    img: "https://img.youtube.com/vi/TBIjgBVFjVI/maxresdefault.jpg", // Dynamic YT Thumb
    tag: "Trends",
  },
  {
    id: 2,
    date: "Feb 2025",
    title: "The Ultimate Tech Stack for 2025",
    link: "https://www.youtube.com/watch?v=DW42HUD8qOQ",
    img: "https://img.youtube.com/vi/DW42HUD8qOQ/maxresdefault.jpg",
    tag: "Career",
  },
  {
    id: 3,
    date: "Aug 2024",
    title: "Is Web Development still viable in 2025?",
    link: "https://www.youtube.com/watch?v=xTuf6DCDvtE",
    img: "https://img.youtube.com/vi/xTuf6DCDvtE/maxresdefault.jpg",
    tag: "Analysis",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Dev <span className="text-blue-600">Radar.</span>
          </motion.h2>
          <p className="text-gray-500 mt-6 text-md md:text-lg font-light leading-relaxed">
            I stay at the forefront of the ecosystem by constantly analyzing new
            shifts in
            <span className="text-slate-900 font-medium">
              {" "}
              performance, DX, and AI-driven development.
            </span>
          </p>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <InsightCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
