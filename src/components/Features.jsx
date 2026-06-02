import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  HiOutlineUser,
  HiOutlinePaperAirplane,
  HiOutlineClock,
} from "react-icons/hi";

const Features = () => {
  const [activeCard, setActiveCard] = useState(1);

  const features = [
    {
      title: "Interactive\nBody Map",
      description:
        "Our AI reviews your responses using medical knowledge and patterns.",
      icon: <HiOutlineUser />,
    },
    {
      title: "24/7\nAvailability",
      description:
        "Just tell us what's going on & we'll guide you with a few simple questions.",
      icon: <HiOutlinePaperAirplane />,
    },
    {
      title: "Nearby Care\nIntegration",
      description:
        "You'll receive possible explanations, helpful next steps on what to do next.",
      icon: <HiOutlineClock />,
    },
  ];

  return (
    <section id="features" className="scroll-mt-24 w-full bg-[#f5f7fb] py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      
      {/* TOP CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <button className="bg-[#dfe7ff] text-[#4b6bfb] text-xs px-5 py-2 rounded-full font-medium tracking-wide">
          FEATURES
        </button>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#111] mt-6 leading-tight">
          Intelligent
          <br />
          Features
        </h2>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const isActive = activeCard === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              onMouseEnter={() => setActiveCard(index)}
              className={`
                relative
                overflow-hidden
                rounded-[32px]
                min-h-[500px]
                p-8
                flex
                flex-col
                justify-between
                transition-all
                duration-500
                shadow-sm
                hover:shadow-2xl
                cursor-pointer

                ${
                  isActive
                    ? "bg-[#2450F5]"
                    : "bg-white"
                }
              `}
            >
              {/* ACTIVE GLOW */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br from-[#2f5eff] to-[#1b44d6]
                  transition-all duration-500

                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              ></div>

              {/* TOP ICON */}
              <div className="relative z-10 flex justify-end">
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500

                    ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "bg-[#f4f7ff] text-[#2450F5]"
                    }
                  `}
                >
                  {feature.icon}
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="relative z-10">
                <h3
                  className={`
                    text-3xl font-medium leading-snug whitespace-pre-line transition-all duration-500

                    ${
                      isActive
                        ? "text-white"
                        : "text-[#111]"
                    }
                  `}
                >
                  {feature.title}
                </h3>

                <p
                  className={`
                    text-base leading-relaxed mt-6 max-w-[280px] transition-all duration-500

                    ${
                      isActive
                        ? "text-white/80"
                        : "text-[#6b7280]"
                    }
                  `}
                >
                  {feature.description}
                </p>
              </div>

              {/* BLUR EFFECT */}
              <div
                className={`
                  absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px]
                  bg-white/10 blur-3xl rounded-full transition-all duration-500

                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;