"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry",entry)
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    ) 
    console.log("observer",observer)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="transition-all duration-1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            My <span className="text-[#1CC3BA]">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="rounded-xl border border-[#112C3A] hover:shadow-custom-glow hover:scale-105 transition-all ease-out duration-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-[#F59F14] font-semibold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex text-[#F3F4F6] hover:text-[#1CC3BA] items-center rounded-full border border-[#112C3A] px-2 py-1 text-[17px] hover:bg-[#0F434D] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
