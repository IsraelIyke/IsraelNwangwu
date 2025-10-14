"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isMoved, setIsMoved] = useState(false);

  const handleMove = () => {
    setIsMoved(!isMoved);
  };

  // will work on animation
  return (
    <nav id="nav">
      <div className="nav-logo">
        Ezy<span>Sphere</span>
      </div>
      {!isMoved ? (
        <GiHamburgerMenu className="nav-menu desktop" onClick={handleMove} />
      ) : (
        <IoClose
          className="nav-menu desktop"
          onClick={() => setIsMoved((prev) => !prev)}
        />
      )}
      <div className="nav-section mobile">
        <Link href="#about" onClick={() => setIsMoved((prev) => !prev)}>
          <div>About</div>
        </Link>

        <Link href="#portfolio">
          <div>Portfolio</div>
        </Link>
        <Link href="#testimonial">
          <div>Testimonial</div>
        </Link>
        <Link href="#insights">
          <div>Insights</div>
        </Link>
      </div>
     
      <Image
        src="/assets/semi-circle.png"
        alt="semi-circle"
        width={100}
        height={100}
        className="nav-semi-circle"
      />

      {/* mobile */}
      <div>
        <div className={`moving-div ${isMoved ? "moved" : ""}`}>
          <div className="nav-section">
            <Link href="#about" onClick={() => setIsMoved((prev) => !prev)}>
              <div>About</div>
            </Link>

            <Link href="#portfolio" onClick={() => setIsMoved((prev) => !prev)}>
              <div>Portfolio</div>
            </Link>
            <Link
              href="#testimonial"
              onClick={() => setIsMoved((prev) => !prev)}
            >
              <div>Testimonial</div>
            </Link>
            <Link href="#insights" onClick={() => setIsMoved((prev) => !prev)}>
              <div>Insights</div>
            </Link>
          </div>
         </div>
      </div>
    </nav>
  );
}
