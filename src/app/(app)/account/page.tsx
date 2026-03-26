import { AccountShell } from "@/components/account/account-shell";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";

export default function AccountPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Account"
        title="This shell confirms state. It does not become a dashboard."
        description="The account experience tells the user their preferences are set, their trial or membership is active, and daily email delivery is handling the core product loop."
      />
      <AccountShell />
    </SectionFrame>
  );
}
