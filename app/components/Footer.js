import Link from "next/link";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-nav">
        <Link href="#" className="desktop">
          <div className="footer-logo">
            Ezy<span>Sphere</span>
          </div>
        </Link>
        <Link href="#About">
          <div>About</div>
        </Link>
        <Link href="#Services">
          <div>Services</div>
        </Link>
        <Link href="#" className="mobile">
          <div className="footer-logo">
            Ezy<span>Sphere</span>
          </div>
        </Link>
        <Link href="#Portfolio">
          <div>Portfolio</div>
        </Link>
        <Link href="#Insights">
          <div>Insights</div>
        </Link>
      </div>
      <p>Follow me on social media</p>
      <div className="footer-social">
        <Link href="https://youtube.com/@reactNextLib?si=2PuVIjBwahVxwBWQ">
          <CiYoutube className="footer-yt" />
        </Link>
        <Link href="https://www.linkedin.com/in/nwangwu-israel-b2323a181/">
          <CiLinkedin />
        </Link>
        <Link href="https://github.com/IsraelIyke/">
          <FaGithub className="footer-git" />
        </Link>
      </div>
    </footer>
  );
}
