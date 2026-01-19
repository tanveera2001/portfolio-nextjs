

import { MotionValue } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const TechStack = ({ scrollYProgress }: Props) => {
  return (
    <div className="relative h-screen bg-gray-400 flex items-center justify-center">
      <p className="text-red-600 text-[3.5vw]">Tech Stack</p>

    </div>
  )
}

export default TechStack