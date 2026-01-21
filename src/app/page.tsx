"use client";
import About from "@/components/About"
import Contact from "@/components/Contact"

import FeaturedProject from "@/components/FeaturedProject"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"
import { useEffect, useRef } from "react"
import { useScroll } from 'framer-motion';
import Experience from "@/components/Experience/Experience";




const Home = () => {

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {},[]);


  return (
    <main >
      <div ref={container} className="relative h-[200vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <TechStack scrollYProgress={scrollYProgress} />
      </div>
      <FeaturedProject />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}

export default Home;