import { DivideX } from "@/components/divide";
import { SignIn } from "@/components/sign-in";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign In | Garnet",
  description:
    "Access your Garnet dashboard to monitor Kubernetes runtime threats and respond in real time.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <SignIn />
      <DivideX />
    </main>
  );
}
