"use client";
import React from "react";
import { Container } from "../container";
import { Badge } from "../badge";
import { SubHeading } from "../subheading";
import { SectionHeading } from "../seciton-heading";
import { Card, CardDescription, CardTitle } from "./card";
import {
  BrainIcon,
  FingerprintIcon,
  MouseBoxIcon,
  NativeIcon,
  RealtimeSyncIcon,
  SDKIcon,
} from "@/icons/bento-icons";
import {
  LLMModelSelectorSkeleton,
  NativeToolsIntegrationSkeleton,
  TextToWorkflowBuilderSkeleton,
} from "./skeletons";
import { BoltIcon, RocketIcon, ShieldIcon, ShieldSplitIcon, TelescopeIcon } from "@/icons/card-icons";

type Tab = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
};

export const AgenticIntelligence = () => {
  return (
    <Container className="border-divide border-x">
      <div className="flex flex-col items-center py-16">
        <Badge text="Features" />
        <SectionHeading className="mt-4">
          Runtime detection & enforcement for{" "}
          <span className="text-brand">K8s workloads</span>
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-4xl px-2">
        From CI/CD runners to production clusters, Garnet provides deep runtime visibility and protection. High-fidelity detections, intel-driven recipes, and in-kernel enforcement integrate seamlessly into your workflows.
        </SubHeading>
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <RocketIcon />
              <CardTitle>Lightweight runtime agent</CardTitle>
            </div>
            <CardDescription>
            Deploy a high-performance eBPF agent in a few clicks, providing deep runtime visibility across any workload.
            </CardDescription>
            <LLMModelSelectorSkeleton />
          </Card>
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <TelescopeIcon />
              <CardTitle>Automated threat intel → Detection recipes</CardTitle>
            </div>
            <CardDescription>
            Every new attack behavior discovered globally is reflected in your detections. From DNS-based C2 traffic to runc escapes and sudoers tampering, your rules are refreshed in real time, without manual effort.
            </CardDescription>
            <TextToWorkflowBuilderSkeleton />
          </Card>
        </div>
        <div className="w-full">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <ShieldSplitIcon />
              <CardTitle>Kernel-level behavioral detection & response</CardTitle>
            </div>
            <CardDescription>
              High-fidelity behavioral detections with deep context, mapped to MITRE ATT&CK incidents. Get alerted directly into tools and workflows of your choice through our rich API integrations. 
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <BoltIcon />
              <CardTitle>Minimal overhead, massive scale</CardTitle>
            </div>
            <CardDescription>
            Lightweight eBPF agent runs with near-zero overhead. Protect your cloud-native workloads at scale without performance trade-offs.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <ShieldIcon />
              <CardTitle>Detections with deep context</CardTitle>
            </div>
            <CardDescription>
            Every detection is enriched with deep behavioral context to eliminate noise. Clear, actionable signals your team can trust.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <SDKIcon />
              <CardTitle>Stop threats instantly</CardTitle>
            </div>
            <CardDescription>
            Block malicious activity at the kernel before it spreads. Terminate cryptominers, access to C2 servers, and more in real time.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};
