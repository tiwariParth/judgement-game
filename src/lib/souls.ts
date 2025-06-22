import { Soul, LifeEvent } from "@/types/game-types";
import { nanoid } from "nanoid";

// Sample first names
const firstNames = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Ethan",
  "Sophia",
  "Mason",
  "Isabella",
  "Jacob",
  "Mei",
  "Raj",
  "Sofia",
  "Mohammed",
  "Aisha",
  "Chen",
  "Yuki",
  "Diego",
  "Elena",
  "Amir",
  "Fatima",
  "Jamal",
  "Zara",
  "Kwame",
  "Priya",
  "Hiroshi",
  "Leila",
  "Oscar",
  "Ingrid",
  "Viktor",
  "Jiao",
  "Enzo",
];

// Sample last names
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Patel",
  "Kim",
  "Lee",
  "Nguyen",
  "Wang",
  "Singh",
  "Kumar",
  "Ali",
  "Khan",
  "Chen",
  "Yang",
  "Wu",
  "González",
  "Hernández",
  "López",
  "Müller",
  "Fischer",
  "Ivanov",
  "Sato",
  "Suzuki",
  "Takahashi",
  "Kowalski",
  "Zulu",
  "Okafor",
];

// Sample causes of death
const causesOfDeath = [
  "Heart failure during sleep",
  "Car accident on a rainy night",
  "Cancer after a long battle",
  "Peacefully in their sleep of old age",
  "Hiking accident in the mountains",
  "Sudden stroke at work",
  "Saving a child from drowning",
  "During a humanitarian mission abroad",
  "House fire while rescuing a pet",
  "Complications from a long illness",
  "Protecting a stranger from harm",
  "Medical malpractice during routine surgery",
  "Caught in the crossfire of a conflict",
  "Fell from a high place while taking photos",
  "Allergic reaction to an unknown substance",
];

// Sample good life events
const goodLifeEvents = [
  "Donated 30% of their income to charity for a decade",
  "Founded a nonprofit organization helping homeless people",
  "Regularly volunteered at a local animal shelter",
  "Adopted three children from war-torn countries",
  "Saved a stranger from drowning",
  "Provided free medical care in underserved communities",
  "Risked their life to save others during a natural disaster",
  "Dedicated their career to environmental conservation",
  "Took in elderly neighbors and cared for them",
  "Created a scholarship fund for disadvantaged students",
  "Mentored dozens of at-risk youth",
  "Donated bone marrow to a stranger",
  "Consistently stood up against discrimination and injustice",
  "Fostered over 20 children throughout their lifetime",
];

// Sample bad life events
const badLifeEvents = [
  "Embezzled money from their workplace",
  "Abandoned their family for a new life",
  "Bullied colleagues consistently at work",
  "Spread malicious rumors that ruined someone's reputation",
  "Committed insurance fraud after staging an accident",
  "Neglected their elderly parents despite having means to help",
  "Regularly drove while intoxicated",
  "Cheated multiple business partners",
  "Stole credit for others' work to advance their career",
  "Engaged in online harassment campaigns",
  "Vandalized public property repeatedly",
  "Defrauded vulnerable elderly people",
  "Abused their position of authority for personal gain",
  "Refused to help someone in desperate need despite easy ability to do so",
];

// Sample morally ambiguous life events
const ambiguousLifeEvents = [
  "Stole food to feed their starving siblings",
  "Lied on a resume to get a job that supported their family",
  "Kept a large sum of money they found without searching for the owner",
  "Cut ties with family members who were toxic but dependent",
  "Refused to donate an organ to an estranged relative",
  "Turned in a close friend to authorities for a serious crime",
  "Had an affair but later dedicated themselves to repairing their marriage",
  "Used questionable methods to bring a corrupt official to justice",
  "Joined a violent protest against genuine oppression",
  "Euthanized a suffering parent against legal regulations",
  "Hid their taxes but anonymously donated larger sums to charity",
  "Left the scene of an accident out of fear but anonymously paid for damages later",
  "Fabricated evidence to convict someone they genuinely believed was guilty",
];

// Sample final thoughts
const finalThoughts = [
  "I wonder if I made a difference in the world.",
  "I wish I had more time with my loved ones.",
  "Did I do enough good to outweigh my mistakes?",
  "I hope someone will remember me fondly.",
  "I never got to say goodbye to them.",
  "If only I could have one more chance.",
  "I regret not taking more risks in life.",
  "I hope they can forgive me for what I did.",
  "Was it all worth it in the end?",
  "I'm not ready to face what comes next.",
  "I wish I could undo my greatest mistake.",
  "I'm proud of the life I lived, despite everything.",
  "I never found what I was looking for.",
  "I hope my children will be okay without me.",
];

