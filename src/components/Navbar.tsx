import React, { PropsWithChildren, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <li className="px-4 my-2">
    <a href={`#${href}`} className="hover:line-through">
      {children}
    </a>
  </li>
);

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="m-2 p-3 border-0 border-b-4 border-black sticky top-0 bg-orange-100 shadow-lg">
      <div className="flex items-center justify-between">
        <a href="/" className="font-bold">
          Nidhi Patel
        </a>
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className="flex justify-center">
          <ul onClick={() => setShow(false)} className="text-center">
            <NavLink href="about-section">About</NavLink>
            <NavLink href="experience-section">Experience</NavLink>
            <NavLink href="project-section">Projects</NavLink>
            <NavLink href="education-section">Education</NavLink>
            <NavLink href="skill-section">Skills</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};
