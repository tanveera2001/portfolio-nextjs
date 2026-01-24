import { projectCards } from "@/data";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProject = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <div ref={targetRef} className="relative h-[200vh] bg-blue-300">

      {/* STICKY SCREEN */}
      <div className="sticky top-0 h-screen flex flex-col ">

        {/*HEADING CONTAINER */}
        <div className="pt-50 pb-10 pl-[6%] shrink-0">
          <h2 className="text-5xl font-bold">
            My Past Work
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            A collection of projects I’ve worked on
          </p>
        </div>

        {/* CARD SCROLL CONTAINER */}
        <div className="flex items-center overflow-hidden bg-amber-300">
        <motion.div style={{ x }} className="flex gap-8">

          {/* SINGLE PROJECT CARD */}
          {projectCards.map((projectCard) => {
            return <ProjectCard key={projectCard.id} projectCard={projectCard} />
          })}

        </motion.div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProject;


