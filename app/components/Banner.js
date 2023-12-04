import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div id="banner" className="banner-container">
      <div className="banner-text">
        <div className="banner-role">FrontEnd Developer</div>
        <div className="banner-intro">Hi There, I&rsquo;m</div>
        <div className="banner-name">Israel Nwangwu</div>
        <div className="banner-cta">
          Welcome to my showcase of immersive digital experiences. Dive into my
          portfolio to explore the dynamic world of frontend development, where
          creativity meets functionality. Let&quot;s collaborate and craft
          something extraordinary together.
        </div>
        <div className=" flex flex-col items-start">
          <div className="banner-cta-btn">
            <a
              href="/images/cert.png"
              download="Nwangwu-Israel-Certification.png"
            >
              <button className="banner-resume">Certification</button>
            </a>
            <a
              href="/CV/Nwangwu-Israel-CV.pdf"
              download="Nwangwu-Israel-CV.pdf"
            >
              <button className="banner-resume ml-[1rem]">Resume</button>
            </a>
          </div>
          <div className="">
            <a href="mailto:nwangwujeremy@gmail.com">
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
