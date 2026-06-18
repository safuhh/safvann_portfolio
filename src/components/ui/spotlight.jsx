import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className, fill = "white" }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[1] w-[200vw] h-[150vh] -top-[50vh] -left-[50vw] opacity-30 lg:opacity-20",
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${fill} 0%, transparent 60%)`,
        transform: "rotate(20deg) scale(0.8)",
      }}
    />
  );
};
