import ProjectCard from "../Project Card";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import projects from "../../data/projects.json";
import { Project } from "../../types/project";

interface ContentSliderProps {
  selected: string;
}

function ContentSlider({ selected }: ContentSliderProps) {
  return (
    <div className="content-container">
      <h1 className="slider-header">
        <AnimatePresence mode="wait">
          <motion.span
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selected}
          </motion.span>
        </AnimatePresence>
      </h1>
      <div className="divider"></div>
      <div className="content-background">
        <button className="slider-arrow left">
          <FiChevronLeft />
        </button>
        <button className="slider-arrow right">
          <FiChevronRight />
        </button>
        <div className="slider">
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
