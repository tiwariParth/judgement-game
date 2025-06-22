"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-radial from-primary-purple to-black bg-fixed text-foreground">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-serif text-5xl text-secondary-gold mb-6 text-center">
            About Judgment
          </h1>

          <div className="bg-primary-purple/30 backdrop-blur-sm border border-foreground/10 rounded-xl p-8">
            <h2 className="font-serif text-2xl mb-4 text-secondary-blue">
              The Concept
            </h2>
            <p className="mb-6">
              In "Judgment: The Reaper's Dilemma," you take on the role of
              Azrael, the eternal Reaper of Souls. In the infernal court of
              Infernum, it is your duty to pass judgment on human souls. Each
              soul has a unique life story — filled with virtue, vice, regret,
              or redemption.
            </p>

            <h2 className="font-serif text-2xl mb-4 text-secondary-blue">
              Your Task
            </h2>
            <p className="mb-6">
              As the Reaper, you must decide each soul's eternal fate:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li className="text-hell">
                <strong>Hell</strong>: For those who have committed unforgivable
                acts without redemption.
              </li>
              <li className="text-heaven">
                <strong>Heaven</strong>: For those who have lived virtuously or
                redeemed their past misdeeds.
              </li>
              <li className="text-redemption">
                <strong>Redemption</strong>: For those whose moral ambiguity
                deserves a second chance.
              </li>
            </ul>

            <h2 className="font-serif text-2xl mb-4 text-secondary-blue">
              Your Alignment
            </h2>
            <p className="mb-6">
              Each judgment you make affects your own alignment as a Reaper:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong className="text-hell">Wrath</strong>: Increases when you
                send souls to Hell, especially those who might deserve mercy.
              </li>
              <li>
                <strong className="text-heaven">Mercy</strong>: Grows when you
                show compassion, sending souls to Heaven despite their flaws.
              </li>
              <li>
                <strong className="text-foreground">Justice</strong>:
                Strengthens with balanced decisions that match the soul's true
                moral worth.
              </li>
            </ul>

            <h2 className="font-serif text-2xl mb-4 text-secondary-blue">
              Your Fate
            </h2>
            <p>
              After judging many souls, your own fate will be determined by your
              dominant alignment trait. Will you be remembered as a merciful
              redeemer, a balanced arbiter, or a wrathful tyrant?
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/game/judgment">
              <Button variant="default" size="lg" className="min-w-40 text-lg">
                Begin Judgment
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-sm text-foreground/60 mt-12"
        >
          <p>
            "Judgment: The Reaper's Dilemma" explores themes of morality, bias,
            and empathy, encouraging players to think critically about human
            actions and forgiveness.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
