// ─────────────────────────────────────────────────────────────
//  THE ONLY FILE YOU EDIT TO CHANGE CONTENT.
//  ★ = required by the UI.  Everything else is optional.
//  This file holds plain data only (strings, arrays, objects).
//  Icons are referenced by KEY ("react"); see src/iconMap.js.
// ─────────────────────────────────────────────────────────────
const config = {
  owner: {
    name: "Muhammad Bara Harrath", // ★ typed out in the hero
    // ★ shown under the name
    description:
      "\‟ A Practicing Muslim, A Hardworking Developer, An Ambitious Individual & a linux (fedora) User \‟ ",
    buttonLabel: "Take A Look At My Projects",
    skillsButtonLabel: "Explore skills",
  },

  projects: [
    {
      id: "project-one", //                  ★ unique (used as React key)
      name: " Inside The Book — في الكتاب",
      github: "https://github.com/abt-bara/Inside-The-Book/", // ★
      //                        ★
      description:
        "Full-Stack Qr code generator application that lets a bookstore print fast per book Qr code descriptions.",
      Themes: "Full Stack development — Business — Web",
      aiLabel: "AI assistance",
      preview: {
        type: "video",
        src: "assets/videos/PJ-1.mp4",
      }, // optional: 'images/project-one.png' (file lives in /public/images)
      stack: {
        tools: [
          "git",
          "github",
          "vscode",
          "supabase",
          "eslint",
          "swagger",
          "node",
          "netlify"
        ], //          column 1: tools & platforms
        languages: ["javascript", "html", "css", "python", "postgresql", "typescript"], //    column 2
        frameworks: ["react", "vite", "fastapi", "sqlalchemy", "alembic","reactrouter"], //               column 3: libraries & frameworks
      },
    },
    {
      id: "project-two",
      name: "Arabic — Typer",
      github: "https://github.com/abt-bara/Arabic-Typer",
      description:
        "Ai Assisted transliteration engine with auto correct - translate - transilterate and suggestions",
      aiLabel: "Vibe Coded",
      preview: {
        type: "video",
        src: "assets/videos/PJ-2.mp4",
      },
      Themes: "Web development ",
      stack: {
        tools: ["git", "github", "vscode"],
        languages: ["html", "javascript", "css"],
        frameworks: ["react","vite"],
      },
    },
    {
      id: "project-three",
      name: "TD — AI ",
      github: "https://github.com/abt-bara/TD-AI",
      description:
        "Typo Detection AI , helps detect typos in pdfs with full lnaguage support and multi-language documents",
      aiLabel: "Vibe Coded",
      preview: {
        type: "video",
        src: "assets/videos/PJ-3.mp4",
      },
      Themes: "Mobile Development",
      stack: {
        tools: ["git", "github", "huggingface"],
        languages: ["python"],
        frameworks: ["Pytorch", "transformers","Pyqt"],
      },
    },
    {
      id: "project-four",
      name: "",
      github: "https://github.com/your-username/project-two",
      description:
        "Another project. Keep descriptions to two or three sentences so the slide stays balanced.",
      aiLabel: "Vibe Coded",
      preview: {
        type: "image",
        src: "assets/images/PJ-3.jpg",
      },
      Themes: "Mobile Development, Web Development, Ai integration",
      stack: {
        tools: ["git", "docker", "linux"],
        languages: ["python", "javascript"],
        frameworks: ["node", "express"],
      },
    },
  ],
  skills: {
    technical: [
      {
        name: "Web Development",
        tools: [
          { name: "React", icon: "react" },
          { name: "Vite", icon: "vite" },
        ],
      },
      {
        name: "Prompt Engineering",
        tools: [
          { name: "Claude", icon: "claude" },
          { name: "ChatGPT", icon: "openai" },
        ],
      },
      {
        name: "Back-End Developement",
        tools: [
          { name: "Claude", icon: "claude" },
          { name: "ChatGPT", icon: "openai" },
        ],
      },
      {
        name: "Mobile Developement",
        tools: [
          { name: "Claude", icon: "claude" },
          { name: "ChatGPT", icon: "openai" },
        ],
      },
      {
        name: "CI/CD",
        tools: [
          { name: "Github", icon: "github" },
          { name: "Netlify", icon: "netlify" },
        ],
      },
      {
        name: "AI Training and Fine-Tuning",
        tools: [
          { name: "Jupyter", icon: "jupyter" },
          { name: "Pytorch", icon: "pytorch" },
          { name: "Colab", icon: "colab" },
          { name: "Python", icon: "python" },
          { name: "transformers", icon: "huggingface" },
        ],
      },
    ],
    languages: [
      { name: "English", level: "C1" },
      { name: "Arabic", level: "Native" },
      { name: "French", level: "B2" },
    ],
  },
};

export default config;
