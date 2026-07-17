import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";
import ProjectSlider from "../Project Slider";
import ExperienceTimeline from "../Experience Timeline";

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
        <AnimatePresence>
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {selected === "Projects" && <ProjectSlider />}
            {selected === "Experience" && <ExperienceTimeline />}
            {selected === "Certificates" && <></>}
            {selected === "Contact" && <></>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ContentSlider;
