import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Petter Sæther Moen - Software Engineer",
  description: "CV for Petter Sæther Moen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.className,
          "m-0 min-h-screen w-full bg-gradient-to-br from-violet-100 via-purple-200 to-blue-200 p-4 text-slate-800",
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
