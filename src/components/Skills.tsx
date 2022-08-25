import React from "react";
import Heading from "./Heading";
import Layout from "./Layout";

const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <Layout>
      <div id="skill-section" className="absolute -top-10"></div>

      <Heading>Skills</Heading>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 place-content-center">
        {skills.map((each, index) => (
          <div
            key={index}
            className="border border-black shadow-2xl p-2  flex flex-col items-center justify-center "
          >
            <img
              className={`hover:scale-125 ease-in-out duration-500`}
              width={each.width}
              src={each.logo}
            />
            <p className="mt-2">{each.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
