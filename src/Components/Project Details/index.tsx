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
    <motion.div className="project-details-container">
      <button onClick={onClose} className="close-button">
        <FiX className="close-button-icon" />
      </button>
      <h1 className="project-title">{project.title}</h1>
      <div className="image-background-shapes"></div>
      <div className="project-slide">
        <div className="slide">
          <img />
          <div className="details"></div>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}

export default ProjectDetails;
