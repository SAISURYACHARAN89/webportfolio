import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
// import { Boxes } from "@/components/ui/boxes";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDock } from "@/components/ui/floating-dock";
import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards";
import { Button } from "@/components/ui/moving-border";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { CertificatesSection } from "@/components/ui/CertificatesSection";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconUser,
  IconCode,
  IconBriefcase,
  IconSchool,
  IconMail,
  IconFileText,
} from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dockItems = [
  { title: "Home", icon: <IconHome />, href: "#home" },
  { title: "About", icon: <IconUser />, href: "#about" },
  { title: "Skills", icon: <IconCode />, href: "#skills" },
  { title: "Projects", icon: <IconNewSection />, href: "#projects" },
  { title: "Experience", icon: <IconBriefcase />, href: "#experience" },
  { title: "GitHub", icon: <IconBrandGithub />, href: "https://github.com/yourusername" },
  { title: "Contact", icon: <IconMail />, href: "#contact" },
];
const projectsForMovingCards = [
  {
    quote: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    name: "E-commerce Platform",
    title: "React | Node.js | MongoDB",
    github: "https://github.com/yourusername/ecommerce-platform", // Add your actual GitHub URL
  },
  {
    quote: "Real-time collaborative task management application",
    name: "Task Management App",
    title: "Next.js | Firebase | TypeScript",
    github: "https://github.com/yourusername/task-management-app", // Add your actual GitHub URL
  },
  {
    quote: "GPT-3 powered content generation tool with custom templates",
    name: "AI Content Generator",
    title: "Python | FastAPI | React",
    github: "https://github.com/yourusername/ai-content-generator", // Add your actual GitHub URL
  },
];

export default function Home() {
  return (
    <div
    className={`
      ${geistSans.className} ${geistMono.className}
      relative min-h-screen bg- font-[family-name:var(--font-geist-sans)]
      overflow-hidden
      `}
      >
      {/* Background Animation */}
      {/* <Boxes /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 z-0 opacity-40" />

  {/* <BackgroundBeams /> */}
  <BackgroundBeams />
  


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sai Surya Charan P
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-8">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
            Solving complex problems that matter. Specializing in modern web technologies
            and cloud-native applications.
          </p>
          {/* <div className="flex gap-4"> */}
          <div className="flex justify-center gap-4 mt-6">
  <a 
    style={{ borderRadius: "1.2rem" }}
    href="#projects"
    className="px-5 py-5 bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
  >
    View My Work
  </a>
            <a href="#contact">
  <Button
    borderRadius="1.2rem"
    className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 
               hover:bg-neutral-100 dark:hover:bg-slate-800 
               transition-colors duration-200"
  >
    Contact Me
  </Button>
</a>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
              I'm a passionate software engineer who thrives at the intersection of performance and productivity. I specialize in C++ for crafting high-efficiency solutions and solving complex algorithmic problems, while also building full-stack web applications using the MERN stack. Whether it’s optimizing a low-level system or deploying a scalable cloud-native app, I bring a problem-solving mindset to every layer of the stack. With a strong DevOps foundation, I automate, containerize, and streamline development pipelines to ensure smooth deployments and robust CI/CD workflows.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I believe in writing clean, maintainable code and creating intuitive user
                experiences. When I'm not coding, you can find me contributing to open-source
                projects or exploring new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf" 
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white"
                >
                  <IconFileText size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection></SkillsSection>

  {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          
          <InfiniteMovingCards
  items={projectsForMovingCards}
  direction="left"
  speed="slow"
/>
       
            <CertificatesSection></CertificatesSection>
          
            
          </section>
        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Experience & Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <IconBriefcase size={24} />
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Software Engineer</h3>
                  <p className="text-gray-400">Tech Company Inc. • 2022 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Led the development of customer-facing web applications using React and Node.js.
                    Implemented CI/CD pipelines reducing deployment time by 40%.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <IconBriefcase size={24} />
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software Developer</h3>
                  <p className="text-gray-400">Startup Solutions • 2020 - 2022</p>
                  <p className="text-gray-300 mt-2">
                    Developed and maintained RESTful APIs serving 10,000+ daily requests.
                    Collaborated on migrating legacy systems to microservices architecture.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <IconSchool size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
                  <p className="text-gray-400">University of Technology • 2016 - 2020</p>
                  <p className="text-gray-300 mt-2">
                    Graduated with honors. Specialized in Distributed Systems and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Contact Section */}
<section id="contact" className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Get In Touch
    </h2>
    
    <div className="flex flex-col lg:flex-row gap-8 items-center">
  {/* Contact Form - Left Side */}
  <div className="w-full lg:w-1/4 lg:ml-45">
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/20 border border-gray-700/50">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm mb-1">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 text-sm bg-gray-800/70 border border-gray-700/50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm bg-blue-600/90 hover:bg-blue-600 rounded-md text-white font-medium transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          Send Message
        </button>
      </form>
      
      <div className="mt-6 flex justify-center gap-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
          <IconBrandGithub size={18} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
          <IconBrandLinkedin size={18} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
          <IconBrandX size={18} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
          <IconMail size={18} />
        </a>
      </div>
    </div>
  </div>

      {/* Image - Right Side */}
<div className="w-full lg:w-1/2 flex justify-center">
  {/* <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden border border-gray-700"> */}
    {/* Correct Image Path */}
    <Image 
      src="/images/undraw_connection_ts3f.svg"  // Removed "/public" from path
      alt="Contact Illustration" 
      width={500} 
      height={300} 
      className="object-contain"
      priority // Optional for above-the-fold images
    />

  {/* </div> */}
  </div>
    </div>
  </div>
</section>
</div>
      {/* Floating Dock */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}