"use client";
import { motion } from "framer-motion";

export default function SkillsCard({ title, percent, icon, level }) {
  // Logic to switch colors based on 'level'
  const barColor =
    level === "advanced"
      ? "from-blue-600 to-cyan-400"
      : "from-[#fc462a] to-[#ff7b6b]";
  const textColor =
    level === "advanced"
      ? "text-blue-600 bg-blue-50"
      : "text-[#fc462a] bg-red-50";

  return (
    <div className="group bg-slate-50 hover:bg-white p-6 rounded-3xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-500">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {icon}
          </span>
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
            {title}
          </h4>
        </div>
        <span
          className={`text-[10px] font-mono font-black ${textColor} px-2 py-1 rounded-md transition-colors`}
        >
          {percent}%
        </span>
      </div>

      <div className="relative h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "circOut" }}
          viewport={{ once: true }}
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${barColor} rounded-full`}
        />
      </div>
    </div>
  );
}
