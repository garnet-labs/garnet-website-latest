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
          From CI/CD runners to containerized AI production workloads, Garnet provides runtime visibility and protection at the kernel. High-fidelity detections, automated intel-driven rules, and policy enforcement integrate seamlessly into your existing workflows.
        </SubHeading>
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <BrainIcon />
              <CardTitle>Lightweight runtime agent</CardTitle>
            </div>
            <CardDescription>
            Deploy a high-performance eBPF agent in a few clicks, providing deep runtime visibility across any workload.
            </CardDescription>
            <LLMModelSelectorSkeleton />
          </Card>
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <MouseBoxIcon />
              <CardTitle>Automated threat intel → Detection recipes</CardTitle>
            </div>
            <CardDescription>
            In the background, our system turns global threat intel into runtime protection. C2 domains are blocked at the DNS layer, while detection rules for cryptominers, container escapes, and privilege escalation are continuously updated.
            </CardDescription>
            <TextToWorkflowBuilderSkeleton />
          </Card>
        </div>
        <div className="w-full">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>Kernel-level behavioral detection & response</CardTitle>
            </div>
            <CardDescription>
              High-fidelity behavioral detections with deep context, mapped to MITRE ATT&CK and get alerted directly into channels of your choice through our rich API integrations. 
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <FingerprintIcon />
              <CardTitle>Behavioral Analysis</CardTitle>
            </div>
            <CardDescription>
              No signatures needed. Detect zero-day attacks through abnormal
              behavior patterns in real-time.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RealtimeSyncIcon />
              <CardTitle>Real-time Blocking</CardTitle>
            </div>
            <CardDescription>
              Instantly terminate malicious processes and prevent lateral
              movement before damage spreads.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <SDKIcon />
              <CardTitle>Container Security</CardTitle>
            </div>
            <CardDescription>
              Protect Kubernetes workloads and Docker containers from runtime
              attacks and container escapes.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};
