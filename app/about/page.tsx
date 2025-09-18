import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { InformationBlock } from "@/components/information-block";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { careers } from "@/constants/careers";
import { founders } from "@/constants/founders";
import { investors, individualInvestors } from "@/constants/investors";
import { LinkedInIcon } from "@/icons/general";

import { getSEOTags } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "About Us - Garnet | Runtime Security for Modern Engineering Teams",
  description:
    "Runtime security for modern infrastructure. Founded by security engineers who saw the gap between static analysis and actual runtime threats.",
});

export default function AboutPage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center justify-start text-center">
            <Badge text="Our Journey" />
            <Heading className="mt-4 text-center">
              We have felt the pain firsthand!
            </Heading>
            <SubHeading className="mt-6 mr-auto text-left">
              We're a team of builders, hackers, and OSS maintainers with a mission to combine world-class infrastructure, developer experience, and security expertise to empower modern teams pushing the frontier.
              <br /> <br />
              Garnet was born out of hard lessons. When our founders Umar and Farrukh, friends for over 15 years, experienced a devastating cryptomining supply chain attack at their previous ML infrastructure startup, the limits of traditional security became painfully clear. They had static and vulnerability visibility, but were still blind as a miner ran inside their environment from a compromised container. It took weeks to backtrace the attack, cost them a significant penalty, and left them wishing they'd had runtime monitoring in place, not just to finally understand what was happening, but to stop the attack in its tracks.
              <br /> <br />
              That moment became the spark for Garnet: runtime security built with a deep understanding of developers' needs, modern stacks, and emerging threats.
              <br /> <br />
              Our engineering team brings unmatched expertise in eBPF and observability infrastructure. As core maintainers of Aqua Tracee and Fluent Bit, and with experience building and scaling critical systems at Red Hat, Canonical, IBM, and Chronosphere, we know what it takes to deliver next-generation runtime security at scale.
            </SubHeading>
          </div>
          <div className="border-divide rounded-3xl border p-2">
            <Image
              src="/team/office.jpg"
              alt="Garnet Team"
              width={1100}
              height={800}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
{/* <div className="mt-20 flex w-full flex-col items-center lg:flex-row">
          <h2 className="mb-4 min-w-40 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase lg:mb-0 lg:text-left dark:text-neutral-400">
            As featured in
          </h2>
          <div className="grid w-full grid-cols-2 items-center gap-4 md:grid-cols-4">
            <Image
              src="/logos/bloomberg.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/wired.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/forbes.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
            <Image
              src="/logos/the-guardian.png"
              alt="Bloomberg"
              width={140}
              height={140}
              className="h-6 w-auto object-contain dark:invert dark:filter"
            />
          </div>
        </div> */}
      </Container>
{/* <Container className="border-divide border-x border-t p-4 py-20 md:px-8 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="Journey and Values" />
            <SectionHeading className="mt-4 text-left">
              Protecting What Engineers Build
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto text-left">
              We protect the infrastructure that powers modern software, so teams can
              ship faster without compromising security
            </SubHeading>
            <div className="divide-divide mt-8 grid grid-cols-3 gap-6">
              <MetricBlock value="10M+" label="Containers protected" />
              <MetricBlock value="5K+" label="Orgs secured" />
              <MetricBlock value="0" label="False positives" />
            </div>
          </div>
          <InformationBlock />
        </div>
      </Container> */}
      <Container className="border-divide flex flex-col items-center border-x border-b pb-20">
        <div className="flex flex-col items-center justify-center px-4 py-10 md:px-8 md:py-20">
          {/* <Badge text="Investors" /> */}
          <SectionHeading className="mt-4 text-center">
            Backed by leading security investors
          </SectionHeading>
          <SubHeading className="mt-6 max-w-2xl text-center">
            Trusted by world-class investors who believe in our mission to make runtime 
            security invisible and effective for modern platform teams.
          </SubHeading>
          
          {/* Institutional Investors */}
          
          {/* First row - Top 3 investors (larger) */}
          <div className="mt-8 grid w-full max-w-4xl grid-cols-3 items-center gap-8">
            {investors.slice(0, 3).map((investor, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={investor.logoLight}
                  alt={investor.name}
                  width={140}
                  height={140}
                  className="h-12 w-auto object-contain dark:hidden"
                />
                <Image
                  src={investor.logoDark}
                  alt={investor.name}
                  width={140}
                  height={140}
                  className="hidden h-12 w-auto object-contain dark:block"
                />
              </div>
            ))}
          </div>
          
          {/* Second row - Remaining investors (smaller) */}
          <div className="mt-6 grid w-full max-w-5xl grid-cols-3 items-center gap-6 md:grid-cols-6">
            {investors.slice(3).map((investor, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={investor.logoLight}
                  alt={investor.name}
                  width={100}
                  height={100}
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <Image
                  src={investor.logoDark}
                  alt={investor.name}
                  width={100}
                  height={100}
                  className="hidden h-8 w-auto object-contain dark:block"
                />
              </div>
            ))}
          </div>

          {/* Individual Investors */}
          <div className="mt-8 grid w-full max-w-7xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {individualInvestors.map((investor, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 p-4 text-center sm:items-start sm:text-left">
                <Image
                  src={investor.image}
                  alt={investor.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {investor.name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {investor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <CTA />
      <DivideX />
    </main>
  );
}

const MetricBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className="text-charcoal-700 text-3xl font-medium dark:text-neutral-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
};
