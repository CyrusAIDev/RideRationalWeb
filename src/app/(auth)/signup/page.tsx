import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { SignupForm } from "@/components/forms/signup-form";

export default function SignupPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Create account"
        title="The first build keeps signup intentionally light."
        description="Email and password only at launch. Preference setup follows immediately so the product can start delivering daily email picks."
      />
      <SignupForm mode="signup" />
    </SectionFrame>
  );
}
