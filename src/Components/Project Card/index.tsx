import "./index.scss";

function ProjectCard() {
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
        <ul className="card-description-bullets">
          <li>Functional customer storefront</li>
          <li>Route & inventory management</li>
          <li>Real-time order & driver tracking</li>
          <li>Real-time owner dashboard</li>
          <li>On-the-go transactions</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
