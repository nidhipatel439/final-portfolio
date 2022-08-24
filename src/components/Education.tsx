import React from "react";
import Heading from "./Heading";
import { BsCursorFill, BsHourglassSplit } from "react-icons/bs";

const EducationCard: React.FC<{
  degree: string;
  field: string;
  location: string;
  institute: string;
  tenure: string;
}> = ({ degree, location, institute, field, tenure }) => {
  return (
    <div className="p-3 my-2">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl">{field}</p>
          <p className="italic font-semibold">{degree}</p>
          <span className="">{institute}</span>
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
    </div>
  );
};

export const Education = () => {
  return (
    <div className="p-3 " id="education-section">
      <Heading>Education</Heading>
      <div>
        <EducationCard
          degree="Bachelor of Engineering"
          field="Information Technology"
          institute="Gujarat Technological University"
          tenure="2013-2017"
          location="Ahmedabad, India"
        />
        <hr className="border-1 border-black" />
        <EducationCard
          degree="Ontario Graduate Certificate"
          field="Web Development"
          institute="Humber College"
          tenure="2021-2022"
          location="Toronto, Canada"
        />
      </div>
    </div>
  );
};
