import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiSpring,
    SiRedis,
    SiFirebase,
    SiPostgresql,
    SiMongodb,
    SiGooglemaps,
    SiOpencv,
    SiFastapi,
    SiFlutter,
    SiSqlite,
    SiPhp,
    SiMysql,
    SiJavascript,
    SiHtml5,
    SiCss3
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Thirikkale",
        description:
            "Taxi Hailing Platform with Ride-Sharing Capabilities (Ongoing 3rd Year Final Project). Backend development including microservices, AI-powered features like gender detection and face recognition, real-time location sharing, and spatial data management.",
        technologies: [SiSpring, SiFastapi, SiRedis, SiFirebase, SiPostgresql, SiMongodb, SiGooglemaps, SiOpencv],
        techNames: ["Spring Boot", "FastAPI", "Redis", "Firebase", "PostgreSQL", "MongoDB", "Google Maps API", "OpenCV"],
        techLinks: ["https://spring.io/projects/spring-boot", "https://fastapi.tiangolo.com/", "https://redis.io/", "https://firebase.google.com/", "https://www.postgresql.org/", "https://www.mongodb.com/", "https://developers.google.com/maps", "https://opencv.org/"],
        github: "https://github.com/Thirikkale",
        demo: "https://www.figma.com/design/nc9zJw3nlU59BAav0bXz1t/Thirikkale?node-id=0-1&t=PpX9vsM1AhoWGtG5-1",
        image: "/projects/thirikkale.webp",
        available: true,
    },
    {
        id: 1,
        name: "ChatDrop Mobile Application",
        description:
            "SCS3212 - Mobile App Development Group Assignment. Temporary chat application with QR code pairing, real-time messaging, voice messages, offline support, and friend management system using clean architecture.",
        technologies: [SiFlutter, SiFirebase, SiSqlite],
        techNames: ["Flutter", "Firebase", "SQLite"],
        techLinks: ["https://flutter.dev/", "https://firebase.google.com/", "https://www.sqlite.org/"],
        github: "https://github.com/kittykat-sudo/GenzChatApp",
        demo: "https://drive.google.com/file/d/1p__n3w6jEPkZFsbkH1QpVf90OAAz32Kq/view",
        image: "/projects/chatdrop.webp",
        available: true,
    },
    {
        id: 2,
        name: "Evergreen",
        description:
            "Tea Factory Leaves Collection Management System (2nd Year Group Project). Full-stack development with PHP/MySQL using MVC architecture, featuring chat application, e-commerce platform, inventory tracking, and automated supplier chain management.",
        technologies: [SiPhp, SiMysql, SiJavascript, SiHtml5, SiCss3],
        techNames: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
        techLinks: ["https://www.php.net/", "https://www.mysql.com/", "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
        github: "https://github.com/EverGreen-Group/Evergreen_Project",
        demo: "https://github.com/EverGreen-Group/Evergreen_Project",
        image: "/projects/evergreen.webp",
        available: true,
    },
    {
        id: 3,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/kittykat-sudo/",
        demo: "https://github.com/kittykat-sudo/",
        image: "/projects/construction.webp",
        available: false,
    },
];