"use client";

import { MotionValue } from "framer-motion";
import { useState } from "react";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  // Tools
  { name: "Git/Github", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 65, category: "tools" },
];

const categopries = ["all", "frontend", "backend", "tools"];

const TechStack = ({ scrollYProgress }: Props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <div className="py-24 px-4 relative bg-slate-500 h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-amber-200">Skills</span>
        </h2>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categopries.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-amber-400 text-slate-900"
                  : "bg-slate-700 text-slate-300 hover:bg-amber-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-slate-700 p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-amber-300 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-fuchsia-600 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
