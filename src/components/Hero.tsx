
import { MotionValue, useTransform, motion } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};


const Hero = ({ scrollYProgress }: Props) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#FFE6EB] via-[#FFC9D4] to-[#FFDDE4]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,120,140,0.65)_0%,rgba(255,150,165,0.45)_35%,transparent_65%)] blur-[80px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_25%,rgba(255,110,130,0.55)_50%,transparent_80%)] blur-[120px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(315deg,transparent_30%,rgba(255,160,175,0.45)_55%,transparent_85%)] blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-white flex flex-col items-center">
        {/* SMALL INTRO TEXT */}
        <p className="text-sm sm:text-base md:text-xl mb-4 opacity-90 font-bold">
          Hello, I’m Tanveer!
        </p>

        {/* BIG HEADLINE */}
        <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
          Open for internships & <br />
          junior{" "}
          <span
            className="relative inline-block pb-2"
            style={{
              textDecoration: "none",
              backgroundImage: "linear-gradient(to right, transparent, white 50%, transparent)",
              backgroundSize: "100% 2px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          >
            full-stack developer
          </span>{" "}
          roles.
        </h1>

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex gap-4">
          {/* PRIMARY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="
              w-32 sm:w-40 md:w-44
              px-4 sm:px-5 md:px-6
              py-2 sm:py-2.5 md:py-3
              text-sm sm:text-base
              rounded-full
              bg-white text-[#C72626]
              font-medium
              relative overflow-hidden
              shadow-md
              hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
              cursor-pointer
            "
          >
            View Projects
          </motion.button>

          {/* OUTLINE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="
              w-32 sm:w-40 md:w-44
              px-4 sm:px-5 md:px-6
              py-2 sm:py-2.5 md:py-3
              text-sm sm:text-base
              rounded-full
              border border-white
              text-white
              font-medium
              relative overflow-hidden
              hover:border-white/80
              hover:shadow-[0_0_22px_rgba(255,255,255,0.85)]
              cursor-pointer
            "
          >
            Resume
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero