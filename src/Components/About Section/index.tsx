import "./index.scss";

function AboutSection() {
  return (
    <div className="about-container">
      <div className="background-shapes"></div>
      <div className="about-card">
        <div className="section">
          <h2 className="about-header">BIO</h2>
          <p className="about-paragraph">
            Full Stack Developer integrating AI/ML solutions into web, desktop
            and mobile applications. Also proficient in Data Analytics.
          </p>
        </div>
        <div className="section">
          <h2 className="about-header">EDUCATION</h2>
          <div className="education-section">
            <div className="education-details">
              <p className="about-paragraph">BSc. Computer Science (Special)</p>
              <p className="about-paragraph">
                University of The West Indies, St. Augustine
              </p>
            </div>
            <div className="gpa">GPA: 3.86/4.0</div>
          </div>
        </div>
        <h2 className="about-header">
          EMAIL: <span>arveshgosine04@gmail.com</span>
        </h2>
        <a className="resume-download">Resume</a>
      </div>
      <div className="skill-section">
        <h2 className="skill-header">Skills</h2>
      </div>
    </div>
  );
}

export default AboutSection;
