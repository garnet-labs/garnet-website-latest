"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  RocketIcon,
  GraphIcon,
  ShieldIcon,
  ReuseBrainIcon,
  ScreenCogIcon,
  BellIcon,
  TelescopeIcon,
  BoltIcon,
  ShieldSplitIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { AnimatePresence, motion } from "motion/react";
import { BrainIcon, RealtimeSyncIcon } from "@/icons/bento-icons";
import { DivideX } from "./divide";
import { OpenAILogo, SlackLogo, KubernetesLogo } from "@/icons/general";
import { IconBlock } from "./common/icon-block";
import { HorizontalLine } from "./common/horizontal-line";
import { VerticalLine } from "./common/vertical-line";

export const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const benefits = [
    {
      title: "Deploy in minutes",
      description:
        "Instant visibility into code behavior at runtime with a single Helm install or GitHub Action. No code changes required.",
      icon: <RocketIcon className="text-brand size-6" />,
    },
    {
      title: "Insights that matter",
      description:
        "Behavioral policy detections cut through the noise, surfacing only meaningful insights tied to suspicious code execution or system activity.",
      icon: <ShieldIcon className="text-brand size-6" />,
    },
    {
      title: "Scale without overhead",
      description:
        "Lightweight eBPF agent scales across clusters and runners with very low overhead, designed for production-grade workloads.",
      icon: <GraphIcon className="text-brand size-6" />,
    },
    {
      title: "Real-time protection",
      description:
        "Block or flag malicious system behaviors in real time before compromised code can spread.",
      icon: <ShieldSplitIcon className="text-brand size-6" />,
    },
    {
      title: "Runtime coverage",
      description:
        "Observe every workload for code behavior across CI/CD, staging, and production, with an audit trail for compliance and investigations.",
      icon: <TelescopeIcon className="text-brand size-6" />,
    },
    {
      title: "Deploy and forget",
      description:
        "Once installed, Garnet monitors in the background 24/7, analyzing system activity at runtime and only alerting when it detects suspicious or compromised code behavior.",
      icon: <ScreenCogIcon className="text-brand size-6" />,
    },
  ];
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div className="relative flex flex-col items-center">
        <Badge text="Benefits" />
        <SectionHeading className="mt-4">
          <span className="text-brand">Why platform teams</span> choose Garnet
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-2 max-w-lg">
        Garnet gives platform teams deep visibility into how code behaves at runtime across workloads, with zero overhead and instant integration into their workflows.
        </SubHeading>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={benefit.title}
              onMouseEnter={() => setActiveBenefit(index)}
              onMouseLeave={() => setActiveBenefit(null)}
              className="relative"
            >
              {activeBenefit === index && (
                <motion.div
                  layoutId="benefit-scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <Card {...benefit} />
            </div>
          ))}
        </div>
        <MiddleCard />
        <div className="grid grid-cols-1 gap-4">
          {benefits.slice(3, 6).map((benefit, index) => (
            <div
              key={benefit.title}
              onMouseEnter={() => setActiveBenefit(index + 3)}
              onMouseLeave={() => setActiveBenefit(null)}
              className="relative"
            >
              {activeBenefit === index + 3 && (
                <motion.div
                  layoutId="benefit-scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <Card {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const MiddleCard = () => {
  const texts = [
    "Rogue DNS request blocked", 
    "File modification detected", 
    "Xmrig miner process terminated",
  ];
  const [activeText, setActiveText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg bg-gray-50 p-4 md:p-5 dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] shadow-xl"></div>

      <div className="flex items-center justify-center">
        <IconBlock icon={<BrainIcon className="size-6" />} />
        <HorizontalLine />
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
          <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
          <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-white dark:bg-neutral-900">
            <KubernetesLogo className="size-8" />
          </div>
        </div>
        <HorizontalLine />
        <IconBlock icon={<SlackLogo className="size-6" />} />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <VerticalLine />
        <div className="rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-xs text-blue-500 dark:bg-blue-900 dark:text-white">
          Connected
        </div>
      </div>
      <div className="h-60 w-full translate-x-10 translate-y-10 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-blue-500 via-20% to-transparent to-30% blur-2xl [animation-duration:4s]"></div>
        <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-20% to-transparent to-30% blur-2xl [animation-delay:2s] [animation-duration:4s]"></div>
        <div className="relative z-20 h-full w-full rounded-[5px] bg-white dark:bg-neutral-900">
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-1">
              <div className="size-2 rounded-full" style={{backgroundColor: '#E64F4B'}}></div>
              <div className="size-2 rounded-full bg-yellow-400"></div>
              <div className="size-2 rounded-full bg-green-400"></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="shadow-aceternity mr-2 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-white"
                key={activeText}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <BellIcon className="size-3" />
                <motion.span key={activeText}>{texts[activeText]}</motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
          <DivideX />
          <div className="flex h-full flex-row">
            <div className="h-full w-14 bg-gray-200 dark:bg-neutral-800" />
            <motion.div className="w-full gap-y-4 p-4">
              <div className="space-y-1">
                <h2 className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                 Detections
                </h2>
                <p className="text-xs text-gray-500 font-mono">
                  k8s-prod-cluster • Last 24h
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-y-3 mask-b-from-50%">
                {[
                  { label: "High (8)", width: 25 },
                  { label: "Medium (23)", width: 40 },
                  { label: "Low (20)", width: 30 },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.width}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-neutral-300 dark:bg-neutral-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = (props: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  const { title, description, icon } = props;
  return (
    <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
      <div className="flex items-center gap-2">{icon}</div>
      <h3 className="mt-4 mb-2 text-lg font-medium">{title}</h3>
      <p className="text-gray-600 dark:text-neutral-300">{description}</p>
    </div>
  );
};
