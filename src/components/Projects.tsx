import React, { PropsWithChildren, useState } from "react";
import Heading from "./Heading";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Layout from "./Layout";

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
      className="border border-black  text-white max-w-[500px] my-2 mx-auto"
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
          <div>
            {techStack.map((each, index) => (
              <Pill key={index} bg="bg-green-600" hover={hover}>
                {each}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Layout>
      <div id="project-section" className="absolute -top-10"></div>
      <Heading>Projects</Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
