"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { SoulProfile } from "@/components/game/soul-profile";
import { JudgmentButtons } from "@/components/game/judgment-buttons";
import { AlignmentMeter } from "@/components/game/alignment-meter";
import { useGameStore } from "@/store/game-store";
import type { Judgment } from "@/types/game-types";

export default function JudgmentPage() {
  const router = useRouter();
  const [showOutcome, setShowOutcome] = useState(false);

  // Get game state from the store
  const { currentSoul, alignment, soulsJudged, judgeSoul, nextSoul } =
    useGameStore();

  // Load a soul when the page loads if none exists
  useEffect(() => {
    if (!currentSoul) {
      nextSoul();
    }
  }, [currentSoul, nextSoul]);

  // Handle judgment selection
  const handleJudgment = (judgment: Judgment) => {
    if (!currentSoul) return;

    // Process the judgment
    judgeSoul(currentSoul, judgment);

    // Show outcome briefly before loading next soul
    setShowOutcome(true);

    // After a delay, load the next soul
    setTimeout(() => {
      setShowOutcome(false);
      setTimeout(() => {
        // Get the next soul after the transition
        nextSoul();
      }, 500);
    }, 2000);
  };

  // Determine what outcome message to show
  const getOutcomeMessage = (judgment: Judgment) => {
    switch (judgment) {
      case "HEAVEN":
        return "The soul ascends to Heaven, bathed in ethereal light...";
      case "HELL":
        return "The soul descends to Hell, consumed by infernal flame...";
      case "REDEMPTION":
        return "The soul enters Redemption, given a chance to prove its worth...";
      default:
        return "";
    }
  };

  // Get the last judgment record to display outcome
  const lastJudgment = useGameStore((state) =>
    state.judgmentHistory.length > 0
      ? state.judgmentHistory[state.judgmentHistory.length - 1]
      : null
  );

  return (
    <div className="container mx-auto py-8 pixel-bg relative">
      {/* Reaper Avatar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-4 left-4 hidden md:block"
      >
        <div className="relative w-24 h-24">
          <Image
            src="/pixel-art/reaper.svg"
            alt="Reaper"
            width={96}
            height={96}
            className="pixel-art animate-pulse-slow"
          />
        </div>
      </motion.div>

      {/* Scale of Justice */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-4 right-4 hidden md:block"
      >
        <div className="relative w-24 h-24">
          <Image
            src="/pixel-art/scale.svg"
            alt="Scale"
            width={96}
            height={96}
            className="pixel-art animate-pulse-slow"
          />
        </div>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 retro-container scanline"
      >
        <h1 className="pixel-text text-4xl sm:text-5xl text-secondary-gold mb-2">
          The Reaper&apos;s Court
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto">
          As Azrael, eternal Reaper of Souls, you must judge each human soul
          that comes before you. Choose wisely, for your judgments shape your
          own alignment.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 my-6">
        <div>
          {/* Soul Profile */}
          {currentSoul ? (
            <SoulProfile soul={currentSoul} isVisible={!showOutcome} />
          ) : (
            <div className="flex justify-center items-center h-64 retro-container">
              <div className="animate-pulse text-foreground/50 pixel-text">
                Loading soul...
              </div>
            </div>
          )}

          {/* Judgment Outcome */}
          {showOutcome && lastJudgment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`retro-container scanline ${
                lastJudgment.judgment === "HEAVEN"
                  ? "pixel-heaven"
                  : lastJudgment.judgment === "HELL"
                  ? "pixel-hell"
                  : "pixel-redemption"
              } p-6 text-center`}
            >
              <h3 className="pixel-text text-2xl mb-3">
                Judgment: {lastJudgment.judgment}
              </h3>

              <div className="flex justify-center mb-4">
                {lastJudgment.judgment === "HEAVEN" && (
                  <Image
                    src="/pixel-art/heaven-gate.svg"
                    width={64}
                    height={64}
                    alt="Heaven Gate"
                    className="pixel-art"
                  />
                )}
                {lastJudgment.judgment === "HELL" && (
                  <Image
                    src="/pixel-art/hell-gate.svg"
                    width={64}
                    height={64}
                    alt="Hell Gate"
                    className="pixel-art"
                  />
                )}
                {lastJudgment.judgment === "REDEMPTION" && (
                  <Image
                    src="/pixel-art/redemption-gate.svg"
                    width={64}
                    height={64}
                    alt="Redemption Gate"
                    className="pixel-art"
                  />
                )}
              </div>

              <p className="text-foreground/80 italic">
                {getOutcomeMessage(lastJudgment.judgment)}
              </p>
            </motion.div>
          )}

          {/* Judgment Buttons */}
          {!showOutcome && currentSoul && (
            <JudgmentButtons
              onJudgment={handleJudgment}
              isDisabled={showOutcome}
            />
          )}
        </div>

        {/* Alignment Meter Side Panel */}
        <aside>
          <AlignmentMeter alignment={alignment} />

          {/* Judgment History Preview */}
          <div className="mt-6 retro-container scanline">
            <h3 className="pixel-text text-xl mb-3 text-secondary-gold">
              Souls Judged: {soulsJudged}
            </h3>
            <div className="flex justify-around text-center">
              <div>
                <div className="mb-2">
                  <Image
                    src="/pixel-art/hell-gate.svg"
                    width={32}
                    height={32}
                    alt="Hell"
                    className="pixel-art inline-block"
                  />
                </div>
                <div className="text-sm text-foreground/70 mt-1 pixel-text">
                  {useGameStore(
                    (state) =>
                      state.judgmentHistory.filter((j) => j.judgment === "HELL")
                        .length
                  )}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <Image
                    src="/pixel-art/heaven-gate.svg"
                    width={32}
                    height={32}
                    alt="Heaven"
                    className="pixel-art inline-block"
                  />
                </div>
                <div className="text-sm text-foreground/70 mt-1 pixel-text">
                  {useGameStore(
                    (state) =>
                      state.judgmentHistory.filter(
                        (j) => j.judgment === "HEAVEN"
                      ).length
                  )}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <Image
                    src="/pixel-art/redemption-gate.svg"
                    width={32}
                    height={32}
                    alt="Redemption"
                    className="pixel-art inline-block"
                  />
                </div>
                <div className="text-sm text-foreground/70 mt-1 pixel-text">
                  {useGameStore(
                    (state) =>
                      state.judgmentHistory.filter(
                        (j) => j.judgment === "REDEMPTION"
                      ).length
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => router.push("/game/history")}
                className="pixel-button bg-secondary-gold/20 text-secondary-gold"
              >
                View Judgment History
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
