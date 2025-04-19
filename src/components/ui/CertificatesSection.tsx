import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";

const certificates = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "aws",
    url: "https://example.com/certificate1"
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2022",
    icon: "googlecloud",
    url: "https://example.com/certificate2"
  },
  {
    title: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2022",
    icon: "react",
    url: "https://example.com/certificate3"
  },
  {
    title: "Node.js Services Development",
    issuer: "Udemy",
    date: "2021",
    icon: "nodejs",
    url: "https://example.com/certificate4"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2021",
    icon: "python",
    url: "https://example.com/certificate5"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2020",
    icon: "docker",
    url: "https://example.com/certificate6"
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  h-full
                  block
                  bg-blue-900/30
                  backdrop-blur-md
                  border border-blue-500/30
                  rounded-xl
                  p-6
                  transition-all
                  hover:bg-blue-900/40
                  hover:border-blue-400/50
                  hover:shadow-lg hover:shadow-blue-500/20
                  group
                "
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${cert.icon}/${cert.icon}-original.svg`}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-200 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                  </div>
                  <IconExternalLink className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}