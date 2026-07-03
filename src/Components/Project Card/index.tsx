import "./index.scss";
import { Project } from "../../types/project";

import {
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
} from "react-icons/si";
import { FiCheckCircle } from "react-icons/fi";
import { ReactNode } from "react";

const tagIconMap: Record<string, ReactNode> = {
  flask: <SiFlask />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  python: <SiPython />,
};

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-background">
      <div className="card-title">{project.title}</div>
      <div className="card-images">
        {(project.cardImages as string[]).map((image) => (
          <img
            src={image}
            alt={`card-image-${project.cardType} `}
            className={`card-image-${project.cardType} `}
          />
        ))}
      </div>
      {/* <svg
        className="card-overlay"
        width="459"
        height="337"
        viewBox="0 0 459 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M447.097 21.5363L457.397 20.2426L449.7 28.3253L440.274 29.671L447.097 21.5363Z"
          fill="url(#paint0_linear_1_6)"
        />
        <path
          d="M375.65 10.4683L387.575 1.75356L383.572 17.121L372.771 25.2971L375.65 10.4683Z"
          fill="url(#paint1_linear_1_6)"
        />
        <path
          d="M404.084 302.367L406.266 319.734L392.637 306.755L390.368 290.862L404.084 302.367Z"
          fill="url(#paint3_linear_1_6)"
        />
        <path
          d="M7.97753 13.5356L7.8355 23.2131L1.37203 15.0575L1.35266 6.18069L7.97753 13.5356Z"
          fill="url(#paint4_linear_1_6)"
        />
        <path
          d="M53.808 8.86763L50.7257 13.4648L50.1659 7.54019L52.9214 3.2767L53.808 8.86763Z"
          fill="url(#paint5_linear_1_6)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_6"
            x1="447.731"
            y1="21.3426"
            x2="449.851"
            y2="28.2789"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F0404" />
            <stop offset="1" stop-color="#651A01" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_6"
            x1="376.305"
            y1="9.79017"
            x2="383.728"
            y2="16.9587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F0404" />
            <stop offset="1" stop-color="#651A01" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_6"
            x1="404.411"
            y1="303.435"
            x2="392.715"
            y2="307.011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F0404" />
            <stop offset="1" stop-color="#651A01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_6"
            x1="8.07416"
            y1="14.1457"
            x2="1.39515"
            y2="15.2035"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F0404" />
            <stop offset="1" stop-color="#651A01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_6"
            x1="53.6643"
            y1="9.19034"
            x2="50.1315"
            y2="7.61742"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3F0404" />
            <stop offset="1" stop-color="#651A01" />
          </linearGradient>
        </defs>
      </svg> */}

      <div className="card-description">
        <div className="card-description-bullets">
          {(project.bullets as string[]).map((bullet) => (
            <div className="bullet-item">
              <FiCheckCircle className="bullet-icon" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        <div className="card-description-tags">
          {(project.tags as string[]).map((tagName) => (
            <span className={`tag ${tagName}`}>{tagIconMap[tagName]}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
