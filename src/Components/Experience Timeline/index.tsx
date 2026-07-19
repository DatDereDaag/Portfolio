import "./index.scss";

import { motion, Variants } from "framer-motion";

function ExperienceTimeline() {
  function getYearMarkers() {}

  const yearMarkerVariants: Variants = {
    visible: {
      transition: {
        duration: 1.1,
        staggerChildren: 0.35,
      },
    },
  };

  const markerVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <>
      <svg
        className="timeline"
        width="900"
        height="3"
        viewBox="0 0 900 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          d="M1.5 1.5H104.5C104.5 1.5 17.4619 1.5 172.5 1.5C327.538 1.5 614.979 1.5 898.5 1.5"
          stroke="#D6D6D6"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
      <motion.div
        variants={yearMarkerVariants}
        initial="hidden"
        whileInView="visible"
        className="year-markers"
      >
        <motion.span variants={markerVariants}>2025</motion.span>
        <motion.span variants={markerVariants}>2026</motion.span>
        <motion.span variants={markerVariants}>Present</motion.span>
      </motion.div>
      <div className="experience-container">
        <div className="experience-marker">
          <div className="marker-header">IT Intern</div>
          <div className="marker-body"></div>
          <div className="marker-area"></div>
        </div>
        <div className="experience-marker">
          <div className="marker-header">Helpdesk Assistant</div>
          <div className="marker-body"></div>
          <div className="marker-area"></div>
        </div>
      </div>
    </>
  );
}

export default ExperienceTimeline;
