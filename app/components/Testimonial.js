"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
    name: "Uche O.",
    role: "Client",
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div id="testimonial" className="testimonialSlider testimonial">
      <Image
        src="/assets/semi-circle.png"
        alt="semi-circle"
        width={100}
        height={100}
        className="testimonial-semi-circle"
      />

      <h2>Testimonials</h2>
      <div className="sliderContainer">
        <button onClick={handlePrev} className="arrowButton prev">
          &lt;
        </button>
        <div className="slide">
          <p>{testimonialData[currentIndex].message}</p>
          <span>
            {/* <Image
              src="/images/testimonial.jpg"
              alt="testimonial"
              height={35}
              width={35}
              className="testimonial-image"
            /> */}
            // <div
            //   className="testimonial-image"
            //   style={{ backgroundColor: "white", height: 35, width: 35 }}
            // ></div>
            <strong>{testimonialData[currentIndex].name}</strong>/
            <p>{testimonialData[currentIndex].role}</p>
          </span>
        </div>
        <button onClick={handleNext} className="arrowButton next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
