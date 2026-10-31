import type { ImageKey } from "@/content/images";

export interface FocusArea {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  imageKey: ImageKey;
  photoCaption?: string;
  publiclyNoted?: boolean;
}

/**
 * These are areas of focus, presented with care. Only the livelihood entry has
 * a published source note. None of these entries should be read as a claim
 * about completed programmes, reach or outcomes.
 */
export const focusAreas: FocusArea[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    shortTitle: "Health & wellbeing",
    description:
      "Supporting access to health awareness, timely care and the everyday conditions that allow people and families to live well.",
    imageKey: "workHealthcare",
    photoCaption: "A health camp registration desk",
  },
  {
    id: "education",
    title: "Education",
    shortTitle: "Learning & opportunity",
    description:
      "Creating space for curiosity, learning and the confidence that comes from having the support to continue.",
    imageKey: "workEducation",
    photoCaption: "A school gathering",
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    shortTitle: "Voice & agency",
    description:
      "Recognising women's knowledge, choices and leadership as essential to a fair and flourishing community.",
    imageKey: "workWomen",
    photoCaption: "A women's programme",
  },
  {
    id: "child-welfare",
    title: "Child Welfare",
    shortTitle: "A safe beginning",
    description:
      "Putting children's safety, dignity, learning and wellbeing at the centre of the way communities care for the next generation.",
    imageKey: "workChild",
    photoCaption: "Children planting a sapling",
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    shortTitle: "Dignity at every age",
    description:
      "Valuing older people's experience and supporting companionship, respect and access to the care they need.",
    imageKey: "workElderly",
  },
  {
    id: "animal-welfare",
    title: "Animal Welfare",
    shortTitle: "Compassion beyond us",
    description:
      "Extending the values of care and responsibility to animals, and encouraging kinder everyday choices.",
    imageKey: "workAnimal",
  },
  {
    id: "rural-development",
    title: "Rural Development",
    shortTitle: "Thriving communities",
    description:
      "Working with the grain of rural life — strengthening local opportunity, services and the connections that hold a community together.",
    imageKey: "workRural",
    photoCaption: "An outdoor community gathering",
  },
  {
    id: "environmental-protection",
    title: "Environmental Protection",
    shortTitle: "A shared home",
    description:
      "Caring for the natural systems on which Uttarakhand's communities and future generations depend.",
    imageKey: "workEnvironment",
    photoCaption: "A Van Mahotsav plantation drive",
  },
  {
    id: "livelihood-development",
    title: "Livelihood Development",
    shortTitle: "Skills & self-reliance",
    description:
      "Supporting practical skills, employability and the confidence to build an independent and dignified future.",
    imageKey: "workLivelihood",
    photoCaption: "A Darpan Welfare Society box handed over",
    publiclyNoted: true,
  },
  {
    id: "humanitarian-relief",
    title: "Humanitarian Relief",
    shortTitle: "Care in hard times",
    description:
      "Responding to moments of need with dignity, restraint and a focus on the people most affected.",
    imageKey: "workRelief",
    photoCaption: "A relief bag handed over",
  },
  {
    id: "community-development",
    title: "Community Development",
    shortTitle: "Together, locally",
    description:
      "Supporting the relationships, participation and shared responsibility that allow communities to shape their own future.",
    imageKey: "workCommunity",
    photoCaption: "A community meeting",
  },
];

export const coreValues = [
  {
    name: "Dignity",
    description:
      "Every person deserves to be seen, heard and treated with respect. Care begins with that understanding.",
  },
  {
    name: "Compassion",
    description:
      "We make room for empathy in action — for people, for animals and for the places we share.",
  },
  {
    name: "Integrity",
    description:
      "We choose honesty over appearance, and we publish only what can be supported by facts.",
  },
  {
    name: "Collaboration",
    description:
      "Lasting change is shared work. Communities, partners and volunteers all have something essential to contribute.",
  },
  {
    name: "Stewardship",
    description:
      "We treat trust, resources and the natural world as things to be looked after carefully.",
  },
];

export const approachSteps = [
  {
    title: "Listen first",
    description:
      "We begin with the lived experience and local knowledge of the people closest to an issue.",
  },
  {
    title: "Work together",
    description:
      "We look for the partners, community groups and relationships that can make an effort stronger.",
  },
  {
    title: "Act with consistency",
    description:
      "We value steady, dependable work over promises that cannot yet be kept.",
  },
  {
    title: "Stay accountable",
    description:
      "We keep our public claims tethered to evidence, permission and a clear sense of responsibility.",
  },
];
