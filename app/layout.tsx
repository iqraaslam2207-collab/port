import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";
import { site } from "@/lib/site";
import { themeColor } from "@/lib/theme";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Full stack developer specializing in MERN, Next.js, and custom WordPress. Scalable web applications, APIs, and high-performance CMS platforms.",
  metadataBase: new URL("https://iqraaslam2207-collab.github.io/port/"),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "MERN, Next.js, and custom WordPress — engineered for speed, auth, and editors who ship.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: themeColor.dark,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg font-sans text-fg">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
