import type { Metadata } from "next";
import { BackgroundMotion } from "@/components/portfolio/background-motion";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Developer",
  description:
    "Portfolio de desenvolvedor com foco em experiencias modernas, performance e animacoes fluidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <BackgroundMotion />
        <div className="app-content">{children}</div>
      </body>
    </html>
  );
}
