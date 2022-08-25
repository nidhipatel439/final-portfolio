import React from "react";
import Heading from "./Heading";
import { BsCursorFill, BsHourglassSplit } from "react-icons/bs";
import Layout from "./Layout";

const EducationCard: React.FC<{
  degree: string;
  field: string;
  location: string;
  institute: string;
  tenure: string;
}> = ({ degree, location, institute, field, tenure }) => {
  return (
    <div className="p-3 my-2 ">
      <div className="flex justify-between md:flex-row flex-col">
        <div>
          <p className="text-2xl">{field}</p>
          <p className="italic font-semibold">{degree}</p>
          <span className="">{institute}</span>
        </div>
        <div className="text-right sm:text-left">
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
    </div>
  );
};

export const Education: React.FC<{ education: Education[] }> = ({
  education,
}) => {
  return (
    <Layout>
      <div id="education-section" className="absolute -top-10"></div>
      <Heading>Education</Heading>
      <div className="max-w-lg mx-auto">
        {education.map((edu, index) => (
          <React.Fragment key={index}>
            <EducationCard {...edu} />
            {index + 1 !== education.length && (
              <hr className="border-black dark:border-white" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};
