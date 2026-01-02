"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiGithubactions,
} from "react-icons/si";
import { TbAnimationGroup } from "react-icons/tb";
import { MdMemory, MdOutlineDynamicForm } from "react-icons/md";
import { BiMemoryCard } from "react-icons/bi";

const skillData = [
  // FRONTEND FOCUS
  {
    id: 1,
    title: "Next.js & React 18",
    percent: 95,
    icon: <SiNextdotjs />,
    level: "core",
  },
  {
    id: 2,
    title: "TypeScript & ES6+",
    percent: 92,
    icon: <SiTypescript />,
    level: "advanced",
  },
  {
    id: 3,
    title: "Tailwind & Framer Motion (Animations)",
    percent: 98,
    icon: <SiTailwindcss />,
    level: "core",
  },
  {
    id: 4,
    title: "State Management (Zustand/Provider)",
    percent: 88,
    icon: <MdMemory />,
    level: "advanced",
  },
  {
    id: 5,
    title: "Responsive & Adaptive Design",
    percent: 96,
    icon: <MdOutlineDynamicForm />,
    level: "core",
  },
  // MOBILE & BACKEND
  {
    id: 6,
    title: "Flutter Mobile Development",
    percent: 88,
    icon: <SiFlutter />,
    level: "core",
  },
  {
    id: 7,
    title: "Node.js(Express) & REST APIs",
    percent: 90,
    icon: <SiNodedotjs />,
    level: "core",
  },
  {
    id: 8,
    title: "Version Control & CI/CD Workflows (Git/GitHub Actions)",
    percent: 94,
    icon: <SiGithubactions />,
    level: "core",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className=" h-fit space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#fc462a] font-bold tracking-widest uppercase text-xs"
            >
              Tech Stack
            </motion.span>

            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              My Tech <br />
              <span className="text-blue-600">Ecosystem.</span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed font-light italic">
              &quot;Complexity is easy; the true craft lies in selecting the few
              technologies that solve the many&quot;
            </p>

            {/* The Legend/Explanation */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-sm bg-[#fc462a] mt-1"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    Core Foundations
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Daily essential tools and styling frameworks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-sm bg-blue-600 mt-1"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    Advanced Engineering
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Complex logic, state, and cross-platform architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillData.map((skill, index) => (
              <SkillsCard key={skill.id} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
