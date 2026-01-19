import Image from "next/image"
import Pic1 from '../../public/images/1.jpg'
import { MotionValue, useTransform, motion } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};


const Hero = ({scrollYProgress}: Props) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image src={Pic1} alt="image" placeholder="blur" fill/>
        </div>
        <p>Transition</p>
      </div>

    </motion.div>
  )
}

export default Hero