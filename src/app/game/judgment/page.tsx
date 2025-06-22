"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-secondary-gold mb-2">
          The Reaper&apos;s Court
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto">
          As Azrael, eternal Reaper of Souls, you must judge each human soul
          that comes before you. Choose wisely, for your judgments shape your
          own alignment.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 my-6">
        <div>
          {/* Soul Profile */}
          {currentSoul ? (
            <SoulProfile soul={currentSoul} isVisible={!showOutcome} />
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-foreground/50">
                Loading soul...
              </div>
            </div>
          )}

          {/* Judgment Outcome */}
          {showOutcome && lastJudgment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary-purple/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 text-center"
            >
              <h3 className="font-serif text-2xl mb-3">
                {lastJudgment.judgment === "HEAVEN" && "🌈 "}
                {lastJudgment.judgment === "HELL" && "🔥 "}
                {lastJudgment.judgment === "REDEMPTION" && "🌀 "}
                Judgment: {lastJudgment.judgment}
              </h3>
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
          <div className="mt-6 bg-primary-purple/30 backdrop-blur-sm rounded-xl p-5 border border-foreground/10">
            <h3 className="font-serif text-xl mb-3 text-secondary-gold">
              Souls Judged: {soulsJudged}
            </h3>
            <div className="flex justify-around text-center">
              <div>
                <div className="text-2xl text-hell">🔥</div>
                <div className="text-sm text-foreground/70 mt-1">
                  {useGameStore(
                    (state) =>
                      state.judgmentHistory.filter((j) => j.judgment === "HELL")
                        .length
                  )}
                </div>
              </div>
              <div>
                <div className="text-2xl text-heaven">🌈</div>
                <div className="text-sm text-foreground/70 mt-1">
                  {useGameStore(
                    (state) =>
                      state.judgmentHistory.filter(
                        (j) => j.judgment === "HEAVEN"
                      ).length
                  )}
                </div>
              </div>
              <div>
                <div className="text-2xl text-redemption">🌀</div>
                <div className="text-sm text-foreground/70 mt-1">
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
                className="text-sm text-secondary-gold/80 hover:text-secondary-gold underline underline-offset-4"
              >
                View Full Judgment History
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
