import dynamic from 'next/dynamic';
import { DivideX } from "@/components/divide";
import { Hero } from "@/components/hero";
import { getSEOTags } from "@/lib/seo";

// Lazy load all below-the-fold components for instant FCP
const HowItWorks = dynamic(() => import("@/components/how-it-works").then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const AgenticIntelligence = dynamic(() => import("@/components/agentic-intelligence").then(mod => ({ default: mod.AgenticIntelligence })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const UseCases = dynamic(() => import("@/components/use-cases").then(mod => ({ default: mod.UseCases })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Benefits = dynamic(() => import("@/components/benefits").then(mod => ({ default: mod.Benefits })), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: true
});

const Security = dynamic(() => import("@/components/security").then(mod => ({ default: mod.Security })), {
  loading: () => null,
  ssr: true
});

const CTA = dynamic(() => import("@/components/cta").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: true
});

export const metadata = getSEOTags();

// Force static generation for instant page loads
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

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
      <Security />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
