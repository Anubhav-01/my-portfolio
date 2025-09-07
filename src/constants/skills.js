// ===================== Skills Section Logos =====================
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import angularLogo from '../assets/tech_logo/angular.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';

// ===================== Education Section Logos =====================
import DPSLogo from '../assets/education_logo/DPS-logo.png';
import PSITLogo from '../assets/education_logo/psit-logo.jpeg';

// ===================== Skills Data =====================
const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export default SkillsInfo;

// ===================== Education Data =====================
export const education = [
  {
    id: 0,
    img: PSITLogo,
    school: 'PSIT, Kanpur',
    date: 'Dec 2022 - Aug 2026',
    grade: '73.2%',
    desc: 'Currently pursuing B.Tech in Computer Science (AI & ML) from PSIT, Kanpur.',
    degree: 'B.Tech-(CS-AIML)',
  },
  {
    id: 1,
    img: DPSLogo,
    school: 'Delhi Public School, Azaad Nagar, Kanpur',
    date: 'Apr 2021 - Mar 2022',
    grade: '86.5%',
    desc: 'Completed Class 12 from Delhi Public School under CBSE Board.',
    degree: 'CBSE(XII) - PCM with Computer Science',
  },
  {
    id: 2,
    img: DPSLogo,
    school: 'Delhi Public School, Azaad Nagar, Kanpur',
    date: 'Apr 2019 - Mar 2020',
    grade: '82.5%',
    desc: 'Completed Class 10 from Delhi Public School under CBSE Board.',
    degree: 'CBSE(X), Science with Computer Application',
  },
];


export const projects = [
    {
      id: 0,
      title: "Movie Recommendation Using Facial Expressions",
      description:
        "A Movie Recommendation System using Facial Expressions suggests movies by analyzing users’ emotions through facial expression recognition for personalized recommendations.",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Anubhav-01/MusicRecommendation",
    },
    {
      id: 1,
      title: "Documentary Summary Assistant",
      description:
        "A Document Summary Assistant is a tool that extracts text from documents (PDFs, images, etc.) and generates concise, AI-powered summaries for quick understanding.",
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anubhav-01/document-summary-assistant",
    },
];  