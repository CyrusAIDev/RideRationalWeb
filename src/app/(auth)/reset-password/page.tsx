import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Reset password"
        title="Password reset remains part of the commercial foundation."
        description="This route exists now so auth scope stays complete and production-minded, even before the live backend is online."
      />
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Choose a new password</CardTitle>
          <CardDescription>
            The real implementation will be connected to the reset-token contract later.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <Label htmlFor="password">New password</Label>
            <Input id="password" defaultValue="StrongPassword123!" type="password" />
          </div>
          <Button className="w-full" size="lg">
            Save password
          </Button>
        </CardContent>
      </Card>
    </SectionFrame>
  );
}
