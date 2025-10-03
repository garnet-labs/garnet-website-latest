import nextDynamic from "next/dynamic";
import { DivideX } from "@/components/divide";
import { Hero } from "@/components/hero";
import { getSEOTags } from "@/lib/seo";

export const runtime = "edge";
export const dynamic = "force-static";
export const revalidate = 86400;

const HowItWorks = nextDynamic(
  () => import("@/components/how-it-works").then((m) => m.HowItWorks),
  { ssr: false, loading: () => null },
);
const AgenticIntelligence = nextDynamic(
  () =>
    import("@/components/agentic-intelligence").then((m) => m.AgenticIntelligence),
  { ssr: false, loading: () => null },
);
const LogoCloud = nextDynamic(
  () => import("@/components/logo-cloud").then((m) => m.LogoCloud),
  { ssr: false, loading: () => null },
);
const Benefits = nextDynamic(
  () => import("@/components/benefits").then((m) => m.Benefits),
  { ssr: false, loading: () => null },
);
const Testimonials = nextDynamic(
  () => import("@/components/testimonials").then((m) => m.Testimonials),
  { ssr: false, loading: () => null },
);
const UseCases = nextDynamic(
  () => import("@/components/use-cases").then((m) => m.UseCases),
  { ssr: false, loading: () => null },
);
const CTA = nextDynamic(
  () => import("@/components/cta").then((m) => m.CTA),
  { ssr: false, loading: () => null },
);

export const metadata = getSEOTags();

export default function Home() {
  return (
    <main>
      <DivideX />
      <Hero />
      <DivideX />
      <HowItWorks />
      <DivideX />
      <AgenticIntelligence />
      <DivideX />
      <UseCases />
      <DivideX />
      <Benefits />
      <DivideX />
      <Testimonials />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
