/**
 * Core game types for Judgment: The Reaper's Dilemma
 */

// Soul structure representing a human to be judged
export interface Soul {
  id: string;
  name: string;
  age: number;
  causeOfDeath: string;
  lifeEvents: LifeEvent[];
  finalThought: string;
  // Optional avatar/image path
  avatar?: string;
  // For special souls that might be unlocked based on player progress
  isSpecial?: boolean;
}

// Individual life events that make up a soul's moral history
export interface LifeEvent {
  id: string;
  description: string;
  // Moral alignment of the event (-1.0 to 1.0, negative is bad, positive is good)
  moralValue: number;
  // Additional context about the event
  context?: string;
  // Age when this event occurred
  ageWhenOccurred?: number;
}

// The three possible judgments a player can make
export type Judgment = "HEAVEN" | "HELL" | "REDEMPTION";

// The player's moral alignment
export interface Alignment {
  // Wrath value (tendency to send to Hell), 0.0-1.0
  wrath: number;
  // Mercy value (tendency to send to Heaven), 0.0-1.0
  mercy: number;
  // Justice value (tendency for balanced decisions), 0.0-1.0
  justice: number;
}

// Record of a judgment that was made
export interface JudgmentRecord {
  id: string;
  soul: Soul;
  judgment: Judgment;
  timestamp: number;
  // How this affected player alignment
  alignmentChange: Partial<Alignment>;
}

// Game state for persistence
export interface GameState {
  // Current player alignment
  alignment: Alignment;
  // History of all judgments
  judgmentHistory: JudgmentRecord[];
  // Current soul being judged
  currentSoul?: Soul;
  // Total number of souls judged
  soulsJudged: number;
  // Special unlocks or achievements
  unlocks: string[];
  // Game settings like timer enabled, etc.
  settings: GameSettings;
}

export interface GameSettings {
  // Whether the judgment timer is enabled
  timerEnabled: boolean;
  // Duration of timer in seconds
  timerDuration: number;
  // Whether sound effects are enabled
  soundEnabled: boolean;
  // Whether animations are enabled (accessibility)
  animationsEnabled: boolean;
  // Visual theme preference
  theme: "dark" | "light" | "system";
}

// Possible game endings
export type GameEnding = "REDEEMER" | "EQUILIBRIUM" | "TYRANT" | "FORGOTTEN";

// Outcome of judgment for a soul
export interface Outcome {
  id: string;
  judgment: Judgment;
  description: string;
  // Optional image path for the outcome
  image?: string;
}
