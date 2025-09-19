import { Contact } from "@/components/contact";
import { DivideX } from "@/components/divide";
import { SignUp } from "@/components/sign-up";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Contact | Garnet",
  description:
    "Talk to our team about runtime threat protection for Kubernetes. Book a demo or get support.",
});

export default function SignupPage() {
  return (
    <main>
      <DivideX />
      <Contact />
      <DivideX />
    </main>
  );
}
