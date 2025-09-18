import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Community",
  TIER_2 = "Premium", 
  TIER_3 = "Enterprise",
}

export const tiers = [
  {
    title: TierName.TIER_1,
    subtitle: "",
    monthly: 0,
    yearly: 0,
    ctaText: "Get Started",
    ctaLink: "https://dashboard.garnet.ai",
    features: [
      "Up to 10 nodes",
      "Managed detections",
      "Real-time blocking",
      "Hosted platform",
      "Slack alerting",
      "Community support",
      "Basic threat analytics",
      "Email notifications",
    ],
  },
  {
    title: TierName.TIER_2,
    subtitle: "",
    monthly: 100,
    yearly: 960,
    ctaText: "Start monitoring",
    ctaLink: "https://dashboard.garnet.ai",
    badge: "Most Popular",
    features: [
      "Everything in Community",
      "Unlimited nodes",
      "Alerting integrations",
      "Priority support",
      "Updated detections",
      "Full API access",
      "Advanced threat analytics",
      "Custom detection rules",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    title: TierName.TIER_3,
    subtitle: "",
    monthly: 0,
    yearly: 0,
    ctaText: "Book a Demo",
    ctaLink: "https://cal.com/team/garnet/intro?duration=30",
    isCustomPricing: true,
    features: [
      "Everything in Premium",
      "On-premise deployment",
      "Custom integrations",
      "Dedicated support team",
      "SLA guarantees",
      "Custom detection recipes",
      "Compliance reporting",
      "Air-gapped environments",
      "Training & onboarding",
    ],
  },
];

export const pricingTable = [
  {
    title: "Node Limit",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Up to 10",
      },
      {
        title: TierName.TIER_2,
        value: "Unlimited",
      },
      {
        title: TierName.TIER_3,
        value: "Unlimited",
      },
    ],
  },
  {
    title: "Real-time Threat Blocking",
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
    title: "Managed Detections",
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
    title: "API Access",
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
    title: "Threat Analytics",
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
    title: "Priority Support",
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
    title: "Alert Integrations",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Slack only",
      },
      {
        title: TierName.TIER_2,
        value: "All platforms",
      },
      {
        title: TierName.TIER_3,
        value: "Custom integrations",
      },
    ],
  },
  {
    title: "Custom Detection Rules",
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
    title: "On-premise Deployment",
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
    title: "Detection Updates",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Weekly",
      },
      {
        title: TierName.TIER_2,
        value: "Real-time",
      },
      {
        title: TierName.TIER_3,
        value: "Real-time + Custom",
      },
    ],
  },
  {
    title: "SLA Guarantees",
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
    title: "Compliance Reporting",
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
    title: "Dedicated Support",
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
    title: "Threat Intelligence Feeds",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Basic",
      },
      {
        title: TierName.TIER_2,
        value: "Premium",
      },
      {
        title: TierName.TIER_3,
        value: "Custom + Premium",
      },
    ],
  },
  {
    title: "Response Time",
    tiers: [
      {
        title: TierName.TIER_1,
        value: "Community",
      },
      {
        title: TierName.TIER_2,
        value: "< 1 day",
      },
      {
        title: TierName.TIER_3,
        value: "< 4 hours",
      },
    ],
  },
  {
    title: "Training & Onboarding",
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
];
