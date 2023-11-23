import SkillsCard from "./SkillsCard";

const card = [
  {
    id: 1,
    title: "HTML, CSS and Javascript",
    percent: 90,
  },
  {
    id: 2,
    title: "React and Next js",
    percent: 95,
  },
  {
    id: 3,
    title: "Tailwind and Bootstrap",
    percent: 76,
  },
  {
    id: 4,
    title: "Git and Github",
    percent: 84,
  },
  {
    id: 5,
    title: "Collaboration and Problem Solving",
    percent: 64,
  },
  {
    id: 6,
    title: "Responsive design",
    percent: 90,
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
            percent={items.percent}
            title={items.title}
          />
        ))}
      </div>
    </div>
  );
}
