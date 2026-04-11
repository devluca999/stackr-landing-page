import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STACKr — Optimize Everything.",
  description: "Your biohacking protocol OS. Build, track, and share your performance stack — peptides, nootropics, longevity compounds, and more. Used by athletes, biohackers, and high performers.",
  keywords: ["biohacking","nootropics","peptides","longevity","supplement stack","protocol tracker","BPC-157","NMN","Bryan Johnson","Wolverine stack","performance optimization"],
  openGraph: { title: "STACKr — Optimize Everything.", description: "Your biohacking protocol OS. Build, track, and share your performance stack.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
