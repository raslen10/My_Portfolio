/* ============================================================
   Raslen Guesmi — Portfolio scripts
   ============================================================ */

/* ---------- Mobile menu ---------- */
function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}

/* ---------- Theme toggle ---------- */
(function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored || (prefersLight ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    const paint = () => {
      const t = document.documentElement.getAttribute("data-theme");
      btn.innerHTML = t === "light"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    };
    paint();
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      paint();
    });
  });
})();

/* ---------- Projects data ---------- */
const projects = [
  /* ---- Finance & trading (PredictiveLabs) ---- */
  {
    title: "Finespresso — Multi-Agent RL Trading Swarm",
    description:
      "Q-Learning and SARSA policies trained and evaluated for trading decisions, then deployed as a live multi-agent RL swarm across four exchanges on AWS with coordinated decisions and risk controls. Every run tracked in MLflow (accuracy, R², PnL).",
    image: "./assets/covers/finespresso.svg",
    domain: "finance",
    role: "ai-eng",
    badge: "PredictiveLabs",
    pro: true,
    github: "",
    demo: "https://predictivelabs.ai",
    keywords: ["Q-Learning", "SARSA", "Multi-Agent RL", "AWS", "MLflow", "Python"]
  },
  {
    title: "AssetHero — Multi-Agent Trading Orchestration API",
    description:
      "API orchestration layer unifying four independent trading agent apps (AlpaTrade, TradeSwarm, MacroHero, PolyTrade), each in its own repo, into a single callable multi-agent product — containerised with Docker and deployed on GCP Cloud Run.",
    image: "./assets/covers/assethero.svg",
    domain: "finance",
    role: "ai-eng",
    badge: "PredictiveLabs",
    pro: true,
    github: "",
    demo: "https://assethero.chat",
    keywords: ["FastAPI", "Multi-Agent", "Docker", "GCP Cloud Run", "Orchestration"]
  },
  {
    title: "Near-Real-Time Feature Store — News & Market ETL",
    description:
      "Training-data ETL pipelines ingesting news and market data into a near-real-time PostgreSQL feature store, with cleaning, structuring and feature extraction driven by LLM/RAG pipelines.",
    image: "./assets/covers/featurestore.svg",
    domain: "finance",
    role: "data-engineer",
    badge: "PredictiveLabs",
    pro: true,
    github: "",
    demo: "",
    keywords: ["PostgreSQL", "ETL", "Feature Store", "LLM Extraction", "Airflow"]
  },

  /* ---- LLM & AI agents ---- */
  {
    title: "POLLY — Hierarchical RAG Marketing Platform",
    description:
      "Hierarchical RAG pipeline (pgvector, HNSW indexing, chunking, embeddings, metadata) plus LangChain/LangGraph agents, packaged as an MCP server behind a compliance-aware AI marketing platform. Dockerised and deployed on Coolify (Hostinger VPS).",
    image: "./assets/covers/polly.svg",
    domain: "llm",
    role: "ai-eng",
    badge: "PredictiveLabs",
    pro: true,
    github: "",
    demo: "",
    keywords: ["RAG", "pgvector", "HNSW", "LangGraph", "MCP Server", "Docker"]
  },
  {
    title: "GPT-4-mini Supervised Fine-Tuning for a Digital Creator",
    description:
      "End-to-end supervised fine-tuning of GPT-4-mini for a production client use case: curated and formatted the training data, ran the fine-tuning job, and evaluated output against a target tone and topic set (brand deals, monetisation, mindset).",
    image: "./assets/covers/finetune.svg",
    domain: "llm",
    role: "ai-eng",
    badge: "Upwork · Top Rated",
    pro: true,
    github: "",
    demo: "",
    keywords: ["OpenAI Fine-Tuning", "Dataset Curation", "JSONL", "Evaluation"]
  },
  {
    title: "Scalable RAG Pipeline for PDF Question Answering",
    description:
      "Retrieval-augmented pipeline that ingests, chunks and embeds PDF documents to answer natural-language questions over large document sets.",
    image: "./assets/rag_pdf.png",
    domain: "llm",
    role: "ai-eng",
    github: "https://github.com/raslen10/PDF-RAG-Pipeline",
    demo: "",
    keywords: ["Transformers", "RAG", "PDF Processing", "Vector Search"]
  },
  {
    title: "RAG-Powered Research Assistant",
    description:
      "Local-first research assistant over a private document corpus using LLAMA3 via OLLAMA, ChromaDB vector storage and a Streamlit interface.",
    image: "./assets/research.jpg",
    domain: "llm",
    role: "ai-eng",
    github: "https://github.com/raslen10/The-Enigmatic-Research-of-Dr.-X",
    demo: "https://drive.google.com/file/d/1yX9VkqfkSt9mo0t_bSUh4xAiJfBi6DtL/view?usp=sharing",
    keywords: ["RAG", "LLAMA3", "ChromaDB", "Streamlit", "OLLAMA"]
  },
  {
    title: "Verbal Communication Skills Trainer",
    description:
      "Speech-to-text plus LLM feedback loop that scores spoken answers and coaches the user on clarity, pacing and structure.",
    image: "./assets/verbal.png",
    domain: "llm",
    role: "ai-eng",
    github: "https://github.com/raslen10/Verbal-Communication-Skills-Trainer",
    demo: "https://github.com/raslen10/Verbal-Communication-Skills-Trainer/blob/main/Demo_App.zip",
    keywords: ["Hugging Face", "Mistral 7B", "Speech Recognition"]
  },

  /* ---- Health ---- */
  {
    title: "Evely — Health Platform Rebuild & Funnel Analytics",
    description:
      "Migrated evely.health from Next.js to FastHTML + FastAPI and from Vercel to a self-hosted Coolify/Hostinger stack, owning CI/CD. Redesigned onboarding and instrumented an Amplitude funnel dashboard — drop-off cut from 40% to 5–10%. Optimised the Gemini AI report feature and hardened Supabase RLS.",
    image: "./assets/covers/evely.svg",
    domain: "health",
    role: "ai-eng",
    badge: "Evely",
    pro: true,
    github: "",
    demo: "https://evely.health",
    keywords: ["FastAPI", "FastHTML", "Gemini", "Amplitude", "PostgreSQL", "Supabase"]
  },

  /* ---- Marketing ---- */
  {
    title: "Tendly — Multi-Country Scraping Pipelines",
    description:
      "Scheduled data-scraping pipelines covering 10+ countries, packaged as containers and deployed as GCP Cloud Run jobs with automated scheduling and monitoring.",
    image: "./assets/covers/tendly.svg",
    domain: "marketing",
    role: "data-engineer",
    badge: "PredictiveLabs",
    pro: true,
    github: "",
    demo: "",
    keywords: ["Web Scraping", "GCP Cloud Run", "Scheduling", "Docker", "Python"]
  },
  {
    title: "Bank Marketing Data Cleaning Project",
    description:
      "Cleaning, validation and restructuring of a bank marketing campaign dataset into analysis-ready tables with documented data-quality rules.",
    image: "./assets/piggy_bank.jpg",
    domain: "marketing",
    role: "data-engineer",
    github: "https://github.com/raslen10/Data_engineering_projects/tree/main/Cleaning%20Bank%20Marketing%20Campaign%20Data",
    demo: "https://github.com/raslen10/Data_engineering_projects/tree/main/Cleaning%20Bank%20Marketing%20Campaign%20Data/notebook.ipynb",
    keywords: ["Data Cleaning", "Data Validation", "pandas"]
  },

  /* ---- Energy ---- */
  {
    title: "Energy Consumption Forecasting MVP (LSTM + ARIMA)",
    description:
      "LSTM and ARIMA models trained from scratch on sensor and electrical-load data, served through a FastAPI backend with a Flutter web/mobile client — containerised with Docker and deployed on Coolify.",
    image: "./assets/covers/energy.svg",
    domain: "energy",
    role: "data-scientist",
    badge: "4InaTechnology",
    pro: true,
    github: "",
    demo: "",
    keywords: ["LSTM", "ARIMA", "FastAPI", "Flutter", "Docker"]
  },
  {
    title: "Industrial Production Utilities Time Series",
    description:
      "Forecasting industrial utilities production with classical and deep-learning time-series models, including stationarity analysis and model comparison.",
    image: "./assets/industrial.jpg",
    domain: "energy",
    role: "data-scientist",
    github: "https://github.com/raslen10/-Industrial-Production-Utilities_Times_Series",
    demo: "",
    keywords: ["LSTM", "ARIMA", "Time Series", "Forecasting"]
  },

  /* ---- Football ---- */
  {
    title: "Bundesliga Performance Dashboard",
    description:
      "Interactive Tableau dashboard breaking down Bundesliga team and player performance across a full season.",
    image: "./assets/Bundesliga_Dashboard.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/blob/main/Bundesliga_tableau_dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Bundesliga_tableau_dashboard/Bundesliga_Dashboard.png",
    keywords: ["Tableau", "Football", "Data Visualization"]
  },
  {
    title: "Musiala vs. Wirtz — Bundesliga Shot Data Comparison",
    description:
      "Side-by-side shot-map and finishing comparison of Jamal Musiala and Florian Wirtz for the 2023-2024 Bundesliga season.",
    image: "./assets/wirtz_musiala.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/Bundesliga-Shot-Data-Comparison-Jamal-Musiala-vs.-Florian-Wirtz-2023-2024-",
    demo: "https://github.com/raslen10/Football_Data_Projects/tree/main/Bundesliga-Shot-Data-Comparison-Jamal-Musiala-vs.-Florian-Wirtz-2023-2024-",
    keywords: ["Scouting", "Shot Maps", "matplotlib"]
  },
  {
    title: "Premier League Standings Prediction — Poisson Regression",
    description:
      "Poisson regression model simulating remaining fixtures to predict final Premier League standings, with goal-rate estimation per team.",
    image: "./assets/premier_league.png",
    domain: "sport",
    role: "data-scientist",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/Final_Standings_Prediction_Using-_Poisson_Regression_Model",
    demo: "https://github.com/raslen10/Football_Data_Projects/tree/main/Final_Standings_Prediction_Using-_Poisson_Regression_Model",
    keywords: ["Poisson Regression", "Simulation", "Python"]
  },
  {
    title: "BvB 2024-2025 — From Data to Performance Insights",
    description:
      "Scraped Borussia Dortmund's Bundesliga season into MongoDB and analysed match and player performance trends.",
    image: "./assets/bvb.png",
    domain: "sport",
    role: "data-engineer",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/BvB_2024_2025_Bundesliga_scrap_analyze_performance",
    demo: "https://github.com/raslen10/Football_Data_Projects/blob/main/BvB_2024_2025_Bundesliga_scrap_analyze_performance/query_Bvb_DB.ipynb",
    keywords: ["MongoDB", "Web Scraping", "Python"]
  },
  {
    title: "Scouting Football Dashboard",
    description:
      "Tableau scouting dashboard to shortlist football talent on comparable per-90 metrics across leagues.",
    image: "./assets/Scouting_Dashboard.png",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/Scouting_Football_Dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Scouting_Football_Dashboard/Scouting_Dashboard.png",
    keywords: ["Tableau", "Scouting", "Recruitment"]
  },
  {
    title: "UEFA Champions League — Insights for a Sports Media Agency",
    description:
      "SQL analysis on Snowflake producing match and duel insights for a sports media agency's editorial output.",
    image: "./assets/Duel_football.jpg",
    domain: "sport",
    role: "data-analyst",
    github: "https://github.com/raslen10/Football_Data_Projects/tree/main/UEFA-Champions-League-Producing-Soccer-Insights-for-a-Sports-Media-Agency",
    demo: "https://github.com/raslen10/Football_Data_Projects/blob/main/UEFA-Champions-League-Producing-Soccer-Insights-for-a-Sports-Media-Agency/notebook.ipynb",
    keywords: ["SQL", "Snowflake", "Football Analysis"]
  },

  /* ---- HR ---- */
  {
    title: "Benchmarking CV Extraction with Flask & Retrieval-Augmented LLMs",
    description:
      "Flask service benchmarking LLAMA3, Mistral and PHI on structured CV field extraction with a ChromaDB retrieval layer.",
    image: "./assets/cv_extractor.png",
    domain: "HR",
    role: "ai-eng",
    github: "https://github.com/raslen10/cv_extractor",
    demo: "https://github.com/raslen10/cv_extractor",
    keywords: ["RAG", "LLAMA3", "Mistral", "PHI", "Flask", "ChromaDB"]
  },
  {
    title: "Resume Screening Web App",
    description:
      "Flask app classifying resumes into job categories with a scikit-learn pipeline and an interactive screening view.",
    image: "./assets/resume_app.png",
    domain: "HR",
    role: "data-scientist",
    github: "https://github.com/raslen10/Resume_Classification",
    demo: "https://github.com/raslen10/Resume_Classification/tree/main/Demo",
    keywords: ["Flask", "scikit-learn", "pandas", "NLP"]
  },
  {
    title: "HR Department Performance Dashboard",
    description:
      "Excel dashboard with pivot-table driven KPIs on headcount, attrition and departmental performance.",
    image: "./assets/dashboard.png",
    domain: "HR",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/HR%20Department%20Performance%20Dashboard",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/HR%20Department%20Performance%20Dashboard/dashboard.png",
    keywords: ["Excel", "Pivot Tables", "Dashboard"]
  },
  {
    title: "Layoff Analysis — Cleaned Data",
    description:
      "SQL data-cleaning and exploratory analysis of global tech layoffs, from raw dump to normalised, query-ready tables.",
    image: "./assets/sql.png",
    domain: "HR",
    role: "data-analyst",
    github: "https://github.com/raslen10/SQL_Data_analysis/tree/main/LayoffAnalysis_Cleaned_Data",
    demo: "https://github.com/raslen10/SQL_Data_analysis/tree/main/LayoffAnalysis_Cleaned_Data",
    keywords: ["SQL", "EDA", "Data Cleaning"]
  },

  /* ---- Others ---- */
  {
    title: "Newsfeed Analysis Using Tableau",
    description:
      "Tableau dashboard exploring newsfeed engagement patterns across topics and time.",
    image: "./assets/Newsfeed Analysis Dashboard.png",
    domain: "others",
    role: "data-analyst",
    github: "https://github.com/raslen10/Dashboard_Projects/tree/main/Newsfeed%20Analysis%20in%20Tableau%20Project",
    demo: "https://github.com/raslen10/Dashboard_Projects/blob/main/Newsfeed%20Analysis%20in%20Tableau%20Project/Newsfeed%20Analysis%20Dashboard.png",
    keywords: ["Tableau", "Data Analysis", "Dashboard"]
  },
  {
    title: "Companies ETL Pipeline — Web Scraping",
    description:
      "End-to-end ETL pipeline scraping company/finance data, transforming it in Python and loading it into MySQL.",
    image: "./assets/capture.PNG",
    domain: "others",
    role: "data-engineer",
    github: "https://github.com/raslen10/Data_engineering_projects/tree/main/Companies_ETL_Pipeline",
    demo: "https://github.com/raslen10/Data_engineering_projects/blob/main/Companies_ETL_Pipeline/Etl_pipeline.py",
    keywords: ["Web Scraping", "Python", "MySQL", "ETL"]
  }
];

