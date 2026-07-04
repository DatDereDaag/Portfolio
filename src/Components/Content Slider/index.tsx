import ProjectCard from "../Project Card";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import projects from "../../data/projects.json";
import { Project } from "../../types/project";

interface ContentSliderProps {
  selected: string;
}

function ContentSlider({ selected }: ContentSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth ?? 0;
    const gap = 57.6;

    sliderRef.current.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  }

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
        <button className="slider-arrow left" onClick={() => scroll("left")}>
          <FiChevronLeft />
        </button>
        <button className="slider-arrow right" onClick={() => scroll("right")}>
          <FiChevronRight />
        </button>
        <div className="slider" ref={sliderRef}>
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