// Sample personality traits
const personalityTraits = [
  "Kind",
  "Ambitious",
  "Loyal",
  "Deceitful",
  "Generous",
  "Selfish",
  "Patient",
  "Impulsive",
  "Courageous",
  "Fearful",
  "Honest",
  "Manipulative",
  "Compassionate",
  "Callous",
  "Wise",
  "Foolish",
  "Forgiving",
  "Vengeful",
  "Disciplined",
  "Chaotic",
  "Humble",
  "Arrogant",
  "Trusting",
  "Suspicious",
  "Creative",
  "Practical",
  "Optimistic",
  "Pessimistic",
  "Responsible",
  "Reckless",
];

/**
 * Generates a random soul with life events and final thoughts
 */
export function generateSoul(): Soul {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  const name = `${firstName} ${lastName}`;

  // Generate a random age between 18 and 95
  const age = Math.floor(Math.random() * 78) + 18;

  const causeOfDeath = randomItem(causesOfDeath);

  // Generate between 3 and 6 life events
  const numberOfEvents = Math.floor(Math.random() * 4) + 3;
  const lifeEvents = generateLifeEvents(numberOfEvents, age);

  const finalThought = randomItem(finalThoughts);

  // Generate a life summary
  const lifeSummary = generateLifeSummary(name, age, lifeEvents);

  // Each soul has a random ID
  const id = nanoid();

  // Randomly assign personality traits
  const personalityTraits =
    Math.random() > 0.3 ? generatePersonalityTraits() : undefined;

  return {
    id,
    name,
    age,
    causeOfDeath,
    lifeEvents,
    finalThought,
    lifeSummary,
    personalityTraits,
  };
}

/**
 * Generates a predefined soul with specific moral complexity
 */
export function generatePredefinedSoul(
  type: "good" | "evil" | "complex"
): Soul {
  if (type === "good") {
    return {
      id: nanoid(),
      name: "Eleanor Michaels",
      age: 78,
      causeOfDeath: "Heart failure while volunteering at a homeless shelter",
      lifeEvents: [
        {
          id: nanoid(),
          description:
            "Founded a charity that built schools in developing countries",
          moralValue: 0.9,
          ageWhenOccurred: 35,
        },
        {
          id: nanoid(),
          description: "Adopted 4 children from war-torn regions",
          moralValue: 0.8,
          ageWhenOccurred: 40,
        },
        {
          id: nanoid(),
          description:
            "Dedicated retirement to providing free medical aid globally",
          moralValue: 0.85,
          ageWhenOccurred: 65,
        },
        {
          id: nanoid(),
          description: "Occasionally lost temper with family due to stress",
          moralValue: -0.2,
          context: "Always apologized and worked to manage stress better",
          ageWhenOccurred: 50,
        },
      ],
      finalThought: "I only wish I could have done more to help others.",
      lifeSummary:
        "Eleanor Michaels lived a life dedicated to selfless service and compassion. From founding schools in developing countries to adopting children from war-torn regions, her 78 years were characterized by unwavering dedication to improving the lives of others. Despite occasional moments of human weakness, her positive impact on the world was immeasurable.",
      personalityTraits: ["Compassionate", "Selfless", "Determined"],
    };
  }

  if (type === "evil") {
    return {
      id: nanoid(),
      name: "Victor Reynolds",
      age: 62,
      causeOfDeath: "Shot by police during a bank robbery",
      lifeEvents: [
        {
          id: nanoid(),
          description:
            "Embezzled retirement funds from hundreds of elderly clients",
          moralValue: -0.9,
          ageWhenOccurred: 45,
        },
        {
          id: nanoid(),
          description: "Abandoned family, leaving them destitute",
          moralValue: -0.7,
          ageWhenOccurred: 40,
        },
        {
          id: nanoid(),
          description: "Ordered violence against those who opposed his schemes",
          moralValue: -0.95,
          ageWhenOccurred: 55,
        },
        {
          id: nanoid(),
          description: "Anonymously paid medical bills for a sick child",
          moralValue: 0.4,
          context: "The child reminded him of his own daughter",
          ageWhenOccurred: 60,
        },
      ],
      finalThought: "They never understood that I did what I had to do.",
      lifeSummary:
        "Victor Reynolds pursued wealth and power through increasingly unethical means throughout his 62 years. His life was marked by embezzlement, abandonment, and violence, leaving a trail of victims in his wake. While a rare moment of compassion surfaced near the end of his life, it did little to offset the extensive damage he inflicted on countless innocent lives.",
      personalityTraits: ["Manipulative", "Ruthless", "Selfish"],
    };
  }

  // Complex/ambiguous soul
  return {
    id: nanoid(),
    name: "Raj Malhotra",
    age: 42,
    causeOfDeath: "Heart failure while saving a stranger at a train station",
    lifeEvents: [
      {
        id: nanoid(),
        description: "Stole money in his 20s to pay for sister's surgery",
        moralValue: -0.3,
        context: "The surgery was life-saving and he had no other options",
        ageWhenOccurred: 25,
      },
      {
        id: nanoid(),
        description: "Was verbally abusive to his wife during his addiction",
        moralValue: -0.6,
        context: "Later reformed through therapy and made amends",
        ageWhenOccurred: 30,
      },
      {
        id: nanoid(),
        description: "Ran a flood relief shelter for 6 years",
        moralValue: 0.7,
        ageWhenOccurred: 35,
      },
      {
        id: nanoid(),
        description:
          "Testified against a friend in court to protect an innocent person",
        moralValue: 0.5,
        context: "Lost many relationships as a result",
        ageWhenOccurred: 40,
      },
    ],
    finalThought: "I hope someone remembers the good I tried to do.",
    lifeSummary:
      "Raj Malhotra's 42 years reflected the complicated nature of human morality. His early life was marred by difficult choices and addiction, causing harm to those closest to him. Yet his later years showed remarkable growth as he dedicated himself to helping others through disaster relief and standing up for justice, even at great personal cost. His final act of selflessness ultimately cost him his life.",
    personalityTraits: ["Resilient", "Courageous", "Flawed"],
  };
}

