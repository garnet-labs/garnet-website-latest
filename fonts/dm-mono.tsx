import { DM_Mono } from "next/font/google";

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: true,
  fallback: ['Monaco', 'Courier New', 'monospace'],
});
