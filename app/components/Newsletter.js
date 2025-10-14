import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div id="newsletter" className="newsletter">
      <Image
        src="/assets/semi-circle3.png"
        alt="semi-circle"
        width={500}
        height={500}
        className="newsletter-semi-circle"
      />
      <div>
        <div className="newsletter-cta">
          <h3>Get in Touch</h3>
          <p>
            Have a question or a project in mind? I&lsquo;d love to hear from
            you.{" "}
          </p>
        </div>
        <div className="newsletter-contact">
          <div>
            <BiSolidPhoneCall />
            <p>+234 806 8430 268</p>
          </div>
          <div>
            <MdEmail />
            <p>nwangwuisrael@gmail.com</p>
          </div>
         
        </div>
        <div className="newsletter-social">
          <Link href="https://youtube.com/@reactNextLib?si=2PuVIjBwahVxwBWQ">
            <BsYoutube />
          </Link>
          <Link href="https://www.linkedin.com/in/israel-ikechukwu-nwangwu/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/IsraelIyke/">
            <FaGithub className="footer-git" />
          </Link>
        </div>
      </div>
       </div>
  );
}
