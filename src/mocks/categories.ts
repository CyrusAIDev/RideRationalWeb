import type { CategoriesResponse } from "@/lib/api/contracts";

export const mockCategories: CategoriesResponse = {
  categories: [
    {
      id: "sports-car",
      label: "Sports Car",
      short_description: "Focused, exciting, emotionally led.",
    },
    {
      id: "performance-sedan",
      label: "Performance Sedan",
      short_description: "Daily usability with real pace and presence.",
    },
    {
      id: "hot-hatch",
      label: "Hot Hatch",
      short_description: "Compact, playful, and still practical.",
    },
    {
      id: "luxury-suv",
      label: "Luxury SUV",
      short_description: "Premium, useful, and more interesting than the default.",
    },
    {
      id: "rugged-luxury",
      label: "Rugged Luxury",
      short_description: "Tougher shape, premium feel, real lifestyle pull.",
    },
    {
      id: "premium-gt",
      label: "Premium GT",
      short_description: "Long-leg comfort with presence and pace.",
    },
  ],
};
