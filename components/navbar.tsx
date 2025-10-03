import React from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import { FloatingNav, MobileNav } from "./navbar-client";

const items = [
  {
    title: "Docs",
    href: "https://docs.garnet.ai",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Jibril",
    href: "https://jibril.garnet.ai",
  },
];

export const Navbar = () => {
  return (
    <Container as="nav" className="">
      <FloatingNav items={items} />
      <DesktopNav items={items} />
      <MobileNav items={items} />
    </Container>
  );
};

const DesktopNav = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  return (
    <div className="hidden items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <Link
            className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="secondary" as={Link} href="https://cal.com/team/garnet/intro?duration=30">
          Book demo
        </Button>
        <Button as={Link} href="https://dashboard.garnet.ai">
          Start monitoring
        </Button>
      </div>
    </div>
  );
};
