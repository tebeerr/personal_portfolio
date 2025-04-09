import {
    aibs,
    aibsAssurance,
    logisticWeb,
    aibsMobile,
    aibsPartenaire,
    angular,
    backend,
    cofat,
    comar,
    creator,
    css,
    firebase,
    flutter,
    git,
    githubBlack,
    html,
    javascript, mobile,
    mongodb,
    nodejs,
    ont,
    reactjs,
    tailwind,
    typescript,
    web,
    pneu,
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
        title: "FrontEnd Developer",
        icon: web,
    },

    {
        title: "BackEnd Developer",
        icon: backend,
    },
    {
        title: "Flutter Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "git",
        icon: git,
    }, {
        name: "Flutter",
        icon: flutter,
    }, {
        name: "Firebase",
        icon: firebase,
    }, {
        name: "Angular",
        icon: angular,
    }, {
        name: "Github",
        icon: githubBlack,
    },
];

const experiences = [
    // {
    //   title: "Information Technology Intern",
    //   company_name: "Assurances COMAR et HAYETT",
    //   icon: comar,
    //   iconBg: "#fff",
    //   date: "June 2020 - August 2020",
    //   points: [
    //     "Diagnosed and resolved PC and network issues for employees, ensuring minimal downtime and efficient operations.",
    //     "Provided timely technical assistance and support to address hardware, software, and connectivity concerns.",
    //     "Collaborated with team members to implement effective solutions and improve system performance.",
    //     "Conducted system upgrades and maintenance, enhancing overall functionality and user experience.",
    //   ],
    // },
    // {
    //   title: "Software Developer Intern",
    //   company_name: "COFAT Group",
    //   icon: cofat,
    //   iconBg: "#fff",
    //   date: "June 2021 - August 2021",
    //   points: [
    //     "Contributed to the creation and enhancement of the company's stock management application, ensuring improved functionality and user experience..",
    //     "Collaborated with the development team to implement new features and optimize application performance.",
    //     "Gained hands-on experience with software development processes, including design, coding, and testing.",
    //     "Strengthened coding skills by working on real-world projects in a professional environment.",
    //   ],
    // },
    {
        title: "Web Developer Intern",
        company_name: "Lepneumatique",
        icon: pneu,
        iconBg: "#fff",
        date: "March 2023 - June 2023",
        points: [
            "Led the Development of controllers for customer, product and orders.",
            "Designed and implemented user-friendly interfaces to enhance usability and accessibility.",
            "Development and optimization of REST APIs in PHP and Python Odoo, integrating SQL and NoSQL databases.",
            "Gained valuable experience in translating real-world needs into innovative digital solutions, refining web development and problem-solving skills.",
        ],
    },
    {
        title: "Web and Mobile Developer ",
        company_name: "AIBS ASSURANCES",
        icon: aibs,
        iconBg: "#0063ce",
        date: "july 2023 - february 2025",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Build and sustain high-performance mobile applications utilizing Flutter and associated frameworks",
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
        name: "AIBS Assurance",
        description: "A web platform designed for an insurance company, enabling users to seamlessly manage their insurance needs. The website allows users to purchase insurance, file claims for problems or issues, and access a range of services in a user-friendly and efficient manner.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: aibsAssurance,
        source_code_link: "https://www.aibs-assurances.fr/",
    },
    {
        name: "AIBS Partenaire",
        description: 'A web application designed to empower users in managing their insurance needs while offering a unique profit-sharing model. Users can purchase insurance for themselves or others, earning a profit for each policy bought. The platform also enables users to file claims for issues and seamlessly cash out their earned profits, providing a comprehensive and rewarding insurance experience.',
        tags: [
            {
                name: "Firebase",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "pink-text-gradient",
            },
        ],
        image: aibsPartenaire,
        source_code_link: "https://aibs-part.web.app/presentation",
    },
    {
        name: "AIBS Partenaire mobile",
        description: 'A cross-platform mobile app offering seamless functionality as AIBS Partenaire, enabling users to manage insurance, file claims, earn profits, and cash out rewards conveniently.',
        tags: [
            {
                name: "Firebase",
                color: "blue-text-gradient",
            },
            {
                name: "Flutter",
                color: "green-text-gradient",
            },
        ],
        image: aibsMobile,
        source_code_link: "https://play.google.com/store/apps/details?id=com.sg.aibs_partenaire_mobile&hl=fr&pli=1",
    },
    {
        name: "Transport Express Clearance",
        description: "Transport Express Clearance (TEC) is a customs brokerage firm established in 2012. They offer services in customs clearance, international transportation, and warehousing. TEC assists clients with import and export procedures, ensuring compliance with various customs regimes. Their strengths include versatility, availability, and motivation. TEC is committed to regulatory monitoring, adherence to HSSE standards, ethical practices, flexibility, responsiveness, and traceability.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: logisticWeb,
        source_code_link: "https://logistic-website-91mg.onrender.com",
    },

];

export {services, technologies, experiences, testimonials, projects};
