import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Diramu Godana — CS & AI",
  author: "Diramu Godana",
  description:
    "Harvard student in Computer Science and Economics. Passionate about AI for education, socially grounded computing, and data-driven systems.",
  lang: "en",
  siteLogo: "/me.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/diramugodana" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/diramu-godana-79b5472a2/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://your-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Diramu Godana",
    specialty: "Computer Science & Economics at Harvard",
    summary:
      "Undergraduate at Harvard studying CS and Economics. Building bilingual AI tutors, healthcare software, and data-driven systems for social impact.",
    email: "diramugodana@college.harvard.edu",
  },

  experience: [
    {
      company: "Harvard College GenAI Research Program",
      position: "Software Engineering Intern",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      summary: [
        "Built a bilingual RAG tutor enabling Swahili-speaking students to access curriculum-aligned content.",
        "Processed 1K+ textbook chunks with LangChain, Pinecone, and GPT-4 Turbo, achieving 95% retrieval accuracy.",
        "Designed RESTful APIs and optimized PostgreSQL schemas in FastAPI for chapter- and question-level queries.",
        "Developed three tutor modes (summarization, revision Q&A, free-form) with a Next.js/Tailwind frontend and FastAPI backend, achieving <2s response times.",
        "Piloted with 56 students; dual-language (English + Swahili) output improved comprehension and aligned with syllabus.",
      ],
    },
    {
      company: "Kerugoya County Referral Hospital — Kerugoya, Kenya",
      position: "Software Engineering Intern / Priscilla Chan Fellow",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      summary: [
        "Built a hospital management portal automating records, billing, and scheduling for 1,000+ patients, cutting wait times by 30%.",
        "Developed ERP/EMR modules in Java/Python with Frappe, deployed via Docker, and integrated MySQL + REST APIs.",
        "Worked across Agile sprints on feature design, reviews, debugging, and testing; reduced post-deployment defects by 25%.",
      ],
    },
    {
      company: "Harvard Undergraduate Machine Intelligence Community (HUMIC)",
      position: "Project Lead & Web Scraping Engineer",
      startDate: "Sep 2024",
      endDate: "Present",
      summary: [
        "Promoted from Fellow to Project Lead; developed Harvard’s first self-learning assistant using CrewAI multi-agent frameworks.",
        "Built web scraping pipelines with Python (BeautifulSoup, Requests) and BraveSearch API to collect educational content.",
        "Coordinated profiling, ranking, and roadmap teams integrating user data for personalized learning.",
      ],
    },
    {
      company: "Harvard WECode",
      position: "Associate Director of Engineering",
      startDate: "Sep 2025",
      endDate: "Present",
      summary: [
        "Co-develop WECode’s inaugural engineering portal for the world’s largest student-run women-in-tech conference (1,200+ attendees).",
        "Implement authentication, registration, and event logistics using React and Supabase.",
        "Oversee technical planning, code reviews, and deployment cycles ensuring scalability and maintainability.",
      ],
    },
    {
      company: "Nyeri Hospice — Nyeri, Kenya",
      position: "Software Development Intern",
      startDate: "Jul 2019",
      endDate: "Aug 2019",
      summary: [
        "Built a DeskAlert messaging system in Python, Node.js, and MySQL to coordinate staff-patient communication.",
        "Implemented message queuing and logging to improve reliability and reduce response times by 40%.",
      ],
    },
  ],

  projects: [
    {
      name: "Adaptive Swahili-English AI Curriculum Tutor",
      summary:
        "AI-powered bilingual tutor for Form 1 Biology, built with LangChain, Pinecone, GPT-4 Turbo, and FastAPI. Supports summarization, revision Q&A, and free-form modes with dual-language (Swahili + English) output.",
      linkSource: "https://github.com/diramugodana/ai_tutor",
      image: "/tutor.png",
    },
    {
      name: "WECode Conference Platform",
      summary:
        "Full-stack platform for authentication, registration, and mentorship matching. Built with React, Supabase, and CI/CD pipelines for reliability and scalability.",
      linkSource: "https://github.com/diramugodana/wecode-platform",
      image: "/wecode.png",
    },
    {
      name: "AI-Powered Multilingual Flashcard Generator with TTS",
      summary:
        "Interactive bilingual learning app that generates English and Swahili flashcards with GPT-4 summaries, TTS audio, and a pastel-themed interface.",
      linkSource: "https://github.com/diramugodana/flashcard-app",
      image: "/flashcards.png",
    },
    {
      name: "Nairobi After — Immersive Web Narrative",
      summary:
        "Scroll-based digital story built with HTML, CSS, and JS. Features glitch animations, ambient soundscapes, and dynamic chapter transitions.",
      linkSource: "https://github.com/diramugodana/nairobi-after",
      image: "/nairobi-after.png",
    },
  ],

  about: {
    description: `
I'm a Harvard student studying Computer Science and Economics, passionate about AI for education, data systems, and socially grounded computing.

My work spans AI tutoring systems, healthcare automation, and digital storytelling. I've interned at Kerugoya County Referral Hospital, built a bilingual AI tutor through the Harvard GenAI Research Program, and led HUMIC's multi-agent self-learning assistant.

I also serve as Associate Director of Engineering for Harvard WECode and as Secretary of the Harvard African Students Association.
    `,
    image: "/me.jpg",
    resumePath: "/Resume.pdf",
    specializations: [
      {
        title: "AI for Education (RAG Systems)",
        body:
          "Textbook chunking → embeddings → vector search → dual-language answer generation.",
      },
      {
        title: "Backend Engineering",
        body:
          "FastAPI, PostgreSQL, REST APIs, Docker, Pinecone vector stores.",
      },
      {
        title: "Frontend Design",
        body:
          "Next.js, React, Tailwind — clean pastel-themed UIs for learning tools.",
      },
      {
        title: "Data & Algorithms",
        body:
          "Triangle counting, Strassen matrix multiplication, runtime analysis.",
      },
      {
        title: "Multi-Agent Systems",
        body:
          "CrewAI agents for retrieval, summarization, and adaptive self-learning workflows.",
      },
      {
        title: "Product & Research",
        body:
          "Iterative development, curriculum alignment, and evaluation for real-world impact.",
      },
    ],
  },
};
