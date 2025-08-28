export const faqs = [
  {
    question: "What is Jibril and how does it work?",
    answer:
      "Jibril is our free eBPF-based runtime security sensor that monitors your GitHub Actions and container workloads for malicious behavior. It uses behavioral analysis to detect and block threats in real-time without requiring signatures or prior knowledge of attacks.",
  },
  {
    question: "How is this different from traditional security scanners?",
    answer:
      "Traditional scanners look for known vulnerabilities in code. We monitor actual runtime behavior - what your code does when it executes. This catches zero-day attacks, supply chain compromises, and malicious dependencies that scanners miss.",
  },
  {
    question: "Does this slow down our CI/CD pipeline?",
    answer:
      "No. Jibril adds less than 2% overhead to your builds. Our eBPF sensors run at the kernel level with minimal performance impact. Most teams don't notice any difference in build times.",
  },
  {
    question: "What types of attacks can you detect?",
    answer:
      "We detect supply chain attacks, cryptominers, reverse shells, data exfiltration, privilege escalation, and container escapes. Our behavioral engine identifies malicious patterns regardless of how the attack was delivered.",
  },
  {
    question: "Is Jibril really free?",
    answer:
      "Yes, Jibril is completely free for monitoring GitHub Actions and basic container security. Our paid Garnet Platform adds centralized management, advanced analytics, and enterprise features.",
  },
  {
    question: "How long does it take to deploy?",
    answer:
      "Jibril can be deployed in under 5 minutes. Just add our GitHub Action to your workflow or install our container sensor. No agents, no configuration files, no learning period - it starts protecting immediately.",
  },
];