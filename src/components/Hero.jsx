// components/Hero.js
"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const scrollAbout = (item) => {
    const aboutElmnt = document.getElementById(item);
    if (aboutElmnt) {
      aboutElmnt.scrollIntoView({
        behavior: "smooth", // Smooth scrol
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0B111E]"
    >
      <div className="text-center">
        
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl break-words whitespace-wrap leading-loose font-bold mt-4 mb-4"
        >
          Hi, I'm
          <span className="text-[#1CC3BA] bg-[#0B111E] whitespace-nowrap mx-3 animate-glow">
            Ahmed Siddique
          </span>
        </motion.h1>
       

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-[#F59F14] mb-8"
        >
          <Typewriter
            words={[
              "Full-Stack Developer ",
              "Building Scalable Web Apps ",
              "UI/UX Designer ",
            ]}
            loop={true}
            cursor
            cursorStyle="||"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2500}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={()=>scrollAbout("about")}
            className="bg-transparent border border-[#1CC3BA] hover:bg-[#0F434D] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
          <button onClick={()=>scrollAbout("contact")} className="border border-border-gray-500 text-primary hover:border-[#1CC3BA] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
