/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "primary-purple": "#1a1025", // Deep purple
        "primary-crimson": "#8b0000", // Crimson
        "primary-dark": "#0a0610", // Darker purple for depth

        // Secondary colors
        "secondary-gold": "#d4af37", // Gold
        "secondary-gold-bright": "#f5d76e", // Brighter gold for highlights
        "secondary-blue": "#89cff0", // Ethereal blue
        "secondary-blue-deep": "#3a7bd5", // Deeper blue for emphasis

        // Background and text colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        // UI component colors with enhanced variants
        hell: "#e74c3c",
        "hell-dark": "#a82315",
        "hell-glow": "#ff6b5b",

        heaven: "#3498db",
        "heaven-light": "#79c2ff",
        "heaven-glow": "#a1d9ff",

        redemption: "#9b59b6",
        "redemption-dark": "#6d3d88",
        "redemption-glow": "#c27dde",

        // Game UI colors
        ethereal: "#73c2fb",
        infernal: "#ff4500",
        mystic: "#9370db",
        ancient: "#c0a080",
        void: "#0f0a1a",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "mystical-bg": "url('/img/mystical-texture.png')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s linear infinite",
        ember: "ember 4s ease-out infinite",
        "judgment-appear": "judgment-appear 0.5s ease-out forwards",
        "soul-hover": "soul-hover 3s ease-in-out infinite",
        levitate: "levitate 7s ease-in-out infinite",
        "divine-glow": "divine-glow 3s infinite alternate",
        "infernal-flicker": "infernal-flicker 1.5s infinite alternate",
        "rune-rotate": "rune-rotate 20s linear infinite",
        "moral-shift": "moral-shift 2s ease-out forwards",

        // Pixel Art Animations
        "pixel-pulse": "pixel-pulse 1s infinite ease-in-out",
        "pixel-float": "pixel-float 3s infinite ease-in-out",
        "pixel-bob": "pixel-bob 0.5s infinite alternate",
        "scanline-move": "scanline 1s linear infinite",
        "pixel-blink": "pixel-blink 2s infinite",
        "pixel-walk": "pixel-walk 1s infinite steps(4)",
        "pixel-fade": "pixel-fade 2s infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            filter:
              "brightness(1) drop-shadow(0 0 0.75rem rgba(212, 175, 55, 0.2))",
          },
          "100%": {
            filter:
              "brightness(1.2) drop-shadow(0 0 1rem rgba(212, 175, 55, 0.5))",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        ember: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          "100%": { transform: "translateY(-20px) rotate(45deg)", opacity: 0 },
        },
        "judgment-appear": {
          "0%": { transform: "scale(0.7)", opacity: 0 },
          "70%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "soul-hover": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-5px) rotate(-1deg)" },
          "66%": { transform: "translateY(3px) rotate(1deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        levitate: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          },
          "50%": {
            transform: "translateY(-15px) rotate(3deg)",
            boxShadow: "0 25px 30px rgba(0,0,0,0.2)",
          },
        },
        "divine-glow": {
          "0%": { boxShadow: "0 0 5px 2px rgba(58, 123, 213, 0.3)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(58, 123, 213, 0.6)" },
          "100%": { boxShadow: "0 0 25px 8px rgba(58, 123, 213, 0.8)" },
        },
        "infernal-flicker": {
          "0%": { boxShadow: "0 0 5px 1px rgba(139, 0, 0, 0.5)" },
          "50%": { boxShadow: "0 0 8px 3px rgba(231, 76, 60, 0.7)" },
          "100%": { boxShadow: "0 0 12px 5px rgba(255, 69, 0, 0.8)" },
        },
        "rune-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "moral-shift": {
          "0%": { backgroundColor: "rgba(127, 127, 127, 0.1)" },
          "100%": { backgroundColor: "rgba(var(--moral-color), 0.2)" },
        },

        // Pixel Art animation keyframes
        "pixel-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "pixel-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "pixel-bob": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-2px)" },
        },
        scanline: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(16px)" },
        },
        "pixel-blink": {
          "0%, 100%": { opacity: 1 },
          "49%": { opacity: 1 },
          "50%": { opacity: 0 },
          "99%": { opacity: 0 },
        },
        "pixel-walk": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(4px)" },
        },
        "pixel-fade": {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
