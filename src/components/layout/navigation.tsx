"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/game/judgment", label: "Judge" },
    { href: "/game/history", label: "History" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-primary-purple/30 backdrop-blur-sm border border-foreground/10 rounded-full px-2 py-1 flex gap-2"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                isActive(link.href)
                  ? "bg-secondary-gold/20 text-secondary-gold"
                  : "hover:bg-foreground/10"
              )}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
