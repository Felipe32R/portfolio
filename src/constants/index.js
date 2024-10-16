import {
  next,
  docker,
  figma,
  git,
  javascript,
  letmeask,
  meta,
  mobile,
  nestjs,
  nodejs,
  nuxt,
  podcastr,
  reactjs,
  sgce,
  shopify,
  starbucks,
  tailwind,
  tesla,
  typescript,
  vue,
  waiterapp,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const navLinksEn = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web",
    icon: web,
  },
  {
    title: "Mobile",
    icon: mobile,
  },

];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "VueJS",
    icon: vue,
  },
  {
    name: "Nuxt",
    icon: nuxt,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WaiterApp",
    description:
      "Nesse aplicativo mobile, o cliente pode realizar os pedidos, e o garçom através de uma plataforma web consegue gerenciar os itens, confirmar e cancelar pedidos em tempo real.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: waiterapp,
    source_code_link: "https://github.com/Felipe32R/JStack/tree/main/WaiterApp",
  },
  {
    name: "SGCE",
    description:
      "Sistema de gerenciamento de campanhas eleitorais. Realize pesquisas sobre campanhas de candidatos de qualquer localidade e fique por dentro das informações com maior clareza.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
    ],
    image: sgce,
    source_code_link: "https://github.com/Felipe32R/SGCE",
  },
  {
    name: "Podcastr",
    description: "Reprodutor de podcasts estilo Spotify.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: podcastr,
    source_code_link: "https://github.com/Felipe32R/podcastr",
  },
  {
    name: "Letmeask",
    description: "Plataforma de Q&A com autenticação do google.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: letmeask,
    source_code_link: "https://github.com/Felipe32R/letmeask",
  },
];
const projectsEn = [
  {
    name: "WaiterApp",
    description:
      "In this mobile application, the customer can place orders, and the waiter, through a web platform, can manage items, confirm and cancel orders in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: waiterapp,
    source_code_link: "https://github.com/Felipe32R/JStack/tree/main/WaiterApp",
  },
  {
    name: "SGCE",
    description:
      "Election campaign management system. Carry out research on candidate campaigns from any location and stay on top of the information with greater clarity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
    ],
    image: sgce,
    source_code_link: "https://github.com/Felipe32R/SGCE",
  },
  {
    name: "Podcastr",
    description: "Spotify-style podcast player.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: podcastr,
    source_code_link: "https://github.com/Felipe32R/podcastr",
  },
  {
    name: "Letmeask",
    description: "Q&A platform with Google authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: letmeask,
    source_code_link: "https://github.com/Felipe32R/letmeask",
  },
];

export {
  experiences,
  projects,
  projectsEn,
  services,
  technologies,
  testimonials,
};
