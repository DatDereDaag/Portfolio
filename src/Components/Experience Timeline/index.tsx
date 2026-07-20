import "./index.scss";

import { motion, Variants } from "framer-motion";

interface YearMarker {
  yearLabel: string;
  offset: number;
}

function ExperienceTimeline() {
  const TIMELINE_START = 2025;
  const TIMELINE_YEAR_ANIMATION_DURATION = 1.05;

  function getYearMarkers(): YearMarker[] {
    const now = new Date();
    const presentYear = now.getFullYear();
    const yearMarkers: YearMarker[] = [];
    let monthOffset = now.getMonth() + 1;

    for (let year = TIMELINE_START; year <= presentYear; year++) {
      yearMarkers.push({ yearLabel: year.toString(), offset: monthOffset });
      monthOffset += 12;
    }

    yearMarkers.push({ yearLabel: "Present", offset: monthOffset });

    return yearMarkers;
  }
  const yearMarkers: YearMarker[] = getYearMarkers();

  const yearMarkerVariants: Variants = {
    visible: {
      transition: {
        duration: TIMELINE_YEAR_ANIMATION_DURATION,
        staggerChildren: TIMELINE_YEAR_ANIMATION_DURATION / yearMarkers.length,
      },
    },
  };

  const markerVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: TIMELINE_YEAR_ANIMATION_DURATION / yearMarkers.length,
        ease: "easeOut",
      },
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
      <div className="timeline-grid">
        <motion.div
          variants={yearMarkerVariants}
          initial="hidden"
          whileInView="visible"
          className="year-markers"
        >
          {(yearMarkers as YearMarker[]).map((marker) => (
            <motion.span
              key={marker.yearLabel}
              variants={markerVariants}
              style={{ gridColumn: `${marker.offset}` }}
            >
              {marker.yearLabel}
            </motion.span>
          ))}
        </motion.div>
        <div className="experience-container"></div>
      </div>
    </>
  );
}

export default ExperienceTimeline;
