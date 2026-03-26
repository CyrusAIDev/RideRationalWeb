import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Password recovery"
        title="Keep recovery flows clean and low-drama."
        description="Reset password infrastructure is not live yet, but the route and UI shell are part of the contract-safe foundation."
      />
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Reset link</CardTitle>
          <CardDescription>
            Enter the email attached to your RideRational account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="driver@example.com" type="email" />
          </div>
          <Button className="w-full" size="lg">
            Send reset link
          </Button>
        </CardContent>
      </Card>
    </SectionFrame>
  );
}
