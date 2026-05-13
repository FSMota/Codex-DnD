import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { colorVariables } from "./config/colors";
import { AppLayout } from "./layouts/app-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex DnD",
  description: "Base modular para o sistema Codex DnD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={colorVariables}
    >
      <AppLayout>{children}</AppLayout>
    </html>
  );
}
