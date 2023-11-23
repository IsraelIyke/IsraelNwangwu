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
        <div className="banner-cta-btn">
          <button className="banner-hire-me">Hire Me</button>
          <a href="/CV/Israel-Nwangwu.pdf" download="Israel_Nwangwu_CV.pdf">
            {" "}
            <button className="banner-resume">Resume</button>
          </a>
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
