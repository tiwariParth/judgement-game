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
      <Card
        variant="bordered"
        className="bg-primary-purple/30 backdrop-blur-sm border-secondary-gold/20"
      >
        <CardHeader>
          <div className="flex items-center gap-4">
            {soul.avatar && (
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-secondary-gold/50">
                <Image
                  src={soul.avatar}
                  alt={soul.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <CardTitle className="text-secondary-gold">{soul.name}</CardTitle>
              <CardDescription>
                Age: {soul.age} | Cause of Death: {soul.causeOfDeath}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <motion.div variants={itemVariants} className="mb-4">
            <h4 className="text-lg font-serif mb-2 text-secondary-blue">
              Life Summary
            </h4>
            <ul className="space-y-1 pl-2">
              {renderLifeEvents(soul.lifeEvents)}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 border-t border-foreground/10 pt-4"
          >
            <h4 className="text-lg font-serif mb-2 text-secondary-blue">
              Final Thought
            </h4>
            <blockquote className="italic text-foreground/80 pl-4 border-l-2 border-primary-crimson/50">
              "{soul.finalThought}"
            </blockquote>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
