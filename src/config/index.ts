import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Diramu Godana — CS & AI",
  author: "Diramu Godana",
  description:
    "Junior at Harvard studying CS and Economics. Interested in AI for education, data-driven systems, and socially grounded computing.",
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
    specialty: "CS & Economics at Harvard",
    summary:
      "Junior at Harvard pursuing CS with a secondary in Economics. Building AI tutors, data systems, and socially grounded tech projects.",
    email: "diramugodana@college.harvard.edu",
  },

  experience: [
    {
      company: "Adaptive Swahili-Language AI Tutor (Harvard College Research Program)",
      position: "Project Lead",
      startDate: "Jan 2025",
      endDate: "Present",
      summary: [
        "Developed an AI-powered bilingual tutor to bridge the gap for Kenyan high school students, who learn from English textbooks but often grasp concepts more easily in Swahili, the common spoken language.",
        "Implemented OCR preprocessing to extract and normalize textbook content from PDFs, preparing it for retrieval.",
        "Built a Retrieval-Augmented Generation (RAG) pipeline with LangChain and the OpenAI API, using chunked embeddings, vector search, and strict relevance filtering for curriculum alignment.",
        "Designed a front-end with a dual-language UI, displaying side-by-side Swahili and English answers to support comprehension and language learning.",
        "Extended functionality to handle end-of-chapter revision questions, ensuring generated answers remain textbook-consistent.",
      ],
    },

    {
      company: "Kerugoya County Referral Hospital — Kerugoya, Kenya",
      position: "Software Development Intern",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      summary: [
        "Contributed to the design and implementation of a digital patient management system, automating records for 1,000+ patients.",
        "Developed ERP and EMR modules with Java, Python, and Frappe, integrating with MySQL, REST APIs, and Docker.",
        "Participated in Agile cycles, code reviews, and testing to ensure system reliability.",
      ],
    },

    {
      company:
        "Harvard Undergraduate Machine Intelligence Community — Self-Learning Assistant",
      position: "Team Member",
      startDate: "Jan 2024",
      endDate: "Present",
      summary: [
        "Collaborated in the HUMIC incubator on a self-learning assistant.",
        "Used CrewAI to build a multi-agent system with specialized retriever, summarizer, and planner agents working collaboratively.",
        "Explored applications across education, finance, and biology while addressing ethical considerations in multi-agent design.",
        "Worked in a student-led team handling role assignment, workload balance, and iterative prototyping.",
      ],
    },

    {
      company: "Nyeri Hospice — Nyeri, Kenya",
      position: "Software Development Intern",
      startDate: "Jul 2019",
      endDate: "Aug 2019",
      summary: [
        "Built a DeskAlert system with Python, JavaScript, and Node.js to improve patient–provider communication.",
        "Integrated REST APIs for real-time alerts and notifications, enhancing data flow and departmental coordination.",
        "Streamlined billing and resource tracking with SQL, boosting administrative efficiency.",
      ],
    },
  ],

  projects: [
    {
      name: "Adaptive Swahili-Language AI Tutor (RAG)",
      summary:
        "Bilingual tutor for Form 1 Biology & Geography. Uses OCR + RAG (LangChain + OpenAI API) to retrieve textbook content and generate Swahili/English answers side by side.",
      linkPreview: "/",
      linkSource: "https://github.com/diramugodana/swahili-tutor",
      image: "/tutor.png",
    },
    {
      name: "AI-Powered Multilingual Flashcard Generator with TTS",
      summary:
        "Interactive web app for bilingual learners. Users upload academic documents to generate English and Swahili flashcards with GPT-4 summaries, TTS audio, theme switching, and session history.",
      linkPreview: "/",
      linkSource: "https://github.com/diramugodana/flashcard-app",
      image: "/flashcards.png",
    },
    
    {
      name: "Shop Nest – Women’s E-Commerce Platform",
      summary:
        "Developed a full-stack e-commerce website using Flask, HTML, and CSS. Implemented product listings, cart management, and checkout flow with dynamic routing, template rendering, and session-based user interactions.",
      linkPreview: "/",
      linkSource: "https://github.com/diramugodana/shop-nest",
      image: "/shopnest.png",
    }, 

    {
      name: "Nairobi After – Immersive Web Narrative",
      summary:
        "Built a modular, scroll-driven storytelling engine with HTML5, CSS3, and vanilla JS. Implemented autonomous chapter rendering, glitch animations, ambient audio control, and UI state toggles for fullscreen, sound, and autoscroll.",
      linkPreview: "/",
      linkSource: "https://github.com/diramugodana/nairobi-after",
      image: "/nairobi-after.png",
    }
    
    
  ],

  about: {
    description: `
I’m a junior at Harvard studying Computer Science with a secondary in Economics. My interests lie in AI for education, socially grounded computing, and building tools that bridge technical depth with real-world use cases.

I’ve led projects like a bilingual AI tutor that integrates OCR and Retrieval-Augmented Generation for curriculum alignment, contributed to healthcare software systems in Kenya, and worked on multi-agent learning assistants with HUMIC.

Beyond academics, I serve as Associate Director of Engagement for Harvard WECode and as Secretary of the Harvard African Students Association.
    `,
    image: "/me.jpg",
    resumePath: "/Diramu_Godana_Resume.pdf",
    specializations: [
      {
        title: "AI for Education (RAG)",
        body:
          "OCR → chunking → embeddings → vector search for textbook-aligned answers.",
      },
      {
        title: "Data & Algorithms",
        body:
          "Triangle counting, Strassen crossover, runtime & accuracy benchmarking.",
      },
      {
        title: "Web Interfaces",
        body:
          "Clean bilingual UIs; accessible, pastel-forward layouts.",
      },
      {
        title: "Multi-Agent Systems",
        body:
          "CrewAI agents (retriever, planner, summarizer) for self-learning assistants.",
      },
      {
        title: "Backend Basics",
        body:
          "REST APIs, SQL, Docker for pragmatic prototypes.",
      },
      {
        title: "Product & Research",
        body:
          "Scope, iteration cycles, clear documentation and demos.",
      },
    ],
  },
};
