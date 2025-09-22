"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  DevopsIcon,
  PhoneIcon,
  TruckIcon,
  DatabaseIcon,
  WalletIcon,
  GraphIcon,
  ShieldSplitIcon,
  BoltIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { motion } from "motion/react";
import { NativeIcon } from "@/icons/bento-icons";

export const UseCases = () => {
  const useCases = [
    {
      title: "Supply chain attacks",
      description:
        "Stop malicious behaviors triggered by compromised dependencies or build artifacts running in your environment.",
      icon: <TruckIcon className="text-brand size-6" />,
    },
    {
      title: "Privilege escalation",
      description:
        "Detect and block attempts to gain elevated privileges, including sudoers tampering and container breakout exploits.",
      icon: <ShieldSplitIcon className="text-brand size-6" />,
    },
    {
      title: "Cryptomining",
      description:
        "Terminate unauthorized cryptominer processes and block connections to mining pools in real time.",
      icon: <WalletIcon className="text-brand size-6" />,
    },
    {
      title: "Command & Control (C2) traffic",
      description:
        "Prevent DNS and IP communication with attacker-controlled servers before persistence is established.",
      icon: <NativeIcon className="text-brand size-6" />,
    },
    {
      title: "Data exfiltration",
      description:
        "Monitor and block unauthorized transfers of secrets, credentials, or sensitive data to external destinations.",
      icon: <DatabaseIcon className="text-brand size-6" />,
    },
    {
      title: "Vulnerability exploits",
      description:
        "Identify and stop runtime exploitation of known and zero-day vulnerabilities before they spread laterally.",
      icon: <BoltIcon className="text-brand size-6" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Use Cases" />
        <SectionHeading className="mt-4">
          Protection against modern <span className="text-brand">runtime threats</span>
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-2 max-w-lg">
          Comprehensive runtime security against the sophisticated attacker. 
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              onMouseEnter={() => setActiveUseCase(index)}
              key={useCase.title}
              className="relative"
            >
              {activeUseCase === index && (
                <motion.div
                  layoutId="scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
                <div className="flex items-center gap-2">{useCase.icon}</div>
                <h3 className="mt-4 mb-2 text-lg font-medium">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-300">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
