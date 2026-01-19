import Image from "next/image"
import Pic2 from '../../public/images/2.jpeg'

import { MotionValue } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const TechStack = ({ scrollYProgress }: Props) => {
  return (
    <div className="relative h-screen">
      <Image src={Pic2} alt="img" placeholder="blur" fill />

    </div>
  )
}

export default TechStack