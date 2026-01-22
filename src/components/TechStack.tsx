"use client";

import { MotionValue } from "framer-motion";
import { useState } from "react";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  { name: "Git/Github", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 65, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const TechStack = ({ scrollYProgress }: Props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="relative h-screen bg-[#F8FAFC] py-24 px-4 will-change-transform">
      {/* subtle cool gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#F8FAFC] to-[#EEF2F7]" />

      <div className="container mx-auto max-w-5xl">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
          My <span className="text-[#FF6E82]">Skills</span>
        </h2>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize transition-all duration-300 border
                ${
                  activeCategory === category
                    ? "bg-[#FF6E82] text-white border-[#FF6E82] shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#FF6E82] hover:text-[#FF6E82]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {skill.name}
              </h3>

              {/* PROGRESS BAR */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-[#FF6E82] origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-2">
                <span className="text-sm text-slate-500">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
