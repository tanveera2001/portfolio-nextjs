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
      <img
        src={card.url}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-linear-to-br from-white/20 to-white/0 p-6 text-4xl md:text-6xl font-black uppercase text-white backdrop-blur-lg text-center">
          {card.title}
        </p>
      </div>
    </div>
  );
};
export default FeaturedProject;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/intrinsic-light.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/pave-light.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/jamble-light.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/shimmer-light.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images//whalesync-light.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/hotplate-light.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/atlast-light.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/preen-light.png",
    title: "Title 8",
    id: 8,
  },
];