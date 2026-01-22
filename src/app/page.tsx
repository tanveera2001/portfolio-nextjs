"use client";
import About from "@/components/About"
import Contact from "@/components/Contact"

import FeaturedProject from "@/components/FeaturedProject"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"
import { useEffect, useRef } from "react"
import { useScroll } from 'framer-motion';
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




const Home = () => {

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => { }, []);


  return (
    <main>
  <Navbar />

  {/* Hero Section */}
  <div id="hero" ref={container} className="relative h-[200vh]">
    <Hero scrollYProgress={scrollYProgress} />
    {/* TechStack Section */}
  <div id="techstack">
    <TechStack scrollYProgress={scrollYProgress} />
  </div>
  </div>

  

  {/* Featured Projects */}
  <div id="featured-project">
    <FeaturedProject />
  </div>

  {/* Experience */}
  <div id="experience">
    <Experience />
  </div>

  {/* About */}
  <div id="about">
    <About />
  </div>

  {/* Contact */}
  <div id="contact">
    <Contact />
  </div>

  <Footer />
</main>
  )
}

export default Home;