const config = {
  websiteName:
    "Garnet — Runtime Threat Protection for Kubernetes",
  websiteUrl:
    process.env.NEXT_PUBLIC_WEBSITE_URL ||
    "https://garnet.sh/",
  websiteDescription:
    "Lightweight eBPF agent providing in-kernel behavioral detections and real-time response for Kubernetes workloads. Block supply chain attacks, cryptominers, container escapes, and more with runtime security that actually works.",
};

export default config;