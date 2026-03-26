import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { PreferenceSetupForm } from "@/components/forms/preference-setup-form";

export default function SettingsPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Settings"
        title="Preferences, notifications, and billing entry all live here."
        description="This route stays calm and utility-led. It should never imply results browsing, watchlists, or saved-search complexity in MVP."
      />
      <PreferenceSetupForm />
    </SectionFrame>
  );
}
