import AboutCard from "../About Card";
import SkillCard from "../Skill Card";
import "./index.scss";

function AboutSection() {
  return (
    <div className="about-container">
      <div className="background-shapes"></div>
      <AboutCard />
      <SkillCard />
    </div>
  );
}

export default AboutSection;
