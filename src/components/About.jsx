import { motion } from "framer-motion";

export default function About() {
  // Load theme preference

  // Toggle theme

  const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
    image: "https://cdn.dribbble.com/userupload/44359505/file/5f22dc2b55ab333d0c7b9b54077c0774.jpg?resize=752x&vertical=center",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://shop-mate-e-commerce.netlify.app",
    githubUrl: "#",
  },
  {
    title: "Shopping List App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/Shopping App.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://shopping-list-with-localstorage.netlify.app",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/images/weather App.png",
    technologies: ["React", "D3.js", "OpenWeather API", "Tailwind"],
    liveUrl: "https://weather-app-ahmed-ali.netlify.app",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description:
      "A modern social media platform with real-time messaging, photo sharing, and advanced privacy controls.",
    image: "/images/Post Creation App.png",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://post-creation-with-axios.netlify.app",
    githubUrl: "#",
  },
]

  return (
    <div className="min-h-screen bg-[#0B111E] text-gray-900 transition-colors duration-700">
      {/* ================= About Section ================= */}
      <section id="about" className="max-w-4xl mx-auto py-20 grid md:grid-cols-2 gap-4 md:gap-23 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-bold mb-4 text-[#F8FAFC]">
            About <span className="text-[#1CC3BA]">Me</span>
          </h2>
          <p className="text-[#94A3B8] text-[23px] mx-2 sm:mx-2 md:mx-2 mb-4">
            I am a passionate full-stack developer who enjoys turning complex
            ideas into user-friendly digital experiences. Skilled in React,
            Tailwind, and modern web technologies.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-[#94A3B8]">
            {[
              "React",
              "Tailwind",
              "JavaScript",
              "Node.js",
              "MongoDB",
              "Framer Motion",
            ].map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-[21px]"
              >
                • {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileHover={{scale:1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          style={{ backgroundImage:`url("/images/ahmed.jpg")`}}
          className="min-w-[50vw] sm:min-w-[90%] h-[60vh] mx-auto rounded-2xl animate-glow border-[#0D3F47] border-[6px] bg-cover bg-center"
        ></motion.div>
      </section>

     <section id="projects" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="transition-all duration-1000 "
        >
          <h2 className="text-4xl text-[#F8FAFC] md:text-6xl font-bold text-center mb-16 ">
            Featured <span className="text-[#1CC3BA]">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-xl border border-[#112C3A] hover:shadow-custom-glow hover:scale-[1.02] transition-all duration-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=192&width=768&query=project cover"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                
                </div>

                <div className="px-6 pt-6">
                  <h3 className="text-xl text-[#F59F14] font-semibold ">
                    {project.title}
                  </h3>
                </div>

                <div className="px-6 pb-6 pt-4 space-y-4">
                  <p className="leading-relaxed text-[#94A3B8]">{project.description}</p>

                  <div className="flex  flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[#F3F4F6] inline-flex hover:bg-[#0F434D] hover:text-[#1CC3BA] items-center rounded-full border border-[#112C3A]  px-2 py-1 text-[17px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveUrl || "#"}
                      className="inline-flex items-center rounded-md font-semibold hover:bg-[#F59F14] hover:text-[#0B111E] px-4 py-2 text-[#F3F4F6] text-sm border border-[#112C3A]  hover:opacity-90 hover:scale-105 transition-colors ease-linear duration-500"
                    >
                     
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl || "#"}
                      className="inline-flex text-[#F3F4F6] items-center font-semibold rounded-md border px-4 py-2 border-[#112C3A] text-sm hover:scale-105 hover:border-[#1CC3BA] transition-colors ease-linear duration-500"
                    >
                      
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

      
      {/* Keyframes for gradient animation */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
