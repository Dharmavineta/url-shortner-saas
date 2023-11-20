import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserSession from "@/providers/next-auth-session";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MiniUrl",
  description: "The best and easiest way to shorten your url",
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserSession>
        <Toaster />
        <body className={inter.className}>{children}</body>
      </UserSession>
    </html>
  );
}
