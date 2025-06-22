"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Alignment } from "@/types/game-types";

interface AlignmentMeterProps {
  alignment: Alignment;
  className?: string;
}

export function AlignmentMeter({
  alignment,
  className = "",
}: AlignmentMeterProps) {
  const { wrath, mercy, justice } = alignment;

  // Calculate the dominant alignment
  const getDominantAlignment = () => {
    const max = Math.max(wrath, mercy, justice);
    if (max === wrath) return "Wrath";
    if (max === mercy) return "Mercy";
    return "Justice";
  };

  // Get descriptive text based on alignment
  const getAlignmentDescription = () => {
    const dominant = getDominantAlignment();
    if (dominant === "Wrath") {
      if (wrath > 0.8) return "Ruthless Judge";
      if (wrath > 0.5) return "Stern Arbiter";
      return "Strict Reaper";
    }

    if (dominant === "Mercy") {
      if (mercy > 0.8) return "Forgiving Saint";
      if (mercy > 0.5) return "Compassionate Soul";
      return "Gentle Reaper";
    }

    // Justice
    if (justice > 0.8) return "Perfect Balance";
    if (justice > 0.5) return "Fair Judge";
    return "Balanced Reaper";
  };

  return (
    <div className={`retro-container scanline ${className}`}>
      <h3 className="pixel-text text-xl mb-4 text-secondary-gold text-center">
        Reaper Alignment:{" "}
        <span className="font-semibold">{getAlignmentDescription()}</span>
      </h3>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-hell pixel-text">Wrath</span>
            <span className="text-sm">{Math.round(wrath * 100)}%</span>
          </div>
          <div className="h-4 w-full bg-foreground/10 pixel-border overflow-hidden">
            <motion.div
              className="h-full bg-hell"
              initial={{ width: 0 }}
              animate={{ width: `${wrath * 100}%` }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-heaven pixel-text">Mercy</span>
            <span className="text-sm">{Math.round(mercy * 100)}%</span>
          </div>
          <div className="h-4 w-full bg-foreground/10 pixel-border overflow-hidden">
            <motion.div
              className="h-full bg-heaven"
              initial={{ width: 0 }}
              animate={{ width: `${mercy * 100}%` }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.2,
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-redemption pixel-text">Justice</span>
            <span className="text-sm">{Math.round(justice * 100)}%</span>
          </div>
          <div className="h-4 w-full bg-foreground/10 pixel-border overflow-hidden">
            <motion.div
              className="h-full bg-redemption"
              initial={{ width: 0 }}
              animate={{ width: `${justice * 100}%` }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.4,
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-foreground/10 text-center pixel-text">
        Souls judged: <span className="font-semibold">{0}</span>
      </div>
    </div>
  );
}
