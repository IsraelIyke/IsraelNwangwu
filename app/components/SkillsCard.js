import Image from "next/image";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function SkillsCard(props) {
  return (
    <div className="skillsCard">
      <div className="skills-card-text">interaction Design</div>
      <div className="skills-card-progress">
        <div className="skills-card-bar">
          <span></span>
        </div>
        <div className="skills-card-percent">70%</div>
      </div>
    </div>
  );
}
