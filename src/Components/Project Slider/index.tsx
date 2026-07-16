import ProjectCard from "../Project Card";
import "./index.scss";

import { useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import projects from "../../data/projects.json";
import { Project } from "../../types/project";

function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  //Content Slider Cloned Elements
  const CLONE_COUNT = projects.length;
  const CARD_GAP_VW = 4;

  const clonedProjects = [
    ...(projects as Project[]).slice(-CLONE_COUNT),
    ...(projects as Project[]),
    ...(projects as Project[]).slice(0, CLONE_COUNT),
  ];

  function getScrollMetrics(): {
    cloneWidth: number;
    increment: number;
    gap: number;
  } {
    if (!sliderRef.current || isScrolling.current)
      return { cloneWidth: 0, increment: 0, gap: 0 };

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth ?? 0;
    const gap = (window.innerWidth * CARD_GAP_VW) / 100;
    const increment = cardWidth + gap;
    const cloneWidth = increment * CLONE_COUNT;

    return { cloneWidth, increment, gap };
  }

  useEffect(() => {
    if (!sliderRef.current || isScrolling.current) return;
    const { cloneWidth } = getScrollMetrics();
    sliderRef.current.scrollLeft = cloneWidth;
  }, []);

  function scroll(direction: "left" | "right") {
    if (!sliderRef.current || isScrolling.current) return;

    const { cloneWidth, increment, gap } = getScrollMetrics();

    isScrolling.current = true;

    sliderRef.current.scrollBy({
      left: direction === "right" ? increment : -increment,
      behavior: "smooth",
    });

    //Loop scroll wheel
    setTimeout(() => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      sliderRef.current.style.scrollBehavior = "auto";

      if (scrollLeft >= scrollWidth - clientWidth - increment - gap) {
        sliderRef.current.scrollLeft = cloneWidth;
      }

      if (scrollLeft <= cloneWidth - clientWidth) {
        sliderRef.current.scrollLeft = cloneWidth;
      }

      isScrolling.current = false;
    }, 550);
  }

  return (
    <>
      <button className="slider-arrow left" onClick={() => scroll("left")}>
        <FiChevronLeft />
      </button>
      <button className="slider-arrow right" onClick={() => scroll("right")}>
        <FiChevronRight />
      </button>
      <div className="slider" ref={sliderRef}>
        {(clonedProjects as Project[]).map((project, index) => (
          <ProjectCard key={project.id + "." + index} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectSlider;
