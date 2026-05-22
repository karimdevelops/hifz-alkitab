"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function Word({ text, i }: { text: string; i: number }) {
  const [isHover, setHover] = useState(false);

  function setHoverFalse() {
    setTimeout(() => {
      setHover(false);
    }, 2000);
  }

  return (
    <motion.span
      animate={
        isHover
          ? {
              color: "var(--app-foreground)",
              translateY: -5,
              borderColor: "var(--app-primary)",
            }
          : {}
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={setHoverFalse}
      key={i}
      className="border-app-foreground inline-block cursor-pointer border-b text-transparent"
    >
      {text}
    </motion.span>
  );
}
