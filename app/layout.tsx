import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STACKr — Protocol OS for Human Optimization",
  description: "Build, track, and share your biohacking protocols. The GitHub for human performance stacks — peptides, nootropics, longevity compounds, and more.",
  keywords: ["biohacking", "nootropics", "peptides", "longevity", "supplement stack", "protocol tracker", "quantified self", "performance optimization"],
  openGraph: {
    title: "STACKr — Protocol OS for Human Optimization",
    description: "Build, track, and share your biohacking protocols. The GitHub for human performance stacks.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}` }} />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
