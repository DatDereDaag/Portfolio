import "./index.scss";
import { FiDownload } from "react-icons/fi";

function AboutCard() {
  return (
    <div className="about-card">
      <div className="section">
        <h2 className="about-header">BIO</h2>
        <p className="about-paragraph">
          Full Stack Developer integrating AI/ML solutions into web, desktop and
          mobile applications. Also proficient in Data Analytics.
        </p>
        <div className="paragraph-divider"></div>
      </div>
      <div className="section">
        <h2 className="about-header">EDUCATION</h2>
        <div className="education-section">
          <div className="education-details">
            <p className="about-paragraph degree">
              BSc. Computer Science (Special)
            </p>
            <p className="about-paragraph institution">
              University of The West Indies, St. Augustine
            </p>
          </div>
          <div className="gpa">
            GPA: <span>3.86/4.0</span>
          </div>
        </div>
      </div>
      <h2 className="email-header">
        EMAIL: <span className="email">arveshgosine04@gmail.com</span>
      </h2>
      <a
        className="resume-download"
        href="/resume.pdf"
        download="Arvesh_Gosine_Resume.pdf"
      >
        <FiDownload className="resume-download-icon" /> <span>Resume</span>
      </a>
    </div>
  );
}

export default AboutCard;
