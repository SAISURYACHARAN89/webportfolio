"use client";

import { cn } from "@/lib/utils";
import { IconBrandGithub, IconX } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";

type CardItem = {
  quote: string;
  name: string;
  title: string;
  github?: string;
};

type Props = {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const duplicateAndAnimate = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerChildren = Array.from(scrollerRef.current.children);
        scrollerChildren.forEach((item) => {
          const clone = item.cloneNode(true);
          scrollerRef.current!.appendChild(clone);
        });
        applyStyles();
        requestAnimationFrame(() => setStart(true));
      }
    };

    duplicateAndAnimate();
  }, []);

  const applyStyles = () => {
    const root = containerRef.current;
    if (!root) return;

    root.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    root.style.setProperty("--animation-duration", duration);
  };

  return (
    <div className="relative">
      {/* Infinite Scrolling Cards */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map(({ quote, name, title, github }, idx) => (
            <li
              key={`${name}-${idx}`}
              className="relative w-[350px] md:w-[450px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            >
              <blockquote>
                <span className="relative z-20 text-sm font-normal leading-[1.6] text-neutral-800 dark:text-gray-100">
                  {quote}
                </span>
                <div className="relative z-20 mt-6 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                      {name}
                    </span>
                    <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                      {title}
                    </span>
                  </div>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      <IconBrandGithub size={24} />
                    </a>
                  )}
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      {/* View All Projects Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowAllProjects(true)}
          className="rounded-xl border border-blue-500/30 bg-blue-900/30 px-6 py-3 text-white backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-blue-900/40 hover:shadow-lg hover:shadow-blue-500/20"
        >
          View All Projects
        </button>
      </div>

      {/* All Projects Modal */}
      {showAllProjects && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-blue-500/30 bg-blue-900/30 p-8 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setShowAllProjects(false)}
              className="absolute right-4 top-4 rounded-full bg-blue-900/50 p-2 transition-colors hover:bg-blue-800/50"
            >
              <IconX size={24} className="text-white" />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-white">All Projects</h2>

            <div className="space-y-6">
              {items.map(({ name, quote, title, github }, idx) => (
                <div
                  key={`${name}-project-${idx}`}
                  className="rounded-xl border border-blue-500/20 bg-blue-900/20 p-6 transition-colors hover:bg-blue-900/30"
                >
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {name}
                  </h3>
                  <p className="mb-4 text-blue-200">{quote}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">{title}</span>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 transition-colors hover:text-white"
                      >
                        <IconBrandGithub size={20} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
