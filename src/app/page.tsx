'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial from-primary-purple to-black bg-fixed text-foreground">
      <main className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-secondary-gold mb-6">
            Judgment
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 text-secondary-blue">
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
          className="relative w-full max-w-2xl aspect-square mb-12"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <div className="absolute inset-0 bg-secondary-gold/20 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute inset-2 bg-primary-crimson/30 rounded-full animate-pulse-slow"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-4 bg-redemption/20 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl md:text-9xl animate-float">⚖️</span>
              </div>
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
            <Button variant="default" size="lg" className="min-w-40 text-lg">
              Begin Judgment
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="outline" size="lg" className="min-w-40 text-lg">
              Learn More
            </Button>
          </Link>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-6 text-center text-sm text-foreground/60"
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
