import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";
import ProjectSlider from "../Project Slider";
import ExperienceTimeline from "../Experience Timeline";
import AboutSection from "../About Section";

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
        {selected === "Projects" && <ProjectSlider />}
        {selected === "Experience" && <ExperienceTimeline />}
        {selected === "About" && <AboutSection />}
      </div>
    </div>
  );
}

export default ContentSlider;
