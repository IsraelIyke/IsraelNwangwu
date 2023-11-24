import Image from "next/image";
import Link from "next/link";

export default function InsightCard(items) {
  return (
    <div className="insight-card">
      <Image src={items.img} height={800} width={800} alt="insight" />
      <div className="insight-description">
        <h5>{items.date}</h5>
        <h3>{items.title}</h3>
        <Link href={items.link}>
          <button>Read More &gt;</button>
        </Link>
      </div>
    </div>
  );
}
