import { useEffect, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContentSlider from "../Content Section";
import NavMenu from "../Nav Menu";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

function Home() {
  //Header State
  const [selectedContent, setSelectedContent] = useState("Projects");

  // Initialize FinisherHeader after the component mounts
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 35,
        size: { min: 350, max: 1250, pulse: 0.6 },
        speed: { x: { min: 0.8, max: 3 }, y: { min: 0.5, max: 1 } },
        colors: {
          background: "#54062d",
          particles: [
            "#2e0308",
            "#7d0202",
            "#170006",
            "#420202",
            "#691d03",
            "#2200c9",
          ],
        },
        blending: "none",
        opacity: { center: 0.5, edge: 0.05 },
        skew: -9.0,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div>
      <div
        className="hero-background finisher-header"
        style={{ width: "100%", height: "75vh" }}
      ></div>

      <div className="hero-section">
        <h1 className="hero-font">Hi, I'm Tom Fiddle,</h1>
        <h1 className="hero-font bottom-hero-font">Full-Stack Developer.</h1>
        <div className="hero-icons">
          <a
            target="_blank"
            rel="noreferrer"
            className="linkedin-icon"
            href="https://www.linkedin.com/in/arvesh-gosine-01b67b2b2/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="github-icon"
            href="https://github.com/DatDereDaag"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <NavMenu selected={selectedContent} onSelect={setSelectedContent} />

      <ContentSlider selected={selectedContent} />
    </div>
  );
}

export default Home;
