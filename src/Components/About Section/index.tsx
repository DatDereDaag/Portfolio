import AboutCard from "../About Card";
import "./index.scss";

function AboutSection() {
  return (
    <div className="about-container">
      <div className="background-shapes"></div>
      <AboutCard />
      <div className="skill-section">
        <h2 className="skill-header">Skills</h2>
      </div>
    </div>
  );
}

export default AboutSection;
