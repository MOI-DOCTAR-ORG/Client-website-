import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f7fb] overflow-hidden">
      
      {/* ============================ */}
      {/* TOP CTA SECTION */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#2450F5] rounded-b-[40px] px-6 md:px-10 lg:px-16 py-24 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-white text-4xl md:text-6xl font-semibold leading-tight max-w-[800px]">
          Your Health, Empowered
          <br />
          by Intelligence
        </h2>

        <p className="text-white/70 text-lg mt-6">
          Your Health, Empowered by Intelligence
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-10 bg-white text-[#2450F5] px-10 py-5 rounded-full text-lg md:text-xl font-medium shadow-xl"
        >
          Start your free Triage
        </motion.button>
      </motion.div>

      {/* ============================ */}
      {/* MAIN FOOTER */}
      {/* ============================ */}
      <div className="px-6 md:px-10 lg:px-16 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* BADGE */}
            <div className="inline-block bg-[#dfe7ff] text-[#2450F5] text-xs md:text-sm font-semibold px-5 py-3 rounded-full">
              CLINICAL GRADE PROTOCOL
            </div>

            {/* TEXT */}
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-[#111] mt-8 max-w-[600px]">
              Describe how you feel.
              <br />
              Get clarity in minutes.
            </h2>

            {/* COPYRIGHT */}
            <p className="text-[#2450F5] text-sm font-medium mt-16 hidden lg:block">
              © 2026 MOI DOCTARR. ALL RIGHTS RESERVED
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* SUBSCRIBE */}
            <div className="w-full bg-white rounded-full p-2 flex items-center justify-between shadow-md">
              
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-transparent outline-none px-5 text-[#111]"
              />

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="bg-[#2450F5] text-white px-8 md:px-10 py-4 rounded-full text-lg font-medium"
              >
                Subscribe
              </motion.button>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16">
              
              {/* COLUMN 1 */}
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-2xl md:text-xl text-[#111] hover:text-[#2450F5] transition"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="block text-2xl md:text-xl text-[#111] hover:text-[#2450F5] transition"
                >
                  How it works
                </a>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-2xl md:text-xl text-[#111] hover:text-[#2450F5] transition"
                >
                  Trust
                </a>

                <a
                  href="#"
                  className="block text-2xl md:text-xl text-[#111] hover:text-[#2450F5] transition"
                >
                  Features
                </a>
              </div>

              {/* COLUMN 3 */}
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-2xl md:text-xl text-[#111] hover:text-[#2450F5] transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* MOBILE COPYRIGHT */}
            <div className="mt-20 lg:hidden">
              <p className="text-[#2450F5] text-sm font-medium">
                © 2026 MOI DOCTARR. ALL RIGHTS RESERVED
              </p>
            </div>

            {/* BOTTOM LINKS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 mt-10">
              
              <a
                href="#"
                className="text-[#2450F5] text-sm font-medium hover:opacity-70 transition"
              >
                PRIVACY
              </a>

              <a
                href="#"
                className="text-[#2450F5] text-sm font-medium hover:opacity-70 transition"
              >
                TERMS OF SERVICE
              </a>

              <a
                href="#"
                className="text-[#2450F5] text-sm font-medium hover:opacity-70 transition"
              >
                2026
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;