import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import FeaturedProject from "@/components/FeaturedProject"
import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack"


const Home = () => {
  return (
    <div>
      <Hero />
      <TechStack />
      <FeaturedProject />
      <Experience />
      <About />
      <Contact />
    </div>
  )
}

export default Home;