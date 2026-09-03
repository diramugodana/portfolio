import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Diramu Godana — Software Engineering & AI",
  author: "Diramu Godana",
  description:
    "Harvard Computer Science and Economics student building AI systems, data pipelines, and intelligent products.",
  lang: "en",
  siteLogo: "/me.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/diramugodana" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/diramu-godana-79b5472a2/",
    },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://diramuportfolio-diramu-godanas-projects.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Diramu Godana",
    specialty: "Computer Science & Economics at Harvard",
    summary:
      "Software engineer building AI systems, data pipelines, and intelligent products across labor-market intelligence, recommender systems, education, and healthcare.",
    email: "diramugodana@college.harvard.edu",
  },

  experience: [
    {
      company: "LinkedIn",
      position: "Software Engineering Intern",
      startDate: "May 2026",
      endDate: "Aug 2026",
      summary: [
        "Built the Context Agent for an AI labor-market intelligence platform, converting anomalies surfaced from ~42M member profiles and 7.6M job postings into structured investigations and grounded evidence for generated labor-market articles.",
        "Engineered source scoring, deduplication, support/challenge balancing, provenance tracking, and bundle-sufficiency checks, increasing hypothesis/query plans meeting the highest quality tier from 5.7% to 86.4% and usable evidence bundles from 2.1% to 90%.",
        "Built an end-to-end Economic Graph pipeline that identified top-growth industries, ranked their fastest-growing companies across size bands, validated each signal with postings, views, applications, and role mix, and generated evidence-backed articles; surfaced 111 Tier-1 opportunities from 407 candidates across 9 industries.",
        "Extended LinkedIn’s HERO Generative Recommender evaluation stack across PySpark, Flyte, and OpenHouse, adding an underserved-job benchmark, slice-aware semantic metrics, and leakage controls for 1.08M held-out member-job pairs; evaluated 3,982 jobs and found a 17.3 percentage-point Good-Fit P@200 gap between underserved jobs and the existing benchmark.",
      ],
    },

    {
      company: "Harvard College GenAI Research Program",
      position: "Software Engineering Intern",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      summary: [
        "Engineered a bilingual RAG tutor translating English textbook material into Swahili, improving comprehension by ~20% for students in rural Kenya.",
        "Increased retrieval accuracy from 70% to 95% by processing 1K+ textbook chunks with LangChain, Pinecone, and GPT-4 Turbo.",
        "Optimized PostgreSQL schemas and RESTful FastAPI endpoints, reducing query latency from 5s to under 2s.",
        "Built summarization, revision Q&A, and free-form tutoring modes using a Next.js, Tailwind, and FastAPI stack.",
        "Piloted the platform with 56 students, providing dual-language output aligned with classroom curriculum.",
      ],
    },

    {
      company: "Kerugoya County Referral Hospital — Kerugoya, Kenya",
      position: "Software Engineering Intern / Priscilla Chan Fellow",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      summary: [
        "Built a hospital management portal automating records, billing, and scheduling for 1,000+ patients, cutting wait times by 30%.",
        "Developed ERP/EMR modules in Java and Python with Frappe, deployed via Docker, and integrated MySQL and REST APIs.",
        "Worked across feature design, debugging, testing, and deployment, reducing post-deployment defects by 25%.",
      ],
    },

    {
      company: "Harvard Undergraduate Machine Intelligence Community (HUMIC)",
      position: "Project Lead & Web Scraping Engineer",
      startDate: "Sep 2024",
      endDate: "Present",
      summary: [
        "Promoted from Fellow to Project Lead while developing a multi-agent self-learning assistant using CrewAI.",
        "Built Python web-scraping pipelines with BeautifulSoup, Requests, and BraveSearch API to collect and structure educational content.",
        "Coordinate profiling, ranking, and roadmap work across teams building personalized learning systems.",
      ],
    },

    {
      company: "Harvard WECode",
      position: "Associate Director of Engineering",
      startDate: "Sep 2025",
      endDate: "Present",
      summary: [
        "Co-developed WECode’s engineering platform supporting the world’s largest student-run women-in-tech conference with 1,200+ attendees.",
        "Built authentication, registration, mentorship, and event workflows using React and Supabase.",
        "Lead technical planning, code reviews, and deployment work across the engineering team.",
      ],
    },
  ],

  projects: [
    {
      name: "Adaptive Swahili-English AI Curriculum Tutor",
      summary:
        "Bilingual AI tutor for Form 1 Biology built with LangChain, Pinecone, GPT-4 Turbo, FastAPI, and Next.js. Supports curriculum-grounded summarization, revision Q&A, and free-form tutoring in both English and Swahili.",
      linkSource: "https://github.com/diramugodana/ai_tutor",
      image: "/tutor.png",
    },

    {
      name: "WECode Conference Platform",
      summary:
        "Full-stack conference platform supporting authentication, registration, mentorship matching, and event workflows for Harvard WECode. Built with React, Supabase, and modular backend services.",
      linkSource: "https://github.com/diramugodana/wecode-platform",
      image: "/wecode.png",
    },

    {
      name: "AI-Powered Multilingual Flashcard Generator",
      summary:
        "Interactive learning application that generates English and Swahili flashcards, AI study summaries, and text-to-speech audio, with caching and session-state optimizations for faster responses.",
      linkSource: "https://github.com/diramugodana/flashcard-app",
      image: "/flashcards.png",
    },

    {
      name: "Nairobi After — Immersive Web Narrative",
      summary:
        "Interactive digital narrative built with HTML, CSS, and JavaScript, combining scroll-based storytelling, glitch animations, ambient soundscapes, and dynamic chapter transitions.",
      linkSource: "https://github.com/diramugodana/nairobi-after",
      image: "/nairobi-after.png",
    },
  ],

  about: {
    description: `
I'm a Harvard student studying Computer Science and Economics, interested in building AI systems that turn complex data into useful, grounded products.

Most recently, I interned at LinkedIn, where I worked across labor-market intelligence, Economic Graph data pipelines, and recommender-system evaluation. I built systems that transformed large-scale labor-market signals into grounded evidence for generated insights, developed an end-to-end pipeline for identifying high-growth company opportunities, and extended evaluation infrastructure for LinkedIn's HERO Generative Recommender.

My earlier work includes bilingual AI tutoring systems, healthcare software, and multi-agent learning tools. I also serve as Associate Director of Engineering for Harvard WECode and as a Project Lead within the Harvard Undergraduate Machine Intelligence Community.
    `,
    image: "/me.jpg",
    resumePath: "/Resume.pdf",

    specializations: [
      {
        title: "AI Systems & Retrieval",
        body:
          "LLM pipelines, hypothesis-driven retrieval, source evaluation, grounding, provenance, and evidence quality.",
      },

      {
        title: "Data & ML Infrastructure",
        body:
          "Python, SQL, PySpark, Flyte, OpenHouse, large-scale data pipelines, and reproducible evaluation workflows.",
      },

      {
        title: "Recommender Systems Evaluation",
        body:
          "Benchmark construction, slice-aware semantic metrics, train/eval separation, and large-scale model validation.",
      },

      {
        title: "Backend Engineering",
        body:
          "FastAPI, PostgreSQL, MySQL, REST APIs, Docker, and production-oriented service design.",
      },

      {
        title: "Full-Stack Development",
        body:
          "React, Next.js, Tailwind, Supabase, and end-to-end development of user-facing applications.",
      },

      {
        title: "Applied AI",
        body:
          "AI systems spanning labor-market intelligence, education, healthcare, and personalized learning.",
      },
    ],
  },
};
