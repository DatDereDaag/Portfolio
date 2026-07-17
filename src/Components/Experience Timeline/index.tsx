import "./index.scss";

import { motion } from "framer-motion";

function ExperienceTimeline() {
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
      <div className="year-markers"></div>
    </>
  );
}

export default ExperienceTimeline;
