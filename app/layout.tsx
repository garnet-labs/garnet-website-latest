import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { getSEOTags } from "@/lib/seo";
import { inter } from "@/fonts/inter-display/inter";
import { dmMono } from "@/fonts/dm-mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://dashboard.garnet.ai" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://dashboard.garnet.ai" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body className="font-primary h-full bg-white [--pattern-fg:var(--color-charcoal-900)]/10 dark:bg-black dark:[--pattern-fg:var(--color-neutral-100)]/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false} storageKey="garnet-theme">
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
