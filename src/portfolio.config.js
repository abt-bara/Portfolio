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
        tools: ["git", "github", "vscode","supabase","eslint","swagger","node"], //          column 1: tools & platforms
        languages: ["javascript", "html", "css","python","sql","typescript"], //    column 2
        frameworks: ["react", "vite","fastapi","sqlalchemy","alembic"], //               column 3: libraries & frameworks
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
        src: "public/videos/PJ-2.png",
      },
      Themes: "Web development ",
      stack: {
        tools: ["git", "github", "vscode"],
        languages: ["html", "javascript","css"],
        frameworks: ["react"],
      },
    },
    {
      id: "project-three",
      name: "Project Three",
      github: "https://github.com/your-username/project-three",
      description:
        "A third project to show how the slide re-loads in place when you move through the carousel.",
      aiLabel: "No Ai",
      preview: {
        type: "image",
        src: "public/images/project-three.png",
      },
      Themes: "Mobile Development",
      stack: {
        tools: ["git", "figma", "vercel"],
        languages: ["typescript", "css"],
        frameworks: ["react", "tailwind"],
      },
    },
    {
      id: "project-four",
      name: "Project Four",
      github: "https://github.com/your-username/project-two",
      description:
        "Another project. Keep descriptions to two or three sentences so the slide stays balanced.",
      aiLabel: "Vibe Coded",
      preview: {
        type: "image",
        src: "public/images/project-three.png",
      },
      Themes: "Mobile Development, Web Development, Ai integration",
      stack: {
        tools: ["git", "docker", "linux"],
        languages: ["python", "javascript"],
        frameworks: ["node", "express"],
      },
    },
  ],
};

export default config;
