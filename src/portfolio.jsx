/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import autLogo from "./assets/images/aut.png";
import xidianLogo from "./assets/images/xidian.jpeg";
import metaappLogo from "./assets/images/metaapp.jpeg";
import kuaigouLogo from "./assets/images/kuaigou.jpeg";
import awsLogo from "./assets/images/aws.png";
import metaLogo from "./assets/images/meta.png";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Leo Zhang",
  title: "Hi all, I'm Leo",
  subTitle: "A passionate Full Stack Software Developer 🚀 having an experience of building large-scale web applications with JavaScript / Reactjs / ASP.NET / Python / Java and some other cool libraries and frameworks.",
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/WindZZzzZZzz",
  linkedin: "https://www.linkedin.com/in/leo-software-engineer",
  gmail: "leozhangnzakl@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive and responsive Front end for your web applications",
    "⚡ Develop high performance backend APIs using ASP.NET / Python / Java",
    "⚡ Deploy and manage web applications on AWS / Azure / Kubernetes / Docker",
    "⚡ Store and manage data using SQL / NoSQL databases and Analyze data using Python",
    "⚡ Integrate AI / ML models in web applications using Python / Tensorflow / LLMs",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Interest Section
const interestInfo = {
  display: true,
  title: "Interests",
  subTitle: "Always curious about cutting-edge technologies",
  interests: [
    {
      name: "Web Development",
      weight: "",
      link: ""
    },
    {
      name: "Vibe Coding",
      weight: "",
      link: ""
    },
    {
      name: "Saas",
      weight: "",
      link: ""
    },
    {
      name: "n8n",
      weight: "",
      link: ""
    },
    {
      name: "Prompt Engineering",
      weight: "",
      link: ""
    },
    {
      name: "Generative AI",
      weight: "",
      link: ""
    },
    {
      name: "Large Language Models",
      weight: "",
      link: ""
    },
    {
      name: "Web Scraping",
      weight: "",
      link: ""
    },
    {
      name: "Open Source",
      weight: "",
      link: ""
    },
    {
      name: "MCP",
      weight: "",
      link: ""
    },
  ]
}

// Project Section
const projectSection = {
  display: true,
  projects: [
    {
      projectName: "Online Advertising Platform",
      description: [
        "⚡ Built a high-performance advertising Demand-Side Platform (DSP) delivering over 100 million ads daily and generating up to $200,000 in revenue per day.",
        "⚡ Developed a CRM system for advertisers to create campaigns and visualize business data effectively.",
        "⚡ Optimized platform performance to scale with rapidly growing web traffic.",
        "⚡ Improved conversion rates by integrating machine learning techniques.",],
      link: "https://www.233leyuan.com/",
    },
    {
      projectName: "Data Management System",
      description: [
        "⚡ Built a data management platform to deliver detailed business insights for Kuaigou Logistics.",
        "⚡ Engineered scalable data processing and querying capabilities using databases, Hive, Spark, and Kafka",
        "⚡ Implemented engaging visualizations using pie charts, line charts, and data tables."
      ],
      link: "https://suyun.daojia.com/#/",
    },
    {
      projectName: "GenZ Aotearoa Website",
      description: [
        "⚡ Maintained and updated the website using Squarespace and React.js",
        "⚡ Collected data using Airtable and created visualizations for analysis and reporting",
      ],
      link: "https://www.genzaotearoa.org/",
    },
    {
      projectName: "MCP Outlook Tool",
      description: [
        "⚡ Built MCP client and server for Microsoft Outlook Email",
        "⚡ Allow users to operate their email account through nature language, thereby enhancing their work efficiency",
      ],
      link: "dd",
    },
    {
      projectName: "Tiaki Taonga Website",
      description: [
        "⚡ Maintained website using WordPress",
        "⚡ Collected and processed business information across New Zealand",
        "⚡ Integrated Chatbot and Invoice Scanner using Microsoft Azure AI Service",
      ],
      link: "https://www.tiakitaonga.com/",
    },
    {
      projectName: "KHC Community Website",
      description: [
        "⚡ KHC community is an open source community with 1k members",
        "⚡ Maintained the website using HTML, JS, CSS, and Github Action",
      ],
      link: "https://krypto-hashers-community.github.io/Khc-Official/",
    },
    {
      projectName: "ChatGPT TOC Extension",
      description: [
        "⚡ Developed and publish the Chrome Extension",
        "⚡ Generated a table of content for ChatGPT conversions to improve retrieval efficiency",
      ],
      link: "https://chromewebstore.google.com/detail/jjpmfdjghngpncajeffgdpfcedlpkdmg?utm_source=portfolio",
    },
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Auckland University of Technology",
      logo: autLogo,
      subHeader: "Postgraduate Diploma of Computer Science",
      duration: "February 2024 - December 2024",
      desc: "Participated in the research of Software Architecture and Machine Learning.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Xidian University",
      logo: xidianLogo,
      subHeader: "Bachelor of Software Engineering",
      duration: "August 2015 - July 2019",
      desc: "Took courses about Software Engineering, OOP, OS, Data Structure, and Algorithms.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "60%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Developer",
      company: "MetaApp",
      companylogo: metaappLogo,
      date: "July 2019 – September 2023",
      desc: "Online advertising platform for Game Mobile Apps.",
      descBullets: [
        "⚡ Build a online ads platform application which can handle 1000 requests per second",
        "⚡ Improve the performance of the application by 80% by using Cache and Thrift protocol",
        "⚡ Improve the revenue of the company by 4 times by using AI/ML to predict the ads CVR and by customizing delivery strategies",
      ]
    },
    {
      role: "Full Stack Software Developer",
      company: "Kuaigou Logistics",
      companylogo: kuaigouLogo,
      date: "November 2018 – June 2019",
      desc: "Develop the web page and backend service for the data analysis platform.",
      descBullets: [
        "⚡ Design and develop the data analysis platform for the company",
        "⚡ Provide comprehensive data analysis and visualization for the company using Charts, Tables, Graphs, and Animations",
        "⚡ Track dataflow using Kafka and Spark Streaming",
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications 🏆 ",
  subtitle:
    "Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "",
      image: awsLogo,
      imageAlt: "AWS Certified Solutions Architect – Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ea5ff6b4-2361-4cb0-9eb1-bb3935b42ebe/public_url"
        },
        {
          name: "Knowledge Badge",
          url: "https://www.credly.com/badges/9ce159e5-5ec7-4e32-8b32-7390fc2bfc86/public_url"
        }
      ]
    },
    {
      title: "Meta Front-End Developer Certificate",
      subtitle:
        "The Meta Front-End Developer Certificate is awarded to learners who complete a series of courses on front-end web development, hosted by Coursera.",
      image: metaLogo,
      imageAlt: "Meta Front-End Developer Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/3918cb3e-3827-4394-b0b4-6146a995fc85/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  location: "Auckland, New Zealand",
  number: "+64 029 0228 9184",
  email_address: "leozhangnzakl@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  projectSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  contactInfo,
  isHireable,
  interestInfo
};
