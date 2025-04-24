import { IoLogoTableau } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";
import {
  SiJavascript,
  SiR,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "R", icon: <SiR size={40} /> },
  
  { name: "Flutter", icon: <FaFlutter size = {40}/> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "Tableau", icon: <IoLogoTableau size={40} /> },
  
];


export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group relative">
              <div
                className="
                  h-32 w-full
                  bg-blue-900/30
                  backdrop-blur-md
                  border border-blue-500/30
                  rounded-xl
                  p-4
                  flex flex-col items-center justify-center
                "
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center text-white">
                  {skill.icon}
                </div>
                <span className="text-white/90 text-sm font-medium mt-2">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
