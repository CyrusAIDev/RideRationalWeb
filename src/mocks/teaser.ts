import type {
  PersonalizedTeaserRequest,
  PersonalizedTeaserResponse,
  TeaserResponse,
  VehicleCategory,
} from "@/lib/api/contracts";

const categoryCopy: Record<
  VehicleCategory,
  {
    label: string;
    defaultVehicle: string;
    sweetSpotVehicle: string;
    story: string;
  }
> = {
  "sports-car": {
    label: "Sports car shopper",
    defaultVehicle: "new mainstream compact crossover",
    sweetSpotVehicle: "Porsche Cayman",
    story:
      "Instead of spending your comfort-zone money on something forgettable and front-loaded on depreciation, a well-chosen sports-car sweet spot can feel dramatically more special.",
  },
  "performance-sedan": {
    label: "Performance sedan shopper",
    defaultVehicle: "new mainstream compact crossover",
    sweetSpotVehicle: "Audi S4",
    story:
      "Instead of defaulting to something safe and anonymous, your budget band may open the door to a used performance sedan that still feels special every time you drive it.",
  },
  "hot-hatch": {
    label: "Hot hatch shopper",
    defaultVehicle: "new economy crossover",
    sweetSpotVehicle: "Golf R",
    story:
      "The obvious answer at this spend is often newer and flatter. A sweet-spot hot hatch can feel sharper, more rewarding, and still practical enough for daily life.",
  },
  "luxury-suv": {
    label: "Luxury SUV shopper",
    defaultVehicle: "new mainstream family SUV",
    sweetSpotVehicle: "Porsche Macan",
    story:
      "A premium used sweet spot can turn a practical SUV budget into something with much stronger design, driving feel, and cachet.",
  },
  "rugged-luxury": {
    label: "Rugged luxury shopper",
    defaultVehicle: "new mainstream midsize SUV",
    sweetSpotVehicle: "Lexus GX",
    story:
      "At the same broad spend, the used sweet spot may offer more presence, more character, and a stronger long-term ownership story than the obvious crossover choice.",
  },
  "premium-gt": {
    label: "Premium GT shopper",
    defaultVehicle: "new mainstream sedan",
    sweetSpotVehicle: "Audi S5",
    story:
      "Instead of spending on something merely new, the sweet spot may be a more elegant grand-touring answer that still feels grounded in a rational used window.",
  },
};

export const mockTeaser: TeaserResponse = {
  market: "vancouver",
  scenarios: [
    {
      id: "scenario_m340i_vs_default",
      buyer_type: "Performance Sedan Upgrader",
      budget_anchor: {
        label: "Around $900/mo",
        monthly_tco_estimate_cad: 900,
      },
      default_benchmark: {
        label: "Expected default",
        vehicle_name: "New mainstream compact SUV",
        why_people_choose_it: "Predictable, easy, and familiar.",
      },
      sweet_spot_alternative: {
        label: "RideRational sweet spot",
        vehicle_name: "BMW M340i",
        why_it_surprises:
          "A much more special ownership experience may still sit inside the same broad comfort zone.",
      },
      narrative:
        "For buyers about to default to something safe, the used sweet spot can be dramatically more interesting.",
      local_opportunity_count: 30,
      details_locked: true,
    },
  ],
};

export function makePersonalizedTeaser(
  request: PersonalizedTeaserRequest,
): PersonalizedTeaserResponse {
  const firstCategory = request.category_ids[0];
  const copy = categoryCopy[firstCategory];
  const budgetLabel =
    request.purchase_mode === "cash"
      ? `Around ${new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
          maximumFractionDigits: 0,
        }).format(request.cash_budget_target_cad ?? 0)}`
      : `Around ${new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: "CAD",
          maximumFractionDigits: 0,
        }).format(request.monthly_budget_target_cad ?? 0)}/mo`;

  return {
    market: request.location_market,
    input_summary: {
      category_ids: request.category_ids,
      purchase_mode: request.purchase_mode,
      budget_label: budgetLabel,
    },
    teaser_result: {
      buyer_profile_label: copy.label,
      benchmark_vehicle: {
        vehicle_name: copy.defaultVehicle,
        positioning: "The safe, obvious default at this spend.",
      },
      sweet_spot_vehicle: {
        vehicle_name: copy.sweetSpotVehicle,
        positioning:
          "A more special used sweet spot that may fit the same broad comfort zone.",
      },
      ownership_story: copy.story,
      local_opportunity_count: 18,
      locked_preview_count: 4,
      cta: {
        label: "Start your free trial",
        next_route: "/signup",
      },
    },
  };
}
