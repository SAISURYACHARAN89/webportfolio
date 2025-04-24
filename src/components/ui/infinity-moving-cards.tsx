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

const getSpeedDuration = (speed: string) => {
  switch (speed) {
    case "fast":
      return "20s";
    case "normal":
      return "40s";
    case "slow":
      return "80s";
    default:
      return "40s";
  }
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    root.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    root.style.setProperty("--animation-duration", getSpeedDuration(speed));

    requestAnimationFrame(() => setStart(true));
  }, [direction, speed]);

  const renderCard = ({ quote, name, title, github }: CardItem, idx: number) => (
    <li
      key={`${name}-${idx}`}
      className="relative w-[350px] md:w-[450px] max-w-full shrink-0 rounded-2xl border border-blue-400/20 bg-blue-900/20 backdrop-blur-lg shadow-lg shadow-blue-500/10 px-8 py-6 transition-all hover:bg-blue-900/30 hover:shadow-blue-500/20"
    >
      <blockquote>
        <span className="relative z-20 text-sm font-normal leading-[1.6] text-blue-100">
          {quote}
        </span>
        <div className="relative z-20 mt-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-normal text-blue-300">{name}</span>
            <span className="text-sm font-normal text-blue-400">{title}</span>
          </div>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <IconBrandGithub size={24} />
            </a>
          )}
        </div>
      </blockquote>
    </li>
  );

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
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {[...items, ...items].map(renderCard)}
        </ul>
      </div>

      {/* View All Projects Button */}

      {/* All Projects Modal */}
  
    </div>
  );
};
