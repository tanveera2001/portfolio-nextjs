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

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

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
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200 rounded-lg"
      style={{ width: "445px", height: "730px" }}
    >
      {/* MAIN CARD IMAGE */}
      <img
        src={card.url}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* CARD TITLE (at the top, leaving 110px for overlay) */}
      <div className="absolute top-0 left-0 w-full h-27.5 z-10 grid place-content-center px-4">
        <p className="bg-linear-to-br from-white/20 to-white/0 p-2 text-2xl md:text-4xl font-black uppercase text-black backdrop-blur-lg text-center">
          {card.title}
        </p>
      </div>

      {/* OVERLAY IMAGE (starts below the title) */}
      <img
        src={card.overlayUrl}
        alt={`${card.title} overlay`}
        className="absolute top-27.5 left-1/2 -translate-x-1/2 w-92.5 h-auto pointer-events-none transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
export default FeaturedProject;

type CardType = {
  url: string;
  overlayUrl: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/intrinsic-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/pave-light.png",
    overlayUrl: "/images/universal-calendar.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/jamble-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/shimmer-light.png",
    overlayUrl: "/images/famous-burger.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images//whalesync-light.png",
    overlayUrl: "/images/authentication.png", 
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/hotplate-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/atlast-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/preen-light.png",
    overlayUrl: "/images/portfolio.png",
    title: "Title 8",
    id: 8,
  },
];