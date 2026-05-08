import React from "react";
import { motion } from "framer-motion";

import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

const About = () => {
  const cards = [
    {
      number: "01",
      title: "Tell us how you feel",
      description:
        "Just tell us what's going on & we'll guide you with a few simple questions.",
      icon: <HiOutlineChatBubbleOvalLeft />,
    },
    {
      number: "02",
      title: "AI reviews your symptoms",
      description:
        "Our AI reviews your responses using medical knowledge and patterns.",
      icon: <FiSearch />,
    },
    {
      number: "03",
      title: "Get guidance + next steps",
      description:
        "You'll receive possible explanations, helpful next steps on what to do next.",
      icon: <HiOutlineLightBulb />,
    },
  ];

  return (
    <section className="w-full bg-[#f5f7fb] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <button className="bg-[#dfe7ff] text-[#4b6bfb] text-xs px-5 py-2 rounded-full font-medium tracking-wide">
          LEARN MORE
        </button>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#111] mt-6">
          How it Works
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((card, index) => (
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
            className="group relative overflow-hidden rounded-[32px] bg-white min-h-[500px] p-8 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2954ff] to-[#1d43d8] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Number */}
            <h1 className="relative z-10 text-[90px] font-light text-[#cfd5e5] group-hover:text-white/30 transition-all duration-500 self-end">
              {card.number}
            </h1>

            {/* Bottom Content */}
            <div className="relative z-10">
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-all duration-500 mb-6">
                <span className="text-xl text-[#111] group-hover:text-white transition-all duration-500">
                  {card.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-medium text-[#111] group-hover:text-white leading-snug transition-all duration-500">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b7280] group-hover:text-white/80 text-base leading-relaxed mt-5 transition-all duration-500 max-w-[280px]">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;