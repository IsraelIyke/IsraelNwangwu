import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  // will work on animation
  return (
    <nav id="nav">
      <div className="nav-logo">
        Ezy<span>Sphere</span>
      </div>
      <div className="nav-section">
        <Link href="#about">
          <div>About</div>
        </Link>
        <Link href="#services">
          {" "}
          <div>Services</div>
        </Link>
        <Link href="#portfolio">
          <div>Portfolio</div>
        </Link>
        <Link href="#insights">
          <div>Insights</div>
        </Link>
      </div>
      <div className="nav-btn">
        <button>Let&rsquo;s Talk</button>
      </div>
      <Image
        src="/assets/semi-circle.png"
        alt="semi-circle"
        width={100}
        height={100}
        className="nav-semi-circle"
      />
    </nav>
  );
}
