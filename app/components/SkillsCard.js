export default function SkillsCard(props) {
  const progress = (100 - props.percent) * 4;
  console.log(2);
  return (
    <div className="skillsCard">
      <div className="skills-card-text">{props.title}</div>
      <div className="skills-card-progress">
        <div className="skills-card-bar">
          <span style={{ width: progress }}></span>
        </div>
        <div className="skills-card-percent">{props.percent}%</div>
      </div>
    </div>
  );
}
