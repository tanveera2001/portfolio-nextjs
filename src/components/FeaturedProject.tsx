import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const FeaturedProject = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      className="relative overflow-hidden bg-[#FFF4F7] rounded-xl shadow-lg"
      style={{ width: "445px", height: "309px" }}
    >
      {/* MAIN CARD IMAGE */}
      <img
        src={card.url}
        alt={card.title}
        className="w-full h-full object-cover"
      />

      {/* CARD TITLE */}
      <div className="absolute top-0 left-0 w-full h-28 z-10 grid place-content-center px-4">
        <p
          className="
            p-2
            text-2xl md:text-4xl
            font-black
            text-center
            rounded-md
          "
          style={{ color: card.titleColor }} // 👈 MAGIC HERE
        >
          {card.title}
        </p>
      </div>

      {/* OVERLAY IMAGE */}
      <img
        src={card.overlayUrl}
        alt={`${card.title} overlay`}
        className="absolute top-28 left-1/2 -translate-x-1/2 w-100 h-auto pointer-events-none rounded-t-xl"
      />
    </div>
  );
};
export default FeaturedProject;

type CardType = {
  url: string;
  overlayUrl: string;
  title: string;
  titleColor: string;   // 👈 NEW
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/intrinsic-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Portfolio",
    titleColor: "#2c2180",
    id: 1,
  },
  {
    url: "/images/whalesync-light.png",
    overlayUrl: "/images/authentication.png",
    title: "Authentication",
    titleColor: "#3c70e8", 
    id: 5,
  },
  {
    url: "/images/shimmer-light.png",
    overlayUrl: "/images/famous-burger.png",
    title: "Famous Burger",
    titleColor: "#7C2D12", 
    id: 4,
  },
  {
    url: "/images/pave-light.png",
    overlayUrl: "/images/universal-calendar.png",
    title: "Universal Calendar",
    titleColor: "#1ac4bf", 
    id: 2,
  },
  {
    url: "/images/hotplate-light.png",
    overlayUrl: "/images/kopila-clinic-dashboard.png",
    title: "Dashboard",
    titleColor: "#d44339",
    id: 6,
  },
];
