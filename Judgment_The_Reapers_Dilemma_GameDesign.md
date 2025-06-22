# 🎮 Game Design Document

## 🕯️ Game Title: **Judgment: The Reaper’s Dilemma**

---

## 🧠 Concept Overview

You are **Azrael**, the eternal Reaper of Souls. In the infernal court of **Infernum**, you pass judgment on human souls. Each soul has a unique life story — filled with virtue, vice, regret, or redemption. Your task is to decide their eternal fate:
- 🔥 Hell
- 🌈 Heaven
- 🌀 Redemption

This game explores themes of **morality**, **bias**, and **empathy**, encouraging players to think critically about human actions and forgiveness.

---

## 🎯 Game Goals

- Tell morally ambiguous stories about humans.
- Give players emotional and ethical decisions to make.
- Track judgment alignment and consequences.
- Encourage kindness by highlighting human complexity.

---

## 🕹️ Core Gameplay Loop

1. A soul appears.
2. Their **profile** is shown:
   - Name, age, cause of death
   - Summary of life events (good/bad/mixed)
   - Final thoughts/regrets (text-based dialogue)
3. Player chooses judgment via three buttons:
   - “🔥 Hell”
   - “🌈 Heaven”
   - “🌀 Redemption Trial”
4. The **Reaper's alignment** shifts (Wrath, Mercy, Justice).
5. Player sees a brief **outcome snippet** (their afterlife).
6. Game continues to next soul.

---

## 🧩 Game Elements

### 👤 Soul Profile Example

```
Name: Raj Malhotra  
Age: 42  
Cause of Death: Heart failure while saving a stranger at a train station.  

Life Summary:
- Stole money in his 20s to pay for sister’s surgery.
- Verbally abusive to his wife, but reformed through therapy.
- Ran a flood relief shelter for 6 years.

Final Thought: “I hope someone remembers the good I tried to do.”
```

### 🎭 Player Choices
- [🔥 Hell]
- [🌈 Heaven]
- [🌀 Redemption Trial]

### 🧮 Reaper Alignment Meter

Tracks player's tendencies:
- 🧨 Wrath: Sends most souls to Hell
- 🕊️ Mercy: Forgives easily
- ⚖️ Justice: Balanced decision-making

---

## 📚 Features

| Feature | Description |
|--------|-------------|
| 🧠 Procedural Life Events | Souls have randomized or scripted moral histories. |
| 🗣️ Text Dialogue | Souls react emotionally before judgment. |
| ⏳ Timer (Optional) | Adds tension to force fast decisions. |
| 📊 Reaper Alignment | Determines which game ending is unlocked. |
| 📓 Ledger of Judgment | Lets player review all previous decisions. |
| 🎥 Afterlife Cutscenes (Text-based) | Short description of soul’s fate post-judgment. |

---

## 🚀 Web Implementation Enhancements

### Enhanced Features
- **Dynamic Soul Generation**: More complex procedural generation of souls with extensive life stories
- **Moral Ambiguity System**: Nuanced system for evaluating the complexity of human actions
- **Decision Timer**: Optional countdown timer for added pressure during judgment
- **Visual Novel Elements**: More elaborate storytelling with branching dialogue
- **Soul Interaction**: Limited dialogue options with souls before judgment
- **Judgment History**: Detailed review of past judgments with filtering and sorting
- **Unlockable Content**: Special souls or scenarios based on player alignment
- **Achievement System**: Recognition of significant judgment milestones
- **Ambient Audio**: Dynamic soundtrack that adapts to game state and alignment

### Web-Specific Features
- **Progressive Web App**: Installable on devices for offline play
- **Cloud Save**: Synchronize progress across devices
- **Social Sharing**: Share interesting souls or judgments on social media
- **Community Statistics**: Anonymous aggregation of how others judged the same soul
- **Daily Challenge Soul**: New unique soul available daily
- **Accessibility Customization**: User-configurable accessibility settings
- **Theme Customization**: Adjustable visual themes based on player preference
- **Leaderboards**: Compare your moral alignment with other players (optional)

