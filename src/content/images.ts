/**
 * Central image registry.
 *
 * Every editorial photograph on the site points to an entry below. Files live
 * under `public/images/…` and are optimised WebP derivatives of photography
 * supplied by Darpan Welfare Society. Original files are kept outside the
 * project and are never overwritten.
 *
 * Captions and alt text describe only what is visible in the frame. They do
 * not infer names, dates, places, beneficiary identities or programme results.
 * Replace a photograph by changing its `src`, then review its `alt` and crop.
 *
 * Do not add stock or AI-generated images here. Only photography supplied or
 * authorised by Darpan Welfare Society should be used.
 */

export interface ImageSlot {
  label: string;
  alt: string;
  src?: string;
  objectPosition?: string;
}

export const imageSlots = {
  homeHero: {
    label: "Community and health team",
    alt: "A group of health workers, volunteers and community members standing together in a school hall.",
    src: "/images/hero/community-health-team.webp",
    objectPosition: "50% 35%",
  },
  homeIntro: {
    label: "Health team portrait",
    alt: "A health team standing together in a clinic room, with framed portraits on the wall behind them.",
    src: "/images/about/clinic-team.webp",
    objectPosition: "50% 38%",
  },
  homeIntroDetail: {
    label: "Planting a sapling",
    alt: "Two women planting a sapling together in a garden.",
    src: "/images/environment/plantation-hands.webp",
    objectPosition: "50% 55%",
  },
  homeActionFeature: {
    label: "A bag of essentials",
    alt: "A bag marked Darpan Welfare Society is handed over in a storeroom.",
    src: "/images/welfare/ration-handover.webp",
    objectPosition: "50% 35%",
  },
  homeActionTop: {
    label: "A moment of recognition",
    alt: "A woman hands a small gift to a student during a school gathering.",
    src: "/images/education/school-recognition.webp",
    objectPosition: "50% 38%",
  },
  homeActionBottom: {
    label: "Eye screening",
    alt: "A health worker examines a child's eye with a handheld instrument.",
    src: "/images/health/eye-screening.webp",
    objectPosition: "50% 30%",
  },
  homeActionWide: {
    label: "A community meeting",
    alt: "A large group poses for a photograph in a hall with patterned walls.",
    src: "/images/community/community-meeting.webp",
    objectPosition: "50% 42%",
  },
  homeInstagram: {
    label: "A women's programme",
    alt: "Women stand on a stage holding a framed picture at a Sakhi Welfare Foundation event.",
    src: "/images/community/sakhi-stage.webp",
    objectPosition: "50% 45%",
  },
  aboutHero: {
    label: "About image",
    alt: "Photograph representing Darpan Welfare Society's people and purpose, to be supplied.",
  },
  aboutWho: {
    label: "Community plantation",
    alt: "A group of people gathered around a newly planted sapling while one person photographs the moment.",
    src: "/images/about/community-plantation.webp",
    objectPosition: "45% 50%",
  },
  aboutStoryTall: {
    label: "A sapling, planted",
    alt: "A woman in an orange sari tends a sapling beside a building.",
    src: "/images/about/sapling-ceremony.webp",
    objectPosition: "50% 45%",
  },
  aboutStoryWide: {
    label: "A community gathering",
    alt: "An audience seated at a community programme in a school hall.",
    src: "/images/about/community-gathering.webp",
    objectPosition: "50% 40%",
  },
  aboutApproach: {
    label: "Planting together",
    alt: "Adults and children planting saplings in a courtyard garden.",
    src: "/images/about/planting-together.webp",
    objectPosition: "50% 50%",
  },
  workHero: {
    label: "An eye camp in progress",
    alt: "A child receives an eye examination in a clinic room.",
    src: "/images/health/eye-camp-wide.webp",
    objectPosition: "50% 45%",
  },
  workLivelihood: {
    label: "Livelihood support",
    alt: "A woman hands a Darpan Welfare Society box to a man in a classroom.",
    src: "/images/livelihood/box-handover.webp",
    objectPosition: "50% 38%",
  },
  workHealthcare: {
    label: "Healthcare activity",
    alt: "Nursing students and community members at a health camp registration desk, with a woman writing notes beside boxes of medicine.",
    src: "/images/health/health-camp-registration.webp",
    objectPosition: "46% 52%",
  },
  workEducation: {
    label: "Education initiative",
    alt: "Students in uniform and guests at a school gathering in a courtyard.",
    src: "/images/education/school-assembly.webp",
    objectPosition: "50% 45%",
  },
  workWomen: {
    label: "Women empowerment",
    alt: "A woman speaks to an audience at a community programme in a school hall.",
    src: "/images/community/women-gathering.webp",
    objectPosition: "38% 42%",
  },
  workChild: {
    label: "Child welfare",
    alt: "Children in school uniform gather around two adults planting a sapling.",
    src: "/images/education/children-planting.webp",
    objectPosition: "50% 48%",
  },
  workElderly: {
    label: "Elderly care",
    alt: "Photograph from Darpan Welfare Society's work with older people, to be supplied.",
  },
  workAnimal: {
    label: "Animal welfare",
    alt: "Photograph from Darpan Welfare Society's animal welfare work, to be supplied.",
  },
  workRural: {
    label: "Rural development",
    alt: "An outdoor gathering at a table with a mountain landscape behind.",
    src: "/images/community/hills-gathering.webp",
    objectPosition: "50% 45%",
  },
  workEnvironment: {
    label: "Environmental protection",
    alt: "A group standing behind a Van Mahotsav banner during a plantation drive.",
    src: "/images/environment/van-mahotsav.webp",
    objectPosition: "50% 45%",
  },
  workRelief: {
    label: "Humanitarian relief",
    alt: "Four men hold a bag marked Darpan Welfare Society in a storeroom.",
    src: "/images/welfare/relief-bag-team.webp",
    objectPosition: "50% 38%",
  },
  workCommunity: {
    label: "Community development",
    alt: "A large group poses for a photograph in a hall with patterned walls.",
    src: "/images/community/community-meeting.webp",
    objectPosition: "50% 40%",
  },
  contactImage: {
    label: "The Darpan team",
    alt: "A group stands together outside a government office building.",
    src: "/images/community/community-team-outside.webp",
    objectPosition: "50% 42%",
  },

  galleryCommunity01: {
    label: "Community and health team",
    alt: "A group of health workers, volunteers and community members standing together in a school hall.",
    src: "/images/hero/community-health-team.webp",
    objectPosition: "50% 35%",
  },
  galleryCommunity02: {
    label: "Together outside the office",
    alt: "A group stands together outside a government office building.",
    src: "/images/community/community-team-outside.webp",
    objectPosition: "50% 40%",
  },
  galleryCommunity03: {
    label: "A room of many voices",
    alt: "A large group poses for a photograph in a hall with patterned walls.",
    src: "/images/community/community-meeting.webp",
    objectPosition: "50% 40%",
  },
  galleryCommunity04: {
    label: "Planting together",
    alt: "Adults and children planting saplings in a courtyard garden.",
    src: "/images/about/planting-together.webp",
    objectPosition: "50% 50%",
  },
  galleryCommunity05: {
    label: "A gathering in the hills",
    alt: "An outdoor gathering at a table with a mountain landscape behind.",
    src: "/images/community/hills-gathering.webp",
    objectPosition: "50% 45%",
  },
  galleryEducation01: {
    label: "A school assembly",
    alt: "Children in school uniform lined up in a courtyard during a school assembly.",
    src: "/images/education/school-gathering.webp",
    objectPosition: "50% 45%",
  },
  galleryEducation02: {
    label: "A moment of recognition",
    alt: "A woman hands a small gift to a student during a school gathering.",
    src: "/images/education/school-recognition.webp",
    objectPosition: "50% 38%",
  },
  galleryEducation03: {
    label: "A conversation in the schoolyard",
    alt: "A woman and a student stand together near a flagpole in a schoolyard.",
    src: "/images/education/school-conversation.webp",
    objectPosition: "50% 40%",
  },
  galleryEducation04: {
    label: "Learning, together",
    alt: "Students in uniform and guests at a school gathering in a courtyard.",
    src: "/images/education/school-assembly.webp",
    objectPosition: "50% 45%",
  },
  galleryHealth01: {
    label: "At the registration desk",
    alt: "A woman writes at a health camp registration desk while nursing students, staff and community members look on.",
    src: "/images/health/health-camp-registration.webp",
    objectPosition: "46% 52%",
  },
  galleryHealth02: {
    label: "A closer look",
    alt: "A health worker examines a child's eye with a handheld instrument.",
    src: "/images/health/eye-screening.webp",
    objectPosition: "50% 30%",
  },
  galleryHealth03: {
    label: "The team behind the camp",
    alt: "A health team standing together in a clinic room, with framed portraits on the wall behind them.",
    src: "/images/about/clinic-team.webp",
    objectPosition: "50% 38%",
  },
  galleryHealth04: {
    label: "A quiet consultation",
    alt: "A health professional in a white coat sits at a consulting desk.",
    src: "/images/health/doctor-consultation.webp",
    objectPosition: "50% 35%",
  },
  galleryHealth05: {
    label: "Checking in",
    alt: "Volunteers assist people at a registration desk in a hall.",
    src: "/images/community/eye-camp-desk.webp",
    objectPosition: "50% 42%",
  },
  galleryHealth06: {
    label: "A child at the clinic",
    alt: "A child sits on a chair while an adult in a blue patterned kurta looks on in a clinic room.",
    src: "/images/health/child-consultation.webp",
    objectPosition: "50% 45%",
  },
  galleryEvents01: {
    label: "Sakhi: a stage for women",
    alt: "Women stand on a stage holding a framed picture at a Sakhi Welfare Foundation event.",
    src: "/images/community/sakhi-stage.webp",
    objectPosition: "50% 45%",
  },
  galleryEvents02: {
    label: "A room full of attention",
    alt: "A woman speaks to an audience at a community programme in a school hall.",
    src: "/images/community/women-gathering.webp",
    objectPosition: "38% 42%",
  },
  galleryEvents03: {
    label: "Listening together",
    alt: "An audience seated at a community programme in a school hall.",
    src: "/images/about/community-gathering.webp",
    objectPosition: "50% 40%",
  },
  galleryEvents04: {
    label: "A community in one frame",
    alt: "A group photograph in a hall with red-and-white patterned walls.",
    src: "/images/community/community-group.webp",
    objectPosition: "50% 42%",
  },
  galleryWelfare01: {
    label: "A bag of essentials",
    alt: "A bag marked Darpan Welfare Society is handed over in a storeroom.",
    src: "/images/welfare/ration-handover.webp",
    objectPosition: "50% 35%",
  },
  galleryWelfare02: {
    label: "Carrying it together",
    alt: "Four men hold a bag marked Darpan Welfare Society in a storeroom.",
    src: "/images/welfare/relief-bag-team.webp",
    objectPosition: "50% 35%",
  },
  galleryWelfare03: {
    label: "Dignity in the handover",
    alt: "A woman in a black hijab receives a bag marked Darpan Welfare Society.",
    src: "/images/welfare/welfare-handover.webp",
    objectPosition: "50% 35%",
  },
  galleryWelfare04: {
    label: "A helping hand",
    alt: "Two women hold a bag marked Darpan Welfare Society beside a banner.",
    src: "/images/welfare/welfare-bag.webp",
    objectPosition: "50% 45%",
  },
  galleryWelfare05: {
    label: "A gift, offered with respect",
    alt: "A woman hands a bag marked Darpan Welfare Society to another woman beside a banner.",
    src: "/images/welfare/welfare-bag-banner.webp",
    objectPosition: "50% 45%",
  },
  galleryEnvironment01: {
    label: "Van Mahotsav",
    alt: "A group standing behind a Van Mahotsav banner during a plantation drive.",
    src: "/images/environment/van-mahotsav.webp",
    objectPosition: "50% 45%",
  },
  galleryEnvironment02: {
    label: "Hands in the soil",
    alt: "Two women planting a sapling together in a garden.",
    src: "/images/environment/plantation-hands.webp",
    objectPosition: "50% 55%",
  },
  galleryEnvironment03: {
    label: "A sapling, planted",
    alt: "A woman in an orange sari tends a sapling beside a building.",
    src: "/images/about/sapling-ceremony.webp",
    objectPosition: "50% 45%",
  },
  galleryEnvironment04: {
    label: "Tending the green",
    alt: "Two volunteers in Darpan Welfare Society shirts planting saplings.",
    src: "/images/environment/plantation-team.webp",
    objectPosition: "50% 50%",
  },
  galleryEnvironment05: {
    label: "Caring for a garden",
    alt: "A person in a pink Darpan Welfare Society shirt crouches to tend plants beside a low wall.",
    src: "/images/environment/garden-care.webp",
    objectPosition: "50% 45%",
  },
  galleryWelfare06: {
    label: "A bag, received",
    alt: "A woman in a green sari hands a white bag marked Darpan Welfare Society to a man, while another woman in green stands beside them.",
    src: "/images/welfare/welfare-bag-handover.webp",
    objectPosition: "50% 38%",
  },
  galleryCommunity06: {
    label: "Outside the office",
    alt: "A group of people stands outside a government office building.",
    src: "/images/community/team-outside-wide.webp",
    objectPosition: "50% 58%",
  },
  galleryEvents05: {
    label: "A team together",
    alt: "A group of people, several wearing identification lanyards, pose in a hall with red-and-white patterned walls.",
    src: "/images/community/community-indoors.webp",
    objectPosition: "50% 45%",
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof imageSlots;
