import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "Python", icon: "python" },
  { name: "GraphQL", icon: "graphql" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Git", icon: "git" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                type: "spring"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="
                h-32 w-full
                bg-blue-900/30
                backdrop-blur-md
                border border-blue-500/30
                rounded-xl
                p-4
                flex flex-col items-center justify-center
                transition-all
                hover:bg-blue-900/40
                hover:border-blue-400/50
                hover:shadow-lg hover:shadow-blue-500/20
              ">
                <div className="w-14 h-14 mb-3 flex items-center justify-center">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-white/90 text-sm font-medium mt-2">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}