### Technical Improvements
- **Server-Side Generation**: Complex soul generation handled server-side
- **Incremental Static Regeneration**: For efficient content updates
- **WebGL Effects**: Advanced visual effects for key moments (judgments, transitions)
- **Optimistic UI**: Immediate feedback with background synchronization
- **Prefetching**: Strategic data loading for smoother experience
- **Edge Functions**: For low-latency global performance
- **Analytics**: Privacy-friendly analytics for understanding player behavior

---

## 🧪 Endings (Based on Judgment Style)

- **Redeemer of the Damned**: Forgiving, empathetic Reaper
- **Judge of Equilibrium**: Balanced decisions
- **Tyrant of Hell**: Harsh, unyielding Reaper
- **The Forgotten One**: Refused to judge

---

## 🎨 Visual & Tone Direction

- Dark, gothic, infernal courtroom background with subtle particle effects
- Vector-based portrait or silhouette of soul with smooth animations
- Modern, elegant UI with animated transitions and microinteractions
- Responsive layout adapting to different screen sizes and devices
- Color palette: Dark theme with rich contrasts
  - Primary: Deep purple (#1a1025) and crimson (#8b0000)
  - Secondary: Gold (#d4af37) and ethereal blue (#89cff0)
  - Accent: Soul-specific aura colors based on their moral alignment
- Typography: 
  - Serif fonts for titles (Playfair Display or similar)
  - Sans-serif for body text (Inter or similar)
  - Custom icon set for spiritual/judgment symbols
- Animated backgrounds with parallax effects for depth

---

## 🛠 Technical Details (For Developer)

- **Framework**: Next.js 14+ with TypeScript
- **Platform**: Web-based application with responsive design
- **Rendering**: React components with client and server components
- **Styling**: TailwindCSS with custom theme
- **Graphics**: Modern web animations, SVG, and Canvas-based rendering
- **State Management**: React context or lightweight state management (Zustand/Jotai)
- **Deployment**: Vercel, Netlify, or containerized deployment
- **Assets Needed**:
  - Background art (courtroom) - SVG or high-quality PNG
  - Character avatars - Vector-based with animation capabilities
  - Sound effects - Web Audio API compatible (.mp3 or .ogg)
  - Custom font files - Variable fonts for best performance

---

## 🌐 Web Technology Stack

### Core Technologies
- **Next.js 14+**: React framework with file-based routing, server components, and built-in optimizations
- **TypeScript**: For type safety and improved developer experience
- **React 18+**: Component-based UI library with hooks and concurrent rendering

### Styling Solutions
- **Primary: TailwindCSS**: Utility-first CSS framework for rapid UI development
  - Custom theme configuration for game-specific design system
  - Dark mode support built-in
  - JIT compiler for optimized production builds
- **Component Libraries (Options)**:
  - **shadcn/ui**: High-quality, unstyled components built on Radix UI
  - **Headless UI**: Completely unstyled, accessible UI components
  - **Framer Motion**: For advanced animations and transitions
- **CSS Modules**: For component-specific styling when needed
- **CSS Variables**: For theme customization and dynamic styling

### State Management
- **React Context**: For global game state (player progress, reaper alignment)
- **Zustand/Jotai**: Lightweight state management for specific features
- **XState**: State machines for complex game logic and transitions

### Performance Optimization
- **Image Optimization**: Next.js Image component with responsive sizing
- **Code Splitting**: Automatic route-based code splitting
- **Dynamic Imports**: For lazily loaded components and features
- **Memoization**: Strategic use of React.memo, useMemo, and useCallback

### Deployment & CI/CD
- **Vercel**: Preferred deployment platform for Next.js applications
- **GitHub Actions**: For automated testing and deployment workflows
- **Lighthouse CI**: For performance and accessibility auditing

---

## 📱 Responsive Design & Accessibility

### Responsive Approach
- **Mobile-first design**: Core experience optimized for smartphones
- **Adaptive layouts**: Different component arrangements based on screen size
- **Breakpoints**:
  - Small: 320px - 639px (Mobile)
  - Medium: 640px - 1023px (Tablet)
  - Large: 1024px+ (Desktop)
- **Touch-friendly UI**: Large interactive elements with appropriate spacing
- **Device-specific enhancements**: 
  - Desktop: Keyboard shortcuts, hover states
  - Mobile: Touch gestures, haptic feedback

### Accessibility Features
- **WCAG 2.1 AA compliance**: Ensuring the game is accessible to users with disabilities
- **Keyboard navigation**: Full functionality available without mouse input
- **Screen reader support**: Proper ARIA attributes and semantic HTML
- **Color contrast**: Meeting minimum 4.5:1 ratio for text readability
- **Text sizing**: Respecting user font size preferences
- **Reduced motion option**: For users sensitive to animations
- **Alternative text**: For all meaningful images and visual elements
- **Focus management**: Clear focus indicators and logical tab order

### Internationalization
- **i18n support**: Framework for adding multiple languages
- **RTL support**: For right-to-left languages
- **Cultural considerations**: Adaptable content for different cultural contexts

---

## 📈 MVP Milestones

| Milestone | Description | Technologies |
|----------|-------------|-------------|
| ✅ Project Setup | Next.js with TypeScript, TailwindCSS, and component structure | Next.js, TypeScript, TailwindCSS |
| ✅ Core UI Components | Responsive layouts, buttons, cards, modals | React components, shadcn/ui |
| ✅ Game UI | Judgment screen with soul data display | React, CSS animations |
| ✅ Soul Generation | System to create diverse souls with moral complexities | TypeScript, data models |
| ✅ Judgment System | Interactive decision making with visual feedback | React context, state management |
| ✅ Alignment Tracking | Visual representation of Reaper's moral tendencies | SVG/Canvas charts, animations |
| ✅ Outcome System | Display afterlife consequences of judgments | Dynamic content rendering |
| ✅ Persistence | Save/load game progress | LocalStorage/IndexedDB |
| ✅ Animations | Smooth transitions between game states | Framer Motion/GSAP |
| ✅ Ending System | Multiple endings based on player choices | Conditional rendering |
| ✅ Responsive Testing | Ensure playability across devices | Cypress/Playwright |

---

## 📂 Project Structure

```
judgment-reapers-dilemma/
├── app/                       # Next.js App Router
│   ├── api/                   # API routes
│   ├── game/                  # Game routes
│   │   ├── judgment/          # Judgment screen
│   │   ├── afterlife/         # Afterlife outcome screen
│   │   └── ending/            # Game ending screen
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                # React components
│   ├── ui/                    # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── game/                  # Game-specific components
│   │   ├── soul-profile.tsx
│   │   ├── judgment-buttons.tsx
│   │   ├── alignment-meter.tsx
│   │   └── ...
│   ├── animations/            # Animation components
│   └── layout/                # Layout components
├── lib/                       # Utility functions
│   ├── souls.ts               # Soul generation logic
│   ├── alignment.ts           # Alignment calculation
│   ├── outcomes.ts            # Outcome generation
│   └── animations.ts          # Animation utilities
├── hooks/                     # Custom React hooks
│   ├── use-game-state.ts
│   └── ...
├── store/                     # State management
│   ├── game-context.tsx       # Game context provider
│   └── ...
├── types/                     # TypeScript type definitions
├── public/                    # Static assets
│   ├── images/
│   ├── fonts/
│   └── sounds/
├── styles/                    # Additional styles
├── tailwind.config.js         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

---

## 📎 Developer Requirements

- Experience with **React** and **Next.js** framework
- Proficiency in **TypeScript** and modern JavaScript
- Familiarity with responsive web design principles
- Knowledge of modern CSS frameworks (TailwindCSS preferred)
- Experience with web animations (Framer Motion, GSAP, or CSS animations)
- Ability to implement procedural or scripted dialogue systems
- Understanding of accessibility best practices (WCAG 2.1)
- Optional: Experience with Canvas/WebGL for advanced visual effects
- Optional: Knowledge of state machines for game state management

---

## 📩 Deliverables

- Next.js project with TypeScript source code
- Assets folder (backgrounds, fonts, portraits, sounds)
- Component library with documentation (Storybook optional)
- Comprehensive README with development and deployment instructions
- CI/CD pipeline configuration for automated testing and deployment
- Responsive web application with cross-browser compatibility
- Optional: Progressive Web App (PWA) configuration for offline capabilities
- Optional: Analytics integration for user engagement tracking
