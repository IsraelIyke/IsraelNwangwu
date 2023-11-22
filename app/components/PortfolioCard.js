import Image from "next/image";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function PortfolioCard(props) {
  return (
    <div className="portfolioCard">
      <div className="portfolio-card-image"></div>
      <div className="portfolio-card-text">
        <h3>{props.title}</h3>
        <BsFillArrowUpRightCircleFill className="portfolio-link" />
      </div>
    </div>
  );
}
