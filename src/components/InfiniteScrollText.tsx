import React, { useEffect, useRef } from "react";

interface InfiniteScrollTextProps {
  text: string;
  className?: string;
}

const InfiniteScrollText: React.FC<InfiniteScrollTextProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap infinite-scroll w-full ${className}`}
      style={{ width: "100vw", maxWidth: "100%" }}
    >
      <div className="flex">
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight">
          {text}
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight ml-8">
          {text}
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight ml-8">
          {text}
        </span>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
