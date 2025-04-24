import React, { useEffect, useState } from "react";
import { IconExternalLink } from "@tabler/icons-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  url: string;
};

export function CertificatesSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/Data/certificates.json");
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Failed to load certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-blue-900/20
                border border-blue-500/20
                rounded-md
                p-3
                group
                transition-all
                duration-200
                ease-out
                hover:bg-blue-900/30
                hover:border-blue-400/30
                hover:shadow-md
                hover:shadow-blue-500/5
                hover:scale-[1.01]
                transform-gpu
              "
            >
              <div className="flex flex-col h-full">
                <h3 className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-blue-200 text-xs mt-1 line-clamp-1">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-400 text-2xs">{cert.date}</p>
                  <IconExternalLink 
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                    size={14} 
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}