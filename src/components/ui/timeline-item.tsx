import { ReactNode } from "react";

interface TimelineItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
  isLast?: boolean;
}

export const TimelineItem = ({
  icon,
  title,
  subtitle,
  children,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
          {icon}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-700 mt-2"></div>}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
        <p className="text-gray-300 mt-2">{children}</p>
      </div>
    </div>
  );
};