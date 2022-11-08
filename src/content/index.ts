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
      "Worked with various international clients from 5+ countries with new and ongoing projects",
      "Implemented responsive and mobile-first development strategies in every project",
      "Resolved issues in an existing project to meet the user requirements",
      "Technologies: HTML, CSS, JavaScript, Bootstrap",
    ],
  },
  {
    title: "Front-End Developer",
    location: "India",
    tenure: "2018-2021",
    companyName: "Digital Science Web Technologies Pvt. Ltd.",
    responsibilities: [
      "Researched and implemented correct coding practices for SEO, resulting in an average of 60% higher search engine rankings than previously",
      "Collaborated with a team of 10 developers for 8+ months on a major website redesign in Agile fashion",
      "Followed SDLC-Agile Methodology and developed the website from the scratch. Worked closely with the client to ensure project requirements are met",
      "Maintained 30+ client websites and provided technical assistance to 100+ clients on a full-time basis",
      "Used Git and GitHub for continuous and incremental development of the project",
      "Technologies: HTML, CSS, JavaScript, ReactJS, Bootstrap",
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
    title: "Timesheet Tracker",
    projectLink: "https://timesheet-tracker.netlify.app/",
    description:
      "Full-stack Application that manages users’ courses and tasks along with features like time tracker, background music, timesheet CSV export, teacher dashboard, dark mode, and admin panel.",
    imageSrc: "bg-timesheet-tracker",
    techStack: ["React", "NodeJS", "OAuth", "PostgreSQL"],
  },
  {
    title: "The Chrome Dinosaur Game",
    projectLink: "https://chrome-game.netlify.app/",
    description:
      "A world famous no internet dinosaur game build with the HTML, CSS and javascript.",
    imageSrc: "bg-game",
    techStack: ["HTML5", "CSS3", "JavaScript"],
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
  {
    title: "ChatRoom App",
    projectLink: "https://live-chat-6i8k.onrender.com/",
    description:
      "A live chatroom application build with Node-ExpressJS backend with socket.io and React front-end with TypeScript. Simply choose a room id and name and have self destructive chat.",
    imageSrc: "bg-chatroom",
    techStack: ["React", "ExpressJS", "Web-sockets"],
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
