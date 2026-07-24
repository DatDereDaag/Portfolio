import "./index.scss";

import { motion, Variants } from "framer-motion";

import { Experience } from "../../types/experience";
import experiences from "../../data/experiences.json";

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
    let monthOffset = 0;

    for (let year = TIMELINE_START; year <= presentYear; year++) {
      yearMarkers.push({ yearLabel: year.toString(), offset: monthOffset });
      monthOffset += 12;
    }

    monthOffset -= now.getMonth() - 1;

    yearMarkers.push({ yearLabel: "Present", offset: monthOffset });

    return yearMarkers;
  }
  const yearMarkers: YearMarker[] = getYearMarkers();
  const totalMonths = yearMarkers[yearMarkers.length - 1].offset;

  function calculateMonthOffset(dateStr: string) {
    let monthOffset = 0;
    const startDate = new Date(dateStr);

    monthOffset +=
      (startDate.getFullYear() - TIMELINE_START) * 12 +
      startDate.getMonth() +
      1;

    return monthOffset;
  }

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
      <div className="year-container">
        {(yearMarkers as YearMarker[]).map((marker, index) => (
          <motion.div
            key={marker.yearLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: TIMELINE_YEAR_ANIMATION_DURATION / yearMarkers.length,
              delay:
                (TIMELINE_YEAR_ANIMATION_DURATION / yearMarkers.length) * index,
              ease: "easeInOut",
            }}
            className="year-marker"
            style={{ left: `${(marker.offset / totalMonths) * 95.7}%` }}
          >
            {marker.yearLabel}
          </motion.div>
        ))}
      </div>
      <div className="experience-container">
        {(experiences as Experience[]).map((experience, index) => {
          const offsetPercent =
            (calculateMonthOffset(experience.startDate) / totalMonths) * 100;
          const widthPercent = (experience.monthDuration / totalMonths) * 100;
          const isAbove = index % 2 === 0;

          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: TIMELINE_YEAR_ANIMATION_DURATION / experiences.length,
                delay: (TIMELINE_YEAR_ANIMATION_DURATION * offsetPercent) / 100,
                ease: "easeInOut",
              }}
              className={`experience-region ${isAbove ? "above" : "below"}`}
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
          );
        })}
      </div>
    </>
  );
}

export default ExperienceTimeline;
