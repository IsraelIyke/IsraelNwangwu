import React from "react";
import PortfolioCard from "./PortfolioCard";

const card = [
 
  {
    id: 1,
    img: "/images/varlc.png",
    title: "Educational Platform",
    link: "https://www.varlc.com/",
  },
   {
    id: 2,
    img: "/images/ezynotify2.png",
    title: "Telegram Notification Bot",
    link: "https://t.me/ezynotify_bot",
  },
 {
    id: 3,
    img: "/images/braxxor.png",
    title: "Water Material Site",
    link: "https://www.braxxor.com/",
  },
   {
    id: 3,
    img: "/images/telectify.png",
    title: "Internet of Things Platform",
    link: "https://telectify.vercel.app/",
  },
    {
    id: 2,
    img: "/images/ezynotify.png",
    title: "Notification Platform",
    link: "https://ezynotify.pages.dev/",
  },
  {
    id: 4,
    img: "/images/dev.png",
    title: "Profile Generator Platform",
    link: "https://dp-gen-devfest.vercel.app/",
  },
  {
    id: 5,
    img: "/images/cv2.png",
    title: "CV Generator Platform",
    link: "https://cv-v2-ten.vercel.app/",
  },
  {
    id: 6,
    img: "/images/google.png",
    title: "Advanced Google Platform",
    link: "https://google-like-a-pro.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-bg"></div>
      <div className="portfolio-container">
        <h3 className="portfolio-title">My Portfolio</h3>
        <p>Explore some of my Dev services</p>
        <div className="portfolio-grid">
          {card.map((items) => (
            <PortfolioCard
              key={items.id}
              img={items.img}
              link={items.link}
              title={items.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
