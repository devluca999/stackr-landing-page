import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "STACKr — Optimize Everything.", template: "%s | STACKr" },
  description: "Your biohacking protocol OS. Build, track, and share performance stacks — peptides, nootropics, longevity compounds, and more. BPC-157, TB-500, NMN, Semax, Melanotan and 50+ compounds with research-backed profiles.",
  keywords: ["biohacking","nootropics","peptides","longevity","BPC-157","TB-500","NMN","Semax","Melanotan","Ipamorelin","Retatrutide","supplement stack","protocol tracker","performance optimization","quantified self","Bryan Johnson","Wolverine stack"],
  authors: [{ name: "STACKr" }],
  creator: "STACKr",
  metadataBase: new URL("https://stackrapp.com"),
  openGraph: {
    title: "Stackr — Protocol OS for Human Optimization.",
    description: "Build, track, and share your peptide and supplement stacks. Clone protocols from 6,000+ optimizers.",
    type: "website",
    url: "https://stackrapp.com",
    siteName: "Stackr",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Stackr — Protocol OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackr — Protocol OS for Human Optimization.",
    description: "Build, track, and share your peptide and supplement stacks. Clone protocols from 6,000+ optimizers.",
    creator: "@stackrapp",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "https://stackrapp.com" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://stackrapp.com/#app",
      "name": "STACKr",
      "url": "https://stackrapp.com",
      "description": "Biohacking protocol OS. Build, track, and share supplement stacks — peptides, nootropics, and longevity compounds.",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "iOS, Android",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": [
        "Peptide and nootropic protocol builder",
        "Daily compound tracking and journaling",
        "Community protocol sharing",
        "Compound library with 50+ research-backed profiles",
        "Dosage guidelines and cycle protocols",
        "Clone and adapt protocols from top biohackers"
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://stackrapp.com/#org",
      "name": "STACKr",
      "url": "https://stackrapp.com",
      "description": "Building the protocol OS for human optimization.",
    },
    {
      "@type": "WebSite",
      "@id": "https://stackrapp.com/#website",
      "url": "https://stackrapp.com",
      "name": "STACKr",
      "publisher": { "@id": "https://stackrapp.com/#org" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://stackrapp.com/peptides?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('stackr-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}` }} />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
