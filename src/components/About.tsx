import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";
import Layout from "./Layout";
import TypewriterComponent from "typewriter-effect";
import resume from "../assets/Nidhi_CV.pdf";

const SocialButtons = () => (
  <div className="flex my-6 gap-4">
    <a href="https://github.com/nidhipatel439" target="_blank">
      <FaGithubSquare className="text-3xl hover:scale-150 ease-in-out duration-500" />
    </a>
    <a href="https://ca.linkedin.com/in/nidhipatel439" target="_blank">
      <FaLinkedin className="text-3xl hover:scale-150 ease-in-out duration-500" />
    </a>
    <a href="mailto:nidhipatel439@gmail.com" target="_blank">
      <FaEnvelope className="text-3xl hover:scale-150 ease-in-out duration-500" />
    </a>
  </div>
);

const About: React.FC<{ description: string }> = ({ description }) => {
  return (
    <Layout>
      <div id="about" className="absolute -top-10"></div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-center">
          <img
            className="rounded-full md:w-[450px] w-[300px] lg:w-[330px]"
            src={profile}
            alt="profile photo"
          />
        </div>
        <div className="md:pl-24">
          <div className="text-4xl my-4">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString("Hi, I am Nidhi...").start();
              }}
            />
            <TypewriterComponent
              options={{}}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("I am a Full-Stack Developer!")
                  .start();
              }}
            />
          </div>
          <p className="mb-5 md:text-xl text-lg">{description}</p>
          <SocialButtons />
          <div className="flex items-center justify-between">
            <a
              href={resume}
              target="_blank"
              className="border border-black p-3 hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white"
            >
              Resume
              <BsFillArrowDownCircleFill className="inline ml-3" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
