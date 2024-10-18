// jobData.js

const jobList = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    companyName: "Tech Innovations Inc.",
    jobDescription: "Develop and maintain software applications, collaborate with cross-functional teams to define and implement new features, and troubleshoot and debug applications.",
    experienceRequired: "2-5 years",
    skills: [1, 14, 17, 25]
  },
  {
    id: 2,
    jobTitle: "Data Analyst",
    companyName: "Data Insights LLC",
    jobDescription: "Analyze data sets to identify trends, create reports, and assist in decision-making processes.",
    experienceRequired: "1-3 years",
    skills: [21, 1, 2, 26]
  },
  {
    id: 3,
    jobTitle: "Project Manager",
    companyName: "Global Solutions Ltd.",
    jobDescription: "Oversee project planning, execution, and delivery, ensuring projects are completed on time and within budget.",
    experienceRequired: "3-7 years",
    skills: [1, 2, 3]
  },
  {
    id: 4,
    jobTitle: "Graphic Designer",
    companyName: "Creative Studio",
    jobDescription: "Create visual concepts and designs for various media, collaborating with clients to meet their needs.",
    experienceRequired: "2-4 years",
    skills: [12, 13, 4]
  },
  {
    id: 5,
    jobTitle: "UX/UI Designer",
    companyName: "Design Hub",
    jobDescription: "Design user-friendly interfaces and enhance user experience by conducting user research and testing.",
    experienceRequired: "2-5 years",
    skills: [12, 13, 16]
  },
  {
    id: 6,
    jobTitle: "Systems Administrator",
    companyName: "Network Solutions",
    jobDescription: "Manage and maintain IT systems, ensuring security and efficiency, while providing technical support to users.",
    experienceRequired: "3-5 years",
    skills: [1, 21, 22]
  },
  {
    id: 7,
    jobTitle: "Marketing Specialist",
    companyName: "Brand Builders",
    jobDescription: "Develop marketing strategies and campaigns, analyze market trends, and engage with customers.",
    experienceRequired: "2-4 years",
    skills: [1, 25, 5]
  },
  {
    id: 8,
    jobTitle: "Product Owner",
    companyName: "Agile Products Corp.",
    jobDescription: "Define the product vision, prioritize features, and work closely with development teams to deliver high-quality products.",
    experienceRequired: "3-5 years",
    skills: [1, 9, 20]
  },
  {
    id: 9,
    jobTitle: "Business Analyst",
    companyName: "Insightful Strategies",
    jobDescription: "Analyze business needs, gather requirements, and propose solutions to improve processes.",
    experienceRequired: "2-4 years",
    skills: [1, 19, 2]
  },
  {
    id: 10,
    jobTitle: "Sales Executive",
    companyName: "SalesForce Dynamics",
    jobDescription: "Identify new sales opportunities, maintain relationships with clients, and meet sales targets.",
    experienceRequired: "2-5 years",
    skills: [1, 4, 10]
  },
  {
    id: 11,
    jobTitle: "HR Coordinator",
    companyName: "Talent Solutions",
    jobDescription: "Assist with recruitment, employee onboarding, and maintain employee records.",
    experienceRequired: "1-3 years",
    skills: [1, 8, 2]
  },
  {
    id: 12,
    jobTitle: "Front-end Developer",
    companyName: "Web Creations",
    jobDescription: "Build and maintain user interfaces for web applications, ensuring responsiveness and performance.",
    experienceRequired: "2-5 years",
    skills: [12, 13, 1]
  },
  {
    id: 13,
    jobTitle: "Back-end Developer",
    companyName: "Server Side Inc.",
    jobDescription: "Develop server-side logic, maintain databases, and ensure high performance and responsiveness to requests.",
    experienceRequired: "2-5 years",
    skills: [1, 21, 18]
  },
  {
    id: 14,
    jobTitle: "DevOps Engineer",
    companyName: "Cloud Infrastructure Co.",
    jobDescription: "Automate and streamline operations and processes, build and maintain tools for deployment and monitoring.",
    experienceRequired: "3-5 years",
    skills: [1, 26, 27]
  },
  {
    id: 15,
    jobTitle: "Data Scientist",
    companyName: "Analytics Pro",
    jobDescription: "Analyze large sets of data to extract insights and build predictive models.",
    experienceRequired: "3-5 years",
    skills: [2, 19, 25]
  },
  {
    id: 16,
    jobTitle: "Content Writer",
    companyName: "Wordsmiths Publishing",
    jobDescription: "Create engaging and informative content for various platforms, including blogs, websites, and social media.",
    experienceRequired: "1-3 years",
    skills: [5, 1, 2]
  },
  {
    id: 17,
    jobTitle: "SEO Specialist",
    companyName: "Search Optimizers",
    jobDescription: "Optimize website content for search engines, analyze traffic data, and improve website rankings.",
    experienceRequired: "2-4 years",
    skills: [1, 5, 25]
  },
  {
    id: 18,
    jobTitle: "Network Engineer",
    companyName: "ConnectTech",
    jobDescription: "Design and implement network systems, troubleshoot issues, and ensure network security.",
    experienceRequired: "3-5 years",
    skills: [1, 21, 26]
  },
  {
    id: 19,
    jobTitle: "Technical Support Engineer",
    companyName: "Support Services",
    jobDescription: "Provide technical support and troubleshooting assistance to customers and clients.",
    experienceRequired: "1-3 years",
    skills: [1, 2, 25]
  },
  {
    id: 20,
    jobTitle: "Business Development Manager",
    companyName: "Growth Partners",
    jobDescription: "Identify business growth opportunities and develop strategic partnerships.",
    experienceRequired: "3-5 years",
    skills: [1, 2, 5]
  },
  {
    id: 21,
    jobTitle: "Quality Assurance Engineer",
    companyName: "TestRight Technologies",
    jobDescription: "Ensure the quality of software through testing and validation processes.",
    experienceRequired: "2-4 years",
    skills: [18, 4, 3]
  },
  {
    id: 22,
    jobTitle: "Database Administrator",
    companyName: "Data Security Corp.",
    jobDescription: "Manage and maintain databases, ensuring data integrity and security.",
    experienceRequired: "3-5 years",
    skills: [21, 22, 26]
  },
  {
    id: 23,
    jobTitle: "Web Developer",
    companyName: "Web Solutions",
    jobDescription: "Design and develop websites, ensuring functionality and responsiveness.",
    experienceRequired: "2-5 years",
    skills: [12, 13, 1]
  },
  {
    id: 24,
    jobTitle: "Social Media Manager",
    companyName: "Digital Marketing Agency",
    jobDescription: "Create and manage social media content, engage with audiences, and analyze campaign performance.",
    experienceRequired: "2-4 years",
    skills: [1, 5, 25]
  },
  {
    id: 25,
    jobTitle: "Finance Analyst",
    companyName: "Financial Insights Inc.",
    jobDescription: "Analyze financial data, prepare reports, and assist in budgeting processes.",
    experienceRequired: "2-4 years",
    skills: [1, 2, 19]
  },
  {
    id: 26,
    jobTitle: "Cybersecurity Analyst",
    companyName: "SecureTech",
    jobDescription: "Protect organizational data and systems from cyber threats, conducting risk assessments and implementing security measures.",
    experienceRequired: "3-5 years",
    skills: [1, 21, 26]
  },
  {
    id: 27,
    jobTitle: "Machine Learning Engineer",
    companyName: "AI Innovations",
    jobDescription: "Design and implement machine learning models and algorithms for various applications.",
    experienceRequired: "3-5 years",
    skills: [2, 19, 25]
  },
  {
    id: 28,
    jobTitle: "Content Marketing Manager",
    companyName: "Content Creators",
    jobDescription: "Develop and execute content marketing strategies to increase brand awareness and engagement.",
    experienceRequired: "3-5 years",
    skills: [1, 5, 2]
  },
  {
    id: 29,
    jobTitle: "Logistics Coordinator",
    companyName: "Supply Chain Solutions",
    jobDescription: "Coordinate logistics and supply chain activities, ensuring timely delivery of goods.",
    experienceRequired: "2-4 years",
    skills: [1, 2, 10]
  },
  {
    id: 30,
    jobTitle: "Research Scientist",
    companyName: "Innovation Labs",
    jobDescription: "Conduct scientific research, analyze data, and publish findings in academic journals.",
    experienceRequired: "3-7 years",
    skills: [2, 5, 19]
  }
];

// Exporting the job list
export default jobList;
