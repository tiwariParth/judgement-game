"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen pixel-bg bg-fixed text-foreground">
      <main className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 retro-container scanline"
        >
          <h1 className="pixel-text text-5xl sm:text-6xl md:text-7xl text-secondary-gold mb-6 tracking-widest">
            Judgment
          </h1>
          <h2 className="pixel-text text-2xl sm:text-3xl md:text-4xl mb-8 text-secondary-blue">
            The Reaper&apos;s Dilemma
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            As Azrael, the eternal Reaper of Souls, you must judge the fate of
            human souls. Each judgment shapes your alignment and determines your
            own destiny.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-xl aspect-square mb-12"
        >
          {/* Reaper Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="/pixel-art/reaper.svg"
                alt="Reaper"
                width={192}
                height={192}
                className="pixel-art"
              />
            </div>
          </div>

          {/* Gateway Icons */}
          <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2">
            <div className="relative w-24 h-24">
              <Image
                src="/pixel-art/hell-gate.svg"
                alt="Hell Gate"
                width={96}
                height={96}
                className="pixel-art animate-pulse-slow"
              />
            </div>
            <div className="relative w-24 h-24">
              <Image
                src="/pixel-art/heaven-gate.svg"
                alt="Heaven Gate"
                width={96}
                height={96}
                className="pixel-art animate-pulse-slow"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          {/* Redemption below */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="relative w-24 h-24">
              <Image
                src="/pixel-art/redemption-gate.svg"
                alt="Redemption Gate"
                width={96}
                height={96}
                className="pixel-art animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Scale of Justice */}
          <div className="absolute right-0 top-0">
            <div className="relative w-24 h-24">
              <Image
                src="/pixel-art/scale.svg"
                alt="Scale of Justice"
                width={96}
                height={96}
                className="pixel-art animate-float"
              />
            </div>
          </div>

          {/* Soul */}
          <div className="absolute left-0 bottom-0">
            <div className="relative w-24 h-24">
              <Image
                src="/pixel-art/soul.svg"
                alt="Soul"
                width={96}
                height={96}
                className="pixel-art animate-float"
                style={{ animationDelay: "0.7s" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/game/judgment">
            <div className="pixel-button bg-secondary-gold text-primary-dark text-center">
              Begin Judgment
            </div>
          </Link>

          <Link href="/about">
            <div className="pixel-button bg-secondary-gold/20 text-secondary-gold text-center">
              Learn More
            </div>
          </Link>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-6 text-center text-sm text-foreground/60 pixel-text"
        >
          <p>
            A moral choice game about ethical decisions, forgiveness, and
            consequences.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
