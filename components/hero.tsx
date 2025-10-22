"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { GartnerLogo, GartnerLogoText, Star } from "@/icons/general";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-16 pb-16 md:pt-40 md:pb-32">
      <Badge text="For modern platform teams" />
      <Heading className="mt-4">
        Runtime firewall <br className="hidden sm:block" />
        for <span className="text-brand">your code</span>
      </Heading>
      <SubHeading className="mx-auto mt-6 max-w-lg">
      From containers to AI agents, Garnet monitors code as it executes, flagging suspicious system behavior e.g. code doing C2 network calls or privilege escalation, to protect against malicious code or RCE attacks.      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button as={Link} href="https://dashboard.garnet.ai">
          Start monitoring
        </Button>
        <Button variant="secondary" as={Link} href="https://cal.com/team/garnet/intro?duration=30">
          Book demo
        </Button>
      </div>
    </Container>
  );
};
