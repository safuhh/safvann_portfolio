import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className, fill = "white" }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[1] w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20",
        className
      )}
      style={{
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
        transform: "translateZ(0)",
      }}
    />
  );
};
