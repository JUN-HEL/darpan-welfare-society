import type { ImageKey } from "@/content/images";

export const galleryCategories = [
  "All",
  "Community",
  "Education",
  "Healthcare",
  "Events",
  "Welfare",
  "Environment",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "All">;
  title: string;
  caption: string;
  imageKey: ImageKey;
  ratio: "portrait" | "landscape" | "square" | "tall" | "panorama";
  tone?: "linen" | "sand" | "clay" | "forest";
}

/**
 * The gallery uses only photography supplied by Darpan Welfare Society.
 *
 * Images are grouped by what is visible in the frame, not by an assumed
 * programme name. Captions stay neutral: no names, dates, locations,
 * beneficiary identities or impact claims are inferred from a photograph.
 * Replacement remains simple — edit the referenced slot in
 * `src/content/images.ts`, then review the caption here.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "community-01",
    category: "Community",
    title: "A shared purpose",
    caption:
      "Health workers, volunteers and community members gather for a group photograph in a school hall.",
    imageKey: "galleryCommunity01",
    ratio: "landscape",
    tone: "clay",
  },
  {
    id: "education-01",
    category: "Education",
    title: "A school assembly",
    caption:
      "Children in school uniform stand together in a courtyard during a school gathering.",
    imageKey: "galleryEducation01",
    ratio: "panorama",
    tone: "linen",
  },
  {
    id: "health-01",
    category: "Healthcare",
    title: "At the registration desk",
    caption:
      "A health camp registration desk — nursing students, staff and community members sharing a space of care.",
    imageKey: "galleryHealth01",
    ratio: "landscape",
    tone: "sand",
  },
  {
    id: "events-01",
    category: "Events",
    title: "Sakhi: a stage for women",
    caption:
      "Women stand on a stage holding a framed picture at a Sakhi Welfare Foundation event.",
    imageKey: "galleryEvents01",
    ratio: "landscape",
    tone: "forest",
  },
  {
    id: "environment-01",
    category: "Environment",
    title: "Van Mahotsav",
    caption:
      "A group stands with a Van Mahotsav banner during a plantation drive.",
    imageKey: "galleryEnvironment01",
    ratio: "landscape",
    tone: "clay",
  },
  {
    id: "welfare-01",
    category: "Welfare",
    title: "A bag of essentials",
    caption:
      "A bag marked Darpan Welfare Society is handed over in a storeroom.",
    imageKey: "galleryWelfare01",
    ratio: "portrait",
    tone: "linen",
  },
  {
    id: "community-02",
    category: "Community",
    title: "A room of many voices",
    caption:
      "A community meeting in a hall with tiered seating and patterned walls.",
    imageKey: "galleryCommunity03",
    ratio: "landscape",
    tone: "sand",
  },
  {
    id: "health-02",
    category: "Healthcare",
    title: "A closer look",
    caption:
      "A health worker examines a child's eye with a handheld instrument.",
    imageKey: "galleryHealth02",
    ratio: "tall",
    tone: "forest",
  },
  {
    id: "education-02",
    category: "Education",
    title: "A moment of recognition",
    caption:
      "A woman hands a small gift to a student during a school gathering.",
    imageKey: "galleryEducation02",
    ratio: "portrait",
    tone: "linen",
  },
  {
    id: "welfare-02",
    category: "Welfare",
    title: "Carrying it together",
    caption:
      "Four men hold a bag marked Darpan Welfare Society in a storeroom.",
    imageKey: "galleryWelfare02",
    ratio: "portrait",
    tone: "clay",
  },
  {
    id: "events-02",
    category: "Events",
    title: "A room full of attention",
    caption:
      "A woman speaks to an audience at a community programme in a school hall.",
    imageKey: "galleryEvents02",
    ratio: "landscape",
    tone: "sand",
  },
  {
    id: "environment-02",
    category: "Environment",
    title: "Hands in the soil",
    caption: "Two women planting a sapling together in a garden.",
    imageKey: "galleryEnvironment02",
    ratio: "portrait",
    tone: "linen",
  },
  {
    id: "community-03",
    category: "Community",
    title: "Planting together",
    caption:
      "Adults and children planting saplings in a courtyard garden.",
    imageKey: "galleryCommunity04",
    ratio: "landscape",
    tone: "forest",
  },
  {
    id: "health-03",
    category: "Healthcare",
    title: "The team behind the camp",
    caption:
      "Health workers and volunteers photographed in a clinic room.",
    imageKey: "galleryHealth03",
    ratio: "landscape",
    tone: "linen",
  },
  {
    id: "welfare-03",
    category: "Welfare",
    title: "Dignity in the handover",
    caption:
      "A woman receives a bag marked Darpan Welfare Society.",
    imageKey: "galleryWelfare03",
    ratio: "portrait",
    tone: "sand",
  },
  {
    id: "education-03",
    category: "Education",
    title: "A conversation in the schoolyard",
    caption:
      "A woman and a student stand together near a school flagpole.",
    imageKey: "galleryEducation03",
    ratio: "tall",
    tone: "clay",
  },
  {
    id: "events-03",
    category: "Events",
    title: "Listening together",
    caption:
      "Attendees at a community programme in a school hall.",
    imageKey: "galleryEvents03",
    ratio: "landscape",
    tone: "linen",
  },
  {
    id: "environment-03",
    category: "Environment",
    title: "A sapling, planted",
    caption: "A woman tends a young sapling beside a building.",
    imageKey: "galleryEnvironment03",
    ratio: "portrait",
    tone: "clay",
  },
  {
    id: "health-04",
    category: "Healthcare",
    title: "A quiet consultation",
    caption:
      "A health professional in a white coat sits at a consulting desk.",
    imageKey: "galleryHealth04",
    ratio: "tall",
    tone: "sand",
  },
  {
    id: "welfare-04",
    category: "Welfare",
    title: "A helping hand",
    caption:
      "A bag is handed over at a Darpan Welfare Society programme.",
    imageKey: "galleryWelfare04",
    ratio: "square",
    tone: "linen",
  },
  {
    id: "community-04",
    category: "Community",
    title: "Together outside the office",
    caption:
      "A group photograph outside a government office building, with staff wearing identification badges.",
    imageKey: "galleryCommunity02",
    ratio: "landscape",
    tone: "clay",
  },
  {
    id: "health-05",
    category: "Healthcare",
    title: "Checking in",
    caption:
      "Volunteers assist people at a registration desk in a hall.",
    imageKey: "galleryHealth05",
    ratio: "landscape",
    tone: "forest",
  },
  {
    id: "education-04",
    category: "Education",
    title: "Learning, together",
    caption:
      "Students and guests gather in a school courtyard.",
    imageKey: "galleryEducation04",
    ratio: "panorama",
    tone: "sand",
  },
  {
    id: "events-04",
    category: "Events",
    title: "A community in one frame",
    caption:
      "A group photograph in a hall with red-and-white patterned walls.",
    imageKey: "galleryEvents04",
    ratio: "landscape",
    tone: "clay",
  },
  {
    id: "welfare-05",
    category: "Welfare",
    title: "A gift, offered with respect",
    caption:
      "A woman receives a bag beside a Darpan Welfare Society banner.",
    imageKey: "galleryWelfare05",
    ratio: "panorama",
    tone: "sand",
  },
  {
    id: "environment-04",
    category: "Environment",
    title: "Tending the green",
    caption:
      "Two volunteers plant saplings in a garden.",
    imageKey: "galleryEnvironment04",
    ratio: "portrait",
    tone: "forest",
  },
  {
    id: "community-05",
    category: "Community",
    title: "A gathering in the hills",
    caption:
      "An outdoor gathering with a mountain landscape in the background.",
    imageKey: "galleryCommunity05",
    ratio: "tall",
    tone: "linen",
  },
  {
    id: "health-06",
    category: "Healthcare",
    title: "A child at the clinic",
    caption:
      "A child and an adult at a clinic during an eye camp.",
    imageKey: "galleryHealth06",
    ratio: "tall",
    tone: "clay",
  },
  {
    id: "community-06",
    category: "Community",
    title: "Outside the office",
    caption:
      "A group stands together outside a government office building.",
    imageKey: "galleryCommunity06",
    ratio: "tall",
    tone: "clay",
  },
  {
    id: "events-05",
    category: "Events",
    title: "A team together",
    caption:
      "A group poses in a hall with red-and-white patterned walls.",
    imageKey: "galleryEvents05",
    ratio: "landscape",
    tone: "sand",
  },
  {
    id: "welfare-06",
    category: "Welfare",
    title: "A bag, received",
    caption:
      "A woman hands a bag marked Darpan Welfare Society to a man beside a banner.",
    imageKey: "galleryWelfare06",
    ratio: "square",
    tone: "forest",
  },
  {
    id: "environment-05",
    category: "Environment",
    title: "Caring for a garden",
    caption:
      "A person tends plants beside a low wall.",
    imageKey: "galleryEnvironment05",
    ratio: "portrait",
    tone: "linen",
  },
];
