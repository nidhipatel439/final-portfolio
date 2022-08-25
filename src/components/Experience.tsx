import React, { useEffect } from "react";
import Heading from "./Heading";
import { BsHourglassSplit, BsCursorFill } from "react-icons/bs";
import Layout from "./Layout";

const ExperienceCard: React.FC<{
  title: string;
  location: string;
  companyName: string;
  tenure: string;
  responsibilities: string[];
}> = ({ title, location, companyName, tenure, responsibilities }) => (
  <div className="p-3 my-2">
    <div className="flex justify-between md:flex-row flex-col">
      <div>
        <p className="text-2xl">{title}</p>
        <p className="italic font-semibold">{companyName}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2">
          <BsCursorFill className="inline" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <BsHourglassSplit className="inline" />
          {tenure}
        </div>
      </div>
    </div>
    <div>
      <ul className="list-disc p-3 md:text-lg">
        {responsibilities.map((each, index) => (
          <li key={index}>{each}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const Experience: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <Layout>
      <div id="experience" className="absolute -top-10"></div>
      <Heading>Experience</Heading>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <ExperienceCard {...exp} />
            {index + 1 !== experiences.length && (
              <hr className="border-black dark:border-white" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};
