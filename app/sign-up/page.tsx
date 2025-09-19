import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign Up | Garnet",
  description:
    "Create a Garnet account to deploy lightweight eBPF agents and protect your Kubernetes workloads.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <SignUp />
      <DivideX />
    </main>
  );
}
