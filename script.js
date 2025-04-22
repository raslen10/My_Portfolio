// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  const hamburger = document.querySelector(".hamburger-icon");
  hamburger.classList.toggle("open");
}

// Projects Data
const projects = [
  {
    title: "Resume Screening Web App",
    image: "./assets/resume_app.png",
    domain: "HR",
    role: "data-scientist",
    github: "https://github.com/raslen10/Resume_Classification",
    demo: "https://github.com/raslen10/Resume_Classification/tree/main/Demo",
    keywords: ["Flask", "scikit-learn", "pandas", "matplotlib"]
  },
  {
    title: "Scalable RAG Pipeline for PDF Question Answering",
    image: "./assets/rag_pdf.png",
    domain: "others",
    role: "ai-eng",
    github: "https://github.com/raslen10/PDF-RAG-Pipeline",
    demo: "https://github.com/",
    keywords: ["Transformers", "RAG", "PDF Processing"]
  },
  {
    title: "Verbal Communication Skills Trainer",
    image: "./assets/verbal.png",
    domain: "others",
    role: "ai-eng",
    github: "https://github.com/raslen10/Verbal-Communication-Skills-Trainer",
    demo: "https://github.com/raslen10/Verbal-Communication-Skills-Trainer/blob/main/Demo_App.zip",
    keywords: ["Hugging Face", "Mistral 7b", "Speech Recognition"]
  },
  {
    title: "Industrial Production Utilities Time Series",
    image: "./assets/industrial.jpg",
    domain: "energy",
    role: "data-scientist",
    github: "https://github.com/raslen10/-Industrial-Production-Utilities_Times_Series",
    demo: "https://github.com/",
    keywords: ["LSTM", "ARIMA", "Time Series"]
  },
  {
    title: "Newsfeed Analysis Using Tableau",
    image: "./assets/Newsfeed Analysis Dashboard.png",
    domain: "others",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/Newsfeed%20Analysis%20in%20Tableau%20Project",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Newsfeed%20Analysis%20in%20Tableau%20Project/Newsfeed%20Analysis%20Dashboard.png",
    keywords: ["Tableau", "Data Analysis", "Dashboard"]
  },
  {
    title: "HR Department Performance Dashboard",
    image: "./assets/dashboard.png",
    domain: "HR",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/HR%20Department%20Performance%20Dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/HR%20Department%20Performance%20Dashboard/dashboard.png",
    keywords: ["Dashboard", "Pivot tables", "EXCEL"]
  },
  {
    title: "Layoff Analysis Cleaned Data",
    image: "./assets/sql.png",
    domain: "HR",
    role: "data-analyst",
    github: "https://github.com/raslen10/SQL_Data_analysis/tree/main/LayoffAnalysis_Cleaned_Data",
    demo: "https://github.com/raslen10/SQL_Data_analysis/tree/main/LayoffAnalysis_Cleaned_Data",
    keywords: ["EDA", "SQL", "Data Cleaning"]
  },
  {
    title: "Bundesliga Performance Dashboard",
    image: "./assets/Bundesliga_Dashboard.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/blob/main/Bundesliga_tableau_dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Bundesliga_tableau_dashboard/Bundesliga_Dashboard.png",
    keywords: ["Sport", "Dashboard", "Data Visualization"]
  },
  {
    title: "Jamal Musiala vs. Florian Wirtz: Bundesliga Shot Data Comparison (2023-2024)",
    image: "./assets/wirtz_musiala.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/Bundesliga-Shot-Data-Comparison-Jamal-Musiala-vs.-Florian-Wirtz-2023-2024-",
    demo: "https://github.com/raslen10/Football_Data_Projects/tree/main/Bundesliga-Shot-Data-Comparison-Jamal-Musiala-vs.-Florian-Wirtz-2023-2024-",
    keywords: ["Scouting", "Player Comparison", "Data Visualization"]
  },
  {
    title: "Premier League Standings Prediction: A Poisson Regression Approach",
    image: "./assets/premier_league.png",
    domain: "sport",
    role: "data-scientist",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/Final_Standings_Prediction_Using-_Poisson_Regression_Model",
    demo: "https://github.com/raslen10/Football_Data_Projects/tree/main/Final_Standings_Prediction_Using-_Poisson_Regression_Model",
    keywords: ["Premier League", "Poisson Regression", "Data Analysis"]
  },
  {
    title: "BvB 2024-2025: From Data to Performance Insights",
    image: "./assets/bvb.png",
    domain: "sport",
    role: "data-engineer",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/BvB_2024_2025_Bundesliga_scrap_analyze_performance",
    demo: "https://github.com/raslen10/Football_Data_Projects/blob/main/BvB_2024_2025_Bundesliga_scrap_analyze_performance/query_Bvb_DB.ipynb",
    keywords: ["Python & MongoDB", "Web Scraping", "Data Analysis"]
  },
  {
    title: "Scouting Football Dashboard",
    image: "./assets/Scouting_Dashboard.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/Scouting_Football_Dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Scouting_Football_Dashboard/Scouting_Dashboard.png",
    keywords: ["Tableau", "Scouting", "Football Talent"]
  },
  {
    title: "Producing Soccer Insights for a Sports Media Agency",
    image: "./assets/Duel_football.jpg",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/UEFA-Champions-League-Producing-Soccer-Insights-for-a-Sports-Media-Agency",
    demo: "https://github.com/raslen10/Football_Data_Projects/blob/main/UEFA-Champions-League-Producing-Soccer-Insights-for-a-Sports-Media-Agency/notebook.ipynb",
    keywords: ["SQL", "Snowflake", "Football Analysis"]
  },
  {
    title: "Bank Marketing Data Cleaning Project",
    image: "./assets/piggy_bank.jpg",
    domain: "marketing",
    role: "data-engineer",
    github: "https://github.com/raslen10/Data_engineering_projects/tree/main/Cleaning%20Bank%20Marketing%20Campaign%20Data",
    demo: "https://github.com/raslen10/Data_engineering_projects/tree/main/Cleaning%20Bank%20Marketing%20Campaign%20Data/notebook.ipynb",
    keywords: ["Data Cleaning", "Data Validation", "Marketing Data"]
  },
  {
    title: "RAG-Powered Research Assistant",
    image: "./assets/research.jpg",
    domain: "Others",
    role: "ai-eng",
    github: "https://github.com/raslen10/The-Enigmatic-Research-of-Dr.-X",
    demo: "https://drive.google.com/file/d/1yX9VkqfkSt9mo0t_bSUh4xAiJfBi6DtL/view?usp=sharing",
    keywords: ["RAG", "LLAMA3", "ChromaDB", "Streamlit", "OLLAMA", "nomic-embed-text"]
  },
  {
    title: "Benchmarking CV Extraction with Flask and Retrieval-Augmented LLMs",
    image: "./assets/cv_extractor.png",
    domain: "HR",
    role: "ai-eng",
    github: "https://github.com/raslen10/cv_extractor",
    demo: "https://github.com/raslen10/cv_extractor",
    keywords: ["RAG", "LLAMA3", "ChromaDB", "FLASK", "Mistral"," PHI", "OLLAMA"]
  }
];

// Render Projects
function renderProjects(filteredProjects) {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";
  filteredProjects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img" />
      <h2>${project.title}</h2>
      <div class="project-keywords">
        ${project.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join("")}
      </div>
      <div class="project-btns">
        <button class="project-btn" onclick="window.open('${project.github}')">GitHub</button>
        <button class="project-btn" onclick="window.open('${project.demo}')">Live Demo</button>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
}

// Filter Projects
let activeDomain = "all";
let activeRole = "all";

function filterProjects() {
  const filteredProjects = projects.filter(project => {
    const matchesDomain = activeDomain === "all" || project.domain === activeDomain;
    const matchesRole = activeRole === "all" || project.role === activeRole;
    return matchesDomain && matchesRole;
  });
  renderProjects(filteredProjects);
}

// Initialize Filters
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const filterType = button.parentElement.querySelector("h3").textContent.includes("Domain") ? "domain" : "role";
    const filterValue = button.getAttribute("data-filter");

    // Update active button
    button.parentElement.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Update filters
    if (filterType === "domain") {
      activeDomain = filterValue;
    } else {
      activeRole = filterValue;
    }

    filterProjects();
  });
});

// Initial Render
renderProjects(projects);