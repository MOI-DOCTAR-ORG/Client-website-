import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineArrowUp,
  HiOutlineArrowDown,
} from "react-icons/hi";

import Group from "../assets/Group5.png";

const Trust = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const trustItems = [
    {
      title: "Not a replacement for doctors",
      description:
        "We provide guidance, not medical diagnosis. For serious or urgent concerns, always consult a qualified healthcare professional.",
    },
    {
      title: "Your data stays private",
      description:
        "Your information is securely protected and never shared without your consent.",
    },
    {
      title: "Backed by medical knowledge",
      description:
        "Our AI uses trusted medical patterns and research to provide helpful guidance.",
    },
  ];

  return (
    <section className="w-full px-5 md:px-10 lg:px-16 py-20 bg-[#f5f7fb]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] bg-[#2450F5] px-6 py-10 md:px-10 lg:px-14 lg:py-16"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-0 w-52 h-52 bg-white/10 blur-3xl rounded-full"></div>

        {/* Optional Background Image */}
        <img
          src={Group}
          alt=""
          className="absolute bottom-0 left-0 w-[300px] md:w-[400px] opacity-20 pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[400px]"
          >
            <button className="bg-white text-[#2450F5] text-xs md:text-sm font-semibold px-5 py-2 rounded-full shadow-md">
              TRUST SECTION
            </button>

            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mt-6">
              Why People
              <br />
              Trust Us
            </h2>
          </motion.div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-5">
            {trustItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -4,
                  }}
                  className="bg-white rounded-[28px] overflow-hidden shadow-lg"
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-[#111] text-2xl md:text-3xl font-medium leading-snug max-w-[420px]">
                        {item.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-[#6b7280] text-base leading-relaxed mt-6 max-w-[450px] overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ICON */}
                    <motion.div
                      animate={{ rotate: isActive ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                      className={`min-w-[52px] min-h-[52px] rounded-full flex items-center justify-center border transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#2450F5] border-[#2450F5] text-white"
                          : "border-[#2450F5]/40 text-[#2450F5]"
                      }`}
                    >
                      {isActive ? (
                        <HiOutlineArrowUp size={24} />
                      ) : (
                        <HiOutlineArrowDown size={24} />
                      )}
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Trust;