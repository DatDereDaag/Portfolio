import { useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

function Home() {
  // Initialize FinisherHeader after the component mounts
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 15,
        size: { min: 500, max: 1500, pulse: 0.6 },
        speed: { x: { min: 0.8, max: 1 }, y: { min: 0.1, max: 0.6 } },
        colors: {
          background: "#54062d",
          particles: [
            "#2e0308",
            "#7d0202",
            "#170006",
            "#420202",
            "#912400",
            "#2200c9",
          ],
        },
        blending: "none",
        opacity: { center: 0.5, edge: 0.05 },
        skew: -2.5,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div>
      <div
        className="hero-background finisher-header"
        style={{ width: "100%", height: "600px" }}
      ></div>

      <div className="hero-section">
        <h1 className="hero-font">Hi, I'm Arvesh,</h1>
        <h1 className="hero-font">Full-Stack Developer.</h1>
        <div className="hero-icons">
          <a
            target="_blank"
            rel="norefferer"
            className="linkedin-icon"
            href="https://www.linkedin.com/in/arvesh-gosine-01b67b2b2/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="norefferer"
            className="github-icon"
            href="https://github.com/DatDereDaag"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="content">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default Home;
