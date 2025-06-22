"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Judgment } from "@/types/game-types";

interface JudgmentButtonsProps {
  onJudgment: (judgment: Judgment) => void;
  isDisabled?: boolean;
}

export function JudgmentButtons({
  onJudgment,
  isDisabled = false,
}: JudgmentButtonsProps) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mx-auto mt-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0 * 0.15 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="w-full"
      >
        <Button
          variant="hell"
          size="lg"
          className="w-full text-lg"
          onClick={() => onJudgment("HELL")}
          disabled={isDisabled}
        >
          🔥 Hell
        </Button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 * 0.15 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="w-full"
      >
        <Button
          variant="heaven"
          size="lg"
          className="w-full text-lg"
          onClick={() => onJudgment("HEAVEN")}
          disabled={isDisabled}
        >
          🌈 Heaven
        </Button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 * 0.15 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="w-full"
      >
        <Button
          variant="redemption"
          size="lg"
          className="w-full text-lg"
          onClick={() => onJudgment("REDEMPTION")}
          disabled={isDisabled}
        >
          🌀 Redemption
        </Button>
      </motion.div>
    </div>
  );
}
