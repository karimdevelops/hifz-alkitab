"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function VerseWord({
  text,
  hifz,
}: {
  text: string;
  hifz: boolean;
}) {
  const [isHoverTap, setHoverTap] = useState(false);

  function setHoverTapFalse() {
    setTimeout(() => {
      setHoverTap(false);
    }, 5000);
  }

  if (hifz)
    return (
      <motion.span
        animate={
          isHoverTap
            ? {
                color: "var(--app-foreground)",
                translateY: -5,
                borderColor: "var(--app-primary)",
              }
            : {}
        }
        onMouseEnter={() => setHoverTap(true)}
        onTapStart={() => setHoverTap(true)}
        onTap={setHoverTapFalse}
        onMouseLeave={setHoverTapFalse}
        className="border-app-foreground inline-block cursor-pointer border-b text-transparent"
      >
        {text}
      </motion.span>
    );
  else return <span className="inline-block cursor-pointer">{text}</span>;
}
