import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  GameState,
  Soul,
  Judgment,
  JudgmentRecord,
  Alignment,
  GameSettings,
} from "@/types/game-types";
import { generateSoul } from "@/lib/souls";

// Default initial game state
const initialState: GameState = {
  alignment: { wrath: 0.33, mercy: 0.33, justice: 0.34 },
  judgmentHistory: [],
  soulsJudged: 0,
  unlocks: [],
  settings: {
    timerEnabled: false,
    timerDuration: 30,
    soundEnabled: true,
    animationsEnabled: true,
    theme: "system",
  },
};

export const useGameStore = create<
  GameState & {
    // Actions
    judgeSoul: (soul: Soul, judgment: Judgment) => void;
    nextSoul: () => void;
    resetGame: () => void;
    updateSettings: (settings: Partial<GameSettings>) => void;
    // Helper functions
    getDominantAlignment: () => "wrath" | "mercy" | "justice";
  }
>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Judge the current soul and update alignment
      judgeSoul: (soul: Soul, judgment: Judgment) => {
        // Calculate alignment change based on judgment and soul moral value
        const alignmentChange = calculateAlignmentChange(soul, judgment);

        // Create judgment record
        const record: JudgmentRecord = {
          id: `${Date.now()}`,
          soul,
          judgment,
          timestamp: Date.now(),
          alignmentChange,
        };

        // Update state
        set((state) => {
          const newAlignment = {
            wrath: Math.max(
              0,
              Math.min(1, state.alignment.wrath + (alignmentChange.wrath || 0))
            ),
            mercy: Math.max(
              0,
              Math.min(1, state.alignment.mercy + (alignmentChange.mercy || 0))
            ),
            justice: Math.max(
              0,
              Math.min(
                1,
                state.alignment.justice + (alignmentChange.justice || 0)
              )
            ),
          };

          return {
            judgmentHistory: [...state.judgmentHistory, record],
            soulsJudged: state.soulsJudged + 1,
            alignment: normalizeAlignment(newAlignment),
            currentSoul: undefined, // Clear current soul after judgment
          };
        });
      },

      // Get the next soul to judge
      nextSoul: () => {
        const newSoul = generateSoul();
        set({ currentSoul: newSoul });
      },

      // Reset the game to initial state
      resetGame: () => {
        set({ ...initialState });
      },

      // Update game settings
      updateSettings: (settings) => {
        set((state) => ({
          settings: {
            ...state.settings,
            ...settings,
          },
        }));
      },

      // Get the player's dominant alignment trait
      getDominantAlignment: () => {
        const { alignment } = get();
        const { wrath, mercy, justice } = alignment;

        if (wrath > mercy && wrath > justice) return "wrath";
        if (mercy > wrath && mercy > justice) return "mercy";
        return "justice";
      },
    }),
    {
      name: "judgment-game-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Helper function to calculate alignment changes based on judgment
function calculateAlignmentChange(
  soul: Soul,
  judgment: Judgment
): Partial<Alignment> {
  // Calculate the average moral value of the soul's life events
  const avgMoralValue =
    soul.lifeEvents.reduce((sum, event) => sum + event.moralValue, 0) /
    soul.lifeEvents.length;

  // Initialize alignment changes
  const changes: Partial<Alignment> = { wrath: 0, mercy: 0, justice: 0 };

  // Adjust based on judgment choice and the soul's moral value
  switch (judgment) {
    case "HEAVEN":
      // Sending a bad soul to heaven increases mercy but decreases justice
      if (avgMoralValue < -0.3) {
        changes.mercy = 0.1;
        changes.justice = -0.05;
        changes.wrath = -0.05;
      }
      // Sending a morally ambiguous soul to heaven slightly increases mercy
      else if (avgMoralValue < 0.3) {
        changes.mercy = 0.05;
        changes.justice = 0.02;
        changes.wrath = -0.02;
      }
      // Sending a good soul to heaven increases justice
      else {
        changes.mercy = 0.03;
        changes.justice = 0.05;
        changes.wrath = -0.03;
      }
      break;

    case "HELL":
      // Sending a good soul to hell increases wrath but decreases justice
      if (avgMoralValue > 0.3) {
        changes.wrath = 0.1;
        changes.justice = -0.05;
        changes.mercy = -0.05;
      }
      // Sending a morally ambiguous soul to hell slightly increases wrath
      else if (avgMoralValue > -0.3) {
        changes.wrath = 0.05;
        changes.justice = 0.02;
        changes.mercy = -0.02;
      }
      // Sending a bad soul to hell increases justice
      else {
        changes.wrath = 0.03;
        changes.justice = 0.05;
        changes.mercy = -0.03;
      }
      break;

    case "REDEMPTION":
      // Always increases justice slightly
      changes.justice = 0.05;

      // Adjust mercy and wrath based on soul's moral value
      if (avgMoralValue > 0.3) {
        // Good soul to redemption slightly reduces mercy
        changes.mercy = -0.02;
        changes.wrath = -0.01;
      } else if (avgMoralValue < -0.3) {
        // Bad soul to redemption slightly reduces wrath
        changes.wrath = -0.02;
        changes.mercy = 0.01;
      } else {
        // Ambiguous soul to redemption is balanced
        changes.wrath = -0.01;
        changes.mercy = -0.01;
      }
      break;
  }

  return changes;
}

// Helper function to normalize alignment so the sum is always 1.0
function normalizeAlignment(alignment: Alignment): Alignment {
  const { wrath, mercy, justice } = alignment;
  const sum = wrath + mercy + justice;

  if (sum === 0) return { wrath: 0.33, mercy: 0.33, justice: 0.34 };

  return {
    wrath: wrath / sum,
    mercy: mercy / sum,
    justice: justice / sum,
  };
}
