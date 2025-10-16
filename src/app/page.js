"use client";


import Hero from "@/components/Hero";
import About from "@/components/About";

import SkillsSection from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <SkillsSection />
      <Contact />
    </div>
  );
};

export default page;
