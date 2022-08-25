import React, { PropsWithChildren, useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkMode";
const NavLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <li className="px-4 my-2 md:text-lg">
    <a href={`#${href}`} className="hover:line-through">
      {children}
    </a>
  </li>
);

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return darkMode ? (
    <BsSunFill
      onClick={() => setDarkMode(false)}
      className="hover:scale-150 ease-in-out duration-500"
    />
  ) : (
    <BsMoonStarsFill
      onClick={() => setDarkMode(true)}
      className="hover:scale-150 ease-in-out duration-500"
    />
  );
};

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="z-10 mx-2 p-3 border-0 border-b-4 border-black sticky top-0 bg-orange-100 shadow-lg dark:bg-black dark:border-white">
      <div className="lg:mx-20 md:mx-10 flex items-center justify-between">
        <a href="/" className="font-bold md:text-xl">
          Nidhi Patel
        </a>
        <div className="flex items-center gap-2">
          <div className="md:hidden block p-2" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
          <div className="hidden md:block">
            <ul className="flex">
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="project">Projects</NavLink>
              <NavLink href="education">Education</NavLink>
              <NavLink href="skill">Skills</NavLink>
            </ul>
          </div>
          <DarkModeToggle />
        </div>
      </div>

      <div className="md:hidden flex justify-center">
        <ul
          onClick={() => setShow(false)}
          className={`${
            show ? "" : "hidden"
          } text-center transition ease-in-out duration-300`}
        >
          <NavLink href="about">About</NavLink>
          <NavLink href="experience">Experience</NavLink>
          <NavLink href="project">Projects</NavLink>
          <NavLink href="education">Education</NavLink>
          <NavLink href="skill">Skills</NavLink>
        </ul>
      </div>
    </div>
  );
};
