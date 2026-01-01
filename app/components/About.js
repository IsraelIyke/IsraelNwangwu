"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { SiFlutter, SiNextdotjs, SiNodedotjs } from "react-icons/si";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: 15, suffix: "+", title: "Apps & Sites" },
    { number: 4, suffix: "+", title: "Years Experience" },
    { number: 6, suffix: "", title: "Happy Clients" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-10 lg:py-16 overflow-hidden bg-white -mt-[10rem] "
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT SIDE: THE BENTO VISUAL GRID */}
          <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[300px] md:h-[500px]">
            {/* Main Image Block */}

            {/* Flutter Feature Block */}
            <div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-4 row-span-1 bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-center items-center text-white shadow-xl"
            >
              <SiFlutter size={40} className="mb-2 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-tighter text-center">
                Mobile Developer
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-4 row-span-1 bg-blue-600 rounded-[2rem] p-6 flex flex-col justify-center items-center text-white shadow-xl mt-20"
            >
              <SiNodedotjs size={40} className="mb-2 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-tighter text-center">
                Backend Developer
              </span>
            </motion.div>
            {/* Next.js Feature Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-4 row-span-1 bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-center items-center text-white shadow-xl  mt-40"
            >
              <SiNextdotjs size={40} className="mb-2" />
              <span className="text-xs font-black uppercase tracking-tighter text-center">
                Web Developer
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              About
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-3 md:py-1 rounded-full bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.3em]"
            >
              <span className="w-2 h-2 bg-[#fc462a] rounded-full animate-ping" />
              The Developer
            </motion.div>

            <p className="text-l md:text-xl text-gray-500 leading-relaxed font-light max-w-lg">
              I specialize in developing highly scalable and efficient digital
              products. From
              <span className="text-slate-900 font-semibold underline decoration-blue-500/30 underline-offset-4">
                {" "}
                cross-platform Flutter apps (Android, iOS, & Desktop)
              </span>{" "}
              to Web Applications using{" "}
              <span className="text-slate-900 font-semibold underline decoration-cyan-500/30 underline-offset-4">
                Next.js, React.js, and Node.js
              </span>
              , my work focuses on the intersection of speed and usability.
            </p>

            {/* COUNTUP GRID */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center"
                >
                  <div className="text-4xl font-black text-slate-900 mb-1">
                    {inView ? <CountUp end={stat.number} duration={3} /> : "0"}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] text-center font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                    {stat.title}
                  </div>
                  {/* Underline decoration */}
                  <div className="w-8 h-1 bg-slate-100 mt-2 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
                </div>
              ))}
            </div>

            <a
              href="/CV/CV_NWANGWU_ISRAEL_IKECHUKWU.pdf"
              download="Nwangwu_Israel_CV.pdf"
              className="pt-6"
            >
              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-black uppercase tracking-widest text-sm text-slate-900">
                  Download Portfolio PDF
                </span>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
