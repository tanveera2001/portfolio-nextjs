"use client";
import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import FeaturedProject from "@/components/FeaturedProject"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"
import { useEffect, useRef } from "react"
import { useScroll } from 'framer-motion';




const Home = () => {

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {},[]);


  return (
    <main ref={container} className="relative h-[200vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <TechStack scrollYProgress={scrollYProgress} />
      {/* <FeaturedProject />
      <Experience />
      <About />
      <Contact /> */}
    </main>
  )
}

export default Home;