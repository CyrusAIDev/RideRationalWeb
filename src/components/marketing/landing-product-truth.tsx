import { ProofStatStrip } from "@/components/marketing/proof-stat-strip";

const items = [
  {
    label: "Local hunt",
    value: "Listings, filtered.",
    hint: "Vancouver-first. Categories where desirability and economics overlap.",
  },
  {
    label: "Sweet-spot window",
    value: "Past the steepest dip.",
    hint: "Premium and performance lanes—not bargain-bin noise.",
  },
  {
    label: "Daily email",
    value: "No browse shell.",
    hint: "Strong matches land in your inbox—you stay out of the rabbit hole.",
  },
] as const;

export function LandingProductTruth() {
  return <ProofStatStrip items={items} />;
}
