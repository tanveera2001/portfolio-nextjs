import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
  { 
    id: 1, 
    name: "Zane Salim",
    role: "CEO, Atlas",
    text: "We worked with Fahim to refresh our website. The work was outstanding – on speed, quality, execution and attention to detail. Post-launch, we needed lots of small tweaks and conversion optimization – Fahim was a reliable partner in getting those addressed, even after the core deliverables were complete.",
    avatar: "ZS"
  },
  { 
    id: 2, 
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    text: "Amazing UI, smooth animations, powerful features. The development process was seamless and the final product exceeded our expectations.",
    avatar: "SC"
  },
  { 
    id: 3, 
    name: "Michael Rodriguez",
    role: "Product Manager, StartupXYZ",
    text: "The best onboarding experience we've ever used. Everything was intuitive and the team was incredibly responsive to our needs.",
    avatar: "MR"
  },
  { 
    id: 4, 
    name: "Emily Watson",
    role: "Designer, Creative Co",
    text: "Super smooth and elegant animation example! The attention to detail really shows in every interaction.",
    avatar: "EW"
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 300, damping: 25 });

  const organizedOffsets = [
    { x: 0, y: 0, rotateZ: 0 },
    { x: 6, y: -6, rotateZ: 2 },
    { x: 12, y: -12, rotateZ: 4 },
    { x: 18, y: -18, rotateZ: 6 },
  ];

  const interval = 1 / cards.length;
  const motionRange = 0.2;

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      
      {/* The card stack is ON TOP of the big text */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[120px] md:text-[160px] font-bold text-gray-900 whitespace-nowrap select-none">
            ...founders <span className="inline-block align-middle text-[100px] md:text-[140px]">💜</span> my work
          </h2>
        </div>

        {/* Card stack */}
        <div className="relative w-145 h-80 z-10">
          {cards.map((card, i) => {
            const start = i * interval;
            const end = start + motionRange;

            const y = useTransform(springScroll, [start, end], [0, -700]);
            const x = useTransform(springScroll, [start, end], [0, -400]);
            const rotateX = useTransform(springScroll, [start, end], [0, 25]);
            const rotateY = useTransform(springScroll, [start, end], [0, 15]);

            const { x: initialX, y: initialY, rotateZ: initialRotateZ } = organizedOffsets[i];
            const rotateZ = useTransform(springScroll, [start, end], [initialRotateZ, -15]);

            return (
              <motion.div
                key={card.id}
                style={{
                  y,
                  x,
                  rotateX,
                  rotateY,
                  rotateZ,
                  zIndex: cards.length - i,
                  translateX: initialX,
                  translateY: initialY,
                }}
                className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100 p-8 origin-top w-145 h-80"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{card.role}</p>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                      {card.avatar}
                    </div>
                  </div>

                  <p className="text-[15px] leading-relaxed text-gray-700">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
