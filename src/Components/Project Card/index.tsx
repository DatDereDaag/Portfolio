import "./index.scss";
import { Project } from "../../types/project";
import { FiCheckCircle } from "react-icons/fi";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const shardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const githubBtnAnimation = useAnimation();
  const demoBtnAnimation = useAnimation();

  function handleHoverStart() {
    githubBtnAnimation.start({
      scaleX: [0, 1.05],
      scaleY: [0, 1.01],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    demoBtnAnimation.start({
      scaleX: [0, 1.05],
      scaleY: [0, 1.01],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    shardAnimation.start({
      scaleX: [0, 1.05],
      scaleY: [0, 1.01],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });

    imageAnimation.start((index) => ({
      y: [null, -20 * index * 1],
      x: [null, 30 * index * 1],
      rotateZ: [null, 2 + index * 5],
      rotateX: [null, -10 - index * 10],
      rotateY: [null, -2 - index * 2],
      ...(index === 0 && { filter: "brightness(0.6)" }),
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    }));
  }

  function handleHoverEnd() {
    githubBtnAnimation.start({
      scaleX: [null, 0],
      scaleY: [null, 0],
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    });

    demoBtnAnimation.start({
      scaleX: [null, 0],
      scaleY: [null, 0],
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    });

    shardAnimation.start({
      scaleY: [null, 0],
      scaleX: [null, 0],
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    });

    imageAnimation.start((index) => ({
      y: [null, 0],
      x: [null, 0],
      rotateZ: [null, 0],
      rotateY: [null, 0],
      rotateX: [null, 0],
      ...(index === 0 && { filter: "brightness(0.8)" }),
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    }));
  }

  return (
    <motion.div
      className="card-background"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.a
        id="githubBtn"
        animate={githubBtnAnimation}
        className="card-button github"
        target="_blank"
        rel="noreferrer"
        href={project.githubURL}
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </motion.a>
      <motion.a
        id="demoBtn"
        animate={demoBtnAnimation}
        className="card-button demo"
        target="_blank"
        rel="noreferrer"
        href={project.demoURL}
      >
        <FontAwesomeIcon icon={faPlay} />
        <span>Demo</span>
      </motion.a>
      <div className="card-title">{project.title}</div>
      <div className="card-images">
        {(project.cardImages as string[]).map((image, index) => (
          <motion.img
            src={image}
            custom={index}
            animate={imageAnimation}
            alt={`card-image-${project.cardType} `}
            className={`card-image-${project.cardType} `}
          />
        ))}
      </div>
      <motion.svg
        animate={shardAnimation}
        className="card-shards"
        width="450"
        height="310"
        viewBox="0 0 450 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`shard-gradient-${project.id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop stopColor="#3F0404" />
            <stop offset="1" stopColor="#651A01" />
          </linearGradient>
        </defs>

        <path
          d="M423.992 22.672L434.512 21.3506L426.651 29.6057L417.024 30.98L423.992 22.672Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M401.565 5.43659L406.256 2.71047L404.204 8.17147L399.943 10.744L401.565 5.43659Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M440.215 6.68181L442.877 6.44141L440.823 8.45249L438.385 8.71411L440.215 6.68181Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M352.987 10.6914L365.166 1.79093L361.077 17.486L350.046 25.8364L352.987 10.6914Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M371.428 295.662L373.656 313.401L359.736 300.144L357.419 283.912L371.428 295.662Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M376.323 277.161L378.85 281.34L373.903 279.578L371.521 275.785L376.323 277.161Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M331.213 273.644L331.889 275.706L329.923 274.449L329.271 272.568L331.213 273.644Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M339.94 295.174L339.19 300L336.533 295.471L337.146 291.034L339.94 295.174Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M13.8941 67.7599L17.1999 72.6317L11.1336 70.823L8.02677 66.4064L13.8941 67.7599Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M8.14758 21.2613L8.00253 31.1451L1.40127 22.8157L1.38149 13.7496L8.14758 21.2613Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
        <path
          d="M53.7668 16.0354L50.6188 20.7307L50.0471 14.6797L52.8613 10.3253L53.7668 16.0354Z"
          fill={`url(#shard-gradient-${project.id})`}
        />
      </motion.svg>

      <div className="card-description">
        <div className="card-description-bullets">
          {(project.bullets as string[]).map((bullet) => (
            <div className="bullet-item">
              <FiCheckCircle className="bullet-icon" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        <div className="card-description-tags">
          {(project.tags as string[]).map((tagName) => (
            <span className="tag">
              <img
                src={`https://skillicons.dev/icons?i=${tagName}`}
                alt={tagName}
                className="tag-icon"
              />
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
