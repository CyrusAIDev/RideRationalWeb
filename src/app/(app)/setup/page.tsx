import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { PreferenceSetupForm } from "@/components/forms/preference-setup-form";

export default function SetupPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Post-signup setup"
        title="Keep setup lightweight, but smart enough to avoid the wrong kind of recommendation."
        description="This route turns anonymous curiosity into a single usable MVP preference profile. It does not become a long-form questionnaire."
      />
      <PreferenceSetupForm />
    </SectionFrame>
  );
}
