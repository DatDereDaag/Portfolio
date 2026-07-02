import ProjectCardDesktop from "../Project Cards/Project Card Desktop";
import ProjectCardMobile from "../Project Cards/Project Card Mobile";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";

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
        <div className="slider">
          <ProjectCardMobile />
          <ProjectCardDesktop />
          <ProjectCardDesktop />
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
