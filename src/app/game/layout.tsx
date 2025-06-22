"use client";

import React from "react";
import { Navigation } from "@/components/layout/navigation";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-radial from-primary-purple to-black bg-fixed">
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen pb-24">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
