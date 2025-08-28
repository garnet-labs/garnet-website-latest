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
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { motion } from "motion/react";

export const UseCases = () => {
  const useCases = [
    {
      title: "Supply Chain Attacks",
      description:
        "Detect and block malicious packages before they compromise your build pipeline",
      icon: <TruckIcon className="text-brand size-6" />,
    },
    {
      title: "Shadow Containers",
      description:
        "Identify unauthorized containers and cryptominers running in your infrastructure",
      icon: <DevopsIcon className="text-brand size-6" />,
    },
    {
      title: "Credential Theft",
      description:
        "Prevent secrets and API keys from being exfiltrated during CI/CD execution",
      icon: <WalletIcon className="text-brand size-6" />,
    },
    {
      title: "Container Escapes",
      description:
        "Block privilege escalation attempts and container breakout exploits in real-time",
      icon: <PhoneIcon className="text-brand size-6" />,
    },
    {
      title: "Data Exfiltration",
      description:
        "Monitor and prevent unauthorized data transfers to external destinations",
      icon: <DatabaseIcon className="text-brand size-6" />,
    },
    {
      title: "Reverse Shells",
      description:
        "Detect and terminate backdoors before attackers establish persistence",
      icon: <GraphIcon className="text-brand size-6" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Use Cases" />
        <SectionHeading className="mt-4">
          Protection against modern threats
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Comprehensive runtime security coverage for the attacks that matter most
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
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
