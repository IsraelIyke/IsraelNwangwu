import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div id="banner" className="banner-container">
      <div className="banner-text">
        <div className="banner-role">Software Developer</div>
        <div className="banner-intro">Hi There, I&rsquo;m</div>
        <div className="banner-name">Israel Nwangwu</div>
        <div className="banner-cta">
          Welcome to my showcase of immersive digital experiences. Dive into my
          portfolio to explore the dynamic world of software development, where
          creativity meets functionality. Let&apos;s collaborate and craft
          something extraordinary together.
        </div>
        <div className=" flex flex-col items-start">
          <div className="banner-cta-btn">
            <a
              href="https://drive.google.com/drive/folders/1RDXknPis5x9BfbGS1uEBx4fmoXTub2Or?usp=drive_link"
              >
              <button className="banner-resume">Certification</button>
            </a>
            <a
              href="/CV/Nwangwu_Israel_CV.pdf"
              download="Nwangwu_Israel_CV.pdf"
            >
              <button className="banner-resume ml-[1rem]">Resume</button>
            </a>
          </div>
          <div className="">
            <a href="mailto:nwangwuisrael@gmail.com">
              <button className="banner-hire-me">Hire Me</button>
            </a>
          </div>
        </div>
      </div>
      <div className="banner-image-container">
        <div>
          <Image
            src="/images/profile.png"
            alt="me"
            width={1000}
            height={1000}
            className="banner-image"
          />
        </div>
        <div>
          <Image
            src="/assets/se2.png"
            alt="se"
            width={400}
            height={400}
            className="banner-SE"
          />
        </div>
      </div>
    </div>
  );
}
