import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  PortfolioItemDetails as Project,
  PortfolioItemVariant
} from "../../state/PortfolioState";

interface PortfolioItemProp {
  project: Project;
}

interface InnerPortfolioItemProp extends PortfolioItemProp {
  variantColor: string;
}

const PortfolioItemDetails = ({
  project,
  variantColor
}: InnerPortfolioItemProp) => {
  return (
    <div className={"lg:w-2/3"}>
      <h1
        className={
          "text-white text-6xl lg:text-7xl font-black tracking-tighter"
        }
      >
        {project.name}
      </h1>
      <h2 className={"text-white text-xl lg:text-2xl"}>
        {project.shortDescription}
      </h2>
      <ul
        className={"lg:flex mt-2 text-xl"}
        style={{ color: `${variantColor}` }}
      >
        <li className={`mt-4 lg:mt-0 portfolio-link-${project.variant}`}>
          <a href={project.appLink} target="_blank" rel="noopener noreferrer">
            View App
          </a>
        </li>
        <li
          className={`lg:ml-12 mt-4 lg:mt-0 portfolio-link-${project.variant}`}
        >
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-2">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            View Source
          </a>
        </li>
      </ul>

      <div
        className={
          "lg:w-4/6 mt-8 lg:mt-16 mb-8 lg:mb-0 text-gray lg:flex lg:space-between"
        }
      >
        <p>{project.longDescription1}</p>
        <p className={"mt-6 lg:mt-0 lg:ml-16"}>{project.longDescription2}</p>
      </div>
    </div>
  );
};

const PortfolioItem = ({ project }: PortfolioItemProp) => {
  const getVariantColor = () => {
    switch (project.variant) {
      case PortfolioItemVariant.Purple:
        return "#8109C6";
      case PortfolioItemVariant.Orange:
        return "#FC6E00";
      case PortfolioItemVariant.Green:
        return "#30921B";
      default:
        return "black";
    }
  };

  return (
    <div className={"relative h-full"}>
      <div
        className={"border-t-9 lg:border-t-0 lg:border-l-9 lg:min-h-screen"}
        style={{ borderColor: `${getVariantColor()}` }}
      >
        <div
          className={
            "h-full lg:h-screen flex flex-col lg:flex-col lg:justify-center lg:items-center p-8 lg:p-0"
          }
        >
          <PortfolioItemDetails
            project={project}
            variantColor={getVariantColor()}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
