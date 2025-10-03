// @ts-ignore - type provided by Next at runtime
import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { getSEOTags } from "@/lib/seo";
import { inter } from "@/fonts/inter-display/inter";
import { dmMono } from "@/fonts/dm-mono";

const Analytics = dynamic(() => import("@vercel/analytics/react").then(m => m.Analytics), { ssr: false });
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then(m => m.SpeedInsights), { ssr: false });

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmMono.variable}`}>
      <body className="font-primary h-full bg-white [--pattern-fg:var(--color-charcoal-900)]/10 dark:bg-black dark:[--pattern-fg:var(--color-neutral-100)]/30" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system">
          <PostHogProvider>
            <main className="h-full bg-white antialiased dark:bg-black">
              <Navbar />
              {children}
              <Footer />
            </main>
            <Analytics />
            <SpeedInsights />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
