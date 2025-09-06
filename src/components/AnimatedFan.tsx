import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AnimatedFan = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className={cn(
          "transition-all duration-1000 transform",
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        )}
      >
        <svg
          viewBox="0 0 800 300"
          className="w-full h-auto"
          fill="none"
          stroke="currentColor"
        >
          {/* Fan Blades - Rotating */}
          <g className="fan-rotation">
            <circle
              cx="400"
              cy="150"
              r="8"
              fill="currentColor"
              className="opacity-80"
            />
            {/* Fan Blades */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="400"
                y1="150"
                x2={400 + 60 * Math.cos((angle * Math.PI) / 180)}
                y2={150 + 60 * Math.sin((angle * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="2"
                className="wireframe-lines opacity-60"
                style={{ transformOrigin: "400px 150px" }}
              />
            ))}
            {/* Outer blade details */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <ellipse
                key={`blade-${angle}`}
                cx={400 + 50 * Math.cos((angle * Math.PI) / 180)}
                cy={150 + 50 * Math.sin((angle * Math.PI) / 180)}
                rx="15"
                ry="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="wireframe-lines opacity-40"
                transform={`rotate(${angle} ${
                  400 + 50 * Math.cos((angle * Math.PI) / 180)
                } ${150 + 50 * Math.sin((angle * Math.PI) / 180)})`}
              />
            ))}
          </g>

          {/* Static Wireframe Structure */}
          {/* Central Axis */}
          <line
            x1="100"
            y1="150"
            x2="700"
            y2="150"
            stroke="currentColor"
            strokeWidth="1"
            className="wireframe-lines opacity-50"
          />

          {/* Support Structures */}
          <line
            x1="100"
            y1="150"
            x2="150"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            className="wireframe-lines opacity-40"
          />
          <line
            x1="100"
            y1="150"
            x2="150"
            y2="200"
            stroke="currentColor"
            strokeWidth="1"
            className="wireframe-lines opacity-40"
          />

          {/* Fan Housing */}
          <circle
            cx="400"
            cy="150"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="wireframe-lines opacity-30"
          />
          <circle
            cx="400"
            cy="150"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="wireframe-lines opacity-20"
          />

          {/* Technical Details */}
          <circle
            cx="400"
            cy="150"
            r="4"
            fill="currentColor"
            className="opacity-60"
          />

          {/* Measurement Lines */}
          <g className="opacity-30">
            <line
              x1="320"
              y1="80"
              x2="480"
              y2="80"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <line
              x1="320"
              y1="75"
              x2="320"
              y2="85"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <line
              x1="480"
              y1="75"
              x2="480"
              y2="85"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text
              x="400"
              y="70"
              textAnchor="middle"
              className="text-xs fill-current opacity-60"
            >
              160mm
            </text>
          </g>

          {/* Grid Lines */}
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="800" height="300" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedFan;
