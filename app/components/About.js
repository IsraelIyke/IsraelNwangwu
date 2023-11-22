import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="about-container">
      <h3>About Me</h3>
      <p>
        I am a passionate and experienced front-end web developer with a proven
        track record of success in designing, developing, and implementing
        high-quality web applications. I have a strong foundation in HTML, CSS,
        JavaScript, and React/Next, and I am always eager to learn new
        technologies and trends. In addition to my technical skills, I am also a
        highly creative and results-oriented individual with a strong work ethic
        and a passion for problem-solving. I am a team player and I thrive in
        collaborative environments.
      </p>
      <div className="about-count">
        <div className="about-card-container">
          <div className="about-number">76</div>
          <div className="about-title">Projects Done</div>
        </div>
        <div className="about-card-container">
          <div className="about-number">4+</div>
          <div className="about-title">Years of Experience</div>
        </div>
        <div className="about-card-container">
          <div className="about-number">10+</div>
          <div className="about-title">Clients Served</div>
        </div>
      </div>
      <Image
        src="/assets/semi-circle2.png"
        alt="semi-circle"
        width={100}
        height={100}
        className="about-semi-circle"
      />
    </div>
  );
}
