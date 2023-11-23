import Image from "next/image";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function PortfolioCard(props) {
  return (
    <div className="portfolioCard">
      <div className="portfolio-card-image-container">
        <Image
          src={props.img}
          alt="portfolio"
          className="portfolio-card-image"
          width={500}
          height={500}
        />
      </div>
      <div className="portfolio-card-text">
        <h3>{props.title}</h3>
        <Link href={props.link}>
          {" "}
          <BsFillArrowUpRightCircleFill className="portfolio-link" />
        </Link>
      </div>
    </div>
  );
}
