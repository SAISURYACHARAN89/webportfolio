import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import Image from "next/image";
import * as THREE from 'three';
import {ContactForm} from "@/components/ContactForm"
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingDock } from "@/components/ui/floating-dock";
import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards";
// import { Button } from "@/components/ui/moving-border";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { CertificatesSection } from "@/components/ui/CertificatesSection";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconUser,
  IconCode,
  IconBriefcase,
  IconSchool,
  IconFileText,
  IconCertificate,
} from "@tabler/icons-react";

const Stars: React.FC<React.ComponentProps<typeof Points>> = (props) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  );
  

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
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
  { title: "Certificates", icon: <IconCertificate />, href: "#certificates" },
  { title: "GitHub", icon: <IconBrandGithub />, href: "https://github.com/SAISURYACHARAN89" },
];
const projectsForMovingCards = [
  {
    quote: "Real time Collaborative Code editor",
    name: "CodeSync",
    title: "React | Node.js",
    github: "https://github.com/SAISURYACHARAN89/codesync", // Add your actual GitHub URL
  },
  {
    quote: "ChatBot app using Gemini Api",
    name: "Chat with me",
    title: "Flutter | Firebase ",
    github: "https://github.com/SAISURYACHARAN89/ChatApp-using-Gemini-Api", // Add your actual GitHub URL
  },
  {
    quote: "Customer Product Recommendation Api",
    name: "Recom",
    title: "Python | Flask | R",
    github: "https://github.com/SAISURYACHARAN89/CPR-API/tree/master", // Add your actual GitHub URL
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
         <StarsCanvas />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 z-0 opacity-40" />


  


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
  href="https://github.com/SAISURYACHARAN89"
  target="_blank"
  rel="noopener noreferrer"
  style={{ borderRadius: "1.2rem" }}
  className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  View My Work
</a>

<a
  href="#contact"  // Replace with your email address
 style={{ borderRadius: "1.2rem" }}
  className="px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  Contact Me
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
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <Image 
                  src="/images/formalpicofme.jpg" 
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
          href="/api/download-resume" 
          target="_blank" 
  rel="noopener noreferrer"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-17 text-center">
            Experience & Education
          </h2>
          <div className="max-w-2xl mx-auto translate-x-22">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <IconSchool size={24} />
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
                  <p className="text-gray-400">Lovely Professional University • 2022 - Present</p>
                  <p className="text-gray-300 mt-2">
                    83%
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <IconSchool size={24} />
                  </div>
                  <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Intermediate MPC</h3>
                  <p className="text-gray-400">Aditya Junior College • 2020 - 2022</p>
                  <p className="text-gray-300 mt-2">
                    82%
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
                  <h3 className="text-xl font-bold text-white">Secondary School</h3>
                  <p className="text-gray-400">WestBerry High School  • 2019 - 2020</p>
                  <p className="text-gray-300 mt-2">
                    91%
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
      {/* Image - Left Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image 
          src="/images/undraw_connection_ts3f.svg"  // Removed "/public" from path
          alt="Contact Illustration" 
          width={500} 
          height={300} 
          className="object-contain"
          priority // Optional for above-the-fold images
        />
      </div>

      {/* Contact Form - Right Side */}
      <div className="w-full lg:w-1/4 lg:ml-45">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/20 border border-gray-700/50">
          <ContactForm />
          
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://github.com/SAISURYACHARAN89" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
              <IconBrandGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sai-surya-charan-pentapati-098496257/" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
              <IconBrandLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/SaiSuryaCharanP/" className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-gray-700/30">
              <IconCode size={18} />
            </a>
          </div>
        </div>
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