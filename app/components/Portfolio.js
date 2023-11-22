import React from "react";
import PortfolioCard from "./PortfolioCard";

const card = [
  { id: 1, img: "", title: "Educational Platform", link: "/varlc.com" },
  { id: 2, img: "", title: "Educational Platform", link: "/varlc.com" },
  { id: 3, img: "", title: "Educational Platform", link: "/varlc.com" },
  { id: 4, img: "", title: "Educational Platform", link: "/varlc.com" },
  { id: 5, img: "", title: "Educational Platform", link: "/varlc.com" },
  { id: 6, img: "", title: "Educational Platform", link: "/varlc.com" },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-bg"></div>
      <div className="portfolio-container">
        <h3 className="portfolio-title">My Portfolio</h3>
        <p>Explore my web dev services</p>
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
