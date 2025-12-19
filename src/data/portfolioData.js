import { 
  SiCplusplus, SiPython, SiJavascript, 
  SiReact, SiDjango, SiSpringboot, SiLangchain,
  SiDocker, SiKubernetes, SiGit,
  SiMysql, SiMongodb, SiSqlite,
  SiLeetcode
} from 'react-icons/si';
import { FaJava, FaLinkedin, FaGithub, FaSchool, FaUniversity } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';

export const portfolioData = {
  hero: {
    quote: "Where Ideas Come to Life and Creativity Knows No Bounds",
    subQuote: "As Long As I Live, There Are Infinite Chances! - Monkey D. Luffy",
    description: "At my working space, I don’t just create; I innovate. Step into a world where imagination meets technology, and ideas flourish into extraordinary digital experiences.",
    resumeUrl: "/assets/resume/OmkarSDEresume.pdf",
    socialLinks: [
      {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/omkarsn/",
        label: "LinkedIn"
      },
      {
        icon: <SiLeetcode />,
        url: "https://leetcode.com/u/omsn529/",
        label: "LeetCode"
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/omsn2",
        label: "GitHub"
      }
    ]
  },
  education: [
    {
      icon: <FaSchool />,
      institution: "Bapuji International School, Badagandi",
      degree: "10th Grade",
      year: "2018 - 2019",
      score: "Percentage: 88.4%"
    },
    {
      icon: <FaSchool />,
      institution: "Alva's PU College, Karnataka, India",
      degree: "Science Pre-University",
      year: "2019 - 2021",
      score: "Percentage: 95%"
    },
    {
      icon: <FaUniversity />,
      institution: "M S Ramaiah Institute of Technology",
      degree: "B.E. in Computer Science",
      year: "2021 - 2025",
      score: "CGPA: 8.22"
    }
  ],
  experience: [
    {
      role: "Software Engineer I",
      company: "Digital Blanket",
      location: "Bengaluru, India",
      duration: "April 2025 - Present",
      description: [
        "Built containerized real-time CDC pipeline using Debezium and Kafka deployed on Docker, processing 100K+ events/hour with Kafka Streams for event routing, supporting 500+ concurrent users with 99.5% uptime",
        "Orchestrated multi-database CDC infrastructure deploying Debezium connectors for MySQL, PostgreSQL, and MongoDB in Docker containers with 99.9% reliability, reducing data latency from 24 hours to 5 seconds",
        "Implemented containerized microservices architecture using Docker Compose for Kafka cluster, Debezium Connect, and Zookeeper, enabling rapid deployment, horizontal scaling, and environment consistency",
        "Delivered enterprise reporting solution replacing legacy systems with Apache Superset self-service BI platform, configured for high-concurrency supporting 50+ users with advanced visualizations",
        "Architected configuration-driven API gateway using Node.js/Express.js with adapter pattern, enabling dynamic backend service integration via JSON configs, reducing integration time by 80%",
        "Developed multi-step orchestration engine in Node.js with sequential API workflows, in-memory caching, and dynamic payload construction, improving pipeline efficiency by 65%",
        "Established monitoring infrastructure with Kafka Connect metrics, health checks, and Superset alerts, reducing MTTR by 70%"
      ]
    }
  ],
  skills: {
    languages: [
      { name: "C++", icon: <SiCplusplus />, desc: "Object-oriented programming and DSA" },
      { name: "Java", icon: <FaJava />, desc: "Core Java, OOP concepts, Spring Boot" },
      { name: "Python", icon: <SiPython />, desc: "Data analysis, automation scripts" },
      { name: "JavaScript", icon: <SiJavascript />, desc: "ES6+, asynchronous programming" }
    ],
    frameworks: [
      { name: "React", icon: <SiReact />, desc: "Component-based UI, hooks, state management" },
      { name: "Django", icon: <SiDjango />, desc: "Backend development, REST APIs" },
      { name: "Spring Boot", icon: <SiSpringboot />, desc: "Microservices, REST APIs, Spring Security" },
      { name: "Langchain", icon: <SiLangchain />, desc: "LLMs, Chatbots, Natural Language Processing" }
    ],
    tools: [
      { name: "Docker", icon: <SiDocker />, desc: "Containerization, CI/CD integration" },
      { name: "Kubernetes", icon: <SiKubernetes />, desc: "Orchestration, scaling, deployments" },
      { name: "VSCode", icon: <DiVisualstudio />, desc: "Efficient coding with extensions" },
      { name: "Git", icon: <SiGit />, desc: "Version control, branching, GitHub" }
    ],
    databases: [
      { name: "MySQL", icon: <SiMysql />, desc: "Relational databases, complex queries" },
      { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL databases, document models" },
      { name: "SQLite", icon: <SiSqlite />, desc: "Lightweight databases, local storage" }
    ]
  },
  projects: [
    {
      title: "Deepfake and Phishing Detection using VLMs and Blockchain",
      description: "Multimodal detection system combining text, image, and audio analysis using BERT, ViT, and Wav2Vec2 models. FastAPI backend with MongoDB, JWT authentication, and real-time React dashboard.",
      image: "/assets/deepfake.jpg",
      link: "https://github.com/omsn2",
      techStack: ["Python", "React", "VLMs", "FastAPI", "MongoDB", "Blockchain"]
    },
    {
      title: "Langchain Q&A Tool using LLMs",
      description: "Advanced text analysis with NLP, NER, sentiment analysis, multilingual support, and text-to-speech.",
      image: "/assets/langchain2.png",
      link: "https://github.com/omsn2/Langchain_Q-A_tool_using_PDF_URL",
      techStack: ["Langchain", "Python", "NLP"]
    },
    {
      title: "Hospital Management System",
      description: "Operations management with patient management, appointment scheduling, and Spring Security integration.",
      image: "/assets/image3.jpg",
      link: "https://github.com/omsn2/Hospital_management_using_spring_boot",
      techStack: ["Spring Boot", "Java", "MySQL"]
    },
    {
      title: "IoT-Based Smart Energy Monitoring",
      description: "Real-time energy monitoring with sensors, interactive dashboard, and 15% energy waste reduction.",
      image: "/assets/Iot.webp",
      link: "https://github.com/omsn2/IoT_Energy_Monitoring",
      techStack: ["IoT", "React", "Node.js"]
    },
    {
      title: "Gym Management System",
      description: "Member management, attendance tracking, workout scheduling, and secure payment processing.",
      image: "/assets/image2.jpg",
      link: "https://github.com/omsn2/Gym_Management_System",
      techStack: ["PHP", "MySQL", "HTML/CSS"]
    }
  ],
  certifications: [
    {
      title: "Microsoft Certified Azure AI Fundamentals - KodeKloud",
      image: "/assets/certificates/Azure_page-0001.jpg"
    },
    {
      title: "Docker Training Course for the Absolute Beginner - KodeKloud",
      image: "/assets/certificates/Docker_page-0001.jpg"
    },
    {
      title: "Data Analytics Job Simulation - Deloitte",
      image: "/assets/certificates/deloiteeData_page-0001.jpg"
    }
  ],
  awards: [
    {
      title: "Google Agentic AI Hackathon Finalist",
      description: "Selected as a finalist in Google's prestigious Agentic AI Hackathon, competing among top developers worldwide.",
      year: "2025",
      icon: "🏆"
    }
  ],
  contact: {
    email: "omusnagansur989@gmail.com",
    phone: "+91 8623072529",
    location: "Bangalore, India"
  }
};
