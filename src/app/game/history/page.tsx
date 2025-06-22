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
    <div className="container mx-auto py-8 judgment-scroll">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <h1 className="font-serif text-4xl sm:text-5xl text-shimmer mb-2">
          Judgment Ledger
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto mb-6">
          A record of all souls you have judged and their eternal fates.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            onClick={() => router.push("/game/judgment")}
            className="mb-8 backdrop-blur-sm border-2 border-secondary-gold/30 text-secondary-gold hover:bg-secondary-gold/20"
          >
            Return to Judgment Chamber
          </Button>
        </motion.div>
      </motion.header>

      {judgmentHistory.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center p-8 border-2 border-foreground/20 rounded-xl bg-primary-purple/30 backdrop-blur-sm mystical-shadow"
        >
          <p className="text-lg">No souls have been judged yet.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-block"
          >
            <Button
              variant="default"
              className="bg-secondary-gold hover:bg-secondary-gold-bright text-primary-dark font-semibold"
              onClick={() => router.push("/game/judgment")}
            >
              Begin Judgment
            </Button>
          </motion.div>
        </motion.div>
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
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className={`border-2 rounded-xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden ${
                  record.judgment === "HEAVEN"
                    ? "celestial-border"
                    : record.judgment === "HELL"
                    ? "infernal-border"
                    : "redemption-border"
                } ${getJudgmentBackground(record.judgment)}`}
              >
                {/* Background pattern effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                  {record.judgment === "HEAVEN" && (
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2E3YmQ1IiBmaWxsLW9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                  )}
                  {record.judgment === "HELL" && (
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMzAgTDMwIDE1IEw0NSAzMCBMMzAgNDUgWiIgZmlsbD0iI2U3NGMzYyIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
                  )}
                  {record.judgment === "REDEMPTION" && (
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSI1IiBmaWxsPSIjOWI1OWI2IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjxjaXJjbGUgY3g9IjQ1IiBjeT0iNDUiIHI9IjUiIGZpbGw9IiM5YjU5YjYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20"></div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-serif flex items-center gap-2 tracking-tight">
                      <span
                        className={`${
                          record.judgment === "HEAVEN"
                            ? "text-heaven-light"
                            : record.judgment === "HELL"
                            ? "text-hell-glow"
                            : "text-redemption-glow"
                        }`}
                      >
                        {record.soul.name}
                      </span>{" "}
                      <span className="text-foreground/60 text-base font-sans">
                        ({record.soul.age})
                      </span>
                    </h3>
                    <p className="text-sm text-foreground/60 mb-2">
                      {formatDate(record.timestamp)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`
                        px-4 py-1 rounded-full flex items-center gap-2 shadow-lg
                        ${
                          record.judgment === "HEAVEN"
                            ? "bg-heaven/20 text-heaven-light animate-pulse-slow"
                            : ""
                        }
                        ${
                          record.judgment === "HELL"
                            ? "bg-hell/20 text-hell-glow animate-pulse-slow"
                            : ""
                        }
                        ${
                          record.judgment === "REDEMPTION"
                            ? "bg-redemption/20 text-redemption-glow animate-pulse-slow"
                            : ""
                        }
                      `}
                    >
                      <span className="text-xl">
                        {getJudgmentEmoji(record.judgment)}
                      </span>
                      <span className="font-serif tracking-tight">
                        {record.judgment}
                      </span>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-3 text-sm relative z-10"
                >
                  <p>
                    <span className="font-medium text-secondary-gold">
                      Cause of Death:
                    </span>{" "}
                    <span className="italic">{record.soul.causeOfDeath}</span>
                  </p>
                  <div className="mt-2">
                    <p className="font-medium text-secondary-gold mb-1">
                      Key Life Events:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {record.soul.lifeEvents.slice(0, 3).map((event) => (
                        <motion.li
                          key={event.id}
                          className="ml-2 transition-colors duration-300"
                          whileHover={{
                            color:
                              record.judgment === "HEAVEN"
                                ? "#a1d9ff"
                                : record.judgment === "HELL"
                                ? "#ff6b5b"
                                : "#c27dde",
                          }}
                        >
                          {event.description}
                        </motion.li>
                      ))}
                      {record.soul.lifeEvents.length > 3 && (
                        <li className="text-foreground/50 ml-2">
                          And{" "}
                          <span className="text-secondary-gold-bright">
                            {record.soul.lifeEvents.length - 3}
                          </span>{" "}
                          more events...
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      )}

      <motion.div
        className="mt-12 text-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="absolute w-full flex justify-center">
          <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-secondary-gold/50 to-transparent"></div>
        </div>

        <div className="backdrop-blur-sm py-6 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="inline-block rounded-full bg-gradient-to-r from-secondary-gold/20 to-secondary-blue/20 px-6 py-2 border border-secondary-gold/30"
          >
            <p className="text-lg">
              <span className="font-mono tracking-tight text-foreground/80">
                Total souls judged:{" "}
              </span>
              <span className="font-serif text-2xl text-secondary-gold-bright ml-2">
                {judgmentHistory.length}
              </span>
            </p>
          </motion.div>

          <div className="mt-4 flex justify-center gap-2">
            <div className="px-3 py-1 rounded-full text-sm border border-heaven/30 text-heaven-light flex items-center gap-1.5">
              <span className="w-2 h-2 bg-heaven rounded-full animate-pulse"></span>
              Heaven:{" "}
              {
                judgmentHistory.filter((record) => record.judgment === "HEAVEN")
                  .length
              }
            </div>
            <div className="px-3 py-1 rounded-full text-sm border border-hell/30 text-hell-glow flex items-center gap-1.5">
              <span className="w-2 h-2 bg-hell rounded-full animate-pulse"></span>
              Hell:{" "}
              {
                judgmentHistory.filter((record) => record.judgment === "HELL")
                  .length
              }
            </div>
            <div className="px-3 py-1 rounded-full text-sm border border-redemption/30 text-redemption-glow flex items-center gap-1.5">
              <span className="w-2 h-2 bg-redemption rounded-full animate-pulse"></span>
              Redemption:{" "}
              {
                judgmentHistory.filter(
                  (record) => record.judgment === "REDEMPTION"
                ).length
              }
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
