import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Student Assistant",
        company_name: "ITU BIDB",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Sep 2024 - Present",
        points: [
            "",
        ],
    },
    {
        title: "Scrum Developer",
        company_name: "MEKUPTE",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - Oct 2023",
        points: [
            ""
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
        link: 'https://github.com/alpha343434',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/zehra-aydın-875213244',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'An E-commerce Application',
        description: 'This project delivers a shopping experience for users on both mobile devices and web browsers (via Flutter web support). It leverages the robust capabilities of Flutter for a performant and visually appealing user interface, while Firebase provides a scalable and secure backend for data management.',
        link: 'https://github.com/alpha343434/flutter-app.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'A Book Reccommendation Website',
        description: 'This is a flask project that aims to combat the influence of societal pressures and discover hidden gems within the vast world of literature. When a user clicks the "recommend a book" button, the web application leverages the Google Books API to deliver a truly random book suggestion.',
        link: 'https://github.com/alpha343434/alpha/tree/ab93a9149bfedbfc486b1ba4269fb0e5bae6229a/bookDOM',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'A Backhand Problem Logger',
        description: 'Here is a .NET framework backhand application where users could logged, stock and see errors.',
        link: 'https://github.com/alpha343434/.Net/tree/631823f20d9d90099e8af99c359fe2282c0a2c61/BusinessApp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Chatbot Application',
        description: '(Ongoing project) This will hopefully be a child-user interactive chatbot where users can have fun while chatting.',
        link: 'https://github.com/alpha343434/geminiAPI.git',
    }
];