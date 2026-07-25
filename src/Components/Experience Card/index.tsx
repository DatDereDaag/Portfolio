import "./index.scss";
import { FiCheckCircle } from "react-icons/fi";
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
  const markerAnimation = useAnimation();
  const regionAnimation = useAnimation();
  const descriptionAnimation = useAnimation();
  const bulletAnimation = useAnimation();

  function handleHoverStart() {
    monthAnimation.start({
      opacity: 1,
      y: [null, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
    markerAnimation.start({
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
    regionAnimation.start({
      filter: "brightness(2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
    descriptionAnimation.start({
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1,
      },
    });
    bulletAnimation.start((index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.12 * (index + 1),
      },
    }));
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
    markerAnimation.start({
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
    regionAnimation.start({
      filter: "brightness(1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
    descriptionAnimation.start({
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    });
    bulletAnimation.start({
      opacity: 0,
      x: -10,
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
        initial={{ opacity: 0, filter: "brightness(1)" }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: "easeInOut",
        }}
        animate={regionAnimation}
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
        animate={markerAnimation}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={descriptionAnimation}
        className={`experience-description ${isAbove ? "above" : "below"}`}
        style={{ left: `${offsetPercent + 13}%` }}
      >
        {(experience.experienceBullets as string[]).map((bullet, index) => (
          <motion.div
            className="bullet-item"
            initial={{ opacity: 0, x: -10 }}
            animate={bulletAnimation}
            custom={index}
          >
            <FiCheckCircle className="bullet-icon" />
            <span>{bullet}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ExperienceCard;
