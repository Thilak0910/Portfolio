/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thilak D's Portfolio",
  description:
    "Junior Software Engineer with 1 year of full-stack development experience in building web applications for US tax forms. Skilled in Vue.js, React.js, TypeScript, .NET, Node.js, and Fastify for APIs, with strong knowledge of SSR/CSR and metadata-driven form engines. Experienced in databases (SQL Server, MySQL, PostgreSQL), Docker, CI/CD (Jenkins, Argo CD), and test automation (Vitest, Playwright). Awarded Dazzling Debutante for rapid learning and impact. Familiar with agile, SSO, and cloud tools such as AWS Secrets Manager.",
  og: {
    title: "Thilak D Portfolio",
    type: "website",
    url: "http://thilakd.com/",
  },
};

//Home Page
const greeting = {
  title: "Thilak D",
  logo_name: "ThilakD",
  // nickname: "Thilak",
  subTitle:
    "Junior Software Engineer with 1 year of full-stack development experience in building web applications for US tax forms. Skilled in Vue.js, React.js, TypeScript, .NET, Node.js, and Fastify for APIs, with strong knowledge of SSR/CSR and metadata-driven form engines. Experienced in databases (SQL Server, MySQL, PostgreSQL), Docker, CI/CD (Jenkins, Argo CD), and test automation (Vitest, Playwright). Awarded Dazzling Debutante for rapid learning and impact. Familiar with agile, SSO, and cloud tools such as AWS Secrets Manager.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/thilakd/masterPortfolio",
  githubProfile: "https://github.com/Thilak0910",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Thilak0910",
  // linkedin: "https://www.linkedin.com/in/thilak-d-110442205/",
  // gmail: "thilakdevarajan6@gmail.com",

  {
    name: "Github",
    link: "https://github.com/Thilak0910",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thilak-d-110442205/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:thilakdevarajan6@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Vue.js and React.js",
        "⚡ Implementing Server-Side Rendering (SSR) and Client-Side Rendering (CSR)",
        "⚡ Working with TypeScript, Vite, Vike, and Turbo for efficient development",
      ],
      softwareSkills: [
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Vite",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creating robust backend services using .NET, C#, Node.js, and Express.js",
        "⚡ Developing high-performance REST APIs with Fastify and LINQ",
        "⚡ Working with Redis API for caching and performance optimization",
      ],
      softwareSkills: [
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Fastify",
          fontAwesomeClassname: "simple-icons:fastify",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "DevOps & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Working with databases including Microsoft SQL Server, MySQL, and PostgreSQL",
        "⚡ Implementing CI/CD pipelines using Docker, Jenkins, and Argo CD",
        "⚡ Testing with Vitest and Playwright, and integrating with SSO (OAuth, Google, ID.me)",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Easwari Engineering College (SRM Group)",
      subtitle: "B.E. in Electrical, Electronics and Communication Engineering",
      logo_path: "eec-logo.png",
      alt_name: "Easwari Engineering College",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied core subjects including Circuit Theory, Digital Electronics, Signal Processing, Control Systems, Microprocessors, and Communication Systems.",
        "⚡ Completed projects and coursework related to Embedded Systems, IoT, and Wireless Communication technologies.",
        "⚡ Actively participated in technical symposiums, workshops, and hackathons, enhancing practical and teamwork skills.",
        "⚡ Contributed to extracurricular initiatives under Youth Red Cross and other student organizations, building leadership and community engagement experience.",
      ],
      website_link: "https://srmeaswari.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Vue JS 3: Composition API (with Pinia, Firebase 9 & Vite)",
      subtitle: "- Danny Connell",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bed990ba-5cd4-4448-83ad-a82d1708a993/",
      alt_name: "Udemy Vue JS 3 Certificate",
      color_code: "#A435F0",
    },
    {
      title: "Modern JavaScript From The Beginning 2.0 (2024)",
      subtitle: "- Brad Traversy ",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-9308de0e-6a04-4d76-810d-7a5bd4b578f8/",
      alt_name: "Udemy Modern JavaScript Certificate",
      color_code: "#A435F0",
    },
    {
      title: "Python Bootcamp: Master Python with Real-World Projects",
      subtitle: "- Temotec Academy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-409d713a-fa96-4eaa-b1b7-a7199407a44a/",
      alt_name: "Udemy Python Bootcamp Certificate",
      color_code: "#A435F0",
    },
    {
      title: "Learn Python and Artificial Intelligence (AI) Coding Tools",
      subtitle: "- Srinidhi Ranganathan, Saranya S",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-46cc1691-1a7a-4a98-a672-6f16d79c04c7/",
      alt_name: "Udemy Python and Artificial Intelligence Certificate",
      color_code: "#A435F0",
    },
    {
      title: "RAG Agents: Build Apps & GPTs with APIs/MCP, LangChain & n8n",
      subtitle: "- Arnold Oberleiter",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy RAG Agents Certificate",
      color_code: "#A435F0",
    },
    {
      title: "Linux Bash Scripting",
      subtitle: "- Peter A",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-3dfec2b7-9430-4cad-97e1-b411f266f471/",
      alt_name: "Udemy Linux Bash Scripting Certificate",
      color_code: "#A435F0",
    },
    {
      title: "Leadership and Team Effectiveness ",
      subtitle: "- NPTEL, IIT Roorkee",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG28S5336540904306207",
      alt_name:
        "NPTEL IIT Roorkee Leadership and Team Effectiveness Certificate",
      color_code: "",
    },
    {
      title: "Introduction to Embedded System Design ",
      subtitle: "- NPTEL, IIT Roorkee",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS06S3336558904306207",
      alt_name:
        "NPTEL IIT Roorkee Introduction to Embedded System Design Certificate",
      color_code: "",
    },
    {
      title: "Introduction To Industry 4.0 And Industrial Internet Of Things ",
      subtitle: "- NPTEL, IIT Roorkee",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS95S2446142510076333",
      alt_name:
        "NPTEL IIT Roorkee Introduction To Industry 4.0 And Industrial Internet Of Things Certificate",
      color_code: "",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I started my career in June 2024 as a Junior Software Engineer Trainee at Span Technology Services. After demonstrating strong technical skills and contributions, I was promoted to Junior Software Engineer in January 2025, a role I continue to hold.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Junior Software Engineer",
          company: "Span Technology Services",
          company_url: "https://www.spantechnologyservices.com/",
          logo_path: "span-logo2.png",
          duration: "January 2025 - Present",
          location:
            "Chennai, Tamil Nadu (up to May 2025), Erode, Tamil Nadu (May 2025 - Present)",
          description:
            "Continued contributing to the Taxbandits project (94x and 1042 forms) as needed, utilizing Vue.js, .NET, C#, and Microsoft SQL Server for API and UI development. Developed FormOps, an internal tool for end-to-end tax form development lifecycle management, using React.js (React Router 7), Fastify API, PostgreSQL, Docker and AWS Secret Manager, following a JIRA-like workflow where business analysts, designers, developers, QA, and product managers collaborate. Implemented a metadata-driven form engine in FormOps using a FormEngine tool, enabling schema development and form creation, with product managers controlling deployment to sprint, UAT, sandbox or production environments. Built a secure State Filings Forms web application for user-facing tax form filing, leveraging forms created in FormOps, using React.js (React Router 7), Fastify API, PostgreSQL, Docker, and OAuth-based SSO (Google, ID.me). Managed CI/CD pipelines using Jenkins and Argo CD, handling branch merging, automatic builds, and containerized deployments to various environments. Created a FormEngine POC for the FormOps site to validate metadata-driven form development. Documented tasks in JIRA, attaching unit testing and development plan sheets to ensure transparency and traceability. Attended daily Scrum meetings, contributing to agile development processes and collaborating with cross-functional teams.",
          color: "#0879bf",
        },
        {
          title: "Junior Software Engineer Trainee",
          company: "Span Technology Services",
          company_url: "https://www.spantechnologyservices.com/",
          logo_path: "span-logo2.png",
          duration: "June 2024 - December 2024",
          location: "Chennai, Tamil Nadu",
          description:
            "Contributed to the Taxbandits project, primarily in the 94x and 1042 forms team, developing and maintaining web applications using Vue.js, .NET, C#, and Microsoft SQL Server. Supported the Taxbandits Common Module (TCM) team and the 1099 forms team under different managers, assisting during the high-pressure form live season with Vue 3-related fixes and solutions. Quickly adapted to company processes, learning, and contributing to both API and UI development, enhancing the 94x and TCM products. Developed multiple proof-of-concepts (POCs), including pioneering Vitest unit testing and Playwright automation testing for 94x and 1042 applications, educating team members on its implementation. Implemented SSO logins (Google, ID.me) across front and back-end, utilizing LINQ, Redis API, Docker, and AWS Secret Manager for secure key management. Used tools like Vite, Vike, Turbo, Infisical, and Mailtrap for efficient development and testing workflows.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Chennai Metro Rail Limited",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "cmrl-logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Director of External Affairs",
          company: "YOUTH RED CROSS EEC",
          logo_path: "YRC-logo.png",
          duration: "Sept 2021 - Sept 2023",
          location: "Chennai, TamilNadu",
          description:
            "Served as Director of External Affairs at Youth Red Cross, fostering collaborations with NGOs, institutions, and government bodies. Organized awareness drives, health and social campaigns, and external partnerships to amplify YRC’s community impact. Acted as the bridge between YRC and external stakeholders, ensuring effective representation and sustainable collaboration.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_thilak.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://thilakd.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chennai, Tamil Nadu, India",
    locality: "Chennai",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "600125",
    streetAddress: "Chennai",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};
debugger;
// Contact Form
const contactFormInfo = {
  title: "Send Me a Message",
  subtitle:
    "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
  emailjs: {
    serviceId: "service_rlqb2l8", // Replace with your actual EmailJS service ID
    templateId: "template_xvwxpoz", // Replace with your actual EmailJS template ID
    userId: "Thilak D", // Replace with your actual EmailJS user ID
    receiverEmail: "thilakdevarajan6@gmail.com", // Your email where you want to receive messages
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  contactFormInfo,
};
