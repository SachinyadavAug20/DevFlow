const normalize = (tech: string) =>
  tech.toLowerCase().replace(/\s+/g, "").replace(/[.#]/g, "");

const specialCases: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  "c++": "cplusplus",
  cpp: "cplusplus",
  "c#": "csharp",
  csharp: "csharp",
  "amazonwebservices": "amazonwebservices",
  aws: "amazonwebservices",
  next: "nextjs",
  css:"css3",
  reactjs: "react",
  node: "nodejs",
  mongo: "mongodb",
  tailwind: "tailwindcss",
};

export const getDevIcon = (tech: string) => {
  const key = normalize(tech);
  const finalKey = specialCases[key] || key;

  return `devicon-${finalKey}-plain colored`;
};
