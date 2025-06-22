"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/game-store";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
  const router = useRouter();
  const { judgmentHistory } = useGameStore();

  // Setup variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Format date from timestamp
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper function to get background color based on judgment
  const getJudgmentBackground = (judgment: string) => {
    switch (judgment) {
      case "HEAVEN":
        return "bg-heaven/10 border-heaven/30";
      case "HELL":
        return "bg-hell/10 border-hell/30";
      case "REDEMPTION":
        return "bg-redemption/10 border-redemption/30";
      default:
        return "bg-foreground/10 border-foreground/20";
    }
  };

  // Helper function to get emoji based on judgment
  const getJudgmentEmoji = (judgment: string) => {
    switch (judgment) {
      case "HEAVEN":
        return "🌈";
      case "HELL":
        return "🔥";
      case "REDEMPTION":
        return "🌀";
      default:
        return "⚖️";
    }
  };

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-secondary-gold mb-2">
          Judgment Ledger
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto mb-6">
          A record of all souls you have judged and their eternal fates.
        </p>

        <Button
          variant="outline"
          onClick={() => router.push("/game/judgment")}
          className="mb-8"
        >
          Return to Judgment Chamber
        </Button>
      </header>

      {judgmentHistory.length === 0 ? (
        <div className="text-center p-8 border border-foreground/10 rounded-xl bg-primary-purple/20">
          <p className="text-lg">No souls have been judged yet.</p>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => router.push("/game/judgment")}
          >
            Begin Judgment
          </Button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {judgmentHistory
            .slice()
            .reverse()
            .map((record) => (
              <motion.div
                key={record.id}
                variants={itemVariants}
                className={`border rounded-xl p-4 ${getJudgmentBackground(
                  record.judgment
                )}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-serif flex items-center gap-2">
                      {record.soul.name}{" "}
                      <span className="text-foreground/60 text-base font-sans">
                        ({record.soul.age})
                      </span>
                    </h3>
                    <p className="text-sm text-foreground/60 mb-2">
                      {formatDate(record.timestamp)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`
                    px-4 py-1 rounded-full flex items-center gap-2
                    ${record.judgment === "HEAVEN" ? "text-heaven" : ""}
                    ${record.judgment === "HELL" ? "text-hell" : ""}
                    ${record.judgment === "REDEMPTION" ? "text-redemption" : ""}
                  `}
                    >
                      <span>{getJudgmentEmoji(record.judgment)}</span>
                      {record.judgment}
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-sm">
                  <p>
                    <strong>Cause of Death:</strong> {record.soul.causeOfDeath}
                  </p>
                  <div className="mt-2">
                    <p className="font-medium mb-1">Key Life Events:</p>
                    <ul className="list-disc list-inside">
                      {record.soul.lifeEvents.slice(0, 3).map((event) => (
                        <li key={event.id} className="ml-2">
                          {event.description}
                        </li>
                      ))}
                      {record.soul.lifeEvents.length > 3 && (
                        <li className="text-foreground/50 ml-2">
                          And {record.soul.lifeEvents.length - 3} more events...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-foreground/60 mb-2">
          Total souls judged:{" "}
          <span className="font-medium">{judgmentHistory.length}</span>
        </p>
      </div>
    </div>
  );
}
