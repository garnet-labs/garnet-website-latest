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
    <Container className="border-divide flex min-h-screen flex-col items-center justify-center border-x px-4">
      <Badge text="For fast moving engineering teams." />
      <Heading className="mt-4">
        Runtime security for modern <br />
        <span className="text-brand">engineering teams</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Behavioral detection & blocking for your pipelines and clusters.
      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button as={Link} href="/sign-up">
          Deploy Jibril (Free)
        </Button>
        <Button variant="secondary" as={Link} href="/contact">
          Book demo
        </Button>
      </div>
    </Container>
  );
};
