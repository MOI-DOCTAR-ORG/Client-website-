import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Group from "../assets/Group5.png";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const Contact = () => {
  return (
    <section className="w-full bg-[#f5f7fb] py-20 px-5 md:px-10 lg:px-16 overflow-hidden">

      {/* ================================= */}
      {/* COUNTER SECTION */}
      {/* ================================= */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          w-full
          grid
          grid-cols-3
          gap-4
          md:gap-10
          lg:gap-20
          text-center
          items-center
          mb-24
        "
      >

        {/* ITEM 1 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111]">
            <Counter end={2} suffix="M+" />
          </h2>

          <p className="text-gray-500 mt-3 text-[11px] sm:text-sm md:text-base">
            Trusted Users Worldwide
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111]">
            <Counter end={99.2} suffix="%" />
          </h2>

          <p className="text-gray-500 mt-3 text-[11px] sm:text-sm md:text-base">
            Clinical Accuracy Alignment
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111]">
            <Counter end={99.2} suffix="%" />
          </h2>

          <p className="text-gray-500 mt-3 text-[11px] sm:text-sm md:text-base">
            ISO 13485 Certified
          </p>
        </div>
      </motion.div>

      {/* ================================= */}
      {/* CONTACT CONTENT */}
      {/* ================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] shadow-lg p-7 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111] mb-10">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            {/* FULL NAME */}
            <div>
              <label className="block mb-3 text-sm font-medium text-[#111]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-[#f5f7fb]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  border
                  border-transparent
                  focus:border-[#2450F5]
                  transition
                "
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-3 text-sm font-medium text-[#111]">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Your Phone Number"
                className="
                  w-full
                  bg-[#f5f7fb]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  border
                  border-transparent
                  focus:border-[#2450F5]
                  transition
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 text-sm font-medium text-[#111]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  w-full
                  bg-[#f5f7fb]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  border
                  border-transparent
                  focus:border-[#2450F5]
                  transition
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-3 text-sm font-medium text-[#111]">
                About
              </label>

              <textarea
                rows="5"
                placeholder="Writing..."
                className="
                  w-full
                  bg-[#f5f7fb]
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  resize-none
                  border
                  border-transparent
                  focus:border-[#2450F5]
                  transition
                "
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              type="submit"
              className="
                w-full
                bg-[#2450F5]
                text-white
                py-4
                rounded-full
                text-lg
                font-medium
                shadow-lg
              "
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            flex
            items-center
            justify-center
            min-h-[500px]
          "
        >

          {/* HEADING */}
          <h2
            className="
              absolute
              top-0
              text-4xl
              md:text-5xl
              font-semibold
              text-[#111]
              text-center
              z-10
            "
          >
            Contact Us
          </h2>

          {/* IMAGE */}
          <img
            src={Group}
            alt="decor"
            className="
              w-full
              max-w-[520px]
              object-contain
              opacity-50
              mt-20
            "
          />

          {/* GLOW */}
          <div
            className="
              absolute
              bottom-10
              w-[250px]
              h-[250px]
              bg-[#2450F5]/10
              blur-3xl
              rounded-full
            "
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;