import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/icons";

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
          "m-0 flex min-h-screen w-full flex-col gap-8 bg-linear-to-br from-violet-100 via-purple-200 to-blue-200 text-slate-800 sm:p-4 sm:pb-0",
        )}
      >
        <div>{children}</div>
        <div className="container flex max-w-4xl rounded-tl-sm rounded-tr-sm bg-white py-4 print:hidden">
          <a href="https://github.com/petter/cv" className="group inline w-min">
            <GitHubIcon className="h-6 w-6 text-slate-700 transition-colors group-hover:text-pink-800" />
          </a>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
