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
      <Badge text="For modern platform and security teams." />
      <Heading className="mt-4">
        Runtime threat monitoring for <br />
        <span className="text-brand">containerized workloads</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Behavioral detection & response engine with AI powered triage.
      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button as={Link} href="/sign-up">
          Start monitoring (Free)
        </Button>
        <Button variant="secondary" as={Link} href="/contact">
          Book demo
        </Button>
      </div>
    </Container>
  );
};
