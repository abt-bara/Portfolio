// Simple map: readable name -> Iconify icon id.
// Rendered with iconify 1.x as: <span class="iconify" data-icon="logos:react"></span>
//
// Rules used when picking ids:
//  - full-colour, icon-only marks (no embedded wordmark / text) wherever one exists
//  - monochrome only when the brand itself is monochrome (see "inherently mono" notes)
//  - every id was checked against the current @iconify-json sets

export const ICONS = {
  // Tools
  git: "logos:git-icon",
  github: "akar-icons:github-fill",            // was logos:github-icon (all black)
  gitlab: "logos:gitlab-icon",               // was logos:gitlab (wordmark)
  vscode: "logos:visual-studio-code",
  terminal: "vscode-icons:file-type-shell",  // old id did not exist
  bash: "thesvg-color:gnu-bash",             // was logos:bash (wordmark)
  npm: "logos:npm-icon",
  pnpm: "devicon:pnpm",                      // was logos:pnpm (wordmark)
  yarn: "logos:yarn",
  webpack: "logos:webpack",
  babel: "material-icon-theme:babel",        // was logos:babel (wordmark)
  eslint: "logos:eslint",
  prettier: "logos:prettier",
  postman: "logos:postman-icon",
  figma: "logos:figma",
  notion: "logos:notion-icon",               // inherently mono
  jira: "logos:jira",
  slack: "logos:slack-icon",
  linkedin: "logos:linkedin-icon",
  androidStudio: "devicon:androidstudio",    // new

  // Operating systems
  linux: "logos:linux-tux",
  ubuntu: "logos:ubuntu",
  fedora: "logos:fedora",
  windows: "logos:microsoft-windows-icon",
  apple: "logos:apple",                      // inherently mono
  android: "logos:android-icon",

  // Languages
  javascript: "logos:javascript",
  typescript: "logos:typescript-icon",
  python: "logos:python",
  java: "devicon:java",                      // was logos:java (has text)
  c: "logos:c",
  cpp: "logos:c-plusplus",
  csharp: "logos:c-sharp",
  go: "devicon:go",                          // was logos:go (GO text) -> gopher
  rust: "logos:rust",
  php: "logos:php",
  kotlin: "logos:kotlin-icon",
  swift: "logos:swift",
  dart: "logos:dart",
  ruby: "logos:ruby",
  r: "logos:r-lang",
  lua: "logos:lua",
  elixir: "devicon:elixir",                  // old id did not exist
  scala: "logos:scala",
  haskell: "logos:haskell-icon",
  html: "logos:html-5",
  css: "logos:css-3",
  sql: "vscode-icons:file-type-sql",
  xml: "vscode-icons:file-type-xml",         // new
  xsd: "flat-color-icons:org-unit",          // new (no official XSD icon exists in Iconify)

  // Frontend
  react: "logos:react",
  nextjs: "logos:nextjs-icon",               // inherently mono
  vue: "logos:vue",
  angular: "logos:angular-icon",
  svelte: "logos:svelte-icon",
  astro: "logos:astro-icon",
  nuxt: "logos:nuxt-icon",
  remix: "logos:remix-icon",                 // inherently mono
  gatsby: "logos:gatsby",
  jquery: "devicon:jquery",                  // was logos:jquery (wordmark)
  tailwind: "logos:tailwindcss-icon",
  bootstrap: "logos:bootstrap",
  sass: "material-icon-theme:sass",          // was logos:sass (script text)
  mui: "logos:material-ui",
  chakraui: "devicon:chakraui",              // old id did not exist
  shadcn: "thesvg-color:shadcn-ui-light",    // inherently mono (light-mode variant)
  radix: "thesvg-color:radix-ui-light",      // old id did not exist; inherently mono
  styledComponents: "skill-icons:styledcomponents",
  redux: "logos:redux",
  reactRouter: "logos:react-router",        // was logos:react-router
  reactQuery: "logos:react-query-icon",
  vite: "logos:vitejs",
  threejs: "skill-icons:threejs-dark",       // inherently mono, dark tile keeps it visible
  framer: "logos:framer",                    // inherently mono
  storybook: "logos:storybook-icon",
  electron: "logos:electron",
  flutter: "logos:flutter-icon",             // was logos:flutter (wordmark)
  expo: "logos:expo-icon",                   // inherently mono
  ionic: "logos:ionic-icon",
  mobile: "flat-color-icons:cell-phone",

  // Backend & APIs
  node: "logos:nodejs-icon",
  express: "skill-icons:expressjs-dark",
  nestjs: "logos:nestjs",
  deno: "logos:deno",
  bun: "logos:bun",
  hono: "logos:hono",
  django: "logos:django-icon",
  flask: "skill-icons:flask-dark",
  fastapi: "logos:fastapi-icon",             // was simple-icons:fastapi (black)
  spring: "logos:spring-icon",
  laravel: "logos:laravel",
  rails: "thesvg-color:ruby-on-rails",       // old id did not exist
  dotnet: "logos:dotnet",
  graphql: "logos:graphql",
  apollo: "logos:apollostack",
  trpc: "devicon:trpc",                      // was logos:trpc (has text)
  restApi: "flat-color-icons:synchronize",   // old id did not exist
  swagger: "logos:swagger",
  openapi: "logos:openapi-icon",             // new
  socketio: "logos:socket-io",
  jwt: "logos:jwt-icon",
  kafka: "skill-icons:kafka",
  rabbitmq: "logos:rabbitmq-icon",
  stripe: "thesvg-color:stripe",             // wordmark only: no icon-only Stripe mark in Iconify
  strapi: "logos:strapi-icon",
  sanity: "devicon:sanity",                  // was logos:sanity (wordmark)
  server: "flat-color-icons:database",       // old id did not exist (stacked-server look)

  // Databases
  postgresql: "logos:postgresql",
  mysql: "logos:mysql-icon",
  mariadb: "logos:mariadb-icon",
  mongodb: "logos:mongodb-icon",
  mongoose: "devicon:mongoose",
  redis: "logos:redis",
  sqlite: "devicon:sqlite",                  // was logos:sqlite (has text)
  elasticsearch: "logos:elasticsearch",
  neo4j: "thesvg-color:neo4j",               // was logos:neo4j (wordmark)
  firebase: "logos:firebase-icon",           // was logos:firebase (wordmark)
  supabase: "logos:supabase-icon",
  appwrite: "logos:appwrite-icon",
  neon: "logos:neon-icon",
  planetscale: "logos:planetscale",          // inherently mono
  prisma: "skill-icons:prisma",              // was logos:prisma (black)
  drizzle: "devicon:drizzle",
  sqlalchemy: "thesvg-color:sqlalchemy",     // logo is text-only
  alembic: "fluent-emoji-flat:alembic",      // was openmoji:alembic (black/white)

  // Cloud
  aws: "vscode-icons:file-type-aws",         // was logos:aws (wordmark)
  gcp: "logos:google-cloud",
  azure: "logos:microsoft-azure",
  vercel: "logos:vercel-icon",               // inherently mono
  netlify: "logos:netlify-icon",
  cloudflare: "logos:cloudflare-icon",
  digitalocean: "logos:digital-ocean-icon",  // was logos:digital-ocean (wordmark)
  render: "thesvg-color:render",             // old id did not exist; inherently mono
  railway: "logos:railway",                  // old id rendered blank; inherently mono
  cloud: "emojione:cloud",                   // old id did not exist

  // DevOps
  docker: "logos:docker-icon",
  kubernetes: "logos:kubernetes",
  helm: "logos:helm",                        // logo itself includes the HELM text
  terraform: "logos:terraform-icon",
  ansible: "thesvg-color:ansible",           // was logos:ansible (wordmark)
  jenkins: "devicon:jenkins",                // was logos:jenkins (has text)
  githubActions: "logos:github-actions",
  circleci: "logos:circleci",
  prometheus: "logos:prometheus",
  grafana: "logos:grafana",
  nginx: "logos:nginx",
  apache: "logos:apache",
  cicd: "flat-color-icons:process",

  // Testing
  jest: "logos:jest",
  vitest: "logos:vitest",
  cypress: "logos:cypress-icon",
  selenium: "logos:selenium",
  mocha: "vscode-icons:file-type-mocha",     // was logos:mocha (has text)
  pytest: "devicon:pytest",                  // old id did not exist
  testingLibrary: "logos:testing-library",

  // AI & Data Science
  pythonAi: "logos:python",
  anaconda: "devicon:anaconda",              // old id did not exist
  pandas: "logos:pandas-icon",
  numpy: "logos:numpy",
  scipy: "thesvg-color:scipy",               // old id did not exist
  scikitLearn: "devicon:scikitlearn",        // old id did not exist (logo includes "learn")
  pytorch: "logos:pytorch-icon",
  tensorflow: "logos:tensorflow",
  keras: "devicon:keras",                    // old id did not exist
  opencv: "devicon:opencv",                  // was logos:opencv (has text)
  huggingface: "logos:hugging-face-icon",
  langchain: "thesvg-color:langchain-corporate", // was simple-icons:langchain (black)
  ollama: "devicon:ollama",                  // inherently mono
  openai: "logos:openai-icon",               // inherently mono
  gemini: "logos:google-gemini-icon",        // was logos:google-gemini (wordmark)
  anthropic: "logos:anthropic-icon",         // inherently mono
  claude: "logos:claude-icon",               // was simple-icons:claude (black)
  streamlit: "logos:streamlit",
  jupyter: "devicon:jupyter",                // was logos:jupyter (has text)
  colab: "thesvg-color:colab-google",
  kaggle: "devicon:kaggle",                  // old id did not exist
  spark: "devicon:apachespark",              // was logos:apache-spark (has text)
  airflow: "logos:airflow-icon",             // old id did not exist
  machineLearning: "flat-color-icons:mind-map",
  ai: "fluent-emoji-flat:robot",

  pyqt:"thesvg-color:qt",
  unknown: "flat-color-icons:questions",
};

export const getIcon = (key) => ICONS[key] ?? ICONS.unknown;