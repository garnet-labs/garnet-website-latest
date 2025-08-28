import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Jibril (Free)",
  TIER_2 = "Garnet Platform",
  TIER_3 = "Enterprise",
}

export const tiers = [
  {
    title: TierName.TIER_1,
    subtitle: "For individual developers",
    monthly: 0,
    yearly: 0,
    ctaText: "Deploy Jibril",
    ctaLink: "/sign-up",
    features: [
      "GitHub Actions protection",
      "Basic container security",
      "Real-time threat blocking",
      "Community support",
      "Local threat detection",
      "Basic behavioral analysis",
      "Email alerts",
      "Up to 10 repos",
    ],
  },
  {
    title: TierName.TIER_2,
    subtitle: "For engineering teams",
    monthly: 199,
    yearly: 1990,
    ctaText: "Start free trial",
    ctaLink: "/sign-up",
    features: [
      "Everything in Jibril",
      "Centralized dashboard",
      "Advanced threat analytics",
      "Priority support",
      "Unlimited repositories",
      "Team collaboration",
      "API access",
      "Slack integration",
    ],
    featured: true,
  },
  {
    title: TierName.TIER_3,
    subtitle: "Custom solutions",
    monthly: 0,
    yearly: 0,
    ctaText: "Contact sales",
    ctaLink: "/contact",
    features: [
      "Everything in Platform",
      "On-premise deployment",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "Compliance reporting",
      "Custom threat rules",
      "Training & onboarding",
      "Air-gapped environments",
    ],
  },
];

export const pricingTable = [
  {
    title: "Seat Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Up to 3",
      },
      {
        title: TierName.TIER_2,
        value: "Up to 10",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Two-factor authentication",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Pay-per-task billing",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Static IP",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Record Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "1,000",
      },
      {
        title: TierName.TIER_2,
        value: "10,000",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Folder Permissions",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Teams",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "1",
      },
      {
        title: TierName.TIER_2,
        value: "3",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Shared Nodes",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Shared app connections",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Agents",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "5",
      },
      {
        title: TierName.TIER_2,
        value: "25",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Chatbots",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "2",
      },
      {
        title: TierName.TIER_2,
        value: "10",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Nodus MCP",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Nodus Canvas",
    tiers: [
      {
        title: TierName.TIER_1,
        value: <CloseIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_2,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
      {
        title: TierName.TIER_3,
        value: <CheckIcon className="mx-auto size-5 text-gray-600" />,
      },
    ],
  },
  {
    title: "Tables",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "5",
      },
      {
        title: TierName.TIER_2,
        value: "50",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Access Permissions",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Basic",
      },
      {
        title: TierName.TIER_2,
        value: "Advanced",
      },
      {
        title: TierName.TIER_3,
        value: "Enterprise",
      },
    ],
  },
  {
    title: "Record Templates",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "10",
      },
      {
        title: TierName.TIER_2,
        value: "100",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
];
