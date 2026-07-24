import "./index.scss";

import { motion, useAnimation } from "framer-motion";

import { Experience } from "../../types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isAbove: boolean;
  offsetPercent: number;
  widthPercent: number;
  animationDuration: number;
  animationDelay: number;
}

function ExperienceCard({
  experience,
  isAbove,
  offsetPercent,
  widthPercent,
  animationDuration,
  animationDelay,
}: ExperienceCardProps) {
  const monthAnimation = useAnimation();

  function handleHoverStart() {
    monthAnimation.start({
      opacity: [0, 1],
      y: [null, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
  }

  function handleHoverEnd() {
    monthAnimation.start({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    });
  }

  return (
    <motion.div
      key={experience.id}
      style={{ cursor: "pointer" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: "easeInOut",
        }}
        className={`experience-region ${isAbove ? "above" : "below"} ${experience.company}-colour`}
        style={{
          left: `${offsetPercent}%`,
          width: `${widthPercent}%`,
        }}
      >
        <img className="experience-image" src={experience.companyImage} />
        <div
          className={`overlay-color ${isAbove ? "above" : "below"} ${experience.company}-gradient`}
        ></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, left: `${offsetPercent - 5}%` }}
        whileInView={{ opacity: 1, left: `${offsetPercent - 3.2}%` }}
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: "easeInOut",
        }}
        className={`experience-marker ${isAbove ? "above" : "below"}`}
      >
        <div className={`marker-header ${isAbove ? "above" : "below"}`}>
          {experience.title}
        </div>
        <div className={`marker-body ${isAbove ? "above" : "below"}`}>
          {experience.company}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={monthAnimation}
        className={`experience-months ${isAbove ? "above" : "below"}`}
      >
        <div className="month-marker" style={{ left: `${offsetPercent - 2}%` }}>
          {experience.startMonth}
        </div>
        <div
          className="month-marker"
          style={{ left: `${offsetPercent + widthPercent}%` }}
        >
          {experience.endMonth}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExperienceCard;
