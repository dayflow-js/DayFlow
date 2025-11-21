import type { Metadata } from "next";
import { Head } from 'nextra/components';
import 'nextra-theme-docs/style.css';
import "./globals.css";
import '@dayflow/core/dist/styles.css';

const basePath = process.env.BASE_PATH || '';

export const metadata: Metadata = {
  title: "DayFlow - Calendar toolkit for product teams",
  description: "Ship a polished calendar without rebuilding the basics",
  icons: {
    icon: [
      { url: `${basePath}/logo.svg`, type: 'image/svg+xml' },
    ],
    shortcut: [`${basePath}/logo.png`],
    apple: [`${basePath}/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>{children}</body>
    </html>
  );
}
