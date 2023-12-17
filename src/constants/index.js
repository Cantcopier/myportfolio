import { meta,souss,sfqm,redal, starbucks, tesla } from "../assets/images";
import {
    // car,
    laravel,
    contact,
    php,
    mysql,
    css,
    // estate,
    express,
    git,
    github,
    iptst,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    xampp,
    nodejs,
    logor,
    logotitle,
    react,
    redux,
    micro,
    // snapgram,
    // summiz,
    ofppt,
    tailwindcss,
    // threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: xampp,
        name: "Xampp",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
   
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel.js",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "php",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Management Services",
        company_name: "Ste SOUSS AL ALIMA-Sale",
        icon: souss,
        iconBg: "white",
        date: "July 2022 - Septembre 2022",
        points: [
            "Create a desktop application to manage manuals in the library, including prices (excluding taxes, with taxes, VAT, etc.). Also, manage stocks of school and office supplies. Participate in code reviews and provide constructive feedback to other developers."
        ],
    },
    {
        title: "Management of learning folders",
        company_name: "Centre de formation et de qualification dans les métiers d’artisanat salé",
        icon: sfqm,
        iconBg: "white",
        date: "March 2023 - April 2023",
        points: [
            "Create a website to manage learning activities within the center, as well as to handle administration, documents, and other tasks within the center."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Redal Rabat",
        icon: redal,
        iconBg: "white",
        date: "Oct 2023 - Nov 2023",
        points: [
            "At REDAL agency, I developed an application to test networks in all Rabat-Salé-Kénitra branches. This application can alert in case of disconnection from a branch and for handling complaints."
        ],
    },
   
    {
        title: "Microsoft Office Specialist (MOS) Certification",
        company_name: "Microsoft Office",
        icon: micro,
        iconBg: "white",
        date: "2022",
        points: [
            "This certification is available for each of the Microsoft Office applications, including Word, Excel, and PowerPoint. It validates your skills and proficiency in using these applications.",
        ],
    },
    {
        title: "Développement Digital option Web Full Stack-OFPPT",
        company_name: "Diplomat",
        icon: ofppt,
        iconBg: "white",
        date: "2023",
        points: [
            "This program teaches you how to build complete websites and applications. You'll learn:.",
            `Frontend Development:

            Basics of HTML, CSS, and JavaScript.
            How to use popular frontend frameworks like React, Angular, or Vue.js.
            Creating attractive and responsive user interfaces..'`,
            `Backend Development:

            Server-side languages like Node.js, Python (Django or Flask), Ruby (Ruby on Rails), or Java (Spring).
            Working with databases like MySQL, PostgreSQL, or MongoDB.
            Building the server-side architecture to handle data and requests.
            `,
            `Project Management and Collaboration:

            Understanding Agile development methodologies.
            Collaborating within development teams.
            Version control using systems like Git`,
            `Security and Optimization:

            Implementing security best practices.
            Optimizing the performance of web applications.
            Deployment and Infrastructure:
            
            Using deployment services like Heroku, AWS, or Netlify.
            Understanding basic cloud infrastructure concepts.`,
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Cantcopier',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amine-cherkaoui-477467253/',
    }
];

export const projects = [
   
    {
        iconUrl: logotitle,
        theme: 'btn-back-grey',
        name: 'Portfolio 3D',
        description: 'Create 3D portfolio that highlights my expertise, specifically focusing on my experiences in 3D design .',
        link: 'https://myportfolio3damine.netlify.app/',
    },
    {
        iconUrl: logor,
        theme: 'btn-back-grey',
        name: 'Time For Music',
        description: 'Developed a web application that tracks and notifies users of price cI built a music application designed for relaxation or motivation, etc. This is my project where I utilized HTML, CSS, and JavaScript. I created a simple interfacehanges for products on Amazon, helping users find the best deals.',
        link: '#',
    },
    {
        iconUrl: php,
        theme: 'btn-back-green',
        name: 'Gestion Appretissage',
        description: 'reate a website to manage learning activities within the center, as well as to handle administration, documents, and other tasks within the center.',
        link: '#',
    },
    {
        iconUrl: iptst,
        theme: 'btn-back-black',
        name: 'IPTST',
        description: 'At REDAL agency, I developed an application to test networks in all Rabat-Salé-Kénitra branches. This application can alert in case of disconnection from a branch and for handling complaints.',
        link: '#',
    },
    
];