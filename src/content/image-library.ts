export type ImageOrientation = "landscape" | "portrait" | "square";

/**
 * Aligns with `public/images/*` top-level folders for workflow + filtering.
 * `placeholders` is for temporary neutral slots until real assets land.
 */
export type ImageTaxonomy =
  | "categories"
  | "editorial"
  | "scenarios"
  | "trust"
  | "placeholders";

export type ImageVariants = {
  desktop?: string;
  mobile?: string;
};

export type ImageLibraryEntry = {
  id: string;
  category: ImageTaxonomy;
  slot: string;
  /** Resolved path under `public/` or absolute URL once remote patterns are curated in `next.config`. */
  src: string;
  alt: string;
  orientation: ImageOrientation;
  photographer?: string;
  sourceUrl?: string;
  license?: string;
  notes?: string;
  variants?: ImageVariants;
};

const PLACEHOLDER_WIDE = "/images/placeholders/neutral-slot.svg";
const PLACEHOLDER_PORTRAIT = "/images/placeholders/neutral-portrait.svg";

/**
 * Central manifest for marketing imagery. Every entry should ship attribution when using third-party photography.
 * TODO (founder): replace placeholder `src` / `variants` with real files under the matching `public/images/...` folder.
 */
export const imageLibrary: ImageLibraryEntry[] = [
  {
    id: "landing-hero-primary",
    category: "editorial",
    slot: "landing-hero",
    src: PLACEHOLDER_WIDE,
    alt: "Cinematic automotive scene placeholder for RideRational hero — replace with licensed real photograph.",
    orientation: "landscape",
    notes:
      "TODO: Source dusk or garage editorial hero (Vancouver-adjacent mood ok). Desktop: 16:9–21:9 feel. See 22_IMAGE_STRATEGY.",
    variants: {
      desktop: PLACEHOLDER_WIDE,
      mobile: PLACEHOLDER_PORTRAIT,
    },
  },
  {
    id: "landing-proof-split",
    category: "editorial",
    slot: "landing-default-vs-sweet",
    src: PLACEHOLDER_WIDE,
    alt: "Editorial split-frame placeholder contrasting default choice with a sweeter used option.",
    orientation: "landscape",
    notes:
      "TODO: Single wide editorial frame or diptych treatment—avoid loud stock clichés; prefer restraint and metal highlights.",
  },
  {
    id: "landing-teaser-invite-panel",
    category: "editorial",
    slot: "landing-teaser-invite",
    src: PLACEHOLDER_WIDE,
    alt: "Wide panel placeholder for proof-before-commitment invitation on the landing page.",
    orientation: "landscape",
    notes: "TODO: Calm proof moment—could echo teaser composition without revealing paid shortlist depth.",
  },
  {
    id: "scenario-benchmark-visual",
    category: "scenarios",
    slot: "teaser-benchmark",
    src: PLACEHOLDER_WIDE,
    alt: "Placeholder for benchmark or default vehicle silhouette—replace with credible, non-misleading real vehicle photo.",
    orientation: "landscape",
    notes:
      "TODO: Use representative “safe default” mood (not a specific VIN claim). Keep calmer exposure than sweet-spot frame.",
    variants: {
      desktop: PLACEHOLDER_WIDE,
      mobile: PLACEHOLDER_PORTRAIT,
    },
  },
  {
    id: "scenario-sweet-spot-visual",
    category: "scenarios",
    slot: "teaser-sweet-spot",
    src: PLACEHOLDER_WIDE,
    alt: "Placeholder for sweet-spot vehicle scene—replace with licensed real photography matching category tone.",
    orientation: "landscape",
    notes:
      "TODO: More cinematic presence than benchmark slot; still honest framing (no fake scarcity or guarantee language).",
    variants: {
      desktop: PLACEHOLDER_WIDE,
      mobile: PLACEHOLDER_PORTRAIT,
    },
  },
  {
    id: "trust-signal-strip",
    category: "trust",
    slot: "landing-trust",
    src: PLACEHOLDER_WIDE,
    alt: "Trust module wide photography placeholder—studio detail or restrained interior acceptable.",
    orientation: "landscape",
    notes: "TODO: Subtle craftsmanship cue (gauge, leather stitch, road ribbon)—avoid meme angles or neon overload.",
  },
  {
    id: "category-sports-car",
    category: "categories",
    slot: "category-card-sports-car",
    src: PLACEHOLDER_WIDE,
    alt: "Sports car category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Driver-focused coupe silhouette; dramatic but not comic-book.",
  },
  {
    id: "category-performance-sedan",
    category: "categories",
    slot: "category-card-performance-sedan",
    src: PLACEHOLDER_WIDE,
    alt: "Performance sedan category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Four-door pace + daily usability cues.",
  },
  {
    id: "category-hot-hatch",
    category: "categories",
    slot: "category-card-hot-hatch",
    src: PLACEHOLDER_WIDE,
    alt: "Hot hatch category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Compact, playful stance; city-adjacent ok.",
  },
  {
    id: "category-luxury-suv",
    category: "categories",
    slot: "category-card-luxury-suv",
    src: PLACEHOLDER_WIDE,
    alt: "Luxury SUV category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Presence + utility without overwrought off-road fantasy.",
  },
  {
    id: "category-rugged-luxury",
    category: "categories",
    slot: "category-card-rugged-luxury",
    src: PLACEHOLDER_WIDE,
    alt: "Rugged luxury category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Boxy premium SUV / adventure-adjacent mood; keep tasteful.",
  },
  {
    id: "category-premium-gt",
    category: "categories",
    slot: "category-card-premium-gt",
    src: PLACEHOLDER_WIDE,
    alt: "Premium GT category tile placeholder.",
    orientation: "landscape",
    notes: "TODO: Long-leg grand-touring silhouette; dusk road premium.",
  },
  {
    id: "discover-step-backdrop",
    category: "editorial",
    slot: "discover-flow-ambient",
    src: PLACEHOLDER_WIDE,
    alt: "Ambient editorial placeholder behind taste discovery flow.",
    orientation: "landscape",
    notes: "TODO: Optional subtle backdrop; keep mobile contrast readable.",
    variants: {
      desktop: PLACEHOLDER_WIDE,
      mobile: PLACEHOLDER_PORTRAIT,
    },
  },
];

const byId = new Map<string, ImageLibraryEntry>();
const bySlot = new Map<string, ImageLibraryEntry>();
const byCategory = new Map<ImageTaxonomy, ImageLibraryEntry[]>();

for (const entry of imageLibrary) {
  byId.set(entry.id, entry);
  bySlot.set(entry.slot, entry);
  const list = byCategory.get(entry.category) ?? [];
  list.push(entry);
  byCategory.set(entry.category, list);
}

export function getImageById(id: string): ImageLibraryEntry | undefined {
  return byId.get(id);
}

export function getImageBySlot(slot: string): ImageLibraryEntry | undefined {
  return bySlot.get(slot);
}

export function getImagesByCategory(category: ImageTaxonomy): ImageLibraryEntry[] {
  return byCategory.get(category) ?? [];
}

export function resolveImageSrc(
  entry: ImageLibraryEntry,
  viewport: "desktop" | "mobile",
): string {
  if (!entry.variants) {
    return entry.src;
  }
  if (viewport === "mobile") {
    return entry.variants.mobile ?? entry.variants.desktop ?? entry.src;
  }
  return entry.variants.desktop ?? entry.src;
}

const categorySlotPrefix = "category-card-";

export function getCategoryCardImage(categoryId: string): ImageLibraryEntry | undefined {
  return getImageBySlot(`${categorySlotPrefix}${categoryId}`);
}
