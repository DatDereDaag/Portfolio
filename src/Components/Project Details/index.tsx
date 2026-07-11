import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { FiX } from "react-icons/fi";

import { Project } from "../../types/project";
import "./index.scss";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return createPortal(
    <>
      <motion.div className="screen-dimmer"></motion.div>
      <motion.div className="project-details-container">
        <button onClick={onClose} className="close-button">
          <FiX className="close-button-icon" />
        </button>
        <h1 className="project-title">{project.title}</h1>
        <div id="project-background-shapes">
          <div className="background-shape one"></div>
          <div className="background-shape two"></div>
          <div className="background-shape three"></div>
        </div>
        <img
          className={`project-img ${project.cardType}`}
          src={project.detailImages[0]}
        />
        <div className="project-details"></div>
      </motion.div>
    </>,
    document.body,
  );
}

export default ProjectDetails;
