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
          "netlify",
        ], //          column 1: tools & platforms
        languages: [
          "javascript",
          "html",
          "css",
          "python",
          "postgresql",
          "typescript",
        ], //    column 2
        frameworks: [
          "react",
          "vite",
          "fastapi",
          "sqlalchemy",
          "alembic",
          "reactRouter",
        ], //               column 3: libraries & frameworks
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
        frameworks: ["react", "vite"],
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
      Themes: "desktop application development — Deep Learning",
      stack: {
        tools: ["git", "github", "huggingface","jupyter"],
        languages: ["python"],
        frameworks: ["pytorch", "pyqt"],
      },
    },

  ],
  skills: {
    technical: [
      {
        name: "Web Development",
        tools: [{ name: "React", icon: "react" }],
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
        tools: [{ name: "FastAPI", icon: "fastapi" }],
      },
      {
        name: "Mobile Developement",
        tools: [
          { name: "flutter", icon: "flutter" },
          { name: "java", icon: "java" },
          { name: "XML", icon: "xml" },
          { name: "Android Studio", icon: "androidStudio" },
        ],
      },

      {
        name: "CI/CD",
        tools: [
          { name: "Github", icon: "github" },
          { name: "Netlify", icon: "netlify" },
          { name: "Docker", icon: "docker" },
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
      {
        name: "Operating Systems",
        tools: [
          { name: "Fedora", icon: "fedora" },
          { name: "Ubuntu", icon: "ubuntu" },
          { name: "Win11", icon: "windows" },
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