/* ---------- Rendering ---------- */
const grid = document.getElementById("projects-grid");
const noResults = document.getElementById("no-results");
const resultsCount = document.getElementById("results-count");

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function renderProjects(list) {
  grid.innerHTML = "";

  list.forEach((project, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${Math.min(i, 12) * 45}ms`;

    const badge = project.badge
      ? `<span class="project-badge ${project.pro ? "flag-pro" : ""}">${project.badge}</span>`
      : "";

    const githubBtn = project.github
      ? `<a class="project-btn" href="${escapeAttr(project.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>`
      : `<span class="project-btn disabled"><i class="fa-solid fa-lock"></i> Private</span>`;

    const demoBtn = project.demo
      ? `<a class="project-btn" href="${escapeAttr(project.demo)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`
      : "";

    card.innerHTML = `
      <div class="project-media">
        ${badge}
        <img src="${escapeAttr(project.image)}" alt="${escapeAttr(project.title)}" class="project-img" loading="lazy" />
      </div>
      <div class="project-body">
        <h2>${project.title}</h2>
        <p class="project-desc">${project.description}</p>
        <div class="project-keywords">
          ${project.keywords.map(k => `<span class="keyword">${k}</span>`).join("")}
        </div>
        <div class="project-btns">${githubBtn}${demoBtn}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  noResults.hidden = list.length > 0;
  resultsCount.textContent = `${list.length} project${list.length === 1 ? "" : "s"} shown`;
}

/* ---------- Filtering ---------- */
let activeDomain = "all";
let activeRole = "all";
let searchTerm = "";

function filterProjects() {
  const term = searchTerm.trim().toLowerCase();
  const filtered = projects.filter(p => {
    const matchesDomain = activeDomain === "all" || p.domain === activeDomain;
    const matchesRole = activeRole === "all" || p.role === activeRole;
    const haystack = `${p.title} ${p.description} ${p.keywords.join(" ")} ${p.badge || ""}`.toLowerCase();
    const matchesSearch = !term || haystack.includes(term);
    return matchesDomain && matchesRole && matchesSearch;
  });
  renderProjects(filtered);
}

document.querySelectorAll(".filter-group[data-filter-type] .filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.closest(".filter-group").dataset.filterType;
    const value = button.dataset.filter;

    button.closest(".filter-btns").querySelectorAll(".filter-btn")
      .forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (type === "domain") activeDomain = value;
    else activeRole = value;

    filterProjects();
  });
});

const searchInput = document.getElementById("project-search");
if (searchInput) {
  searchInput.addEventListener("input", e => {
    searchTerm = e.target.value;
    filterProjects();
  });
}

renderProjects(projects);

/* ---------- Typewriter ---------- */
(function typewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const phrases = [
    "LLM Fine-Tuning",
    "Multi-Agent Reinforcement Learning",
    "RAG & LangGraph Agents",
    "MLOps on AWS & GCP",
    "Football Data Science"
  ];
  let phrase = 0, char = 0, deleting = false;

  (function tick() {
    const current = phrases[phrase];
    el.textContent = deleting ? current.slice(0, --char) : current.slice(0, ++char);

    let delay = deleting ? 40 : 75;
    if (!deleting && char === current.length) { delay = 1700; deleting = true; }
    else if (deleting && char === 0) { deleting = false; phrase = (phrase + 1) % phrases.length; delay = 350; }

    setTimeout(tick, delay);
  })();
})();

/* ---------- Scroll behaviours ---------- */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* Animated counters */
const counterObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    let value = 0;
    const step = Math.max(1, Math.round(target / 40));
    const timer = setInterval(() => {
      value += step;
      if (value >= target) { value = target; clearInterval(timer); }
      el.textContent = value + suffix;
    }, 30);
    counterObserver.unobserve(el);
  }),
  { threshold: 0.5 }
);
document.querySelectorAll(".stat-num").forEach(el => counterObserver.observe(el));

/* Nav state, scroll progress, back-to-top, scroll spy */
const navShell = document.querySelector(".nav-shell");
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");
const navAnchors = Array.from(document.querySelectorAll("#desktop-nav .nav-links a"));
const sections = navAnchors
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function onScroll() {
  const y = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  navShell.classList.toggle("scrolled", y > 20);
  progressBar.style.width = `${height > 0 ? (y / height) * 100 : 0}%`;
  backToTop.classList.toggle("show", y > 600);

  let current = sections[0];
  sections.forEach(section => {
    if (y >= section.offsetTop - 140) current = section;
  });
  navAnchors.forEach(a =>
    a.classList.toggle("active", current && a.getAttribute("href") === `#${current.id}`)
  );
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
