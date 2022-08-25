import laravel from "../assets/logo/laravel.svg";
import mysql from "../assets/logo/mysql.svg";
import prisma from "../assets/logo/prisma.svg";
import css from "../assets/logo/css.svg";
import javascript from "../assets/logo/javascript.svg";
import figma from "../assets/logo/figma.svg";
import html from "../assets/logo/html.svg";
import mui from "../assets/logo/mui.svg";
import node from "../assets/logo/node.svg";
import php from "../assets/logo/php.svg";
import postgresql from "../assets/logo/postgresql.svg";
import react from "../assets/logo/react.svg";
import tailwindcss from "../assets/logo/tailwindcss.svg";
import vuejs from "../assets/logo/vuejs.svg";
import bootstrap from "../assets/logo/bootstrap.svg";

export const description =
  "Welcome to my Web Space. I like creating interactive applications and experiences on the web.";
export const experience: Experience[] = [
  {
    title: "Freelance Web Developer",
    location: "India",
    tenure: "2020-2021",
    companyName: "N/A",
    responsibilities: [
      "Collaborating with Designers and Project Owners to finalize the tech-stack, designs and layouts",
      "Development of Website with HTML, CSS and JavaScript with responsive-mobile first approach",
      "Troubleshooting integration issues with Back-end developers and debugging front-end logic",
      "Ensuring cross-platform compatibility, content optimization for performant website",
    ],
  },
  {
    title: "Front-End Developer",
    location: "India",
    tenure: "2018-2020",
    companyName: "Digital Science Web Technologies Pvt. Ltd.",
    responsibilities: [
      "Developing front-end web pages using HTML, CSS and JavaScript based on the client’s requirements",
      "Implementing responsive and mobile-first development strategies in every project",
      "Worked collaboratively in team of designers and back-end developers to support the project from end-to-end • Used Git and GitHub for continuous and incremental development of the project",
      "Utilized various frameworks such as Bootstrap, jQuery, Bulma and so on for different projects",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Ontario Graduate Certificate",
    field: "Web Development",
    institute: "Humber College",
    location: "Toronto, Canada",
    tenure: "2022 - Present",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institute: "Gujarat Technological University",
    location: "Ahmedabad, India",
    tenure: "2013 - 2017",
  },
];

export const projects: Project[] = [
  {
    title: "Humber Timesheet Tracker",
    projectLink: "https://nidhipatel439.github.io/humber_timesheet_tracker/",
    description:
      "A sample timesheet tracker that users can track their assignments/project time it taken to finish it. In this application user can create/remove the task, start/stop timer and to record the total time for their whole assignment/project.",
    imageSrc: "bg-humber-timesheet-tracker",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
  {
    title: "Weather Application",
    projectLink: "https://nidhipatel439.github.io/Weather-Application/",
    description:
      "A simple weather application made with HTML, CSS and JavaScript to demonstrate the animation skills. A responsive animated website built using HTML, CSS with Bulma framework.",
    imageSrc: "bg-weather",
    techStack: ["HTML5", "CSS3", "Bulma", "JavaScript"],
  },
  {
    title: "Make(things)UP",
    projectLink: "https://github.com/nidhipatel439/makeup",
    description:
      "This is a mock e-commerce website for the makeup products. This website utilizes two apis one for fetching different makeup products information and second for the convert the currency rate.",
    imageSrc: "bg-makethingsup",
    techStack: ["ExpressJS", "NodeJS", "Bootstrap"],
  },
  {
    title: "Full-stack Portfolio",
    projectLink: "http://nidhi439.epizy.com/php-cms",
    description:
      "This is a full-stack application made with Php and MySQL. It was part of a group assignment where our team build the content management system from scratch with php and MySQL. Front-end development was done individually to fit their needs.",
    imageSrc: "bg-portfolio",
    techStack: ["Bootstrap", "MySQL", "Php"],
  },
];

export const skills: Skill[] = [
  { width: 60, logo: html, name: "HTML5" },
  { width: 50, logo: css, name: "CSS3" },
  { width: 60, logo: javascript, name: "JavaScript" },
  { width: 90, logo: mysql, name: "MySQL" },
  { width: 70, logo: postgresql, name: "PostgreSQL" },
  { width: 60, logo: prisma, name: "Prisma" },
  { width: 70, logo: react, name: "React" },
  { width: 90, logo: node, name: "NodeJS" },
  { width: 80, logo: mui, name: "Material UI" },
  { width: 70, logo: php, name: "php" },
  { width: 60, logo: laravel, name: "Laravel" },
  { width: 70, logo: vuejs, name: "VueJS" },
  { width: 80, logo: tailwindcss, name: "TailwindCSS" },
  { width: 70, logo: bootstrap, name: "Bootstrap" },
  { width: 50, logo: figma, name: "Figma" },
];
