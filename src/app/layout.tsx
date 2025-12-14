import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TOITE_CONFIG from "@config";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: TOITE_CONFIG.appName,
  description: "Created by Yefrosynii",
  robots: {
    notranslate: true,
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
