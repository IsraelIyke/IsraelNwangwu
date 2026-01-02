"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSolidQuoteLeft } from "react-icons/bi";

const testimonialData = [
  {
    id: 1,
    name: "Daniel M.",
    role: "PM/ UI/UX designer",
    message:
      "Israel is an exceptional developer with a keen eye for detail. His work is not only efficient but also beautifully crafted. I highly recommend him for any frontend project.",
  },
  {
    id: 2,
    name: "Uche Ogbodo",
    role: "Employer",
    message:
      "Working with Israel was a pleasure. He seamlessly translated our design concepts into a functional and visually stunning website. His attention to design principles is truly commendable.",
  },
  {
    id: 3,
    name: "Tony E.",
    role: "Client",
    message:
      "Israel consistently delivers high-quality work within tight deadlines. His collaborative approach and strong communication skills make him an asset to any project team.",
  },
  {
    id: 4,
    name: "Solo J.",
    role: "FullStack Developer",
    message:
      "I have had the pleasure of working with Israel on multiple projects. His technical expertise and problem-solving skills set him apart. I look forward to collaborating with him again in the future.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonial"
      className="relative py-20 md:py-24 bg-slate-900 overflow-hidden"
    >
      {/* Decorative Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] text-white/[0.03] pointer-events-none select-none">
        <BiSolidQuoteLeft />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#fc462a] font-bold tracking-[0.3em] uppercase text-xs mb-12 md:mb-6 block">
            What People Are Saying
          </span>

          <div className="relative h-[250px] md:h-[250px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <p className="text-xl md:text-4xl font-medium text-white leading-relaxed tracking-tight italic">
                  &quot;{testimonialData[currentIndex].message}&quot;
                </p>

                <div className="mt-6 md:mt-10 flex flex-col items-center">
                  <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />
                  <h4 className="text-xl font-black text-white">
                    {testimonialData[currentIndex].name}
                  </h4>
                  <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mt-1">
                    {testimonialData[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all active:scale-90"
            >
              <FiChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonialData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    index === currentIndex
                      ? "w-8 bg-[#fc462a]"
                      : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all active:scale-90"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
