import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png";
const SocialButtons = () => (
  <div className="flex my-3 gap-4">
    <a href="">
      <FaGithubSquare className="text-3xl" />
    </a>
    <a href="">
      <FaLinkedin className="text-3xl" />
    </a>
    <a href="">
      <FaEnvelope className="text-3xl" />
    </a>
  </div>
);

const About = () => {
  return (
    <div className=" p-3" id="about-section">
      <div className="flex justify-center my-4">
        <img
          className="rounded-full"
          width={300}
          src={profile}
          alt="profile photo"
        />
      </div>
      <p className="text-4xl my-4">
        Hi, I am Nidhi.
        <br />I am a Full-Stack Developer.
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vero
        alias, reprehenderit omnis eos quaerat qui fuga fugiat ullam.
        Dignissimos in eveniet quidem eligendi dolore obcaecati libero
        distinctio cumque facilis.
      </p>
      <SocialButtons />
      <div className="flex items-center justify-between">
        <button className="border border-black p-3 hover:bg-black hover:text-white">
          Resume
          <BsFillArrowDownCircleFill className="inline ml-3" />
        </button>
      </div>
    </div>
  );
};

export default About;
