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
    } inline-block text-sm  p-1 rounded m-1 hover:scale-90 ease-in-out duration-500`}
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
      className="border border-black dark:border-white text-white aspect-[4/3] max-w-[500px]  my-2 mx-auto flex"
    >
      <div
        className={`${
          hover ? "bg-black" : imageSrc
        } bg-no-repeat bg-cover md:bg-center  text-center p-2 duration-700 transition ease-in-out`}
      >
        <div
          className={`${
            hover ? "" : "text-transparent"
          } flex flex-col justify-center content-between h-full`}
        >
          <div className="flex align-middle justify-center">
            <span className="text-xl font-semibold">{title}</span>
            <a className="ml-2" href={projectLink} target="_blank">
              <BsFillArrowUpRightSquareFill className="inline hover:scale-125 ease-in-out duration-500" />
            </a>
          </div>
          <p className="py-1">{description}</p>
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
      <div id="project" className="absolute -top-10"></div>
      <Heading>Projects</Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