// Helper function to generate a list of life events
function generateLifeEvents(count: number, maxAge: number): LifeEvent[] {
  const events: LifeEvent[] = [];

  // Ensure a mix of good, bad, and ambiguous events
  const goodCount = Math.ceil(count / 3);
  const badCount = Math.ceil(count / 3);
  const ambiguousCount = count - goodCount - badCount;

  // Add good events
  for (let i = 0; i < goodCount; i++) {
    const ageWhenOccurred = Math.floor(Math.random() * (maxAge - 18)) + 18;
    events.push({
      id: nanoid(),
      description: randomItem(goodLifeEvents),
      moralValue: 0.5 + Math.random() * 0.5, // 0.5 to 1.0
      ageWhenOccurred,
    });
  }

  // Add bad events
  for (let i = 0; i < badCount; i++) {
    const ageWhenOccurred = Math.floor(Math.random() * (maxAge - 18)) + 18;
    events.push({
      id: nanoid(),
      description: randomItem(badLifeEvents),
      moralValue: -1 + Math.random() * 0.5, // -1.0 to -0.5
      ageWhenOccurred,
    });
  }

  // Add ambiguous events
  for (let i = 0; i < ambiguousCount; i++) {
    const ageWhenOccurred = Math.floor(Math.random() * (maxAge - 18)) + 18;
    events.push({
      id: nanoid(),
      description: randomItem(ambiguousLifeEvents),
      moralValue: -0.4 + Math.random() * 0.8, // -0.4 to 0.4
      ageWhenOccurred,
    });
  }

  return events.sort((a, b) => a.ageWhenOccurred! - b.ageWhenOccurred!);
}

// Helper function to get a random item from an array
function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates a life summary based on the soul's details and events
 */
function generateLifeSummary(
  name: string,
  age: number,
  events: LifeEvent[]
): string {
  // Calculate overall moral tendency
  const moralSum = events.reduce((sum, event) => sum + event.moralValue, 0);
  const moralAverage = moralSum / events.length;

  // Determine life characterization based on moral average
  let lifeCharacterization = "";
  if (moralAverage > 0.5) {
    lifeCharacterization = "a generally virtuous";
  } else if (moralAverage > 0.2) {
    lifeCharacterization = "a mostly decent";
  } else if (moralAverage > -0.2) {
    lifeCharacterization = "a morally complex";
  } else if (moralAverage > -0.5) {
    lifeCharacterization = "a troubled";
  } else {
    lifeCharacterization = "a morally corrupt";
  }

  // Create a basic life summary
  return `${name} lived ${lifeCharacterization} life spanning ${age} years. Their journey was marked by significant choices that shaped their character and the lives of those around them. The consequences of these actions now await judgment.`;
}

/**
 * Generates a random set of personality traits
 */
function generatePersonalityTraits(): string[] {
  const numTraits = Math.floor(Math.random() * 3) + 1; // 1-3 traits
  const traits: string[] = [];

  // Get random traits, ensuring no duplicates
  while (traits.length < numTraits) {
    const trait = randomItem(personalityTraits);
    if (!traits.includes(trait)) {
      traits.push(trait);
    }
  }

  return traits;
}
