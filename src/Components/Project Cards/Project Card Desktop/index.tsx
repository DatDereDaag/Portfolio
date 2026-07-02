import "./index.scss";
import { SiFlask, SiJavascript } from "react-icons/si";
import { FiCheckCircle } from "react-icons/fi";

function ProjectCardDesktop() {
  return (
    <div className="card-background">
      <div className="card-title">Bakery Suite App</div>
      <img
        src="src\assets\images\projects\Customer_Home.png"
        alt="project-image"
        className="card-image first"
      />
      <img
        src="src\assets\images\projects\Customer_Store.png"
        alt="project-image"
        className="card-image second"
      />
      <img
        src="src\assets\images\projects\Customer_Schedule.png"
        alt="project-image"
        className="card-image third"
      />

      <div className="card-description">
        <div className="card-description-bullets">
          <div className="bullet-item">
            <FiCheckCircle className="bullet-icon" />
            <span>Functional customer storefront</span>
          </div>
          <div className="bullet-item">
            <FiCheckCircle className="bullet-icon" />
            <span>Route & inventory management</span>
          </div>
          <div className="bullet-item">
            <FiCheckCircle className="bullet-icon" />
            <span>Real-time order & driver tracking</span>
          </div>
          <div className="bullet-item">
            <FiCheckCircle className="bullet-icon" />
            <span>Real-time owner dashboard</span>
          </div>
          <div className="bullet-item">
            <FiCheckCircle className="bullet-icon" />
            <span>On-the-go transactions</span>
          </div>
        </div>
        <div className="card-description-tags">
          <span className="tag flask">
            <SiFlask />
          </span>
          <span className="tag javascript">
            <SiJavascript />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardDesktop;
