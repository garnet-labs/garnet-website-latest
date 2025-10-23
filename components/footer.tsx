import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
import { SendIcon } from "@/icons/bento-icons";
import { SOC2Badge } from "@/icons/general";

export const Footer = () => {
  const product = [
    {
      title: "Docs",
      href: "https://docs.garnet.ai",
    },
    {
      title: "Jibril",
      href: "https://jibril.garnet.ai/",
    },
    {
      title: "MITRE",
      href: "https://mitre.garnet.ai",
    },
    // {
    //   title: "GitHub Actions",
    //   href: "#",
    // },
    // {
    //   title: "Kubernetes",
    //   href: "#",
    // },
    // {
    //   title: "Docker",
    //   href: "#",
    // },
    // {
    //   title: "API",
    //   href: "#",
    // },
  ];

  const company = [

    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  const security = [
    {
      title: "Trust Center",
      href: "https://app.vanta.com/garnet.ai/trust/i63921ahbwt5v5ytju14n0",
    },
  ];

  const legal = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div className="col-span-2 mb-6 flex flex-col items-center text-center sm:col-span-2 sm:items-start sm:text-left md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="mt-4 max-w-lg">
            Code runtime security for modern platform teams
          </SubHeading>
          {/* <Link href="https://dashboard.garnet.ai">
            <Button className="mt-4 mb-8 lg:mb-0">Start Monitoring</Button>
          </Link> */}
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-center gap-2 text-center sm:items-start sm:text-left md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Product</p>
          {product.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-center gap-2 text-center sm:items-start sm:text-left md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Company</p>
          {company.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-center gap-2 text-center sm:items-start sm:text-left md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Security</p>
          {security.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
          {/* SOC 2 Badge */}
          <div className="mt-1 flex justify-center sm:justify-start">
            <Link
              href="https://app.vanta.com/garnet.ai/trust/i63921ahbwt5v5ytju14n0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SOC 2 Type 2 Certified by Vanta"
            >
              <SOC2Badge className="h-auto w-16" />
            </Link>
          </div>
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-center gap-2 text-center sm:items-start sm:text-left md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Legal</p>
          {legal.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* <div className="col-span-1 mb-4 flex flex-col items-start md:col-span-1 md:mb-0 lg:col-span-2">
          <p className="text-footer-link text-sm font-medium">Newsletter</p>
          <div className="mt-2 flex w-full items-center rounded-xl border border-gray-300 bg-gray-200 p-1 placeholder-gray-600 dark:border-neutral-700 dark:bg-neutral-800">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-2 text-sm outline-none focus:outline-none"
            />
            <Button className="my-0 flex size-8 shrink-0 items-center justify-center rounded-lg px-0 py-0 text-center">
              <SendIcon />
            </Button>
          </div>
          <SubHeading
            as="p"
            className="mt-4 text-left text-sm md:text-sm lg:text-sm"
          >
            Get the latest security updates and threat intelligence.
          </SubHeading>
        </div> */}
      </div>
      <div className="my-4 flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
        <p className="text-footer-link text-sm">
          © 2025 Garnet Labs Inc. All rights reserved.
        </p>
        <div className="mt-4 flex items-center gap-4 md:mt-0">
          <Link
            href="https://x.com/garnet_labs"
            className="text-footer-link transition-colors hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/company/garnetlabs"
            className="text-footer-link transition-colors hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            href="https://github.com/garnet-org"
            className="text-footer-link transition-colors hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </Link>
        </div>
      </div>
    </Container>
  );
};