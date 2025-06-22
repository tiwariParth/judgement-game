"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <div
          className={`pixel-hell w-full h-full p-4 text-center cursor-pointer ${
            isDisabled ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => !isDisabled && onJudgment("HELL")}
        >
          <Image
            src="/pixel-art/hell-gate.svg"
            width={32}
            height={32}
            alt="Hell"
            className="pixel-art inline-block mb-2"
          />
          <div className="pixel-text text-lg">HELL</div>
        </div>
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
        <div
          className={`pixel-heaven w-full h-full p-4 text-center cursor-pointer ${
            isDisabled ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => !isDisabled && onJudgment("HEAVEN")}
        >
          <Image
            src="/pixel-art/heaven-gate.svg"
            width={32}
            height={32}
            alt="Heaven"
            className="pixel-art inline-block mb-2"
          />
          <div className="pixel-text text-lg">HEAVEN</div>
        </div>
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
        <div
          className={`pixel-redemption w-full h-full p-4 text-center cursor-pointer ${
            isDisabled ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => !isDisabled && onJudgment("REDEMPTION")}
        >
          <Image
            src="/pixel-art/redemption-gate.svg"
            width={32}
            height={32}
            alt="Redemption"
            className="pixel-art inline-block mb-2"
          />
          <div className="pixel-text text-lg">REDEMPTION</div>
        </div>
      </motion.div>
    </div>
  );
}
