"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Soul, LifeEvent } from "@/types/game-types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface SoulProfileProps {
  soul: Soul;
  isVisible: boolean;
}

export function SoulProfile({ soul, isVisible }: SoulProfileProps) {
  // Animation variants for the profile
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Helper function to display life events with their moral indicators
  const renderLifeEvents = (events: LifeEvent[]) => {
    return events.map((event) => {
      // Determine color based on moral value
      const getMoralColor = (value: number) => {
        if (value < -0.5) return "text-hell";
        if (value > 0.5) return "text-heaven";
        return "text-foreground/80";
      };

      return (
        <motion.li
          key={event.id}
          variants={itemVariants}
          className="mb-3 list-disc list-inside"
        >
          <span className={getMoralColor(event.moralValue)}>
            {event.description}
            {event.ageWhenOccurred && (
              <span className="text-foreground/50 text-sm">
                {" "}
                (age {event.ageWhenOccurred})
              </span>
            )}
          </span>
          {event.context && (
            <p className="ml-6 text-sm text-foreground/60 mt-1">
              {event.context}
            </p>
          )}
        </motion.li>
      );
    });
  };

  if (!soul) return null;

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
      className="w-full max-w-2xl mx-auto"
    >
      <Card variant="bordered" className="retro-container scanline">
        <CardHeader>
          <div className="flex items-center gap-4">
            {soul.avatar && (
              <div className="relative h-16 w-16 overflow-hidden pixel-border">
                <Image
                  src={soul.avatar}
                  alt={soul.name}
                  fill
                  className="object-cover pixel-art"
                />
              </div>
            )}
            <div>
              <CardTitle className="pixel-text text-secondary-gold text-2xl">
                {soul.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span className="text-foreground/60">
                  {soul.age} years old • {soul.causeOfDeath}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Soul Life Information */}
          <motion.div variants={itemVariants} className="mb-4">
            <h3 className="font-medium text-secondary-gold/90 mb-2 pixel-text">
              Life Summary
            </h3>
            <p className="text-foreground/70">{soul.lifeSummary}</p>
          </motion.div>

          {/* Life Events */}
          <motion.div variants={itemVariants}>
            <h3 className="font-medium text-secondary-gold/90 mb-2 pixel-text">
              Notable Life Events
            </h3>
            <ul className="space-y-2 pl-2">
              {renderLifeEvents(soul.lifeEvents)}
            </ul>
          </motion.div>

          {/* Personality Traits */}
          {soul.personalityTraits && soul.personalityTraits.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-secondary-gold/90 mb-2 pixel-text">
                Personality
              </h3>
              <div className="flex flex-wrap gap-2">
                {soul.personalityTraits.map((trait: string, index: number) => (
                  <span
                    key={index}
                    className="bg-primary-purple/40 text-foreground/80 px-3 py-1 rounded-md text-sm pixel-border"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
