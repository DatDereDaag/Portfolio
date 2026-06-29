import "./index.scss";

function ProjectCard() {
  return (
    <div className="card-background">
      <div className="card-title">Bakery Management App</div>
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
        src="src\assets\images\projects\Owner_Dashboard.png"
        alt="project-image"
        className="card-image third"
      />
      <div className="card-description"></div>
    </div>
  );
}

export default ProjectCard;
