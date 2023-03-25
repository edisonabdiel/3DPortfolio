import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  soundcloud,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  home,
  kick,
  rust,
  solidity
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Solution Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Product Manager",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Manager",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Sept 2010 - Nov 2015",
    points: [
      "Manage Customer Service projects for the Amazon.com website.",
      "Manage a whide range of stakeholders including business owners, product managers, and developers.",
      "Organize and led weekly SCRUM ceremonies.",
      "Suporting Marketing campaigns and other business initiatives.",
    ],
  },
  {
    title: "Sr Project Manager",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "June 2017 - Oct 2018",
    points: [
      "Develope bussines case and project plan for new project development.",
      "Developed an operational team as well as the workflow, KPIs and basically the whole operation of the team from scratch.",
      "Analysing the metadata of the catalogue content and assuring its adequate distribution was the team's main function, as well as cleaning up the and verifying the catalogue from possible copy rights infringements.",
      "Lear write SQL queries to handle the team's data.",
    ],
  },
  {
    title: "React Developer",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "Oct 2018 - Dec 2021",
    points: [
      "Develope and maintain the web app using React.js and other related technologies.",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality outcomes.",
      "Build and maintain the component library and the design system.",
      "Participate in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Aroundhome",
    icon: home,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
    points: [
      "Built a tech case for a new API gateway.",
      "Build, deploy and document the new API gateway.",
      "Maintain and scale app infrastructure with AWS.",
      "Develop and support the internal design system library.",
    ],
  },
  {
    title: "Technical Product Manager",
    company_name: "KickID",
    icon: kick,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Develop OKRs along with KPIs and the Product Roadmap.",
      "Introduce and maintain Dual Track Agile Development.",
      "Craft Surveys and Interviews in order to enrich the personas and an adequate market fit.",
      "Extensive use of Jira and Confluence to manage the product development process.",
      "Work closely with Tech and Design in order to refactor the whole system architecture and user facing apps.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Not only is he trustworthy and reliable, but he is also quite the creative and innovative type. A laugh is almost guaranteed when working with him. He is a great team player and is always willing to help others. I would highly recommend Edison for any project.",
    name: "Esteban Torres",
    designation: "Sr Engineering Manager",
    company: "Spotify",
    image: "/src/assets/testimonials/esteban.png",
  },
  {
    testimonial:
      "He is a natural leader and visionary, inspiring cross-functional teams to move from ideation to high-quality outcomes. His ability to start from scratch - with keen observation, creativity, and leadership - and deliver something truly valuable is unparalleled. When working with Edison, fun, success and excellence are a given.",
    name: "Gonzalo Mendoza",
    designation: "Product Manager",
    company: "Parity Technologies",
    image: "/src/assets/testimonials/gonzi.png",
  },
  {
    testimonial:
      "Imagine Dennis Rodman and Steve Jobs went on a wild holiday to Central America and had a baby. That's Edison! Energetic, fun and creative yet systematic, organized and structured. He taught me the definition of work-hard & play-hard.",
    name: "Marc Tuduri",
    designation: "Sr Backend Engineer",
    company: "Grafana Labs",
    image: "/src/assets/testimonials/marc.png",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };