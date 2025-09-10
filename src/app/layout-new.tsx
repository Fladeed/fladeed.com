import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fladeed - Premium Dev Agency with Fluid Glass Design",
  description: "Transform your ideas into stunning, performance-driven applications with Fladeed's cutting-edge development services and fluid glass design.",
  keywords: "web development, mobile apps, UI/UX design, Next.js, React, TypeScript, glass morphism",
  authors: [{ name: "Fladeed Dev Agency" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
