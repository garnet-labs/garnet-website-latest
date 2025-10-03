// Temporary type shims to satisfy the linter in environments without installed node_modules

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace React {
  type ReactNode = any;
  interface SVGProps<T> extends Record<string, any> {}
  interface ComponentProps<T extends ElementType> extends Record<string, any> {}
  interface FC<P = {}> {
    (props: P & { children?: ReactNode }): any;
  }
  interface ElementType<P = any> {
    (...args: any): any;
  }
}

declare module "react" {
  export = React;
}

declare module "next/dynamic" {
  const nextDynamic: any;
  export default nextDynamic;
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "@vercel/analytics/react" {
  export const Analytics: any;
}

declare module "@vercel/speed-insights/next" {
  export const SpeedInsights: any;
}

declare module "motion/react" {
  export const motion: any;
  export const AnimatePresence: any;
  export const useScroll: any;
  export const useSpring: any;
  export const useTransform: any;
}

declare module "next" {
  export type NextConfig = any;
}

