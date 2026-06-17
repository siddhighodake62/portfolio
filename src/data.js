// ============================================================
// data.js — All resume data for Siddhi Raghunath Ghodake
// ============================================================

export const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Analytics",    href: "#analytics" },
  { label: "Education",    href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Video",        href: "#video" },
  { label: "Contact",      href: "#contact" },
];

export const aboutStats = [
  { label: "Projects Completed", value: 10 },
  { label: "Technologies Learned", value: 9 },
  { label: "Months of Experience", value: 7 } // Adjust as needed
];

export const skills = [
  {
    category: "Frontend Development",
    icon: "globe",
    items: [
      { name: "React.js", pct: 85 },
      { name: "JavaScript", pct: 80 },
      { name: "HTML5", pct: 95 },
      { name: "CSS", pct: 90 },
      { name: "Tailwind CSS", pct: 85 },
    ],
  },
   {
    category: "Data Analytics & Reporting",
    icon: "chart",
    items: [
      { name: "SQL Analytics", pct: 92 },
      { name: "Power BI", pct: 90 },
      { name: "Advanced Excel", pct: 95 },
      { name: "Python (Pandas)", pct: 75 },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    items: [
      { name: "Node.js", pct: 70 },
      { name: "Express.js", pct: 50 },
    ],
  },
  {
    category: "Database Management",
    icon: "database",
    items: [
      { name: "MySQL", pct: 90 },
      { name: "MongoDB", pct: 50 },
    ],
  },
 
];

export const experience = [
  {
    role: "IT Trainee (Data Analyst / Software)",
    company: "TechTech Ltd",
    location: "Pune",
    period: "Nov 2025 – Present",
    tech: ["SQL", "Power BI", "Excel", "Python", "Google Sheets"],
    responsibilities: [
      "Designed, optimized, and executed SQL queries to extract and preprocess data from relational databases.",
      "Developed and maintained interactive Power BI dashboards to track business KPIs and support decision-making.",
      "Conducted detailed business analysis using advanced Excel features (Pivot Tables, VLOOKUP, Power Query).",
      "Automated recurring report generation workflows, reducing manual effort in Google Sheets and Excel.",
      "Collaborated with business teams to translate reporting requirements into technical data specifications.",
      "Performed data cleansing, validation, and profiling to ensure high accuracy and integrity of reporting datasets.",
    ],
  },
];

export const projectCategories = ["All", "Web Development", "Data Analytics", "Dashboard Projects"];

export const projects = [
  {
    title: "HR Solution System",
    description: "A full-stack HR management platform for tracking employee records, leave requests, attendance, and payroll reports.",
    category: "Web Development",
    tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    highlights: [
      "Designed relational DB schema for employees, departments, and roles.",
      "Built dashboard with real-time KPI cards and filterable data tables.",
      "Implemented role-based access for HR managers and employees.",
    ],
    image: "/placeholder-hr.jpg", // Add actual image path later
    github: "https://github.com/siddhighodake62",
    demo: "#"
  },
  {
    title: "Pizza Sales Data Analysis",
    description: "End-to-end sales analysis pipeline on 12 months of pizza order data — from raw CSV ingestion to visual insights delivered via Excel dashboards.",
    category: "Data Analytics",
    tech: ["SQL", "Python", "Excel"],
    highlights: [
      "Ingested and cleaned 48,000+ rows of order data using Python (pandas).",
      "Wrote complex SQL queries to compute revenue, order trends, and top sellers.",
      "Identified peak hours and best-selling categories, enabling targeted promotions.",
    ],
    image: "/placeholder-pizza.jpg",
    github: "https://github.com/siddhighodake62",
    demo: "#"
  },
  {
    title: "Regional Sales Tracker",
    description: "Interactive Power BI dashboard tracking regional sales, identifying top-performing products, and highlighting seasonal trends.",
    category: "Dashboard Projects",
    tech: ["Power BI", "SQL Data Modeling"],
    highlights: [
      "Connected to live SQL database for real-time reporting.",
      "Implemented dynamic DAX measures for YTD and MoM growth.",
    ],
    image: "/placeholder-sales.jpg",
    github: "https://github.com/siddhighodake62",
    demo: "#"
  }
];

export const powerBiDashboards = [
  {
    title: "Executive Business Summary",
    description: "High-level overview of revenue, profit margins, and regional performance.",
    image: "/powerbi-1.jpg",
    kpis: ["$2.4M Revenue", "18% Margin", "12k Orders"]
  },
  {
    title: "Inventory & Supply Chain",
    description: "Real-time tracking of stock levels, supplier lead times, and warehouse efficiency.",
    image: "/powerbi-2.jpg",
    kpis: ["98% In-Stock", "2.4 Days Lead", "1.2% Loss"]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "MIT Arts, Commerce and Science College, Alandi",
    year: "2025",
    cgpa: "8.7",
  },
];

export const certifications = [
  {
    title: "Data Analytics Professional Certificate",
    issuer: "Fortune Cloud Technologies, Pune",
    image: "/certificates/DA_Certificate_Siddhi_Raghunath_Ghodake_1.pdf",
    year: "2025",
  },
  {
    title: "Data Analyst - Internship Experience",
    issuer: "TechTech Ltd",
    image: "/certificates/Internship Exp Letter-DA_Siddhi_Raghunath_Ghodake.pdf",
    year: "2025",
  },
];

export const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Time Management",
  "Attention to Detail",
];

export const contact = {
  phone: "+91-7020199899",
  email: "siddhiighodake@gmail.com",
  linkedin: "https://linkedin.com/in/siddhi-ghodake",
  github: "https://github.com/siddhighodake62",
};
