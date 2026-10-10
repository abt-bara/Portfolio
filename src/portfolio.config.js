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
      name: "Project One", //                ★
      github: "https://github.com/your-username/project-one", // ★
      //                        ★
      description:
        "A short, honest description: what it does, who it is for, and the one problem it solves well.",
      Themes: "Mobile Development",
      preview: {
        type: "video",
        src: "src/assets/videos/PJ-1.mp4",
      }, // optional: 'images/project-one.png' (file lives in /public/images)
      stack: {
        tools: ["git", "github", "vscode"], //          column 1: tools & platforms
        languages: ["javascript", "html", "css"], //    column 2
        frameworks: ["react", "vite"], //               column 3: libraries & frameworks
      },
    },
    {
      id: "project-two",
      name: "Project Two",
      github: "https://github.com/your-username/project-two",
      description:
        "Another project. Keep descriptions to two or three sentences so the slide stays balanced.",
      preview: {
        type: "image",
        src: "images/project-three.png",
      },
      Themes: "Mobile Development, Ecommerce, Web Development, Ai integration",
      stack: {
        tools: ["git", "docker", "linux"],
        languages: ["python", "javascript"],
        frameworks: ["node", "express"],
      },
    },
    {
      id: "project-three",
      name: "Project Three",
      github: "https://github.com/your-username/project-three",
      description:
        "A third project to show how the slide re-loads in place when you move through the carousel.",
      preview: {
        type: "image",
        src: "images/project-three.png",
      },
      Themes: "Mobile Development",
      stack: {
        tools: ["git", "figma", "vercel"],
        languages: ["typescript", "css"],
        frameworks: ["react", "tailwind"],
      },
    },
  ],
};

export default config;
