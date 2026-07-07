import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { Project } from "../../types/project";
import "./index.scss";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return createPortal(
    <motion.div className="project-details-container"></motion.div>,
    document.body,
  );
}

export default ProjectDetails;
