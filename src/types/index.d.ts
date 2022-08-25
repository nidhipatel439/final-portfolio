interface Experience {
  title: string;
  location: string;
  companyName: string;
  tenure: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institute: string;
  location: string;
  tenure: string;
  field: string;
}

interface Project {
  title: string;
  projectLink: string;
  description: string;
  imageSrc: string;
  techStack: string[];
}

interface Skill {
  width: number;
  logo: string;
  name: string;
}
