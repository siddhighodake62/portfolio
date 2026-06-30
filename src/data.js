// ============================================================
// data.js — All resume data for Siddhi Raghunath Ghodake
// ============================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Analytics", href: "#analytics" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Contact", href: "#contact" },
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

export const projectCategories = ["All", "Web Development"];

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
    title: "Online Hostel Management System",
    description: "A web-based application replacing manual paperwork and registers with digital student records, room allocation, and automated tracking.",
    category: "Web Development",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    highlights: [
      "Eliminated manual paperwork and registers, saving administrative time.",
      "Built centralized MySQL database for easy room allocation and updates.",
      "Developed search and retrieval features for student and hostel records.",
    ],
    image: "/placeholder-hostel.jpg",
    github: "https://github.com/siddhighodake62",
    demo: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "A high-performance, interactive dark-themed portfolio featuring glassmorphic designs, custom canvas backgrounds, and smooth transitions.",
    category: "Web Development",
    tech: ["React.js", "Vite", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "Designed modern dark glassmorphism layout with purple and teal accent glow effects.",
      "Integrated interactive browser mockup frames and category-specific project filters.",
      "Implemented responsive layouts and fluid page transitions using Framer Motion.",
    ],
    image: "/placeholder-portfolio.jpg",
    github: "https://github.com/siddhighodake62",
    demo: "#"
  }
];

export const powerBiDashboards = [
  {
    title: "Social Media Ad Campaign Tracker",
    description: "Designed an interactive Power BI dashboard analyzing a multi-platform ad campaign of 500 users. Delivers granular insights on conversions, platform engagement, time spent, and categories.",
    image: "/placeholder-social-ad.jpg",
    kpis: [
      { value: "500", label: "Total Users" },
      { value: "Power BI", label: "Analytics Tool" },
      { value: "DAX", label: "Measures & filters" }
    ]
  },
  {
    title: "Earthquake & Tsunami Analysis",
    description: "Analyzed global earthquake data (2001–2022) in Python to examine seismic trends, magnitudes (6.8–7.1 averages), tectonic depths, and coastal tsunami occurrences.",
    image: "/placeholder-earthquake.jpg",
    kpis: [
      { value: "6.8 - 7.1", label: "Avg Magnitude" },
      { value: "<300 km", label: "Shallow Depth" },
      { value: "21 Years", label: "Historical Data" }
    ]
  },
  {
    title: "Pizza Sales SQL Analytics",
    description: "Analyzed pizza sales data using MySQL across 4 key tables (Orders, Order_Details, Pizzas, Pizza_Types). Queries span Basic, Intermediate & Advanced levels — covering revenue trends, category performance, hourly patterns, and cumulative growth using Window Functions.",
    image: "/placeholder-pizza.jpg",
    kpis: [
      { value: "4 Tables", label: "DB Schema" },
      { value: "3 Tiers", label: "Query Complexity" },
      { value: "RANK()", label: "Window Functions" }
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "MIT Arts, Commerce and Science College",
    year: "2022 – 2025",
    cgpa: "8.7/10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "P.K. Arts, Commerce and Science College, Chakan",
    year: "2020 – 2022",
    percentage: "70%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "H.M.V School, Chinchoshi",
    year: "2019 – 2020",
    percentage: "85%",
  },
];

export const volunteering = [
  {
    role: "Event Coordinator – SciFari & Kshitij",
    institution: "MIT Arts, Commerce and Science College",
    highlights: [
      "Coordinated event planning and execution activities",
      "Managed participant registrations and event logistics",
      "Collaborated with faculty and student teams for smooth operations",
      "Helped in organizing college-level technical and cultural events",
      "Developed leadership, teamwork, and communication skills",
    ],
  },
];


export const certifications = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    image: "/certificates/Data Analyst Deloitte.pdf",
    year: "2026",
  },
  {
    title: "Data Analytics Professional Certificate",
    issuer: "Fortune Cloud Technologies, Pune",
    image: "/certificates/DA_Certificate_Siddhi_Ghodake.pdf",
    year: "2025",
  },
  {
    title: "Data Analyst - Internship Experience",
    issuer: "Cravita Technologies India Pvt.Ltd.",
    image: "/certificates/Internship_Experience_Siddhi_Ghodake.pdf",
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
