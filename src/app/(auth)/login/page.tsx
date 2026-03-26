import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { SignupForm } from "@/components/forms/signup-form";

export default function LoginPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Sign in"
        title="Return to your preference profile and trial state."
        description="This shell stays calm and practical. It should never start feeling like a generic SaaS auth wall."
      />
      <SignupForm mode="login" />
    </SectionFrame>
  );
}
