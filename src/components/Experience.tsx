import React from "react";
import Heading from "./Heading";
import { BsFillCursorFill, BsCursorFill } from "react-icons/bs";

const ExperienceCard: React.FC<{
  title: string;
  location: string;
  companyName: string;
  tenure: string;
  responsibilities: string[];
}> = ({ title, location, companyName, tenure, responsibilities }) => {
  return (
    <div className=" p-3 my-2">
      <div className="">
        <div>
          <p className="text-2xl">
            {title} ({tenure})
          </p>
          <div className="font-semibold italic flex justify-between">
            <div>{companyName}</div>
            <div className="flex items-center gap-2">
              <BsCursorFill className="inline" />
              {location}
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="list-disc p-3">
          {responsibilities.map((each) => (
            <li>{each}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="p-3" id="experience-section">
      <Heading>Experience</Heading>
      <div>
        <ExperienceCard
          title="Full-Stack Developer"
          companyName="Digital Science Web Technologies"
          tenure="2018-2020"
          location="India"
          responsibilities={["hello", "world"]}
        />
        <hr className="border-black" />
        <ExperienceCard
          title="Data Engineer"
          companyName="Facebook"
          tenure="2021-2022"
          location=" Canada"
          responsibilities={["hello", "world"]}
        />
      </div>
    </div>
  );
};
