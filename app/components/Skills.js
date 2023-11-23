import SkillsCard from "./SkillsCard";

const card = [
  {
    id: 1,
    img: "/images/telectify.png",
    title: "Internet of Things Platform",
    link: "https://telectify.vercel.app/",
  },
  {
    id: 2,
    img: "/images/ezynotify.png",
    title: "Notification Platform",
    link: "https://ezynotify.pages.dev/",
  },
  {
    id: 3,
    img: "/images/varlc.png",
    title: "Educational Platform",
    link: "https://www.varlc.com/",
  },
  {
    id: 4,
    img: "/images/dev.png",
    title: "Profile Generator Platform",
    link: "https://dp-gen-devfest.vercel.app/",
  },
  {
    id: 5,
    img: "/images/cv.png",
    title: "CV Generator Platform",
    link: "https://resume-eta-dusky.vercel.app/account",
  },
  {
    id: 6,
    img: "/images/google.png",
    title: "Advanced Google Platform",
    link: "/https://google-like-a-pro.vercel.app/",
  },
];
export default function Skills() {
  return (
    <div id="skills" className="skills">
      <h3>Core Dev Skills</h3>
      <p>
        As a frontend developer, I excel in React, Next.js, and Tailwind CSS. My
        strength lies in collaborative problem-solving, responsive design, and
        proficient use of Git/GitHub for version control. I&lsquo;m committed to
        delivering visually appealing, high-performance web applications.
      </p>
      <div className="skills-grid">
        {card.map((items) => (
          <SkillsCard
            key={items.id}
            img={items.img}
            link={items.link}
            title={items.title}
          />
        ))}
      </div>
    </div>
  );
}
