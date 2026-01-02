"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Banner() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to toggle animations
  useEffect(() => {
    const checkMobile = () => {
      // 1024px matches Tailwind's 'lg' breakpoint
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Spring physics for "bouncy" smooth parallax
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax Offsets - Conditionals applied here
  const textY = useTransform(smoothY, [0, 1], isMobile ? [0, 0] : [0, 200]);
  const imageScale = useTransform(
    smoothY,
    [0, 1],
    isMobile ? [1, 1] : [1.3, 1]
  );
  const backgroundX = useTransform(
    smoothY,
    [0, 1],
    isMobile ? [0, 0] : [0, -300]
  );
  const contentOpacity = useTransform(
    smoothY,
    [0, 0.5],
    isMobile ? [1, 1] : [1, 0]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden bg-[#fafafa] px-6 "
    >
      {/* Floating Background Text (Hidden on mobile via Tailwind + Transform disabled via JS) */}
      <motion.div
        style={{ x: backgroundX }}
        className="absolute top-1/4 left-0 text-[15rem] font-bold text-gray-100 select-none whitespace-nowrap z-0 hidden lg:block"
      >
        SOFTWARE DEVELOPER
      </motion.div>

      <div className="container mx-auto flex flex-col lg:flex-row  justify-center md:justify-between z-10 relative">
        {/* TEXT CONTENT */}
        <motion.div
          style={{ y: textY, opacity: contentOpacity }}
          className="w-[100vw] lg:w-1/2 space-y-8 z-20 
            lg:relative absolute -top-[12rem] lg:top-auto left-0 lg:left-auto 
             lg:translate-x-0  lg:translate-y-0
            lg:bg-transparent p-0"
        >
          {/* Glassmorphic effect for mobile */}
          <div
            className="lg:hidden backdrop-blur-xl bg-white/30  
            rounded-3xl border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.37)]
            p-6 pr-10"
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden ">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-3 text-black font-mono font-extrabold tracking-widest uppercase text-[12px] mb-4"
                >
                  <span className="w-7 md:w-12 h-[1px] bg-black "></span>
                  Fullstack Software Engineer
                </motion.span>
              </div>
            </div>

            <h1
              className="text-3xl md:text-6xl lg:text-8xl font-black text-slate-900 
              leading-none tracking-tighter "
            >
              Israel <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                from-blue-600 to-cyan-500"
              >
                Nwangwu
              </span>
            </h1>

            <p
              className="text-md lg:text-xl text-gray-700 max-w-md leading-relaxed mt-3 md:mt-6
              lg:text-gray-500"
            >
              Crafting high-performance digital experiences where
              <span className="text-slate-900 font-semibold">
                {" "}
                creativity meets logic.
              </span>
            </p>

            <div className="flex flex-col gap-4 items-center mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold 
                  shadow-2xl hover:bg-[#fc462a] transition-colors w-full sm:w-auto 
                  text-center text-sm md:text-md backdrop-blur-md bg-slate-900/90"
              >
                View Projects
              </motion.a>
              <a
                href="mailto:nwangwuisrael@gmail.com"
                className="font-bold border-b-2 border-slate-900 hover:text-blue-600 
                  hover:border-blue-600 transition-all text-center sm:text-left w-full 
                  sm:w-auto py-2"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Desktop version (no glass effect) */}
          <div className="hidden lg:block">
            <div className="overflow-hidden">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-3 text-blue-600 font-mono tracking-widest uppercase text-sm"
                >
                  <span className="w-12 h-[1px] bg-blue-600"></span>
                  Fullstack Software Engineer
                </motion.span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter mt-4 mb-4">
              Israel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Nwangwu
              </span>
            </h1>

            <p className="text-xl text-gray-500 max-w-md leading-relaxed">
              Crafting high-performance digital experiences where
              <span className="text-slate-900 font-semibold">
                {" "}
                creativity meets logic.
              </span>
            </p>

            <div className="flex gap-6 items-center mt-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-[#fc462a] transition-colors"
              >
                View Projects
              </motion.a>
              <a
                href="mailto:nwangwuisrael@gmail.com"
                className="font-bold border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* IMAGE COMPOSITION */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center 
          min-h-[70vh] lg:min-h-auto -mt-[32rem] md:mt-0"
        >
          {/* THE HALO */}
          <motion.div className="absolute z-0 w-[120%] h-[120%] flex justify-center items-center opacity-40 blur-[1px]">
            <Image
              src="/assets/word-cloud.png"
              alt="Software Engineer Backdrop"
              width={500}
              height={500}
              className="animate-pulse-slow"
            />
          </motion.div>

          {/* MAIN PROFILE IMAGE */}
          <motion.div
            style={{ scale: imageScale }}
            className="relative z-10 w-[280px] h-[350px] md:w-[450px] md:h-[550px]
              lg:w-[450px] lg:h-[550px]"
          >
            <Image
              src="/images/profile.png"
              alt="Israel Nwangwu"
              fill
              className="object-cover rounded-none md:rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 450px, 450px"
            />

            {/* Floating Tech Badge */}
            <motion.div
              animate={isMobile ? {} : { y: [0, -15, 0] }} // Disables float on mobile
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-0 -right-6 bg-white p-6 rounded-2xl shadow-xl z-30 
                hidden md:block"
            >
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Experience
              </div>
              <div className="text-2xl font-black text-slate-900">4+ Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
