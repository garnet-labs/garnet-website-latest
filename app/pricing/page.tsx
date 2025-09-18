import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "@/components/pricing-table";

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Pricing - Garnet | Runtime Security for Modern Engineering Teams",
  description:
    "Choose the right runtime security plan for your team. From free individual protection to enterprise-grade solutions with custom integrations and dedicated support.",
});

export default function PricingPage() {
  return (
    <main>
      <DivideX />
      <Pricing />
      <DivideX />
      <PricingTable />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
