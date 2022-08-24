import React, { PropsWithChildren, useState } from "react";
import Heading from "./Heading";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Pill: React.FC<PropsWithChildren<{ hover: boolean; bg: string }>> = ({
  children,
  hover,
  bg,
}) => (
  <p
    className={`${
      hover ? bg : "bg-none"
    } inline-block text-sm  p-1 rounded m-1`}
  >
    {children}
  </p>
);

const Project: React.FC<{
  title: string;
  projectLink: string;
  description: string;
  imageSrc: string;
  techStack: string[];
}> = ({ title, description, projectLink, imageSrc, techStack }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border border-black my-5 text-white"
    >
      <div
        className={`${
          hover ? "bg-black" : "bg-hero-pattern"
        } bg-no-repeat bg-cover text-center p-4 duration-700 transition ease-in-out`}
      >
        <div className={`${hover ? "" : "text-transparent"}`}>
          <div className="flex align-middle justify-center">
            <span className="text-xl font-semibold">{title}</span>
            <a className="ml-2" href={projectLink} target="_blank">
              <BsFillArrowUpRightSquareFill className="inline" />
            </a>
          </div>
          <p className="py-2">{description}</p>
          <div className="">
            {techStack.map((each) => (
              <Pill bg="bg-green-600" hover={hover}>
                {each}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="p-3" id="project-section">
      <Heading>Projects</Heading>
      <Project
        title="Portfolio"
        projectLink="http://nidhi439.epizy.com"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse
          iure voluptate cupiditate. Voluptas temporibus officia ratione, enim
          pariatur in, quo, harum alias voluptatum consequatur iure? Consequatur
          laborum quaerat necessitatibus."
        imageSrc="http://placekitten.com/300"
        techStack={["React", "Bootstrap", "NodeJS"]}
      />
      <Project
        title="Portfolio"
        projectLink="http://nidhi439.epizy.com"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse
          iure voluptate cupiditate. Voluptas temporibus officia ratione, enim
          pariatur in, quo, harum alias voluptatum consequatur iure? Consequatur
          laborum quaerat necessitatibus."
        imageSrc="http://placekitten.com/300"
        techStack={["React", "Bootstrap", "NodeJS"]}
      />
    </div>
  );
};

export default Projects;
